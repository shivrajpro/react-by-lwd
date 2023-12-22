import { Component } from "react"

export function WithCategory(limit){
    return function WithCategory(WrappedComponent) {
        return class extends Component{
            constructor(props){
                super(props);
                this.state = {title: 'Name from HOC', categories:['category 1', 'category 2', 'category 3', 'category 4']};
            }
            render(){
                const categories = this.state.categories.slice(0, limit);
                return (<div> 
                        <div>IN WITH CATEGORY</div>
                        {/* <WrappedComponent {...this.props} {...this.state} /> */}
                        <WrappedComponent {...this.props} categories={categories} />
                        <div>after wrapped component</div>
                    </div>
                )
            }
        }
    }
}
