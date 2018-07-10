import React from 'react';

const Results = props => (

    <div className="row">
      <div className="col-sm-12">
        <br/>

        {/* <!-- This panel will initially be made up of a panel and wells for each of the articles retrieved --> */}
        <div className="panel panel-primary">

          {/* <!-- Panel Heading for the retrieved articles box --> */}
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>
                <i className="fa fa-table"></i> Results</strong>
            </h3>
          </div>

          {/* <!-- This main panel will hold each of the resulting articles --> */}
          <div className="panel-body" id="well-section">
          {props.renderArticles()}
          </div>
        </div>
      </div>
    </div>

);

export default Results; 