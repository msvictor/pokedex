export abstract class CallRest {
  public abstract execute(data: unknown): Promise<unknown>;
}
