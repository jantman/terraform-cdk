// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack, RemoteBackend } from "cdktf";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // Only one backend is supported by Terraform

    // Remote Backend - https://www.terraform.io/docs/backends/types/remote.html
    new RemoteBackend(this, {
      hostname: "app.terraform.io",
      organization: "company",

      workspaces: {
        name: "my-app-prod",
      },
    });

    // define resources here
  }
}

const app = new App();
new MyStack(app, "typescript-backends");
app.synth();
