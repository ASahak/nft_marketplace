/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface CollectionFactoryInterface extends Interface {
  getFunction(nameOrSignature: "createCollection"): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "CollectionCreated"): EventFragment;

  encodeFunctionData(
    functionFragment: "createCollection",
    values: [string, string, string, AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "createCollection",
    data: BytesLike
  ): Result;
}

export namespace CollectionCreatedEvent {
  export type InputTuple = [
    collectionAddress: AddressLike,
    owner: AddressLike,
    name: string,
    symbol: string,
    description: string,
    royaltyReceiver: AddressLike,
    royaltyFee: BigNumberish
  ];
  export type OutputTuple = [
    collectionAddress: string,
    owner: string,
    name: string,
    symbol: string,
    description: string,
    royaltyReceiver: string,
    royaltyFee: bigint
  ];
  export interface OutputObject {
    collectionAddress: string;
    owner: string;
    name: string;
    symbol: string;
    description: string;
    royaltyReceiver: string;
    royaltyFee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface CollectionFactory extends BaseContract {
  connect(runner?: ContractRunner | null): CollectionFactory;
  waitForDeployment(): Promise<this>;

  interface: CollectionFactoryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  createCollection: TypedContractMethod<
    [
      name: string,
      symbol: string,
      description: string,
      royaltyReceiver: AddressLike,
      royaltyFee: BigNumberish
    ],
    [string],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createCollection"
  ): TypedContractMethod<
    [
      name: string,
      symbol: string,
      description: string,
      royaltyReceiver: AddressLike,
      royaltyFee: BigNumberish
    ],
    [string],
    "nonpayable"
  >;

  getEvent(
    key: "CollectionCreated"
  ): TypedContractEvent<
    CollectionCreatedEvent.InputTuple,
    CollectionCreatedEvent.OutputTuple,
    CollectionCreatedEvent.OutputObject
  >;

  filters: {
    "CollectionCreated(address,address,string,string,string,address,uint96)": TypedContractEvent<
      CollectionCreatedEvent.InputTuple,
      CollectionCreatedEvent.OutputTuple,
      CollectionCreatedEvent.OutputObject
    >;
    CollectionCreated: TypedContractEvent<
      CollectionCreatedEvent.InputTuple,
      CollectionCreatedEvent.OutputTuple,
      CollectionCreatedEvent.OutputObject
    >;
  };
}
