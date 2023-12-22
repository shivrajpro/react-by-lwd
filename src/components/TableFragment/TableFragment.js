import React, { Component } from "react";
import TableColumns from "./TableColumns";

export class TableFragment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { id: 1, name: "leela" },
                { id: 2, name: "leela web" },
                { id: 3, name: "leela web dev" },
            ]
        }
    }
    render() {
        return (
            <div className="my-3">
                <h2>Table Fragment</h2>
                <table className="table-auto" >
                    <thead>
                        <tr>
                            <th className="border border-gray-500" >Id</th>
                            <th className="border border-gray-500" >Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((user) => {
                                return (
                                    <React.Fragment key={Math.random()} >
                                        <TableColumns user={user} />
                                    </React.Fragment>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}