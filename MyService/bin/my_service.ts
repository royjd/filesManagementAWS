#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { MyServiceStack } from '../lib/my_service-stack';

const app = new cdk.App();
new MyServiceStack(app, 'MyServiceStack');
