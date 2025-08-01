import type { ContractConfig } from './types'

// Contract addresses - CONFIRMED TO EXIST ON SEPOLIA
export const SPHERRE_CONTRACTS = {
  SPHERRE_ACCOUNT:
    '0xcaaf4903ec077207db11bc020e64f78fa8e8f7a24a18cab95466e08a09b788',
  SPHERRE: '0x5cea714a2e7566164243ea4f66f17b35551ab54b6d55496238124ec688e58b7',
} as const

// Real SpherreAccount ABI
export const SPHERRE_ACCOUNT_ABI = [
  {
    type: 'impl',
    name: 'AccountImpl',
    interface_name: 'spherre::interfaces::iaccount::IAccount',
  },
  {
    type: 'struct',
    name: 'core::byte_array::ByteArray',
    members: [
      {
        name: 'data',
        type: 'core::array::Array::<core::bytes_31::bytes31>',
      },
      {
        name: 'pending_word',
        type: 'core::felt252',
      },
      {
        name: 'pending_word_len',
        type: 'core::integer::u32',
      },
    ],
  },
  {
    type: 'struct',
    name: 'spherre::types::AccountDetails',
    members: [
      {
        name: 'name',
        type: 'core::byte_array::ByteArray',
      },
      {
        name: 'description',
        type: 'core::byte_array::ByteArray',
      },
    ],
  },
  {
    type: 'struct',
    name: 'core::integer::u256',
    members: [
      {
        name: 'low',
        type: 'core::integer::u128',
      },
      {
        name: 'high',
        type: 'core::integer::u128',
      },
    ],
  },
  {
    type: 'interface',
    name: 'spherre::interfaces::iaccount::IAccount',
    items: [
      {
        type: 'function',
        name: 'get_name',
        inputs: [],
        outputs: [
          {
            type: 'core::byte_array::ByteArray',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'get_description',
        inputs: [],
        outputs: [
          {
            type: 'core::byte_array::ByteArray',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'get_account_details',
        inputs: [],
        outputs: [
          {
            type: 'spherre::types::AccountDetails',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'get_deployer',
        inputs: [],
        outputs: [
          {
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'pause',
        inputs: [],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'unpause',
        inputs: [],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'execute_transaction',
        inputs: [
          {
            name: 'transaction_id',
            type: 'core::integer::u256',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
    ],
  },
  {
    type: 'impl',
    name: 'UpgradeableImpl',
    interface_name: 'openzeppelin_upgrades::interface::IUpgradeable',
  },
  {
    type: 'interface',
    name: 'openzeppelin_upgrades::interface::IUpgradeable',
    items: [
      {
        type: 'function',
        name: 'upgrade',
        inputs: [
          {
            name: 'new_class_hash',
            type: 'core::starknet::class_hash::ClassHash',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
    ],
  },
  {
    type: 'impl',
    name: 'AccountDataImpl',
    interface_name: 'spherre::interfaces::iaccount_data::IAccountData',
  },
  {
    type: 'enum',
    name: 'spherre::types::TransactionType',
    variants: [
      {
        name: 'VOID',
        type: '()',
      },
      {
        name: 'MEMBER_ADD',
        type: '()',
      },
      {
        name: 'MEMBER_REMOVE',
        type: '()',
      },
      {
        name: 'MEMBER_PERMISSION_EDIT',
        type: '()',
      },
      {
        name: 'THRESHOLD_CHANGE',
        type: '()',
      },
      {
        name: 'TOKEN_SEND',
        type: '()',
      },
      {
        name: 'NFT_SEND',
        type: '()',
      },
      {
        name: 'SMART_TOKEN_LOCK',
        type: '()',
      },
    ],
  },
  {
    type: 'enum',
    name: 'spherre::types::TransactionStatus',
    variants: [
      {
        name: 'VOID',
        type: '()',
      },
      {
        name: 'INITIATED',
        type: '()',
      },
      {
        name: 'REJECTED',
        type: '()',
      },
      {
        name: 'APPROVED',
        type: '()',
      },
      {
        name: 'EXECUTED',
        type: '()',
      },
    ],
  },
  {
    type: 'struct',
    name: 'core::array::Span::<core::starknet::contract_address::ContractAddress>',
    members: [
      {
        name: 'snapshot',
        type: '@core::array::Array::<core::starknet::contract_address::ContractAddress>',
      },
    ],
  },
  {
    type: 'struct',
    name: 'spherre::types::Transaction',
    members: [
      {
        name: 'id',
        type: 'core::integer::u256',
      },
      {
        name: 'tx_type',
        type: 'spherre::types::TransactionType',
      },
      {
        name: 'tx_status',
        type: 'spherre::types::TransactionStatus',
      },
      {
        name: 'proposer',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        name: 'executor',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        name: 'approved',
        type: 'core::array::Span::<core::starknet::contract_address::ContractAddress>',
      },
      {
        name: 'rejected',
        type: 'core::array::Span::<core::starknet::contract_address::ContractAddress>',
      },
      {
        name: 'date_created',
        type: 'core::integer::u64',
      },
      {
        name: 'date_executed',
        type: 'core::integer::u64',
      },
    ],
  },
  {
    type: 'enum',
    name: 'core::bool',
    variants: [
      {
        name: 'False',
        type: '()',
      },
      {
        name: 'True',
        type: '()',
      },
    ],
  },
  {
    type: 'struct',
    name: 'spherre::types::MemberDetails',
    members: [
      {
        name: 'address',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        name: 'proposed_count',
        type: 'core::integer::u256',
      },
      {
        name: 'approved_count',
        type: 'core::integer::u256',
      },
      {
        name: 'rejected_count',
        type: 'core::integer::u256',
      },
      {
        name: 'executed_count',
        type: 'core::integer::u256',
      },
      {
        name: 'date_joined',
        type: 'core::integer::u64',
      },
    ],
  },
  {
    type: 'enum',
    name: 'core::option::Option::<core::integer::u64>',
    variants: [
      {
        name: 'Some',
        type: 'core::integer::u64',
      },
      {
        name: 'None',
        type: '()',
      },
    ],
  },
  {
    type: 'interface',
    name: 'spherre::interfaces::iaccount_data::IAccountData',
    items: [
      {
        type: 'function',
        name: 'get_account_members',
        inputs: [],
        outputs: [
          {
            type: 'core::array::Array::<core::starknet::contract_address::ContractAddress>',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'get_members_count',
        inputs: [],
        outputs: [
          {
            type: 'core::integer::u64',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'get_threshold',
        inputs: [],
        outputs: [
          {
            type: '(core::integer::u64, core::integer::u64)',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'get_transaction',
        inputs: [
          {
            name: 'transaction_id',
            type: 'core::integer::u256',
          },
        ],
        outputs: [
          {
            type: 'spherre::types::Transaction',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'is_member',
        inputs: [
          {
            name: 'address',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [
          {
            type: 'core::bool',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'get_number_of_voters',
        inputs: [],
        outputs: [
          {
            type: 'core::integer::u64',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'get_number_of_proposers',
        inputs: [],
        outputs: [
          {
            type: 'core::integer::u64',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'get_number_of_executors',
        inputs: [],
        outputs: [
          {
            type: 'core::integer::u64',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'approve_transaction',
        inputs: [
          {
            name: 'tx_id',
            type: 'core::integer::u256',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'reject_transaction',
        inputs: [
          {
            name: 'tx_id',
            type: 'core::integer::u256',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'get_member_full_details',
        inputs: [
          {
            name: 'member',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [
          {
            type: 'spherre::types::MemberDetails',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'update_smart_will',
        inputs: [
          {
            name: 'will_address',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'get_member_will_address',
        inputs: [
          {
            name: 'member',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [
          {
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'get_member_will_duration',
        inputs: [
          {
            name: 'member',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [
          {
            type: 'core::integer::u64',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'get_remaining_will_time',
        inputs: [
          {
            name: 'member',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [
          {
            type: 'core::integer::u64',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'can_update_will',
        inputs: [
          {
            name: 'member',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [
          {
            type: 'core::bool',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'transaction_list',
        inputs: [
          {
            name: 'start',
            type: 'core::option::Option::<core::integer::u64>',
          },
          {
            name: 'limit',
            type: 'core::option::Option::<core::integer::u64>',
          },
        ],
        outputs: [
          {
            type: 'core::array::Array::<spherre::types::Transaction>',
          },
        ],
        state_mutability: 'view',
      },
    ],
  },
  {
    type: 'impl',
    name: 'PermissionControlImpl',
    interface_name:
      'spherre::interfaces::ipermission_control::IPermissionControl',
  },
  {
    type: 'enum',
    name: 'spherre::types::PermissionEnum',
    variants: [
      {
        name: 'PROPOSER',
        type: '()',
      },
      {
        name: 'VOTER',
        type: '()',
      },
      {
        name: 'EXECUTOR',
        type: '()',
      },
    ],
  },
  {
    type: 'interface',
    name: 'spherre::interfaces::ipermission_control::IPermissionControl',
    items: [
      {
        type: 'function',
        name: 'has_permission',
        inputs: [
          {
            name: 'member',
            type: 'core::starknet::contract_address::ContractAddress',
          },
          {
            name: 'permission',
            type: 'core::felt252',
          },
        ],
        outputs: [
          {
            type: 'core::bool',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'get_member_permissions',
        inputs: [
          {
            name: 'member',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [
          {
            type: 'core::array::Array::<spherre::types::PermissionEnum>',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'permissions_to_mask',
        inputs: [
          {
            name: 'permissions',
            type: 'core::array::Array::<spherre::types::PermissionEnum>',
          },
        ],
        outputs: [
          {
            type: 'core::integer::u8',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'permissions_from_mask',
        inputs: [
          {
            name: 'mask',
            type: 'core::integer::u8',
          },
        ],
        outputs: [
          {
            type: 'core::array::Array::<spherre::types::PermissionEnum>',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'is_valid_mask',
        inputs: [
          {
            name: 'mask',
            type: 'core::integer::u8',
          },
        ],
        outputs: [
          {
            type: 'core::bool',
          },
        ],
        state_mutability: 'view',
      },
    ],
  },
  {
    type: 'impl',
    name: 'TreasuryHandlerImpl',
    interface_name: 'spherre::interfaces::itreasury_handler::ITreasuryHandler',
  },
  {
    type: 'enum',
    name: 'spherre::types::LockStatus',
    variants: [
      {
        name: 'LOCKED',
        type: '()',
      },
      {
        name: 'PAIDOUT',
        type: '()',
      },
    ],
  },
  {
    type: 'struct',
    name: 'spherre::types::SmartTokenLock',
    members: [
      {
        name: 'token',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        name: 'date_locked',
        type: 'core::integer::u64',
      },
      {
        name: 'lock_duration',
        type: 'core::integer::u64',
      },
      {
        name: 'token_amount',
        type: 'core::integer::u256',
      },
      {
        name: 'lock_status',
        type: 'spherre::types::LockStatus',
      },
    ],
  },
  {
    type: 'interface',
    name: 'spherre::interfaces::itreasury_handler::ITreasuryHandler',
    items: [
      {
        type: 'function',
        name: 'get_token_balance',
        inputs: [
          {
            name: 'token_address',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [
          {
            type: 'core::integer::u256',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'is_nft_owner',
        inputs: [
          {
            name: 'nft_address',
            type: 'core::starknet::contract_address::ContractAddress',
          },
          {
            name: 'token_id',
            type: 'core::integer::u256',
          },
        ],
        outputs: [
          {
            type: 'core::bool',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'get_all_locked_plans',
        inputs: [],
        outputs: [
          {
            type: 'core::array::Array::<spherre::types::SmartTokenLock>',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'get_locked_plan',
        inputs: [
          {
            name: 'lock_id',
            type: 'core::integer::u256',
          },
        ],
        outputs: [
          {
            type: 'spherre::types::SmartTokenLock',
          },
        ],
        state_mutability: 'view',
      },
    ],
  },
  {
    type: 'impl',
    name: 'PausableImpl',
    interface_name: 'openzeppelin_security::interface::IPausable',
  },
  {
    type: 'interface',
    name: 'openzeppelin_security::interface::IPausable',
    items: [
      {
        type: 'function',
        name: 'is_paused',
        inputs: [],
        outputs: [
          {
            type: 'core::bool',
          },
        ],
        state_mutability: 'view',
      },
    ],
  },
  {
    type: 'impl',
    name: 'OwnableMixinImpl',
    interface_name: 'openzeppelin_access::ownable::interface::OwnableABI',
  },
  {
    type: 'interface',
    name: 'openzeppelin_access::ownable::interface::OwnableABI',
    items: [
      {
        type: 'function',
        name: 'owner',
        inputs: [],
        outputs: [
          {
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'transfer_ownership',
        inputs: [
          {
            name: 'new_owner',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'renounce_ownership',
        inputs: [],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'transferOwnership',
        inputs: [
          {
            name: 'newOwner',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'renounceOwnership',
        inputs: [],
        outputs: [],
        state_mutability: 'external',
      },
    ],
  },
  {
    type: 'impl',
    name: 'ERC721ReceiverMixinImpl',
    interface_name:
      'openzeppelin_token::erc721::interface::ERC721ReceiverMixin',
  },
  {
    type: 'struct',
    name: 'core::array::Span::<core::felt252>',
    members: [
      {
        name: 'snapshot',
        type: '@core::array::Array::<core::felt252>',
      },
    ],
  },
  {
    type: 'interface',
    name: 'openzeppelin_token::erc721::interface::ERC721ReceiverMixin',
    items: [
      {
        type: 'function',
        name: 'on_erc721_received',
        inputs: [
          {
            name: 'operator',
            type: 'core::starknet::contract_address::ContractAddress',
          },
          {
            name: 'from',
            type: 'core::starknet::contract_address::ContractAddress',
          },
          {
            name: 'token_id',
            type: 'core::integer::u256',
          },
          {
            name: 'data',
            type: 'core::array::Span::<core::felt252>',
          },
        ],
        outputs: [
          {
            type: 'core::felt252',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'onERC721Received',
        inputs: [
          {
            name: 'operator',
            type: 'core::starknet::contract_address::ContractAddress',
          },
          {
            name: 'from',
            type: 'core::starknet::contract_address::ContractAddress',
          },
          {
            name: 'tokenId',
            type: 'core::integer::u256',
          },
          {
            name: 'data',
            type: 'core::array::Span::<core::felt252>',
          },
        ],
        outputs: [
          {
            type: 'core::felt252',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'supports_interface',
        inputs: [
          {
            name: 'interface_id',
            type: 'core::felt252',
          },
        ],
        outputs: [
          {
            type: 'core::bool',
          },
        ],
        state_mutability: 'view',
      },
    ],
  },
  {
    type: 'impl',
    name: 'ChangeThresholdTransactionImpl',
    interface_name:
      'spherre::interfaces::ichange_threshold_tx::IChangeThresholdTransaction',
  },
  {
    type: 'struct',
    name: 'spherre::types::ThresholdChangeData',
    members: [
      {
        name: 'new_threshold',
        type: 'core::integer::u64',
      },
    ],
  },
  {
    type: 'interface',
    name: 'spherre::interfaces::ichange_threshold_tx::IChangeThresholdTransaction',
    items: [
      {
        type: 'function',
        name: 'propose_threshold_change_transaction',
        inputs: [
          {
            name: 'new_threshold',
            type: 'core::integer::u64',
          },
        ],
        outputs: [
          {
            type: 'core::integer::u256',
          },
        ],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'get_threshold_change_transaction',
        inputs: [
          {
            name: 'id',
            type: 'core::integer::u256',
          },
        ],
        outputs: [
          {
            type: 'spherre::types::ThresholdChangeData',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'get_all_threshold_change_transactions',
        inputs: [],
        outputs: [
          {
            type: 'core::array::Array::<spherre::types::ThresholdChangeData>',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'execute_threshold_change_transaction',
        inputs: [
          {
            name: 'id',
            type: 'core::integer::u256',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
    ],
  },
  {
    type: 'impl',
    name: 'MemberAddTransactionImpl',
    interface_name:
      'spherre::interfaces::imember_add_tx::IMemberAddTransaction',
  },
  {
    type: 'struct',
    name: 'spherre::types::MemberAddData',
    members: [
      {
        name: 'member',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        name: 'permissions',
        type: 'core::integer::u8',
      },
    ],
  },
  {
    type: 'interface',
    name: 'spherre::interfaces::imember_add_tx::IMemberAddTransaction',
    items: [
      {
        type: 'function',
        name: 'propose_member_add_transaction',
        inputs: [
          {
            name: 'member',
            type: 'core::starknet::contract_address::ContractAddress',
          },
          {
            name: 'permissions',
            type: 'core::integer::u8',
          },
        ],
        outputs: [
          {
            type: 'core::integer::u256',
          },
        ],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'get_member_add_transaction',
        inputs: [
          {
            name: 'transaction_id',
            type: 'core::integer::u256',
          },
        ],
        outputs: [
          {
            type: 'spherre::types::MemberAddData',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'member_add_transaction_list',
        inputs: [],
        outputs: [
          {
            type: 'core::array::Array::<spherre::types::MemberAddData>',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'execute_member_add_transaction',
        inputs: [
          {
            name: 'transaction_id',
            type: 'core::integer::u256',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
    ],
  },
  {
    type: 'impl',
    name: 'MemberRemoveTransactionImpl',
    interface_name:
      'spherre::interfaces::imember_remove_tx::IMemberRemoveTransaction',
  },
  {
    type: 'struct',
    name: 'spherre::types::MemberRemoveData',
    members: [
      {
        name: 'member_address',
        type: 'core::starknet::contract_address::ContractAddress',
      },
    ],
  },
  {
    type: 'interface',
    name: 'spherre::interfaces::imember_remove_tx::IMemberRemoveTransaction',
    items: [
      {
        type: 'function',
        name: 'propose_remove_member_transaction',
        inputs: [
          {
            name: 'member_address',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [
          {
            type: 'core::integer::u256',
          },
        ],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'get_member_removal_transaction',
        inputs: [
          {
            name: 'transaction_id',
            type: 'core::integer::u256',
          },
        ],
        outputs: [
          {
            type: 'spherre::types::MemberRemoveData',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'member_removal_transaction_list',
        inputs: [],
        outputs: [
          {
            type: 'core::array::Array::<spherre::types::MemberRemoveData>',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'execute_remove_member_transaction',
        inputs: [
          {
            name: 'transaction_id',
            type: 'core::integer::u256',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
    ],
  },
  {
    type: 'impl',
    name: 'MemberPermissionTransactionImpl',
    interface_name:
      'spherre::interfaces::iedit_permission_tx::IEditPermissionTransaction',
  },
  {
    type: 'struct',
    name: 'spherre::types::EditPermissionTransaction',
    members: [
      {
        name: 'member',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        name: 'new_permissions',
        type: 'core::integer::u8',
      },
    ],
  },
  {
    type: 'interface',
    name: 'spherre::interfaces::iedit_permission_tx::IEditPermissionTransaction',
    items: [
      {
        type: 'function',
        name: 'propose_edit_permission_transaction',
        inputs: [
          {
            name: 'member',
            type: 'core::starknet::contract_address::ContractAddress',
          },
          {
            name: 'new_permissions',
            type: 'core::integer::u8',
          },
        ],
        outputs: [
          {
            type: 'core::integer::u256',
          },
        ],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'get_edit_permission_transaction',
        inputs: [
          {
            name: 'transaction_id',
            type: 'core::integer::u256',
          },
        ],
        outputs: [
          {
            type: 'spherre::types::EditPermissionTransaction',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'get_edit_permission_transaction_list',
        inputs: [],
        outputs: [
          {
            type: 'core::array::Array::<spherre::types::EditPermissionTransaction>',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'execute_edit_permission_transaction',
        inputs: [
          {
            name: 'transaction_id',
            type: 'core::integer::u256',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
    ],
  },
  {
    type: 'impl',
    name: 'SmartTokenLockTransactionImpl',
    interface_name:
      'spherre::interfaces::ismart_token_lock_transaction::ISmartTokenLockTransaction',
  },
  {
    type: 'struct',
    name: 'spherre::types::SmartTokenLockTransaction',
    members: [
      {
        name: 'token',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        name: 'amount',
        type: 'core::integer::u256',
      },
      {
        name: 'duration',
        type: 'core::integer::u64',
      },
      {
        name: 'transaction_id',
        type: 'core::integer::u256',
      },
    ],
  },
  {
    type: 'interface',
    name: 'spherre::interfaces::ismart_token_lock_transaction::ISmartTokenLockTransaction',
    items: [
      {
        type: 'function',
        name: 'propose_smart_token_lock_transaction',
        inputs: [
          {
            name: 'token',
            type: 'core::starknet::contract_address::ContractAddress',
          },
          {
            name: 'amount',
            type: 'core::integer::u256',
          },
          {
            name: 'duration',
            type: 'core::integer::u64',
          },
        ],
        outputs: [
          {
            type: 'core::integer::u256',
          },
        ],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'get_smart_token_lock_transaction',
        inputs: [
          {
            name: 'transaction_id',
            type: 'core::integer::u256',
          },
        ],
        outputs: [
          {
            type: 'spherre::types::SmartTokenLockTransaction',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'smart_token_lock_transaction_list',
        inputs: [],
        outputs: [
          {
            type: 'core::array::Array::<spherre::types::SmartTokenLockTransaction>',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'execute_smart_token_lock_transaction',
        inputs: [
          {
            name: 'transaction_id',
            type: 'core::integer::u256',
          },
        ],
        outputs: [
          {
            type: 'core::integer::u256',
          },
        ],
        state_mutability: 'external',
      },
    ],
  },
  {
    type: 'impl',
    name: 'NFTTransactionImpl',
    interface_name: 'spherre::interfaces::inft_tx::INFTTransaction',
  },
  {
    type: 'struct',
    name: 'spherre::types::NFTTransactionData',
    members: [
      {
        name: 'nft_contract',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        name: 'token_id',
        type: 'core::integer::u256',
      },
      {
        name: 'recipient',
        type: 'core::starknet::contract_address::ContractAddress',
      },
    ],
  },
  {
    type: 'interface',
    name: 'spherre::interfaces::inft_tx::INFTTransaction',
    items: [
      {
        type: 'function',
        name: 'propose_nft_transaction',
        inputs: [
          {
            name: 'nft_contract',
            type: 'core::starknet::contract_address::ContractAddress',
          },
          {
            name: 'token_id',
            type: 'core::integer::u256',
          },
          {
            name: 'recipient',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [
          {
            type: 'core::integer::u256',
          },
        ],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'get_nft_transaction',
        inputs: [
          {
            name: 'id',
            type: 'core::integer::u256',
          },
        ],
        outputs: [
          {
            type: 'spherre::types::NFTTransactionData',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'nft_transaction_list',
        inputs: [],
        outputs: [
          {
            type: 'core::array::Array::<spherre::types::NFTTransactionData>',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'execute_nft_transaction',
        inputs: [
          {
            name: 'id',
            type: 'core::integer::u256',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
    ],
  },
  {
    type: 'impl',
    name: 'TokenTransactionImpl',
    interface_name: 'spherre::interfaces::itoken_tx::ITokenTransaction',
  },
  {
    type: 'struct',
    name: 'spherre::types::TokenTransactionData',
    members: [
      {
        name: 'token',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        name: 'amount',
        type: 'core::integer::u256',
      },
      {
        name: 'recipient',
        type: 'core::starknet::contract_address::ContractAddress',
      },
    ],
  },
  {
    type: 'interface',
    name: 'spherre::interfaces::itoken_tx::ITokenTransaction',
    items: [
      {
        type: 'function',
        name: 'propose_token_transaction',
        inputs: [
          {
            name: 'token',
            type: 'core::starknet::contract_address::ContractAddress',
          },
          {
            name: 'amount',
            type: 'core::integer::u256',
          },
          {
            name: 'recipient',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [
          {
            type: 'core::integer::u256',
          },
        ],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'get_token_transaction',
        inputs: [
          {
            name: 'id',
            type: 'core::integer::u256',
          },
        ],
        outputs: [
          {
            type: 'spherre::types::TokenTransactionData',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'token_transaction_list',
        inputs: [],
        outputs: [
          {
            type: 'core::array::Array::<spherre::types::TokenTransactionData>',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'execute_token_transaction',
        inputs: [
          {
            name: 'id',
            type: 'core::integer::u256',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
    ],
  },
  {
    type: 'constructor',
    name: 'constructor',
    inputs: [
      {
        name: 'deployer',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        name: 'owner',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        name: 'name',
        type: 'core::byte_array::ByteArray',
      },
      {
        name: 'description',
        type: 'core::byte_array::ByteArray',
      },
      {
        name: 'members',
        type: 'core::array::Array::<core::starknet::contract_address::ContractAddress>',
      },
      {
        name: 'threshold',
        type: 'core::integer::u64',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::account_data::AccountData::AddedMember',
    kind: 'struct',
    members: [
      {
        name: 'member',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::account_data::AccountData::ThresholdUpdated',
    kind: 'struct',
    members: [
      {
        name: 'threshold',
        type: 'core::integer::u64',
        kind: 'data',
      },
      {
        name: 'date_updated',
        type: 'core::integer::u64',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::account_data::AccountData::TransactionApproved',
    kind: 'struct',
    members: [
      {
        name: 'transaction_id',
        type: 'core::integer::u256',
        kind: 'key',
      },
      {
        name: 'date_approved',
        type: 'core::integer::u64',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::account_data::AccountData::TransactionRejected',
    kind: 'struct',
    members: [
      {
        name: 'transaction_id',
        type: 'core::integer::u256',
        kind: 'key',
      },
      {
        name: 'date_approved',
        type: 'core::integer::u64',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::account_data::AccountData::TransactionVoted',
    kind: 'struct',
    members: [
      {
        name: 'transaction_id',
        type: 'core::integer::u256',
        kind: 'key',
      },
      {
        name: 'voter',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'key',
      },
      {
        name: 'date_voted',
        type: 'core::integer::u64',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::account_data::AccountData::TransactionExecuted',
    kind: 'struct',
    members: [
      {
        name: 'transaction_id',
        type: 'core::integer::u256',
        kind: 'key',
      },
      {
        name: 'executor',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'key',
      },
      {
        name: 'date_executed',
        type: 'core::integer::u64',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::account_data::AccountData::SmartWillUpdated',
    kind: 'struct',
    members: [
      {
        name: 'member',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'key',
      },
      {
        name: 'will_address',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'key',
      },
      {
        name: 'duration',
        type: 'core::integer::u64',
        kind: 'data',
      },
      {
        name: 'creation_time',
        type: 'core::integer::u64',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::account_data::AccountData::Event',
    kind: 'enum',
    variants: [
      {
        name: 'AddedMember',
        type: 'spherre::account_data::AccountData::AddedMember',
        kind: 'nested',
      },
      {
        name: 'ThresholdUpdated',
        type: 'spherre::account_data::AccountData::ThresholdUpdated',
        kind: 'nested',
      },
      {
        name: 'TransactionApproved',
        type: 'spherre::account_data::AccountData::TransactionApproved',
        kind: 'nested',
      },
      {
        name: 'TransactionRejected',
        type: 'spherre::account_data::AccountData::TransactionRejected',
        kind: 'nested',
      },
      {
        name: 'TransactionVoted',
        type: 'spherre::account_data::AccountData::TransactionVoted',
        kind: 'nested',
      },
      {
        name: 'TransactionExecuted',
        type: 'spherre::account_data::AccountData::TransactionExecuted',
        kind: 'nested',
      },
      {
        name: 'SmartWillUpdated',
        type: 'spherre::account_data::AccountData::SmartWillUpdated',
        kind: 'nested',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::components::permission_control::PermissionControl::PermissionGranted',
    kind: 'struct',
    members: [
      {
        name: 'permission',
        type: 'core::felt252',
        kind: 'data',
      },
      {
        name: 'member',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::components::permission_control::PermissionControl::PermissionRevoked',
    kind: 'struct',
    members: [
      {
        name: 'permission',
        type: 'core::felt252',
        kind: 'data',
      },
      {
        name: 'account',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::components::permission_control::PermissionControl::Event',
    kind: 'enum',
    variants: [
      {
        name: 'PermissionGranted',
        type: 'spherre::components::permission_control::PermissionControl::PermissionGranted',
        kind: 'nested',
      },
      {
        name: 'PermissionRevoked',
        type: 'spherre::components::permission_control::PermissionControl::PermissionRevoked',
        kind: 'nested',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::components::treasury_handler::TreasuryHandler::TokenTransferred',
    kind: 'struct',
    members: [
      {
        name: 'token',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
      {
        name: 'to',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
      {
        name: 'amount',
        type: 'core::integer::u256',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::components::treasury_handler::TreasuryHandler::NftTransferred',
    kind: 'struct',
    members: [
      {
        name: 'nft',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
      {
        name: 'to',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
      {
        name: 'token_id',
        type: 'core::integer::u256',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::components::treasury_handler::TreasuryHandler::TokenLocked',
    kind: 'struct',
    members: [
      {
        name: 'lock_id',
        type: 'core::integer::u256',
        kind: 'data',
      },
      {
        name: 'token',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
      {
        name: 'amount',
        type: 'core::integer::u256',
        kind: 'data',
      },
      {
        name: 'lock_duration',
        type: 'core::integer::u64',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::components::treasury_handler::TreasuryHandler::TokenUnlocked',
    kind: 'struct',
    members: [
      {
        name: 'lock_id',
        type: 'core::integer::u256',
        kind: 'data',
      },
      {
        name: 'token',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
      {
        name: 'amount',
        type: 'core::integer::u256',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::components::treasury_handler::TreasuryHandler::Event',
    kind: 'enum',
    variants: [
      {
        name: 'TokenTransferred',
        type: 'spherre::components::treasury_handler::TreasuryHandler::TokenTransferred',
        kind: 'nested',
      },
      {
        name: 'NftTransferred',
        type: 'spherre::components::treasury_handler::TreasuryHandler::NftTransferred',
        kind: 'nested',
      },
      {
        name: 'TokenLocked',
        type: 'spherre::components::treasury_handler::TreasuryHandler::TokenLocked',
        kind: 'nested',
      },
      {
        name: 'TokenUnlocked',
        type: 'spherre::components::treasury_handler::TreasuryHandler::TokenUnlocked',
        kind: 'nested',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::actions::change_threshold_transaction::ChangeThresholdTransaction::ThresholdChangeProposed',
    kind: 'struct',
    members: [
      {
        name: 'id',
        type: 'core::integer::u256',
        kind: 'key',
      },
      {
        name: 'new_threshold',
        type: 'core::integer::u64',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::actions::change_threshold_transaction::ChangeThresholdTransaction::ThresholdChangeExecuted',
    kind: 'struct',
    members: [
      {
        name: 'id',
        type: 'core::integer::u256',
        kind: 'key',
      },
      {
        name: 'new_threshold',
        type: 'core::integer::u64',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::actions::change_threshold_transaction::ChangeThresholdTransaction::Event',
    kind: 'enum',
    variants: [
      {
        name: 'ThresholdChangeProposed',
        type: 'spherre::actions::change_threshold_transaction::ChangeThresholdTransaction::ThresholdChangeProposed',
        kind: 'nested',
      },
      {
        name: 'ThresholdChangeExecuted',
        type: 'spherre::actions::change_threshold_transaction::ChangeThresholdTransaction::ThresholdChangeExecuted',
        kind: 'nested',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::actions::member_add_transaction::MemberAddTransaction::MemberAddTransactionProposed',
    kind: 'struct',
    members: [
      {
        name: 'transaction_id',
        type: 'core::integer::u256',
        kind: 'key',
      },
      {
        name: 'member',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
      {
        name: 'permissions',
        type: 'core::integer::u8',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::actions::member_add_transaction::MemberAddTransaction::MemberAddTransactionExecuted',
    kind: 'struct',
    members: [
      {
        name: 'transaction_id',
        type: 'core::integer::u256',
        kind: 'key',
      },
      {
        name: 'member',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
      {
        name: 'permissions',
        type: 'core::integer::u8',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::actions::member_add_transaction::MemberAddTransaction::Event',
    kind: 'enum',
    variants: [
      {
        name: 'MemberAddTransactionProposed',
        type: 'spherre::actions::member_add_transaction::MemberAddTransaction::MemberAddTransactionProposed',
        kind: 'nested',
      },
      {
        name: 'MemberAddTransactionExecuted',
        type: 'spherre::actions::member_add_transaction::MemberAddTransaction::MemberAddTransactionExecuted',
        kind: 'nested',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::actions::member_remove_transaction::MemberRemoveTransaction::MemberRemovalProposed',
    kind: 'struct',
    members: [
      {
        name: 'transaction_id',
        type: 'core::integer::u256',
        kind: 'key',
      },
      {
        name: 'member',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'key',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::actions::member_remove_transaction::MemberRemoveTransaction::MemberRemovalExecuted',
    kind: 'struct',
    members: [
      {
        name: 'transaction_id',
        type: 'core::integer::u256',
        kind: 'key',
      },
      {
        name: 'member',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'key',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::actions::member_remove_transaction::MemberRemoveTransaction::Event',
    kind: 'enum',
    variants: [
      {
        name: 'MemberRemovalProposed',
        type: 'spherre::actions::member_remove_transaction::MemberRemoveTransaction::MemberRemovalProposed',
        kind: 'nested',
      },
      {
        name: 'MemberRemovalExecuted',
        type: 'spherre::actions::member_remove_transaction::MemberRemoveTransaction::MemberRemovalExecuted',
        kind: 'nested',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::actions::member_permission_tx::MemberPermissionTransaction::PermissionEditProposed',
    kind: 'struct',
    members: [
      {
        name: 'transaction_id',
        type: 'core::integer::u256',
        kind: 'key',
      },
      {
        name: 'member',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
      {
        name: 'new_permissions',
        type: 'core::integer::u8',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::actions::member_permission_tx::MemberPermissionTransaction::PermissionEditExecuted',
    kind: 'struct',
    members: [
      {
        name: 'transaction_id',
        type: 'core::integer::u256',
        kind: 'key',
      },
      {
        name: 'member',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
      {
        name: 'new_permissions',
        type: 'core::integer::u8',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::actions::member_permission_tx::MemberPermissionTransaction::Event',
    kind: 'enum',
    variants: [
      {
        name: 'PermissionEditProposed',
        type: 'spherre::actions::member_permission_tx::MemberPermissionTransaction::PermissionEditProposed',
        kind: 'nested',
      },
      {
        name: 'PermissionEditExecuted',
        type: 'spherre::actions::member_permission_tx::MemberPermissionTransaction::PermissionEditExecuted',
        kind: 'nested',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::actions::smart_token_lock_transaction::SmartTokenLockTransactionComponent::SmartTokenLockTransactionProposed',
    kind: 'struct',
    members: [
      {
        name: 'id',
        type: 'core::integer::u256',
        kind: 'key',
      },
      {
        name: 'token',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
      {
        name: 'amount',
        type: 'core::integer::u256',
        kind: 'data',
      },
      {
        name: 'duration',
        type: 'core::integer::u64',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::actions::smart_token_lock_transaction::SmartTokenLockTransactionComponent::SmartTokenLockTransactionExecuted',
    kind: 'struct',
    members: [
      {
        name: 'transaction_id',
        type: 'core::integer::u256',
        kind: 'key',
      },
      {
        name: 'lock_id',
        type: 'core::integer::u256',
        kind: 'key',
      },
      {
        name: 'token',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
      {
        name: 'amount',
        type: 'core::integer::u256',
        kind: 'data',
      },
      {
        name: 'duration',
        type: 'core::integer::u64',
        kind: 'data',
      },
      {
        name: 'date_executed',
        type: 'core::integer::u64',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::actions::smart_token_lock_transaction::SmartTokenLockTransactionComponent::Event',
    kind: 'enum',
    variants: [
      {
        name: 'SmartTokenLockTransactionProposed',
        type: 'spherre::actions::smart_token_lock_transaction::SmartTokenLockTransactionComponent::SmartTokenLockTransactionProposed',
        kind: 'nested',
      },
      {
        name: 'SmartTokenLockTransactionExecuted',
        type: 'spherre::actions::smart_token_lock_transaction::SmartTokenLockTransactionComponent::SmartTokenLockTransactionExecuted',
        kind: 'nested',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::actions::nft_transaction::NFTTransaction::NFTTransactionProposed',
    kind: 'struct',
    members: [
      {
        name: 'id',
        type: 'core::integer::u256',
        kind: 'data',
      },
      {
        name: 'nft_contract',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
      {
        name: 'token_id',
        type: 'core::integer::u256',
        kind: 'data',
      },
      {
        name: 'recipient',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::actions::nft_transaction::NFTTransaction::NFTTransactionExecuted',
    kind: 'struct',
    members: [
      {
        name: 'id',
        type: 'core::integer::u256',
        kind: 'data',
      },
      {
        name: 'nft_contract',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
      {
        name: 'token_id',
        type: 'core::integer::u256',
        kind: 'data',
      },
      {
        name: 'recipient',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::actions::nft_transaction::NFTTransaction::Event',
    kind: 'enum',
    variants: [
      {
        name: 'NFTTransactionProposed',
        type: 'spherre::actions::nft_transaction::NFTTransaction::NFTTransactionProposed',
        kind: 'nested',
      },
      {
        name: 'NFTTransactionExecuted',
        type: 'spherre::actions::nft_transaction::NFTTransaction::NFTTransactionExecuted',
        kind: 'nested',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::actions::token_transaction::TokenTransaction::TokenTransactionProposed',
    kind: 'struct',
    members: [
      {
        name: 'id',
        type: 'core::integer::u256',
        kind: 'key',
      },
      {
        name: 'token',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
      {
        name: 'amount',
        type: 'core::integer::u256',
        kind: 'data',
      },
      {
        name: 'recipient',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::actions::token_transaction::TokenTransaction::TokenTransactionExecuted',
    kind: 'struct',
    members: [
      {
        name: 'id',
        type: 'core::integer::u256',
        kind: 'key',
      },
      {
        name: 'token',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
      {
        name: 'amount',
        type: 'core::integer::u256',
        kind: 'data',
      },
      {
        name: 'recipient',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::actions::token_transaction::TokenTransaction::Event',
    kind: 'enum',
    variants: [
      {
        name: 'TokenTransactionProposed',
        type: 'spherre::actions::token_transaction::TokenTransaction::TokenTransactionProposed',
        kind: 'nested',
      },
      {
        name: 'TokenTransactionExecuted',
        type: 'spherre::actions::token_transaction::TokenTransaction::TokenTransactionExecuted',
        kind: 'nested',
      },
    ],
  },
  {
    type: 'event',
    name: 'openzeppelin_security::pausable::PausableComponent::Paused',
    kind: 'struct',
    members: [
      {
        name: 'account',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'openzeppelin_security::pausable::PausableComponent::Unpaused',
    kind: 'struct',
    members: [
      {
        name: 'account',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'openzeppelin_security::pausable::PausableComponent::Event',
    kind: 'enum',
    variants: [
      {
        name: 'Paused',
        type: 'openzeppelin_security::pausable::PausableComponent::Paused',
        kind: 'nested',
      },
      {
        name: 'Unpaused',
        type: 'openzeppelin_security::pausable::PausableComponent::Unpaused',
        kind: 'nested',
      },
    ],
  },
  {
    type: 'event',
    name: 'openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferred',
    kind: 'struct',
    members: [
      {
        name: 'previous_owner',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'key',
      },
      {
        name: 'new_owner',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'key',
      },
    ],
  },
  {
    type: 'event',
    name: 'openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferStarted',
    kind: 'struct',
    members: [
      {
        name: 'previous_owner',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'key',
      },
      {
        name: 'new_owner',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'key',
      },
    ],
  },
  {
    type: 'event',
    name: 'openzeppelin_access::ownable::ownable::OwnableComponent::Event',
    kind: 'enum',
    variants: [
      {
        name: 'OwnershipTransferred',
        type: 'openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferred',
        kind: 'nested',
      },
      {
        name: 'OwnershipTransferStarted',
        type: 'openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferStarted',
        kind: 'nested',
      },
    ],
  },
  {
    type: 'event',
    name: 'openzeppelin_upgrades::upgradeable::UpgradeableComponent::Upgraded',
    kind: 'struct',
    members: [
      {
        name: 'class_hash',
        type: 'core::starknet::class_hash::ClassHash',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'openzeppelin_upgrades::upgradeable::UpgradeableComponent::Event',
    kind: 'enum',
    variants: [
      {
        name: 'Upgraded',
        type: 'openzeppelin_upgrades::upgradeable::UpgradeableComponent::Upgraded',
        kind: 'nested',
      },
    ],
  },
  {
    type: 'event',
    name: 'openzeppelin_token::erc721::erc721_receiver::ERC721ReceiverComponent::Event',
    kind: 'enum',
    variants: [],
  },
  {
    type: 'event',
    name: 'openzeppelin_introspection::src5::SRC5Component::Event',
    kind: 'enum',
    variants: [],
  },
  {
    type: 'event',
    name: 'spherre::account::SpherreAccount::Event',
    kind: 'enum',
    variants: [
      {
        name: 'AccountDataEvent',
        type: 'spherre::account_data::AccountData::Event',
        kind: 'flat',
      },
      {
        name: 'PermissionControlEvent',
        type: 'spherre::components::permission_control::PermissionControl::Event',
        kind: 'flat',
      },
      {
        name: 'TreasuryHandlerEvent',
        type: 'spherre::components::treasury_handler::TreasuryHandler::Event',
        kind: 'flat',
      },
      {
        name: 'ChangeThresholdEvent',
        type: 'spherre::actions::change_threshold_transaction::ChangeThresholdTransaction::Event',
        kind: 'flat',
      },
      {
        name: 'MemberAddTransactionEvent',
        type: 'spherre::actions::member_add_transaction::MemberAddTransaction::Event',
        kind: 'flat',
      },
      {
        name: 'MemberRemoveTransactionEvent',
        type: 'spherre::actions::member_remove_transaction::MemberRemoveTransaction::Event',
        kind: 'flat',
      },
      {
        name: 'MemberPermissionTransactionEvent',
        type: 'spherre::actions::member_permission_tx::MemberPermissionTransaction::Event',
        kind: 'flat',
      },
      {
        name: 'SmartTokenLockTransactionEvent',
        type: 'spherre::actions::smart_token_lock_transaction::SmartTokenLockTransactionComponent::Event',
        kind: 'flat',
      },
      {
        name: 'NFTTransactionEvent',
        type: 'spherre::actions::nft_transaction::NFTTransaction::Event',
        kind: 'flat',
      },
      {
        name: 'TokenTransactionEvent',
        type: 'spherre::actions::token_transaction::TokenTransaction::Event',
        kind: 'flat',
      },
      {
        name: 'PausableEvent',
        type: 'openzeppelin_security::pausable::PausableComponent::Event',
        kind: 'flat',
      },
      {
        name: 'OwnableEvent',
        type: 'openzeppelin_access::ownable::ownable::OwnableComponent::Event',
        kind: 'flat',
      },
      {
        name: 'UpgradeableEvent',
        type: 'openzeppelin_upgrades::upgradeable::UpgradeableComponent::Event',
        kind: 'flat',
      },
      {
        name: 'ERC721ReceiverEvent',
        type: 'openzeppelin_token::erc721::erc721_receiver::ERC721ReceiverComponent::Event',
        kind: 'flat',
      },
      {
        name: 'SRC5Event',
        type: 'openzeppelin_introspection::src5::SRC5Component::Event',
        kind: 'flat',
      },
    ],
  },
] as const

// Real Spherre Factory ABI
export const SPHERRE_ABI = [
  {
    type: 'impl',
    name: 'SpherreImpl',
    interface_name: 'spherre::interfaces::ispherre::ISpherre',
  },
  {
    type: 'enum',
    name: 'core::bool',
    variants: [
      {
        name: 'False',
        type: '()',
      },
      {
        name: 'True',
        type: '()',
      },
    ],
  },
  {
    type: 'struct',
    name: 'core::byte_array::ByteArray',
    members: [
      {
        name: 'data',
        type: 'core::array::Array::<core::bytes_31::bytes31>',
      },
      {
        name: 'pending_word',
        type: 'core::felt252',
      },
      {
        name: 'pending_word_len',
        type: 'core::integer::u32',
      },
    ],
  },
  {
    type: 'enum',
    name: 'spherre::types::FeesType',
    variants: [
      {
        name: 'PROPOSAL_FEE',
        type: '()',
      },
      {
        name: 'VOTING_FEE',
        type: '()',
      },
      {
        name: 'EXECUTION_FEE',
        type: '()',
      },
      {
        name: 'DEPLOYMENT_FEE',
        type: '()',
      },
    ],
  },
  {
    type: 'struct',
    name: 'core::integer::u256',
    members: [
      {
        name: 'low',
        type: 'core::integer::u128',
      },
      {
        name: 'high',
        type: 'core::integer::u128',
      },
    ],
  },
  {
    type: 'interface',
    name: 'spherre::interfaces::ispherre::ISpherre',
    items: [
      {
        type: 'function',
        name: 'grant_superadmin_role',
        inputs: [
          {
            name: 'account',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'grant_staff_role',
        inputs: [
          {
            name: 'account',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'revoke_superadmin_role',
        inputs: [
          {
            name: 'account',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'revoke_staff_role',
        inputs: [
          {
            name: 'account',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'has_staff_role',
        inputs: [
          {
            name: 'account',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [
          {
            type: 'core::bool',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'has_superadmin_role',
        inputs: [
          {
            name: 'account',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [
          {
            type: 'core::bool',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'pause',
        inputs: [],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'unpause',
        inputs: [],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'deploy_account',
        inputs: [
          {
            name: 'owner',
            type: 'core::starknet::contract_address::ContractAddress',
          },
          {
            name: 'name',
            type: 'core::byte_array::ByteArray',
          },
          {
            name: 'description',
            type: 'core::byte_array::ByteArray',
          },
          {
            name: 'members',
            type: 'core::array::Array::<core::starknet::contract_address::ContractAddress>',
          },
          {
            name: 'threshold',
            type: 'core::integer::u64',
          },
        ],
        outputs: [
          {
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'is_deployed_account',
        inputs: [
          {
            name: 'account',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [
          {
            type: 'core::bool',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'update_account_class_hash',
        inputs: [
          {
            name: 'new_class_hash',
            type: 'core::starknet::class_hash::ClassHash',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'get_account_class_hash',
        inputs: [],
        outputs: [
          {
            type: 'core::starknet::class_hash::ClassHash',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'upgrade',
        inputs: [
          {
            name: 'new_class_hash',
            type: 'core::starknet::class_hash::ClassHash',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'update_fee',
        inputs: [
          {
            name: 'fee_type',
            type: 'spherre::types::FeesType',
          },
          {
            name: 'amount',
            type: 'core::integer::u256',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'update_fee_token',
        inputs: [
          {
            name: 'token_address',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'get_fee',
        inputs: [
          {
            name: 'fee_type',
            type: 'spherre::types::FeesType',
          },
          {
            name: 'account',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [
          {
            type: 'core::integer::u256',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'get_fee_token',
        inputs: [],
        outputs: [
          {
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'is_fee_enabled',
        inputs: [
          {
            name: 'fee_type',
            type: 'spherre::types::FeesType',
          },
        ],
        outputs: [
          {
            type: 'core::bool',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'update_fee_collection_statistics',
        inputs: [
          {
            name: 'fee_type',
            type: 'spherre::types::FeesType',
          },
          {
            name: 'amount',
            type: 'core::integer::u256',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'get_fees_collected',
        inputs: [
          {
            name: 'fee_type',
            type: 'spherre::types::FeesType',
          },
          {
            name: 'account',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [
          {
            type: 'core::integer::u256',
          },
        ],
        state_mutability: 'view',
      },
    ],
  },
  {
    type: 'constructor',
    name: 'constructor',
    inputs: [
      {
        name: 'owner',
        type: 'core::starknet::contract_address::ContractAddress',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::spherre::Spherre::AccountDeployed',
    kind: 'struct',
    members: [
      {
        name: 'account_address',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
      {
        name: 'owner',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
      {
        name: 'name',
        type: 'core::byte_array::ByteArray',
        kind: 'data',
      },
      {
        name: 'description',
        type: 'core::byte_array::ByteArray',
        kind: 'data',
      },
      {
        name: 'members',
        type: 'core::array::Array::<core::starknet::contract_address::ContractAddress>',
        kind: 'data',
      },
      {
        name: 'threshold',
        type: 'core::integer::u64',
        kind: 'data',
      },
      {
        name: 'deployer',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
      {
        name: 'date_deployed',
        type: 'core::integer::u64',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::spherre::Spherre::AccountClassHashUpdated',
    kind: 'struct',
    members: [
      {
        name: 'old_class_hash',
        type: 'core::starknet::class_hash::ClassHash',
        kind: 'data',
      },
      {
        name: 'new_class_hash',
        type: 'core::starknet::class_hash::ClassHash',
        kind: 'data',
      },
      {
        name: 'caller',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::spherre::Spherre::FeeUpdated',
    kind: 'struct',
    members: [
      {
        name: 'fee_type',
        type: 'spherre::types::FeesType',
        kind: 'data',
      },
      {
        name: 'amount',
        type: 'core::integer::u256',
        kind: 'data',
      },
      {
        name: 'enabled',
        type: 'core::bool',
        kind: 'data',
      },
      {
        name: 'caller',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::spherre::Spherre::FeeTokenUpdated',
    kind: 'struct',
    members: [
      {
        name: 'old_token',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
      {
        name: 'new_token',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
      {
        name: 'caller',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::spherre::Spherre::FeeCollected',
    kind: 'struct',
    members: [
      {
        name: 'fee_type',
        type: 'spherre::types::FeesType',
        kind: 'data',
      },
      {
        name: 'fee_token',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
      {
        name: 'account',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
      {
        name: 'amount',
        type: 'core::integer::u256',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferred',
    kind: 'struct',
    members: [
      {
        name: 'previous_owner',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'key',
      },
      {
        name: 'new_owner',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'key',
      },
    ],
  },
  {
    type: 'event',
    name: 'openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferStarted',
    kind: 'struct',
    members: [
      {
        name: 'previous_owner',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'key',
      },
      {
        name: 'new_owner',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'key',
      },
    ],
  },
  {
    type: 'event',
    name: 'openzeppelin_access::ownable::ownable::OwnableComponent::Event',
    kind: 'enum',
    variants: [
      {
        name: 'OwnershipTransferred',
        type: 'openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferred',
        kind: 'nested',
      },
      {
        name: 'OwnershipTransferStarted',
        type: 'openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferStarted',
        kind: 'nested',
      },
    ],
  },
  {
    type: 'event',
    name: 'openzeppelin_security::pausable::PausableComponent::Paused',
    kind: 'struct',
    members: [
      {
        name: 'account',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'openzeppelin_security::pausable::PausableComponent::Unpaused',
    kind: 'struct',
    members: [
      {
        name: 'account',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'openzeppelin_security::pausable::PausableComponent::Event',
    kind: 'enum',
    variants: [
      {
        name: 'Paused',
        type: 'openzeppelin_security::pausable::PausableComponent::Paused',
        kind: 'nested',
      },
      {
        name: 'Unpaused',
        type: 'openzeppelin_security::pausable::PausableComponent::Unpaused',
        kind: 'nested',
      },
    ],
  },
  {
    type: 'event',
    name: 'openzeppelin_security::reentrancyguard::ReentrancyGuardComponent::Event',
    kind: 'enum',
    variants: [],
  },
  {
    type: 'event',
    name: 'openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleGranted',
    kind: 'struct',
    members: [
      {
        name: 'role',
        type: 'core::felt252',
        kind: 'data',
      },
      {
        name: 'account',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
      {
        name: 'sender',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleRevoked',
    kind: 'struct',
    members: [
      {
        name: 'role',
        type: 'core::felt252',
        kind: 'data',
      },
      {
        name: 'account',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
      {
        name: 'sender',
        type: 'core::starknet::contract_address::ContractAddress',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleAdminChanged',
    kind: 'struct',
    members: [
      {
        name: 'role',
        type: 'core::felt252',
        kind: 'data',
      },
      {
        name: 'previous_admin_role',
        type: 'core::felt252',
        kind: 'data',
      },
      {
        name: 'new_admin_role',
        type: 'core::felt252',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::Event',
    kind: 'enum',
    variants: [
      {
        name: 'RoleGranted',
        type: 'openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleGranted',
        kind: 'nested',
      },
      {
        name: 'RoleRevoked',
        type: 'openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleRevoked',
        kind: 'nested',
      },
      {
        name: 'RoleAdminChanged',
        type: 'openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleAdminChanged',
        kind: 'nested',
      },
    ],
  },
  {
    type: 'event',
    name: 'openzeppelin_introspection::src5::SRC5Component::Event',
    kind: 'enum',
    variants: [],
  },
  {
    type: 'event',
    name: 'openzeppelin_upgrades::upgradeable::UpgradeableComponent::Upgraded',
    kind: 'struct',
    members: [
      {
        name: 'class_hash',
        type: 'core::starknet::class_hash::ClassHash',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'openzeppelin_upgrades::upgradeable::UpgradeableComponent::Event',
    kind: 'enum',
    variants: [
      {
        name: 'Upgraded',
        type: 'openzeppelin_upgrades::upgradeable::UpgradeableComponent::Upgraded',
        kind: 'nested',
      },
    ],
  },
  {
    type: 'event',
    name: 'spherre::spherre::Spherre::Event',
    kind: 'enum',
    variants: [
      {
        name: 'AccountDeployed',
        type: 'spherre::spherre::Spherre::AccountDeployed',
        kind: 'nested',
      },
      {
        name: 'AccountClassHashUpdated',
        type: 'spherre::spherre::Spherre::AccountClassHashUpdated',
        kind: 'nested',
      },
      {
        name: 'FeeUpdated',
        type: 'spherre::spherre::Spherre::FeeUpdated',
        kind: 'nested',
      },
      {
        name: 'FeeTokenUpdated',
        type: 'spherre::spherre::Spherre::FeeTokenUpdated',
        kind: 'nested',
      },
      {
        name: 'FeeCollected',
        type: 'spherre::spherre::Spherre::FeeCollected',
        kind: 'nested',
      },
      {
        name: 'OwnableEvent',
        type: 'openzeppelin_access::ownable::ownable::OwnableComponent::Event',
        kind: 'flat',
      },
      {
        name: 'PausableEvent',
        type: 'openzeppelin_security::pausable::PausableComponent::Event',
        kind: 'flat',
      },
      {
        name: 'ReentrancyGuardEvent',
        type: 'openzeppelin_security::reentrancyguard::ReentrancyGuardComponent::Event',
        kind: 'flat',
      },
      {
        name: 'AccessControlEvent',
        type: 'openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::Event',
        kind: 'flat',
      },
      {
        name: 'SRC5Event',
        type: 'openzeppelin_introspection::src5::SRC5Component::Event',
        kind: 'flat',
      },
      {
        name: 'UpgradeableEvent',
        type: 'openzeppelin_upgrades::upgradeable::UpgradeableComponent::Event',
        kind: 'flat',
      },
    ],
  },
] as const

// Contract configurations
export const spherreAccountConfig: ContractConfig = {
  address: SPHERRE_CONTRACTS.SPHERRE_ACCOUNT,
  abi: SPHERRE_ACCOUNT_ABI,
}

export const spherreConfig: ContractConfig = {
  address: SPHERRE_CONTRACTS.SPHERRE,
  abi: SPHERRE_ABI,
}
