import React from 'react';

const Search = props => (
    <div className="row">
      <div className="col-sm-12">
        <br/>
        {/* <!-- First panel is for handling the search parameters --> */}
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>
                <i className="fa  fa-list-alt"></i> Search Parameters</strong>
            </h3>
          </div>
          <div className="panel-body">

            {/* <!-- Here we create an HTML Form for handling the inputs--> */}
            
            <form role="form">

              {/* <!-- Here we create the text box for capturing the search term--> */}
              <div className="form-group">
                <label for="search">Search Term:</label>
                {/* Search */}
                <input onChange={props.handleSearchTerm} type="text" className="form-control" id="search-term"/>
              </div>

              {/* <!-- Here we capture the Start Year Parameter--> */}
              <div className="form-group">
                <label for="start-year">Start Year:</label>
                <input onChange={props.handleStartYear} type="text" className="form-control" id="start-year"/>
              </div>

              {/* <!-- Here we capture the End Year Parameter --> */}
              <div className="form-group">
                <label for="end-year">End Year:</label>
                <input onChange={props.handleEndYear} type="text" className="form-control" id="end-year"/>
              </div>

              {/* <!-- Here we have our final submit button --> */}
              <button onClick={props.handleFormSubmit} type="submit" className="btn btn-default" id="run-search">
                <i className="fa fa-search"></i> Search</button>

            </form>
          </div>
        </div>
      </div>


      <br/><br/>
      
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

    <br/><br/>



    </div>





);
export default Search;