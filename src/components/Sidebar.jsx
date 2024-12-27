import React from 'react';

class Sidebar extends React.Component {
    render() {
        return (
            <>
                <div className="col-3 border p-3"><h2>Sidebar</h2>
                <div><ul className="list" style={{ textAlign: "left" }}>
                    <li className="list-item">Lorem ipsum dolor sit amet</li>
                    <li className="list-item">Consectetur adipiscing elit</li>
                    <li className="list-item">Integer molestie lorem at massa</li>
                    <li className="list-item">Facilisis in pretium nisl aliquet</li>
                    <li className="list-item">Nulla volutpat aliquam velit</li>
                    </ul>
                </div>
                </div>
            </>

        )
    }
}

export default Sidebar;