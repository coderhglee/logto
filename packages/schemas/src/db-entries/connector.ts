// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import { z } from 'zod';

import { ArbitraryObject, arbitraryObjectGuard, GeneratedSchema, Guard } from '../foundations';
import { ConnectorType } from './custom-types';

export type CreateConnector = {
  id: string;
  type: ConnectorType;
  enabled?: boolean;
  config?: ArbitraryObject;
  createdAt?: number;
};

export type Connector = {
  id: string;
  type: ConnectorType;
  enabled: boolean;
  config: ArbitraryObject;
  createdAt: number;
};

const createGuard: Guard<CreateConnector> = z.object({
  id: z.string(),
  type: z.nativeEnum(ConnectorType),
  enabled: z.boolean().optional(),
  config: arbitraryObjectGuard.optional(),
  createdAt: z.number().optional(),
});

export const Connectors: GeneratedSchema<CreateConnector> = Object.freeze({
  table: 'connectors',
  tableSingular: 'connector',
  fields: {
    id: 'id',
    type: 'type',
    enabled: 'enabled',
    config: 'config',
    createdAt: 'created_at',
  },
  fieldKeys: ['id', 'type', 'enabled', 'config', 'createdAt'],
  createGuard,
});
