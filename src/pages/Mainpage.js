import React from 'react';
import { observer, inject } from 'mobx-react';
import Layout from '../components/Layout';

@inject('store')
@observer
class Mainpage extends React.Component{
    render() {
        const { store } = this.props;
        return (
            <Layout>
                
            </Layout>
        )
    }
}

export default Mainpage;