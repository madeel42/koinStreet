import React, { Component } from 'react';
import './Market.css';
import { APP_TITLE_PREFFIX } from '../../newMarketUi/constants';
import RootRoutes from '.././../newMarketUi/components/RootRoutes';
import Helmet from 'react-helmet';
import Header from './../../newMarketUi/components/common/Header/Header';
import Footer from './../../newMarketUi/components/common/Footer/Footer';
import ThemeProvider, {
  ThemeConsumer
} from '../../newMarketUi/components/theme/Theme';
import Layout from '../../newMarketUi/components/common/Layout';
import './../../newMarketUi/assets/main.css';
import './../../newMarketUi/assets/bootstrap.css';
// const Header = require('./../../newMarketUi/components/common/Header/Header');
// import Table from './table';
import { connect } from 'react-redux';
import { compose } from 'redux';

class Market extends Component {
  render() {
    // const { auth } = this.props;
    //   if (!auth.uid) return <Redirect to='/signin' />
    return (
      <ThemeProvider>
        <ThemeConsumer>
          <Layout>
            <Helmet titleTemplate={`%s | ${APP_TITLE_PREFFIX}`} />
            <Header />
            <RootRoutes />
            <Footer />
          </Layout>
        </ThemeConsumer>
      </ThemeProvider>
    );
    // return (
    //   <div >

    //       <Table/>
    //   </div>
    // );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    //    auth: state.firebase.auth,
  };
};

export default compose(connect(mapStateToProps))(Market);
// export default Market;
