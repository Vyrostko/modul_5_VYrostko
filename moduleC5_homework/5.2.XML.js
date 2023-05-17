const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

xmlDoc = parser.parseFromString(xmlString, "text/xml");

      
const listNode = xmlDoc.querySelector("list");
const name_Node = listNode.getElementsByTagName("name")[0];
const nameNode = xmlDoc.getElementsByTagName("first")[0];
const sernameNode = xmlDoc.getElementsByTagName("second")[0];
const ageNode = xmlDoc.getElementsByTagName("age")[0];
const profNode = xmlDoc.getElementsByTagName("prof")[0];
const langAttr = name_Node.getAttribute("lang");
const name2Node = xmlDoc.getElementsByTagName("first")[1];
const sername2Node = xmlDoc.getElementsByTagName("second")[1];
const age2Node = xmlDoc.getElementsByTagName("age")[1];
const prof2Node = xmlDoc.getElementsByTagName("prof")[1];
const name2_Node = listNode.getElementsByTagName("name")[1];
const lang2Attr = name2_Node.getAttribute("lang");   


const list = [{name: nameNode + ' ' + sernameNode, age: ageNode, prof: profNode, lang: langAttr},
{name: name2Node + ' ' + sername2Node, age: age2Node, prof: prof2Node, lang: lang2Attr}];

console.log(list)