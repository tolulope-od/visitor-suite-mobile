import React, { PureComponent } from "react";
import { ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { DrawerItems, SafeAreaView, withNavigation } from "react-navigation";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../../actions/authActions";

import styles from "./styles";

class BurgerMenu extends PureComponent {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser(this.props.navigation);
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: "always", horizontal: "never" }}
      >
        <ScrollView style={styles.container}>
          <DrawerItems {...this.props} />
        </ScrollView>
        <Button
          icon={{ name: "md-log-out", type: "ionicon" }}
          title="Log Out"
          iconContainerStyle={styles.button}
          titleStyle={styles.title}
          onPress={this.onLogoutClick}
        />
      </SafeAreaView>
    );
  }
}

BurgerMenu.propTypes = {
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withNavigation(BurgerMenu));
