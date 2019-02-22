import React from "react";
import TextField from "./TextField";
import App from "./App";

export default class RenderJsonComponent extends React.Component {
    constructor() {
        super();
        this.getFromJson = this.getFromJson.bind(this);
    }

    componentWillMount() {}

    getFromJson(obj,key) {
        // let Type = obj.baseType;

        let children = obj.children
            ? obj.children.map((obj) => {
                    return this.getFromJson(obj,obj.baseType);
                })
            : '';
        // <></
        switch (obj.baseType) {
            case "App":

                return (
                    <App key={key} {...obj.props}>
                        {children}
                    </App>
                );
            case "TextField":
                //      {children}
                //  </TextField>);
                return (<TextField key={key} {...obj.props}>
                        {children}
                    </TextField>
                );
            default:
                return <h1>Returning default case.</h1>;
        }

        // return <div>Hello</div>
    }

    render() {

        let renderedUI = "";
        if (this.props.json.UI) {
            renderedUI = this.getFromJson(this.props.json.UI, "UI");
        }

        return renderedUI;
    }
}