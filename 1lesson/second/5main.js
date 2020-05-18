let text = 'The syntax of Java is largely influenced by C++. Unlike C++, Java does not support operator overloading. Java uses comments similar to those of C++.';

const replace = (text, js, old, word) => {
    text = text.split('.');
    text.forEach((v, i, text) => {
        if (RegExp(word).exec(v)) {
           text[i] = v.replace(old, js);
        } else
           text[i] = v;
    });
    return text.join('.');
}

console.log(replace(text, 'JS', 'Java', 'overloading'));
