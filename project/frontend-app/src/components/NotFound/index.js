import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Menu from '../Menu';
import notFount from '../../static/img/notFound.PNG';

const NotFound = ({
  auth: {
    user: {
      role,
    },
  },
}) => (
  <section className="section__not-found">
    <div className="content">
      <div className="flex-wrapper">
        <div>
          <h1 className="title-whoops">Ой!</h1>
          <p className="message-1">Похоже, мы не можем найти нужную вам страницу</p>
        </div>
        <div className="img-404">
          <img src={notFount} alt="404" />
        </div>
      </div>
      <div className="link-wrap">
        <p className="message-3">Вот несколько полезных ссылок, которые помогут вам: </p>
        <Menu role={role} />
      </div>
    </div>
  </section>
);

export default connect(state => ({
  auth: state.auth,
}))(NotFound);

Menu.propTypes = {
  auth: PropTypes.shape({
    user: PropTypes.shape({
      role: PropTypes.string,
    }),
  }),
};

Menu.defaultProps = {
  auth: {
    user: {
      role: '',
    },
  },
};
