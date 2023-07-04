import fetch from 'node-fetch';

export class Msg91Wrapper {
  private apiKey?: string;
  private otp_length?: number;
  private otp_expiry?: number;
  private retry_type?: string;
  private hostname: string = 'api.msg91.com/api/'

  connect(apiKey: string, otp_length: number = 6, otp_expiry: number = 600, retry_type: string = 'text') {
    this.apiKey = apiKey;
    this.otp_length = otp_length
    this.otp_expiry = otp_expiry
    this.retry_type = retry_type
  }

  /**
    * Set the OTP expiry minutes for MSG91 api call
    */
  set setOtpExpiry(otp_expiry: number) {
    this.otp_expiry = otp_expiry;
    return;
  };

  /**
   * Set the OTP length for MSG91 api call
   */
  set setOtpLength(otp_length: number) {
    this.otp_length = otp_length;
    return;
  };

  private isData(payload: any): string | null {
    if (payload) return (typeof payload === 'object' ? JSON.stringify(payload) : payload);
    return null;
  }

  async sendSMS(body: any = {}) {
    if (this.apiKey === undefined) throw new Error('Please provide API KEY for MSG91')

    body = this.isData(body);
    const path = 'v5/flow/'
    const url = `https://${this.hostname}${path}`;
    const options: RequestInit = { method: 'POST', headers: { 'Content-Type': 'application/json', 'authkey': this.apiKey } };

    const response = await this.makeRequest(url, options, body)
    return response
  };

  async sendOTP(mobileNo: string, templateId: string, params: any = {}) {
    if (this.apiKey === undefined) throw new Error('Please provide API KEY for MSG91')

    mobileNo = this.validateMobileNos(mobileNo);
    templateId = this.validateTemplate(templateId);

    if (!params['otp_length']) params['otp_length'] = this.otp_length;
    if (!params['otp_expiry']) params['otp_expiry'] = this.otp_expiry;

    const urlParameters = Object.entries(params).map((e) => e.join('=')).join('&');

    let apiAuth = 'template_id=' + templateId + '&mobile=' + mobileNo + '&authkey=' + this.apiKey;
    if (urlParameters) apiAuth += '&' + urlParameters;

    const path = `v5/otp?${apiAuth}`;
    const url = `https://${this.hostname}${path}`;
    const options: RequestInit = { method: 'GET', headers: { 'Content-Type': 'application/json', 'authkey': this.apiKey } };

    const response = await this.makeRequest(url, options)
    return response
  };

  async verifyOTP(mobileNos: string, otp: string) {
    if (this.apiKey === undefined) throw new Error('Please provide API KEY for MSG91')

    const params = { otp: otp, otp_expiry: this.otp_expiry };
    mobileNos = this.validateMobileNos(mobileNos);

    const urlParameters = Object.entries(params).map((e) => e.join('=')).join('&');

    let apiAuth = 'mobile=' + mobileNos + '&authkey=' + this.apiKey;
    if (urlParameters) apiAuth += '&' + urlParameters;

    const path = `v5/otp/verify?${apiAuth}`;
    const url = `https://${this.hostname}${path}`;
    const options: RequestInit = { method: 'GET', headers: { 'Content-Type': 'application/json', 'authkey': this.apiKey } };

    const response = await this.makeRequest(url, options)
    return response
  };

  async resendOTP(mobileNos: string, retryType: string | undefined) {
    if (this.apiKey === undefined) throw new Error('Please provide API KEY for MSG91')
    if (retryType !== undefined) retryType = this.retry_type;

    mobileNos = this.validateMobileNos(mobileNos);

    const apiAuth = 'authkey=' + this.apiKey + '&mobile=' + mobileNos + '&retrytype=' + retryType;

    const path = `v5/otp/retry?${apiAuth}`;
    const url = `https://${this.hostname}${path}`;
    const options: RequestInit = { method: 'GET', headers: { 'Content-Type': 'application/json', 'authkey': this.apiKey } };

    const response = await this.makeRequest(url, options)
    return response
  };

  async getBalance(route: string = '1') {
    if (this.apiKey === undefined) throw new Error('Please provide API KEY for MSG91')

    const apiAuth = 'authkey=' + this.apiKey + '&type=' + route;

    const path = `v5/balance.php?${apiAuth}`;
    const url = `https://${this.hostname}${path}`;
    const options: RequestInit = { method: 'GET', headers: { 'Content-Type': 'application/json', 'authkey': this.apiKey } };

    const response = await this.makeRequest(url, options)
    return response
  };

  private validateMobileNos(mobileNos: string | Array<string>) {
    if (mobileNos == null || mobileNos == '') throw new Error('MSG91 : Mobile No is not provided.');
    if (mobileNos instanceof Array) mobileNos = mobileNos.join(',');
    return mobileNos;
  }

  private validateTemplate(template: string) {
    if (template == null || template == '') throw new Error('MSG91 : template id is not provided.');
    return template;
  }

  private async makeRequest(url: RequestInfo, options: RequestInit, body?: BodyInit | undefined): Promise<any> {
    // @ts-ignore
    const response = await fetch(url.toString(), { method: options.method, headers: options.headers, body: body });
    return await response.json();
  }

}
