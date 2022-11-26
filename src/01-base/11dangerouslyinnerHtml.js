import React, {Component} from 'react';

class App extends Component {
    state = {
        myhtml: `<link rel="dns-prefetch" href="//p0.meituan.net">
        <link rel="dns-prefetch" href="//p1.meituan.net">`
    }

    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={
                    {
                        __html:this.state.myhtml
                    }
                }></div>
            </div>
        );
    }
}

export default App;