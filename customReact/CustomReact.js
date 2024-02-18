function customRender(reactElementObject, rootFromHtml) {
    // const domElement = document.createElement(reactElementObject.type);
    // domElement.innerHTML = reactElementObject.children;
    // domElement.setAttribute('href', reactElementObject.props.href);
    // domElement.setAttribute('target', reactElementObject.props.target);
    // rootFromHtml.appendChild(domElement);

    const domElement = document.createElement(reactElementObject.type);
    domElement.innerHTML = reactElementObject.children;
    for (const prop in reactElementObject.props) {
        if (prop === 'children') continue
            domElement.setAttribute(prop, reactElementObject.props[prop]);
        }
        rootFromHtml.appendChild(domElement);
    }


const reactElementObject = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit google"
}

const rootFromHtml = document.querySelector('#root');

customRender(reactElementObject, rootFromHtml);