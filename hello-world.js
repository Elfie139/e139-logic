class HelloWorld {
  getInfo() {
    return {
      id: 'helloworld',
      name: 'Hello World!',
      blocks: [
        {
          opcode: 'hello',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Hello World'
        }
      ]
    };
  }

  hello() {
    return 'Hello, World!'
  }
}

Scratch.extensions.register(new HelloWorld());