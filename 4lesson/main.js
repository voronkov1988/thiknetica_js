//1. Вывести в консоль иерархическую структуру документа, так, как это показано на практической части.
// Реализовать 3 функции, выполняющие это разными способами 

const doc = document.querySelectorAll('body');
function displayNode(node, deep = 0) {
    console.log('  '.repeat(deep), node.nodeType, node.nodeName, JSON.stringify(node.nodeValue));
    for (let item = node.firstChild; item; item = item.nextSibling)
        displayNode(item, deep + 1);
}
displayNode(document.body);

// function structure(doc) {
//     let body = {value: doc.item(0).nodeName,type: doc.item(0).nodeType};
//     console.log(body);
//     let all;
//     for (docs of doc) {
//         all = docs.children;
//     }
//     for (alls of all) {
//         console.log({value: alls.nodeName, type: alls.nodeType});
//     }

// }
// structure(doc); 

