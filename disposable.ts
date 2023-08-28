(Symbol.dispose as any) ??= Symbol("Symbol.dispose");

const cleanup = (text: string) => {
  console.log(`Disposing ${text}`);
};

const someCondition = true;

class Log implements Disposable {
  #text: string;

  constructor(text: string) {
    this.#text = text;
  }

  [Symbol.dispose]() {
    cleanup(this.#text);
  }
}

const main = () => {
  using log = new Log("123")

  if (someCondition) {

    return;
  }
  console.log("some other code");
};

main();
