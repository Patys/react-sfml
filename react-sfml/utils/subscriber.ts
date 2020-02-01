class Subscriber {
  handlers: any;

  constructor() {
    this.handlers = [];
  }

  subscribe(type: string, func: (args: any) => void) {
    this.handlers.push({ type, func });
  }

  publish(type: string, args: any) {
    this.handlers.forEach((handler: any) => {
      if (handler.type === type) {
        handler.func(args)
      }
    })
  }
}

export default Subscriber;
