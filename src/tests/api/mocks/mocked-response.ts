export class ResponseMock {
  public statusCode: number;
  public jsonBody: any;
  public status (statusCode: number) {
    this.statusCode = statusCode;
    return this;
  }

  public json (body: any) {
    this.jsonBody = body;
    return this.jsonBody;
  }
}
