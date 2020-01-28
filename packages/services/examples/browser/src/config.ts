// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { ConfigWithDefaults, ConfigSection } from '@jupyterlab/services';

import { log } from './log';

export async function main() {
  log('Config');
  // The base url of the Jupyter server.

  let section = await ConfigSection.create({ name: 'notebook' });
  let config = new ConfigWithDefaults({
    section,
    defaults: { default_cell_type: 'code' },
    className: 'Notebook'
  });
  log(config.get('default_cell_type')); // 'code'
  let data = await config.set('foo', 'bar');
  log(data);
}