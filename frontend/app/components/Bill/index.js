/**
 *
 * Bill
 *
 */

import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import styled from 'styled-components';

function Bill(props) {
  const {item} = props;
  let d = new Date(item.data.last_vote);
  
  return (
    <div>
        <div className="bill">
          <div className="bill__header">
            <h3 className="row bill__title">
              <span className="col-12 col-md-2 title__code">{item.data.bill}</span>
              <span className="col-12 col-md-10 title">{item.data.short_title}</span>
            </h3>
            <p className="bill__summary">{item.data.summary}</p>
          </div>

          <div className="bill__vote">
            <span>Last Vote</span>
            <span>{d.toDateString()}</span>
          </div>

          <div className="bill__link">
            <a href={item.data.congress_gov_uri} target="_blank">
              <span className="link__text">More information on Congress.gov</span> 
              <i className="material-icons">call_made</i>
            </a>
          </div>

          <div className="row no-gutters bill__details">
            <div className="col-6 col-md-5 detail">
              <span className="detail__label">Sponsor</span>
              <span className="detail__value">{item.data.sponsor_first_name} {item.data.sponosor_last_name}</span>
            </div>

            <div className="col-6 col-md-2 detail">
              <span className="detail__label">State</span>
              <span className="detail__value">{item.data.sponsor_state}</span>
            </div>

            <div className="col-6 col-md-2 detail">
              <span className="detail__label">Party</span>
              <span className="detail__value">{item.data.sponsor_party}</span>

            </div>

            <div className="col-6 col-md-3 detail">
              <span className="detail__label">Chamber</span>
              <span className="detail__value">{item.data.chamber.charAt(0).toUpperCase() + item.data.chamber.slice(1)}</span>
            </div>        
          </div>
        </div>
        <div className="col-12 bill__expand">
          <i className="material-icons">arrow_drop_down</i> 
          <span>EXPAND</span>
        </div>
      </div>
  );
  
}

Bill.propTypes = {
  item: PropTypes.object,
};

export default Bill;
