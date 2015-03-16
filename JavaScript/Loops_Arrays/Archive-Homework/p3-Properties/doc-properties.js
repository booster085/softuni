function displayProperties() {
    var docProperties = [],
        i = 0,
        property;
    for (property in document) {
        docProperties[i] = property;
        i++;
    }
    docProperties.sort();
    console.log(docProperties.join('\n'))
}
displayProperties();

//You must open the browser console to see the result. There is no 'document' in Node.js context