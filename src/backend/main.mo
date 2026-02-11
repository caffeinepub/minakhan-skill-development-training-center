import Runtime "mo:core/Runtime";

actor {
  public shared ({ caller }) func testDeployment(_ : Text) : async () {
    Runtime.trap("This is a test deployment for an informational site. There is no backend functionality required. For future updates, please redeploy your canister.");
  };
};
