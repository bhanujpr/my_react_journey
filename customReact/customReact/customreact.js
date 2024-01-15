function customRender(reactElement,root1){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    /*domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    */

    for (const prop in reactElement.props) {
        if (prop==='children')continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    root1.appendChild(domElement)
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}

const root = document.querySelector('#root')

customRender(reactElement,root)
