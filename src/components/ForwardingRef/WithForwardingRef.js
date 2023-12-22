import React, { Component } from "react";

export function WithForwardingRef(WrappedComponent) {
    class ForwardingRef extends Component {
        render() {
            return <div>
                <h2> HOC for Forwarding Ref </h2>
                <WrappedComponent  ref={this.props.buttonRef} />
            </div>
        }
    }

    return React.forwardRef((props, ref) => {
        return <ForwardingRef buttonRef={ref} {...props} />
    })

}