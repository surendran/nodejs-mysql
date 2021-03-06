import React from "react";
import PropTypes from "prop-types";
import { connect, useSelector } from "react-redux";
import { logoutUser } from "../../Redux/actions/authActions";

import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar";

const Landing = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <div className="Landing-div">
      <NavBar />
      <div>
        <div className="valign-wrapper">
          <div className="landing-container ">
            <div className="landing-content">
              <img
                src="/images/account-logo.png"
                alt="user-icon-with-blue-background"
                className="img-account"
              ></img>
              <div className="landing-text" style={{ color: "white" }}>
                <h3>
                  <b>Hey there,</b>{" "}
                  {auth.user.name ? auth.user.name.split(" ")[0] : null}!
                  <p>
                    Welcome to{" "}
                    <span style={{ fontFamily: "monospace" }}>TARI</span> 👏
                  </p>
                </h3>
              </div>
              <div className="landing-options">
                <div>
                  <Link to="/budgetInfo" className="landing-link">
                    Check your plans
                    <img
                      src="/images/plans.png"
                      alt="icon-of-a-notebook-with-plans"
                    />
                  </Link>
                </div>
                <div>
                  <Link
                    to="/expenseTracker-TransactionForm"
                    className="landing-link"
                  >
                    Submit a transaction
                    <img src="/images/cards.png" alt="credit-cards" />
                  </Link>
                </div>
                <div>
                  <Link
                    to="/expenseTracker-BudgetCategories"
                    className="landing-link"
                  >
                    View the state of your budgets
                    <img src="/images/charts.png" alt="charts" />
                  </Link>
                </div>
                <div>
                  <Link
                    to="/expenseTracker-TransactionsList"
                    className="landing-link"
                  >
                    <p>View your expenses</p>
                    <img
                      src="/images/list.png"
                      alt="document-with-list-of-transactions"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Landing.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Landing);
