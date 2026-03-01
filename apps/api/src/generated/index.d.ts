
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model TeamMembership
 * 
 */
export type TeamMembership = $Result.DefaultSelection<Prisma.$TeamMembershipPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model Edit
 * 
 */
export type Edit = $Result.DefaultSelection<Prisma.$EditPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model SecurityEvent
 * 
 */
export type SecurityEvent = $Result.DefaultSelection<Prisma.$SecurityEventPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model UsageCounter
 * 
 */
export type UsageCounter = $Result.DefaultSelection<Prisma.$UsageCounterPayload>
/**
 * Model UsageEvent
 * 
 */
export type UsageEvent = $Result.DefaultSelection<Prisma.$UsageEventPayload>
/**
 * Model StripeCustomer
 * 
 */
export type StripeCustomer = $Result.DefaultSelection<Prisma.$StripeCustomerPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model WebhookEvent
 * 
 */
export type WebhookEvent = $Result.DefaultSelection<Prisma.$WebhookEventPayload>
/**
 * Model TelemetryEvent
 * 
 */
export type TelemetryEvent = $Result.DefaultSelection<Prisma.$TelemetryEventPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamMembership`: Exposes CRUD operations for the **TeamMembership** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamMemberships
    * const teamMemberships = await prisma.teamMembership.findMany()
    * ```
    */
  get teamMembership(): Prisma.TeamMembershipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.edit`: Exposes CRUD operations for the **Edit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Edits
    * const edits = await prisma.edit.findMany()
    * ```
    */
  get edit(): Prisma.EditDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.securityEvent`: Exposes CRUD operations for the **SecurityEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SecurityEvents
    * const securityEvents = await prisma.securityEvent.findMany()
    * ```
    */
  get securityEvent(): Prisma.SecurityEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usageCounter`: Exposes CRUD operations for the **UsageCounter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsageCounters
    * const usageCounters = await prisma.usageCounter.findMany()
    * ```
    */
  get usageCounter(): Prisma.UsageCounterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usageEvent`: Exposes CRUD operations for the **UsageEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsageEvents
    * const usageEvents = await prisma.usageEvent.findMany()
    * ```
    */
  get usageEvent(): Prisma.UsageEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stripeCustomer`: Exposes CRUD operations for the **StripeCustomer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StripeCustomers
    * const stripeCustomers = await prisma.stripeCustomer.findMany()
    * ```
    */
  get stripeCustomer(): Prisma.StripeCustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webhookEvent`: Exposes CRUD operations for the **WebhookEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebhookEvents
    * const webhookEvents = await prisma.webhookEvent.findMany()
    * ```
    */
  get webhookEvent(): Prisma.WebhookEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.telemetryEvent`: Exposes CRUD operations for the **TelemetryEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TelemetryEvents
    * const telemetryEvents = await prisma.telemetryEvent.findMany()
    * ```
    */
  get telemetryEvent(): Prisma.TelemetryEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Team: 'Team',
    TeamMembership: 'TeamMembership',
    Chat: 'Chat',
    Edit: 'Edit',
    AuditLog: 'AuditLog',
    SecurityEvent: 'SecurityEvent',
    RefreshToken: 'RefreshToken',
    UsageCounter: 'UsageCounter',
    UsageEvent: 'UsageEvent',
    StripeCustomer: 'StripeCustomer',
    Subscription: 'Subscription',
    WebhookEvent: 'WebhookEvent',
    TelemetryEvent: 'TelemetryEvent',
    VerificationToken: 'VerificationToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "team" | "teamMembership" | "chat" | "edit" | "auditLog" | "securityEvent" | "refreshToken" | "usageCounter" | "usageEvent" | "stripeCustomer" | "subscription" | "webhookEvent" | "telemetryEvent" | "verificationToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      TeamMembership: {
        payload: Prisma.$TeamMembershipPayload<ExtArgs>
        fields: Prisma.TeamMembershipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamMembershipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMembershipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamMembershipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMembershipPayload>
          }
          findFirst: {
            args: Prisma.TeamMembershipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMembershipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamMembershipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMembershipPayload>
          }
          findMany: {
            args: Prisma.TeamMembershipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMembershipPayload>[]
          }
          create: {
            args: Prisma.TeamMembershipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMembershipPayload>
          }
          createMany: {
            args: Prisma.TeamMembershipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamMembershipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMembershipPayload>[]
          }
          delete: {
            args: Prisma.TeamMembershipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMembershipPayload>
          }
          update: {
            args: Prisma.TeamMembershipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMembershipPayload>
          }
          deleteMany: {
            args: Prisma.TeamMembershipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamMembershipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamMembershipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMembershipPayload>[]
          }
          upsert: {
            args: Prisma.TeamMembershipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMembershipPayload>
          }
          aggregate: {
            args: Prisma.TeamMembershipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamMembership>
          }
          groupBy: {
            args: Prisma.TeamMembershipGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamMembershipGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamMembershipCountArgs<ExtArgs>
            result: $Utils.Optional<TeamMembershipCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      Edit: {
        payload: Prisma.$EditPayload<ExtArgs>
        fields: Prisma.EditFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EditFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EditFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditPayload>
          }
          findFirst: {
            args: Prisma.EditFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EditFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditPayload>
          }
          findMany: {
            args: Prisma.EditFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditPayload>[]
          }
          create: {
            args: Prisma.EditCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditPayload>
          }
          createMany: {
            args: Prisma.EditCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EditCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditPayload>[]
          }
          delete: {
            args: Prisma.EditDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditPayload>
          }
          update: {
            args: Prisma.EditUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditPayload>
          }
          deleteMany: {
            args: Prisma.EditDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EditUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EditUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditPayload>[]
          }
          upsert: {
            args: Prisma.EditUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditPayload>
          }
          aggregate: {
            args: Prisma.EditAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEdit>
          }
          groupBy: {
            args: Prisma.EditGroupByArgs<ExtArgs>
            result: $Utils.Optional<EditGroupByOutputType>[]
          }
          count: {
            args: Prisma.EditCountArgs<ExtArgs>
            result: $Utils.Optional<EditCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      SecurityEvent: {
        payload: Prisma.$SecurityEventPayload<ExtArgs>
        fields: Prisma.SecurityEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecurityEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecurityEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>
          }
          findFirst: {
            args: Prisma.SecurityEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecurityEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>
          }
          findMany: {
            args: Prisma.SecurityEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>[]
          }
          create: {
            args: Prisma.SecurityEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>
          }
          createMany: {
            args: Prisma.SecurityEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecurityEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>[]
          }
          delete: {
            args: Prisma.SecurityEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>
          }
          update: {
            args: Prisma.SecurityEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>
          }
          deleteMany: {
            args: Prisma.SecurityEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecurityEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SecurityEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>[]
          }
          upsert: {
            args: Prisma.SecurityEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityEventPayload>
          }
          aggregate: {
            args: Prisma.SecurityEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecurityEvent>
          }
          groupBy: {
            args: Prisma.SecurityEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecurityEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecurityEventCountArgs<ExtArgs>
            result: $Utils.Optional<SecurityEventCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      UsageCounter: {
        payload: Prisma.$UsageCounterPayload<ExtArgs>
        fields: Prisma.UsageCounterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsageCounterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageCounterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsageCounterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageCounterPayload>
          }
          findFirst: {
            args: Prisma.UsageCounterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageCounterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsageCounterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageCounterPayload>
          }
          findMany: {
            args: Prisma.UsageCounterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageCounterPayload>[]
          }
          create: {
            args: Prisma.UsageCounterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageCounterPayload>
          }
          createMany: {
            args: Prisma.UsageCounterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsageCounterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageCounterPayload>[]
          }
          delete: {
            args: Prisma.UsageCounterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageCounterPayload>
          }
          update: {
            args: Prisma.UsageCounterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageCounterPayload>
          }
          deleteMany: {
            args: Prisma.UsageCounterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsageCounterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsageCounterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageCounterPayload>[]
          }
          upsert: {
            args: Prisma.UsageCounterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageCounterPayload>
          }
          aggregate: {
            args: Prisma.UsageCounterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsageCounter>
          }
          groupBy: {
            args: Prisma.UsageCounterGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsageCounterGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsageCounterCountArgs<ExtArgs>
            result: $Utils.Optional<UsageCounterCountAggregateOutputType> | number
          }
        }
      }
      UsageEvent: {
        payload: Prisma.$UsageEventPayload<ExtArgs>
        fields: Prisma.UsageEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsageEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsageEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageEventPayload>
          }
          findFirst: {
            args: Prisma.UsageEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsageEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageEventPayload>
          }
          findMany: {
            args: Prisma.UsageEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageEventPayload>[]
          }
          create: {
            args: Prisma.UsageEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageEventPayload>
          }
          createMany: {
            args: Prisma.UsageEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsageEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageEventPayload>[]
          }
          delete: {
            args: Prisma.UsageEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageEventPayload>
          }
          update: {
            args: Prisma.UsageEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageEventPayload>
          }
          deleteMany: {
            args: Prisma.UsageEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsageEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsageEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageEventPayload>[]
          }
          upsert: {
            args: Prisma.UsageEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageEventPayload>
          }
          aggregate: {
            args: Prisma.UsageEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsageEvent>
          }
          groupBy: {
            args: Prisma.UsageEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsageEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsageEventCountArgs<ExtArgs>
            result: $Utils.Optional<UsageEventCountAggregateOutputType> | number
          }
        }
      }
      StripeCustomer: {
        payload: Prisma.$StripeCustomerPayload<ExtArgs>
        fields: Prisma.StripeCustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StripeCustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeCustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StripeCustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeCustomerPayload>
          }
          findFirst: {
            args: Prisma.StripeCustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeCustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StripeCustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeCustomerPayload>
          }
          findMany: {
            args: Prisma.StripeCustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeCustomerPayload>[]
          }
          create: {
            args: Prisma.StripeCustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeCustomerPayload>
          }
          createMany: {
            args: Prisma.StripeCustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StripeCustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeCustomerPayload>[]
          }
          delete: {
            args: Prisma.StripeCustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeCustomerPayload>
          }
          update: {
            args: Prisma.StripeCustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeCustomerPayload>
          }
          deleteMany: {
            args: Prisma.StripeCustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StripeCustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StripeCustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeCustomerPayload>[]
          }
          upsert: {
            args: Prisma.StripeCustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeCustomerPayload>
          }
          aggregate: {
            args: Prisma.StripeCustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStripeCustomer>
          }
          groupBy: {
            args: Prisma.StripeCustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<StripeCustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.StripeCustomerCountArgs<ExtArgs>
            result: $Utils.Optional<StripeCustomerCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      WebhookEvent: {
        payload: Prisma.$WebhookEventPayload<ExtArgs>
        fields: Prisma.WebhookEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          findFirst: {
            args: Prisma.WebhookEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          findMany: {
            args: Prisma.WebhookEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>[]
          }
          create: {
            args: Prisma.WebhookEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          createMany: {
            args: Prisma.WebhookEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebhookEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>[]
          }
          delete: {
            args: Prisma.WebhookEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          update: {
            args: Prisma.WebhookEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          deleteMany: {
            args: Prisma.WebhookEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebhookEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>[]
          }
          upsert: {
            args: Prisma.WebhookEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEventPayload>
          }
          aggregate: {
            args: Prisma.WebhookEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhookEvent>
          }
          groupBy: {
            args: Prisma.WebhookEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookEventCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookEventCountAggregateOutputType> | number
          }
        }
      }
      TelemetryEvent: {
        payload: Prisma.$TelemetryEventPayload<ExtArgs>
        fields: Prisma.TelemetryEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TelemetryEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TelemetryEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryEventPayload>
          }
          findFirst: {
            args: Prisma.TelemetryEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TelemetryEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryEventPayload>
          }
          findMany: {
            args: Prisma.TelemetryEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryEventPayload>[]
          }
          create: {
            args: Prisma.TelemetryEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryEventPayload>
          }
          createMany: {
            args: Prisma.TelemetryEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TelemetryEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryEventPayload>[]
          }
          delete: {
            args: Prisma.TelemetryEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryEventPayload>
          }
          update: {
            args: Prisma.TelemetryEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryEventPayload>
          }
          deleteMany: {
            args: Prisma.TelemetryEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TelemetryEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TelemetryEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryEventPayload>[]
          }
          upsert: {
            args: Prisma.TelemetryEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryEventPayload>
          }
          aggregate: {
            args: Prisma.TelemetryEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTelemetryEvent>
          }
          groupBy: {
            args: Prisma.TelemetryEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<TelemetryEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.TelemetryEventCountArgs<ExtArgs>
            result: $Utils.Optional<TelemetryEventCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    team?: TeamOmit
    teamMembership?: TeamMembershipOmit
    chat?: ChatOmit
    edit?: EditOmit
    auditLog?: AuditLogOmit
    securityEvent?: SecurityEventOmit
    refreshToken?: RefreshTokenOmit
    usageCounter?: UsageCounterOmit
    usageEvent?: UsageEventOmit
    stripeCustomer?: StripeCustomerOmit
    subscription?: SubscriptionOmit
    webhookEvent?: WebhookEventOmit
    telemetryEvent?: TelemetryEventOmit
    verificationToken?: VerificationTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    chats: number
    edits: number
    memberships: number
    auditLogs: number
    securityEvents: number
    telemetryEvents: number
    refreshTokens: number
    usageCounters: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | UserCountOutputTypeCountChatsArgs
    edits?: boolean | UserCountOutputTypeCountEditsArgs
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
    securityEvents?: boolean | UserCountOutputTypeCountSecurityEventsArgs
    telemetryEvents?: boolean | UserCountOutputTypeCountTelemetryEventsArgs
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
    usageCounters?: boolean | UserCountOutputTypeCountUsageCountersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EditWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMembershipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSecurityEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecurityEventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTelemetryEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelemetryEventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUsageCountersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageCounterWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    members: number
    auditLogs: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | TeamCountOutputTypeCountMembersArgs
    auditLogs?: boolean | TeamCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMembershipWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    plan: string | null
    stripeId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    plan: string | null
    stripeId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    updatedAt: number
    plan: number
    stripeId: number
    entitlements: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    plan?: true
    stripeId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    plan?: true
    stripeId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    plan?: true
    stripeId?: true
    entitlements?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    createdAt: Date
    updatedAt: Date
    plan: string
    stripeId: string | null
    entitlements: JsonValue | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean
    stripeId?: boolean
    entitlements?: boolean
    chats?: boolean | User$chatsArgs<ExtArgs>
    edits?: boolean | User$editsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    securityEvents?: boolean | User$securityEventsArgs<ExtArgs>
    telemetryEvents?: boolean | User$telemetryEventsArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    usageCounters?: boolean | User$usageCountersArgs<ExtArgs>
    stripeCustomer?: boolean | User$stripeCustomerArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean
    stripeId?: boolean
    entitlements?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean
    stripeId?: boolean
    entitlements?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean
    stripeId?: boolean
    entitlements?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "createdAt" | "updatedAt" | "plan" | "stripeId" | "entitlements", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | User$chatsArgs<ExtArgs>
    edits?: boolean | User$editsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    securityEvents?: boolean | User$securityEventsArgs<ExtArgs>
    telemetryEvents?: boolean | User$telemetryEventsArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    usageCounters?: boolean | User$usageCountersArgs<ExtArgs>
    stripeCustomer?: boolean | User$stripeCustomerArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      chats: Prisma.$ChatPayload<ExtArgs>[]
      edits: Prisma.$EditPayload<ExtArgs>[]
      memberships: Prisma.$TeamMembershipPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      securityEvents: Prisma.$SecurityEventPayload<ExtArgs>[]
      telemetryEvents: Prisma.$TelemetryEventPayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      usageCounters: Prisma.$UsageCounterPayload<ExtArgs>[]
      stripeCustomer: Prisma.$StripeCustomerPayload<ExtArgs> | null
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      createdAt: Date
      updatedAt: Date
      plan: string
      stripeId: string | null
      entitlements: Prisma.JsonValue | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chats<T extends User$chatsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    edits<T extends User$editsArgs<ExtArgs> = {}>(args?: Subset<T, User$editsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    securityEvents<T extends User$securityEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$securityEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    telemetryEvents<T extends User$telemetryEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$telemetryEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelemetryEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usageCounters<T extends User$usageCountersArgs<ExtArgs> = {}>(args?: Subset<T, User$usageCountersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageCounterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stripeCustomer<T extends User$stripeCustomerArgs<ExtArgs> = {}>(args?: Subset<T, User$stripeCustomerArgs<ExtArgs>>): Prisma__StripeCustomerClient<$Result.GetResult<Prisma.$StripeCustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subscription<T extends User$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly plan: FieldRef<"User", 'String'>
    readonly stripeId: FieldRef<"User", 'String'>
    readonly entitlements: FieldRef<"User", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.chats
   */
  export type User$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.edits
   */
  export type User$editsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edit
     */
    select?: EditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edit
     */
    omit?: EditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditInclude<ExtArgs> | null
    where?: EditWhereInput
    orderBy?: EditOrderByWithRelationInput | EditOrderByWithRelationInput[]
    cursor?: EditWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EditScalarFieldEnum | EditScalarFieldEnum[]
  }

  /**
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembership
     */
    select?: TeamMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembership
     */
    omit?: TeamMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembershipInclude<ExtArgs> | null
    where?: TeamMembershipWhereInput
    orderBy?: TeamMembershipOrderByWithRelationInput | TeamMembershipOrderByWithRelationInput[]
    cursor?: TeamMembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMembershipScalarFieldEnum | TeamMembershipScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User.securityEvents
   */
  export type User$securityEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    where?: SecurityEventWhereInput
    orderBy?: SecurityEventOrderByWithRelationInput | SecurityEventOrderByWithRelationInput[]
    cursor?: SecurityEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SecurityEventScalarFieldEnum | SecurityEventScalarFieldEnum[]
  }

  /**
   * User.telemetryEvents
   */
  export type User$telemetryEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryEvent
     */
    select?: TelemetryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryEvent
     */
    omit?: TelemetryEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryEventInclude<ExtArgs> | null
    where?: TelemetryEventWhereInput
    orderBy?: TelemetryEventOrderByWithRelationInput | TelemetryEventOrderByWithRelationInput[]
    cursor?: TelemetryEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TelemetryEventScalarFieldEnum | TelemetryEventScalarFieldEnum[]
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User.usageCounters
   */
  export type User$usageCountersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageCounter
     */
    select?: UsageCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageCounter
     */
    omit?: UsageCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageCounterInclude<ExtArgs> | null
    where?: UsageCounterWhereInput
    orderBy?: UsageCounterOrderByWithRelationInput | UsageCounterOrderByWithRelationInput[]
    cursor?: UsageCounterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsageCounterScalarFieldEnum | UsageCounterScalarFieldEnum[]
  }

  /**
   * User.stripeCustomer
   */
  export type User$stripeCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeCustomer
     */
    select?: StripeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeCustomer
     */
    omit?: StripeCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripeCustomerInclude<ExtArgs> | null
    where?: StripeCustomerWhereInput
  }

  /**
   * User.subscription
   */
  export type User$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    plan: string | null
    stripeId: string | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    plan: string | null
    stripeId: string | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    plan: number
    stripeId: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    plan?: true
    stripeId?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    plan?: true
    stripeId?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    plan?: true
    stripeId?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    plan: string
    stripeId: string | null
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean
    stripeId?: boolean
    members?: boolean | Team$membersArgs<ExtArgs>
    auditLogs?: boolean | Team$auditLogsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean
    stripeId?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean
    stripeId?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean
    stripeId?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "plan" | "stripeId", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Team$membersArgs<ExtArgs>
    auditLogs?: boolean | Team$auditLogsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      members: Prisma.$TeamMembershipPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      plan: string
      stripeId: string | null
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Team$membersArgs<ExtArgs> = {}>(args?: Subset<T, Team$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends Team$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Team$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly createdAt: FieldRef<"Team", 'DateTime'>
    readonly updatedAt: FieldRef<"Team", 'DateTime'>
    readonly plan: FieldRef<"Team", 'String'>
    readonly stripeId: FieldRef<"Team", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.members
   */
  export type Team$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembership
     */
    select?: TeamMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembership
     */
    omit?: TeamMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembershipInclude<ExtArgs> | null
    where?: TeamMembershipWhereInput
    orderBy?: TeamMembershipOrderByWithRelationInput | TeamMembershipOrderByWithRelationInput[]
    cursor?: TeamMembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMembershipScalarFieldEnum | TeamMembershipScalarFieldEnum[]
  }

  /**
   * Team.auditLogs
   */
  export type Team$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model TeamMembership
   */

  export type AggregateTeamMembership = {
    _count: TeamMembershipCountAggregateOutputType | null
    _min: TeamMembershipMinAggregateOutputType | null
    _max: TeamMembershipMaxAggregateOutputType | null
  }

  export type TeamMembershipMinAggregateOutputType = {
    id: string | null
    role: string | null
    userId: string | null
    teamId: string | null
    createdAt: Date | null
  }

  export type TeamMembershipMaxAggregateOutputType = {
    id: string | null
    role: string | null
    userId: string | null
    teamId: string | null
    createdAt: Date | null
  }

  export type TeamMembershipCountAggregateOutputType = {
    id: number
    role: number
    userId: number
    teamId: number
    createdAt: number
    _all: number
  }


  export type TeamMembershipMinAggregateInputType = {
    id?: true
    role?: true
    userId?: true
    teamId?: true
    createdAt?: true
  }

  export type TeamMembershipMaxAggregateInputType = {
    id?: true
    role?: true
    userId?: true
    teamId?: true
    createdAt?: true
  }

  export type TeamMembershipCountAggregateInputType = {
    id?: true
    role?: true
    userId?: true
    teamId?: true
    createdAt?: true
    _all?: true
  }

  export type TeamMembershipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMembership to aggregate.
     */
    where?: TeamMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMemberships to fetch.
     */
    orderBy?: TeamMembershipOrderByWithRelationInput | TeamMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamMemberships
    **/
    _count?: true | TeamMembershipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMembershipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMembershipMaxAggregateInputType
  }

  export type GetTeamMembershipAggregateType<T extends TeamMembershipAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamMembership]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamMembership[P]>
      : GetScalarType<T[P], AggregateTeamMembership[P]>
  }




  export type TeamMembershipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMembershipWhereInput
    orderBy?: TeamMembershipOrderByWithAggregationInput | TeamMembershipOrderByWithAggregationInput[]
    by: TeamMembershipScalarFieldEnum[] | TeamMembershipScalarFieldEnum
    having?: TeamMembershipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamMembershipCountAggregateInputType | true
    _min?: TeamMembershipMinAggregateInputType
    _max?: TeamMembershipMaxAggregateInputType
  }

  export type TeamMembershipGroupByOutputType = {
    id: string
    role: string
    userId: string
    teamId: string
    createdAt: Date
    _count: TeamMembershipCountAggregateOutputType | null
    _min: TeamMembershipMinAggregateOutputType | null
    _max: TeamMembershipMaxAggregateOutputType | null
  }

  type GetTeamMembershipGroupByPayload<T extends TeamMembershipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamMembershipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamMembershipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamMembershipGroupByOutputType[P]>
            : GetScalarType<T[P], TeamMembershipGroupByOutputType[P]>
        }
      >
    >


  export type TeamMembershipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    userId?: boolean
    teamId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMembership"]>

  export type TeamMembershipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    userId?: boolean
    teamId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMembership"]>

  export type TeamMembershipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    userId?: boolean
    teamId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMembership"]>

  export type TeamMembershipSelectScalar = {
    id?: boolean
    role?: boolean
    userId?: boolean
    teamId?: boolean
    createdAt?: boolean
  }

  export type TeamMembershipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "userId" | "teamId" | "createdAt", ExtArgs["result"]["teamMembership"]>
  export type TeamMembershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type TeamMembershipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type TeamMembershipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $TeamMembershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamMembership"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: string
      userId: string
      teamId: string
      createdAt: Date
    }, ExtArgs["result"]["teamMembership"]>
    composites: {}
  }

  type TeamMembershipGetPayload<S extends boolean | null | undefined | TeamMembershipDefaultArgs> = $Result.GetResult<Prisma.$TeamMembershipPayload, S>

  type TeamMembershipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamMembershipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamMembershipCountAggregateInputType | true
    }

  export interface TeamMembershipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamMembership'], meta: { name: 'TeamMembership' } }
    /**
     * Find zero or one TeamMembership that matches the filter.
     * @param {TeamMembershipFindUniqueArgs} args - Arguments to find a TeamMembership
     * @example
     * // Get one TeamMembership
     * const teamMembership = await prisma.teamMembership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamMembershipFindUniqueArgs>(args: SelectSubset<T, TeamMembershipFindUniqueArgs<ExtArgs>>): Prisma__TeamMembershipClient<$Result.GetResult<Prisma.$TeamMembershipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamMembership that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamMembershipFindUniqueOrThrowArgs} args - Arguments to find a TeamMembership
     * @example
     * // Get one TeamMembership
     * const teamMembership = await prisma.teamMembership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamMembershipFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamMembershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamMembershipClient<$Result.GetResult<Prisma.$TeamMembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamMembership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMembershipFindFirstArgs} args - Arguments to find a TeamMembership
     * @example
     * // Get one TeamMembership
     * const teamMembership = await prisma.teamMembership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamMembershipFindFirstArgs>(args?: SelectSubset<T, TeamMembershipFindFirstArgs<ExtArgs>>): Prisma__TeamMembershipClient<$Result.GetResult<Prisma.$TeamMembershipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamMembership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMembershipFindFirstOrThrowArgs} args - Arguments to find a TeamMembership
     * @example
     * // Get one TeamMembership
     * const teamMembership = await prisma.teamMembership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamMembershipFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamMembershipFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamMembershipClient<$Result.GetResult<Prisma.$TeamMembershipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamMemberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMembershipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamMemberships
     * const teamMemberships = await prisma.teamMembership.findMany()
     * 
     * // Get first 10 TeamMemberships
     * const teamMemberships = await prisma.teamMembership.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamMembershipWithIdOnly = await prisma.teamMembership.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamMembershipFindManyArgs>(args?: SelectSubset<T, TeamMembershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamMembership.
     * @param {TeamMembershipCreateArgs} args - Arguments to create a TeamMembership.
     * @example
     * // Create one TeamMembership
     * const TeamMembership = await prisma.teamMembership.create({
     *   data: {
     *     // ... data to create a TeamMembership
     *   }
     * })
     * 
     */
    create<T extends TeamMembershipCreateArgs>(args: SelectSubset<T, TeamMembershipCreateArgs<ExtArgs>>): Prisma__TeamMembershipClient<$Result.GetResult<Prisma.$TeamMembershipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamMemberships.
     * @param {TeamMembershipCreateManyArgs} args - Arguments to create many TeamMemberships.
     * @example
     * // Create many TeamMemberships
     * const teamMembership = await prisma.teamMembership.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamMembershipCreateManyArgs>(args?: SelectSubset<T, TeamMembershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamMemberships and returns the data saved in the database.
     * @param {TeamMembershipCreateManyAndReturnArgs} args - Arguments to create many TeamMemberships.
     * @example
     * // Create many TeamMemberships
     * const teamMembership = await prisma.teamMembership.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamMemberships and only return the `id`
     * const teamMembershipWithIdOnly = await prisma.teamMembership.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamMembershipCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamMembershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMembershipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamMembership.
     * @param {TeamMembershipDeleteArgs} args - Arguments to delete one TeamMembership.
     * @example
     * // Delete one TeamMembership
     * const TeamMembership = await prisma.teamMembership.delete({
     *   where: {
     *     // ... filter to delete one TeamMembership
     *   }
     * })
     * 
     */
    delete<T extends TeamMembershipDeleteArgs>(args: SelectSubset<T, TeamMembershipDeleteArgs<ExtArgs>>): Prisma__TeamMembershipClient<$Result.GetResult<Prisma.$TeamMembershipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamMembership.
     * @param {TeamMembershipUpdateArgs} args - Arguments to update one TeamMembership.
     * @example
     * // Update one TeamMembership
     * const teamMembership = await prisma.teamMembership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamMembershipUpdateArgs>(args: SelectSubset<T, TeamMembershipUpdateArgs<ExtArgs>>): Prisma__TeamMembershipClient<$Result.GetResult<Prisma.$TeamMembershipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamMemberships.
     * @param {TeamMembershipDeleteManyArgs} args - Arguments to filter TeamMemberships to delete.
     * @example
     * // Delete a few TeamMemberships
     * const { count } = await prisma.teamMembership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamMembershipDeleteManyArgs>(args?: SelectSubset<T, TeamMembershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMemberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMembershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamMemberships
     * const teamMembership = await prisma.teamMembership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamMembershipUpdateManyArgs>(args: SelectSubset<T, TeamMembershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMemberships and returns the data updated in the database.
     * @param {TeamMembershipUpdateManyAndReturnArgs} args - Arguments to update many TeamMemberships.
     * @example
     * // Update many TeamMemberships
     * const teamMembership = await prisma.teamMembership.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamMemberships and only return the `id`
     * const teamMembershipWithIdOnly = await prisma.teamMembership.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamMembershipUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamMembershipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMembershipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamMembership.
     * @param {TeamMembershipUpsertArgs} args - Arguments to update or create a TeamMembership.
     * @example
     * // Update or create a TeamMembership
     * const teamMembership = await prisma.teamMembership.upsert({
     *   create: {
     *     // ... data to create a TeamMembership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamMembership we want to update
     *   }
     * })
     */
    upsert<T extends TeamMembershipUpsertArgs>(args: SelectSubset<T, TeamMembershipUpsertArgs<ExtArgs>>): Prisma__TeamMembershipClient<$Result.GetResult<Prisma.$TeamMembershipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamMemberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMembershipCountArgs} args - Arguments to filter TeamMemberships to count.
     * @example
     * // Count the number of TeamMemberships
     * const count = await prisma.teamMembership.count({
     *   where: {
     *     // ... the filter for the TeamMemberships we want to count
     *   }
     * })
    **/
    count<T extends TeamMembershipCountArgs>(
      args?: Subset<T, TeamMembershipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamMembershipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamMembership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMembershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamMembershipAggregateArgs>(args: Subset<T, TeamMembershipAggregateArgs>): Prisma.PrismaPromise<GetTeamMembershipAggregateType<T>>

    /**
     * Group by TeamMembership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMembershipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamMembershipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamMembershipGroupByArgs['orderBy'] }
        : { orderBy?: TeamMembershipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamMembershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamMembershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamMembership model
   */
  readonly fields: TeamMembershipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamMembership.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamMembershipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeamMembership model
   */
  interface TeamMembershipFieldRefs {
    readonly id: FieldRef<"TeamMembership", 'String'>
    readonly role: FieldRef<"TeamMembership", 'String'>
    readonly userId: FieldRef<"TeamMembership", 'String'>
    readonly teamId: FieldRef<"TeamMembership", 'String'>
    readonly createdAt: FieldRef<"TeamMembership", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamMembership findUnique
   */
  export type TeamMembershipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembership
     */
    select?: TeamMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembership
     */
    omit?: TeamMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembershipInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembership to fetch.
     */
    where: TeamMembershipWhereUniqueInput
  }

  /**
   * TeamMembership findUniqueOrThrow
   */
  export type TeamMembershipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembership
     */
    select?: TeamMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembership
     */
    omit?: TeamMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembershipInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembership to fetch.
     */
    where: TeamMembershipWhereUniqueInput
  }

  /**
   * TeamMembership findFirst
   */
  export type TeamMembershipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembership
     */
    select?: TeamMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembership
     */
    omit?: TeamMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembershipInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembership to fetch.
     */
    where?: TeamMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMemberships to fetch.
     */
    orderBy?: TeamMembershipOrderByWithRelationInput | TeamMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMemberships.
     */
    cursor?: TeamMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMemberships.
     */
    distinct?: TeamMembershipScalarFieldEnum | TeamMembershipScalarFieldEnum[]
  }

  /**
   * TeamMembership findFirstOrThrow
   */
  export type TeamMembershipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembership
     */
    select?: TeamMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembership
     */
    omit?: TeamMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembershipInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembership to fetch.
     */
    where?: TeamMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMemberships to fetch.
     */
    orderBy?: TeamMembershipOrderByWithRelationInput | TeamMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMemberships.
     */
    cursor?: TeamMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMemberships.
     */
    distinct?: TeamMembershipScalarFieldEnum | TeamMembershipScalarFieldEnum[]
  }

  /**
   * TeamMembership findMany
   */
  export type TeamMembershipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembership
     */
    select?: TeamMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembership
     */
    omit?: TeamMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembershipInclude<ExtArgs> | null
    /**
     * Filter, which TeamMemberships to fetch.
     */
    where?: TeamMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMemberships to fetch.
     */
    orderBy?: TeamMembershipOrderByWithRelationInput | TeamMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamMemberships.
     */
    cursor?: TeamMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMemberships.
     */
    skip?: number
    distinct?: TeamMembershipScalarFieldEnum | TeamMembershipScalarFieldEnum[]
  }

  /**
   * TeamMembership create
   */
  export type TeamMembershipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembership
     */
    select?: TeamMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembership
     */
    omit?: TeamMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembershipInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamMembership.
     */
    data: XOR<TeamMembershipCreateInput, TeamMembershipUncheckedCreateInput>
  }

  /**
   * TeamMembership createMany
   */
  export type TeamMembershipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamMemberships.
     */
    data: TeamMembershipCreateManyInput | TeamMembershipCreateManyInput[]
  }

  /**
   * TeamMembership createManyAndReturn
   */
  export type TeamMembershipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembership
     */
    select?: TeamMembershipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembership
     */
    omit?: TeamMembershipOmit<ExtArgs> | null
    /**
     * The data used to create many TeamMemberships.
     */
    data: TeamMembershipCreateManyInput | TeamMembershipCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembershipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamMembership update
   */
  export type TeamMembershipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembership
     */
    select?: TeamMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembership
     */
    omit?: TeamMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembershipInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamMembership.
     */
    data: XOR<TeamMembershipUpdateInput, TeamMembershipUncheckedUpdateInput>
    /**
     * Choose, which TeamMembership to update.
     */
    where: TeamMembershipWhereUniqueInput
  }

  /**
   * TeamMembership updateMany
   */
  export type TeamMembershipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamMemberships.
     */
    data: XOR<TeamMembershipUpdateManyMutationInput, TeamMembershipUncheckedUpdateManyInput>
    /**
     * Filter which TeamMemberships to update
     */
    where?: TeamMembershipWhereInput
    /**
     * Limit how many TeamMemberships to update.
     */
    limit?: number
  }

  /**
   * TeamMembership updateManyAndReturn
   */
  export type TeamMembershipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembership
     */
    select?: TeamMembershipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembership
     */
    omit?: TeamMembershipOmit<ExtArgs> | null
    /**
     * The data used to update TeamMemberships.
     */
    data: XOR<TeamMembershipUpdateManyMutationInput, TeamMembershipUncheckedUpdateManyInput>
    /**
     * Filter which TeamMemberships to update
     */
    where?: TeamMembershipWhereInput
    /**
     * Limit how many TeamMemberships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembershipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamMembership upsert
   */
  export type TeamMembershipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembership
     */
    select?: TeamMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembership
     */
    omit?: TeamMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembershipInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamMembership to update in case it exists.
     */
    where: TeamMembershipWhereUniqueInput
    /**
     * In case the TeamMembership found by the `where` argument doesn't exist, create a new TeamMembership with this data.
     */
    create: XOR<TeamMembershipCreateInput, TeamMembershipUncheckedCreateInput>
    /**
     * In case the TeamMembership was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamMembershipUpdateInput, TeamMembershipUncheckedUpdateInput>
  }

  /**
   * TeamMembership delete
   */
  export type TeamMembershipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembership
     */
    select?: TeamMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembership
     */
    omit?: TeamMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembershipInclude<ExtArgs> | null
    /**
     * Filter which TeamMembership to delete.
     */
    where: TeamMembershipWhereUniqueInput
  }

  /**
   * TeamMembership deleteMany
   */
  export type TeamMembershipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMemberships to delete
     */
    where?: TeamMembershipWhereInput
    /**
     * Limit how many TeamMemberships to delete.
     */
    limit?: number
  }

  /**
   * TeamMembership without action
   */
  export type TeamMembershipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembership
     */
    select?: TeamMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembership
     */
    omit?: TeamMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembershipInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatAvgAggregateOutputType = {
    tokens: number | null
  }

  export type ChatSumAggregateOutputType = {
    tokens: number | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
    userId: string | null
    prompt: string | null
    response: string | null
    model: string | null
    tokens: number | null
    createdAt: Date | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    prompt: string | null
    response: string | null
    model: string | null
    tokens: number | null
    createdAt: Date | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    userId: number
    prompt: number
    response: number
    model: number
    tokens: number
    createdAt: number
    _all: number
  }


  export type ChatAvgAggregateInputType = {
    tokens?: true
  }

  export type ChatSumAggregateInputType = {
    tokens?: true
  }

  export type ChatMinAggregateInputType = {
    id?: true
    userId?: true
    prompt?: true
    response?: true
    model?: true
    tokens?: true
    createdAt?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    userId?: true
    prompt?: true
    response?: true
    model?: true
    tokens?: true
    createdAt?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    userId?: true
    prompt?: true
    response?: true
    model?: true
    tokens?: true
    createdAt?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _avg?: ChatAvgAggregateInputType
    _sum?: ChatSumAggregateInputType
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: string
    userId: string
    prompt: string
    response: string | null
    model: string | null
    tokens: number | null
    createdAt: Date
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    prompt?: boolean
    response?: boolean
    model?: boolean
    tokens?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    prompt?: boolean
    response?: boolean
    model?: boolean
    tokens?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    prompt?: boolean
    response?: boolean
    model?: boolean
    tokens?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    userId?: boolean
    prompt?: boolean
    response?: boolean
    model?: boolean
    tokens?: boolean
    createdAt?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "prompt" | "response" | "model" | "tokens" | "createdAt", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      prompt: string
      response: string | null
      model: string | null
      tokens: number | null
      createdAt: Date
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'String'>
    readonly userId: FieldRef<"Chat", 'String'>
    readonly prompt: FieldRef<"Chat", 'String'>
    readonly response: FieldRef<"Chat", 'String'>
    readonly model: FieldRef<"Chat", 'String'>
    readonly tokens: FieldRef<"Chat", 'Int'>
    readonly createdAt: FieldRef<"Chat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model Edit
   */

  export type AggregateEdit = {
    _count: EditCountAggregateOutputType | null
    _min: EditMinAggregateOutputType | null
    _max: EditMaxAggregateOutputType | null
  }

  export type EditMinAggregateOutputType = {
    id: string | null
    userId: string | null
    instruction: string | null
    fileContent: string | null
    diff: string | null
    language: string | null
    createdAt: Date | null
  }

  export type EditMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    instruction: string | null
    fileContent: string | null
    diff: string | null
    language: string | null
    createdAt: Date | null
  }

  export type EditCountAggregateOutputType = {
    id: number
    userId: number
    instruction: number
    fileContent: number
    diff: number
    language: number
    createdAt: number
    _all: number
  }


  export type EditMinAggregateInputType = {
    id?: true
    userId?: true
    instruction?: true
    fileContent?: true
    diff?: true
    language?: true
    createdAt?: true
  }

  export type EditMaxAggregateInputType = {
    id?: true
    userId?: true
    instruction?: true
    fileContent?: true
    diff?: true
    language?: true
    createdAt?: true
  }

  export type EditCountAggregateInputType = {
    id?: true
    userId?: true
    instruction?: true
    fileContent?: true
    diff?: true
    language?: true
    createdAt?: true
    _all?: true
  }

  export type EditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Edit to aggregate.
     */
    where?: EditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Edits to fetch.
     */
    orderBy?: EditOrderByWithRelationInput | EditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Edits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Edits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Edits
    **/
    _count?: true | EditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EditMaxAggregateInputType
  }

  export type GetEditAggregateType<T extends EditAggregateArgs> = {
        [P in keyof T & keyof AggregateEdit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEdit[P]>
      : GetScalarType<T[P], AggregateEdit[P]>
  }




  export type EditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EditWhereInput
    orderBy?: EditOrderByWithAggregationInput | EditOrderByWithAggregationInput[]
    by: EditScalarFieldEnum[] | EditScalarFieldEnum
    having?: EditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EditCountAggregateInputType | true
    _min?: EditMinAggregateInputType
    _max?: EditMaxAggregateInputType
  }

  export type EditGroupByOutputType = {
    id: string
    userId: string
    instruction: string
    fileContent: string
    diff: string | null
    language: string | null
    createdAt: Date
    _count: EditCountAggregateOutputType | null
    _min: EditMinAggregateOutputType | null
    _max: EditMaxAggregateOutputType | null
  }

  type GetEditGroupByPayload<T extends EditGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EditGroupByOutputType[P]>
            : GetScalarType<T[P], EditGroupByOutputType[P]>
        }
      >
    >


  export type EditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    instruction?: boolean
    fileContent?: boolean
    diff?: boolean
    language?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["edit"]>

  export type EditSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    instruction?: boolean
    fileContent?: boolean
    diff?: boolean
    language?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["edit"]>

  export type EditSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    instruction?: boolean
    fileContent?: boolean
    diff?: boolean
    language?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["edit"]>

  export type EditSelectScalar = {
    id?: boolean
    userId?: boolean
    instruction?: boolean
    fileContent?: boolean
    diff?: boolean
    language?: boolean
    createdAt?: boolean
  }

  export type EditOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "instruction" | "fileContent" | "diff" | "language" | "createdAt", ExtArgs["result"]["edit"]>
  export type EditInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EditIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EditIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Edit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      instruction: string
      fileContent: string
      diff: string | null
      language: string | null
      createdAt: Date
    }, ExtArgs["result"]["edit"]>
    composites: {}
  }

  type EditGetPayload<S extends boolean | null | undefined | EditDefaultArgs> = $Result.GetResult<Prisma.$EditPayload, S>

  type EditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EditCountAggregateInputType | true
    }

  export interface EditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Edit'], meta: { name: 'Edit' } }
    /**
     * Find zero or one Edit that matches the filter.
     * @param {EditFindUniqueArgs} args - Arguments to find a Edit
     * @example
     * // Get one Edit
     * const edit = await prisma.edit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EditFindUniqueArgs>(args: SelectSubset<T, EditFindUniqueArgs<ExtArgs>>): Prisma__EditClient<$Result.GetResult<Prisma.$EditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Edit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EditFindUniqueOrThrowArgs} args - Arguments to find a Edit
     * @example
     * // Get one Edit
     * const edit = await prisma.edit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EditFindUniqueOrThrowArgs>(args: SelectSubset<T, EditFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EditClient<$Result.GetResult<Prisma.$EditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Edit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditFindFirstArgs} args - Arguments to find a Edit
     * @example
     * // Get one Edit
     * const edit = await prisma.edit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EditFindFirstArgs>(args?: SelectSubset<T, EditFindFirstArgs<ExtArgs>>): Prisma__EditClient<$Result.GetResult<Prisma.$EditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Edit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditFindFirstOrThrowArgs} args - Arguments to find a Edit
     * @example
     * // Get one Edit
     * const edit = await prisma.edit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EditFindFirstOrThrowArgs>(args?: SelectSubset<T, EditFindFirstOrThrowArgs<ExtArgs>>): Prisma__EditClient<$Result.GetResult<Prisma.$EditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Edits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Edits
     * const edits = await prisma.edit.findMany()
     * 
     * // Get first 10 Edits
     * const edits = await prisma.edit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const editWithIdOnly = await prisma.edit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EditFindManyArgs>(args?: SelectSubset<T, EditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Edit.
     * @param {EditCreateArgs} args - Arguments to create a Edit.
     * @example
     * // Create one Edit
     * const Edit = await prisma.edit.create({
     *   data: {
     *     // ... data to create a Edit
     *   }
     * })
     * 
     */
    create<T extends EditCreateArgs>(args: SelectSubset<T, EditCreateArgs<ExtArgs>>): Prisma__EditClient<$Result.GetResult<Prisma.$EditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Edits.
     * @param {EditCreateManyArgs} args - Arguments to create many Edits.
     * @example
     * // Create many Edits
     * const edit = await prisma.edit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EditCreateManyArgs>(args?: SelectSubset<T, EditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Edits and returns the data saved in the database.
     * @param {EditCreateManyAndReturnArgs} args - Arguments to create many Edits.
     * @example
     * // Create many Edits
     * const edit = await prisma.edit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Edits and only return the `id`
     * const editWithIdOnly = await prisma.edit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EditCreateManyAndReturnArgs>(args?: SelectSubset<T, EditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Edit.
     * @param {EditDeleteArgs} args - Arguments to delete one Edit.
     * @example
     * // Delete one Edit
     * const Edit = await prisma.edit.delete({
     *   where: {
     *     // ... filter to delete one Edit
     *   }
     * })
     * 
     */
    delete<T extends EditDeleteArgs>(args: SelectSubset<T, EditDeleteArgs<ExtArgs>>): Prisma__EditClient<$Result.GetResult<Prisma.$EditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Edit.
     * @param {EditUpdateArgs} args - Arguments to update one Edit.
     * @example
     * // Update one Edit
     * const edit = await prisma.edit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EditUpdateArgs>(args: SelectSubset<T, EditUpdateArgs<ExtArgs>>): Prisma__EditClient<$Result.GetResult<Prisma.$EditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Edits.
     * @param {EditDeleteManyArgs} args - Arguments to filter Edits to delete.
     * @example
     * // Delete a few Edits
     * const { count } = await prisma.edit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EditDeleteManyArgs>(args?: SelectSubset<T, EditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Edits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Edits
     * const edit = await prisma.edit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EditUpdateManyArgs>(args: SelectSubset<T, EditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Edits and returns the data updated in the database.
     * @param {EditUpdateManyAndReturnArgs} args - Arguments to update many Edits.
     * @example
     * // Update many Edits
     * const edit = await prisma.edit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Edits and only return the `id`
     * const editWithIdOnly = await prisma.edit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EditUpdateManyAndReturnArgs>(args: SelectSubset<T, EditUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Edit.
     * @param {EditUpsertArgs} args - Arguments to update or create a Edit.
     * @example
     * // Update or create a Edit
     * const edit = await prisma.edit.upsert({
     *   create: {
     *     // ... data to create a Edit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Edit we want to update
     *   }
     * })
     */
    upsert<T extends EditUpsertArgs>(args: SelectSubset<T, EditUpsertArgs<ExtArgs>>): Prisma__EditClient<$Result.GetResult<Prisma.$EditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Edits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditCountArgs} args - Arguments to filter Edits to count.
     * @example
     * // Count the number of Edits
     * const count = await prisma.edit.count({
     *   where: {
     *     // ... the filter for the Edits we want to count
     *   }
     * })
    **/
    count<T extends EditCountArgs>(
      args?: Subset<T, EditCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Edit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EditAggregateArgs>(args: Subset<T, EditAggregateArgs>): Prisma.PrismaPromise<GetEditAggregateType<T>>

    /**
     * Group by Edit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EditGroupByArgs['orderBy'] }
        : { orderBy?: EditGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Edit model
   */
  readonly fields: EditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Edit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EditClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Edit model
   */
  interface EditFieldRefs {
    readonly id: FieldRef<"Edit", 'String'>
    readonly userId: FieldRef<"Edit", 'String'>
    readonly instruction: FieldRef<"Edit", 'String'>
    readonly fileContent: FieldRef<"Edit", 'String'>
    readonly diff: FieldRef<"Edit", 'String'>
    readonly language: FieldRef<"Edit", 'String'>
    readonly createdAt: FieldRef<"Edit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Edit findUnique
   */
  export type EditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edit
     */
    select?: EditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edit
     */
    omit?: EditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditInclude<ExtArgs> | null
    /**
     * Filter, which Edit to fetch.
     */
    where: EditWhereUniqueInput
  }

  /**
   * Edit findUniqueOrThrow
   */
  export type EditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edit
     */
    select?: EditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edit
     */
    omit?: EditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditInclude<ExtArgs> | null
    /**
     * Filter, which Edit to fetch.
     */
    where: EditWhereUniqueInput
  }

  /**
   * Edit findFirst
   */
  export type EditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edit
     */
    select?: EditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edit
     */
    omit?: EditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditInclude<ExtArgs> | null
    /**
     * Filter, which Edit to fetch.
     */
    where?: EditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Edits to fetch.
     */
    orderBy?: EditOrderByWithRelationInput | EditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Edits.
     */
    cursor?: EditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Edits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Edits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Edits.
     */
    distinct?: EditScalarFieldEnum | EditScalarFieldEnum[]
  }

  /**
   * Edit findFirstOrThrow
   */
  export type EditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edit
     */
    select?: EditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edit
     */
    omit?: EditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditInclude<ExtArgs> | null
    /**
     * Filter, which Edit to fetch.
     */
    where?: EditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Edits to fetch.
     */
    orderBy?: EditOrderByWithRelationInput | EditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Edits.
     */
    cursor?: EditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Edits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Edits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Edits.
     */
    distinct?: EditScalarFieldEnum | EditScalarFieldEnum[]
  }

  /**
   * Edit findMany
   */
  export type EditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edit
     */
    select?: EditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edit
     */
    omit?: EditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditInclude<ExtArgs> | null
    /**
     * Filter, which Edits to fetch.
     */
    where?: EditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Edits to fetch.
     */
    orderBy?: EditOrderByWithRelationInput | EditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Edits.
     */
    cursor?: EditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Edits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Edits.
     */
    skip?: number
    distinct?: EditScalarFieldEnum | EditScalarFieldEnum[]
  }

  /**
   * Edit create
   */
  export type EditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edit
     */
    select?: EditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edit
     */
    omit?: EditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditInclude<ExtArgs> | null
    /**
     * The data needed to create a Edit.
     */
    data: XOR<EditCreateInput, EditUncheckedCreateInput>
  }

  /**
   * Edit createMany
   */
  export type EditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Edits.
     */
    data: EditCreateManyInput | EditCreateManyInput[]
  }

  /**
   * Edit createManyAndReturn
   */
  export type EditCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edit
     */
    select?: EditSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Edit
     */
    omit?: EditOmit<ExtArgs> | null
    /**
     * The data used to create many Edits.
     */
    data: EditCreateManyInput | EditCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Edit update
   */
  export type EditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edit
     */
    select?: EditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edit
     */
    omit?: EditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditInclude<ExtArgs> | null
    /**
     * The data needed to update a Edit.
     */
    data: XOR<EditUpdateInput, EditUncheckedUpdateInput>
    /**
     * Choose, which Edit to update.
     */
    where: EditWhereUniqueInput
  }

  /**
   * Edit updateMany
   */
  export type EditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Edits.
     */
    data: XOR<EditUpdateManyMutationInput, EditUncheckedUpdateManyInput>
    /**
     * Filter which Edits to update
     */
    where?: EditWhereInput
    /**
     * Limit how many Edits to update.
     */
    limit?: number
  }

  /**
   * Edit updateManyAndReturn
   */
  export type EditUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edit
     */
    select?: EditSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Edit
     */
    omit?: EditOmit<ExtArgs> | null
    /**
     * The data used to update Edits.
     */
    data: XOR<EditUpdateManyMutationInput, EditUncheckedUpdateManyInput>
    /**
     * Filter which Edits to update
     */
    where?: EditWhereInput
    /**
     * Limit how many Edits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Edit upsert
   */
  export type EditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edit
     */
    select?: EditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edit
     */
    omit?: EditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditInclude<ExtArgs> | null
    /**
     * The filter to search for the Edit to update in case it exists.
     */
    where: EditWhereUniqueInput
    /**
     * In case the Edit found by the `where` argument doesn't exist, create a new Edit with this data.
     */
    create: XOR<EditCreateInput, EditUncheckedCreateInput>
    /**
     * In case the Edit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EditUpdateInput, EditUncheckedUpdateInput>
  }

  /**
   * Edit delete
   */
  export type EditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edit
     */
    select?: EditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edit
     */
    omit?: EditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditInclude<ExtArgs> | null
    /**
     * Filter which Edit to delete.
     */
    where: EditWhereUniqueInput
  }

  /**
   * Edit deleteMany
   */
  export type EditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Edits to delete
     */
    where?: EditWhereInput
    /**
     * Limit how many Edits to delete.
     */
    limit?: number
  }

  /**
   * Edit without action
   */
  export type EditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edit
     */
    select?: EditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edit
     */
    omit?: EditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    teamId: string | null
    userId: string | null
    action: string | null
    entityId: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    teamId: string | null
    userId: string | null
    action: string | null
    entityId: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    teamId: number
    userId: number
    action: number
    entityId: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    teamId?: true
    userId?: true
    action?: true
    entityId?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    teamId?: true
    userId?: true
    action?: true
    entityId?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    teamId?: true
    userId?: true
    action?: true
    entityId?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    teamId: string
    userId: string
    action: string
    entityId: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    userId?: boolean
    action?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    userId?: boolean
    action?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    userId?: boolean
    action?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    teamId?: boolean
    userId?: boolean
    action?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamId" | "userId" | "action" | "entityId" | "metadata" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamId: string
      userId: string
      action: string
      entityId: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly teamId: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly metadata: FieldRef<"AuditLog", 'Json'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model SecurityEvent
   */

  export type AggregateSecurityEvent = {
    _count: SecurityEventCountAggregateOutputType | null
    _min: SecurityEventMinAggregateOutputType | null
    _max: SecurityEventMaxAggregateOutputType | null
  }

  export type SecurityEventMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    severity: string | null
    ip: string | null
    createdAt: Date | null
  }

  export type SecurityEventMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    severity: string | null
    ip: string | null
    createdAt: Date | null
  }

  export type SecurityEventCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    severity: number
    ip: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type SecurityEventMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    severity?: true
    ip?: true
    createdAt?: true
  }

  export type SecurityEventMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    severity?: true
    ip?: true
    createdAt?: true
  }

  export type SecurityEventCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    severity?: true
    ip?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type SecurityEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityEvent to aggregate.
     */
    where?: SecurityEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityEvents to fetch.
     */
    orderBy?: SecurityEventOrderByWithRelationInput | SecurityEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecurityEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SecurityEvents
    **/
    _count?: true | SecurityEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecurityEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecurityEventMaxAggregateInputType
  }

  export type GetSecurityEventAggregateType<T extends SecurityEventAggregateArgs> = {
        [P in keyof T & keyof AggregateSecurityEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecurityEvent[P]>
      : GetScalarType<T[P], AggregateSecurityEvent[P]>
  }




  export type SecurityEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecurityEventWhereInput
    orderBy?: SecurityEventOrderByWithAggregationInput | SecurityEventOrderByWithAggregationInput[]
    by: SecurityEventScalarFieldEnum[] | SecurityEventScalarFieldEnum
    having?: SecurityEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecurityEventCountAggregateInputType | true
    _min?: SecurityEventMinAggregateInputType
    _max?: SecurityEventMaxAggregateInputType
  }

  export type SecurityEventGroupByOutputType = {
    id: string
    userId: string | null
    type: string
    severity: string
    ip: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: SecurityEventCountAggregateOutputType | null
    _min: SecurityEventMinAggregateOutputType | null
    _max: SecurityEventMaxAggregateOutputType | null
  }

  type GetSecurityEventGroupByPayload<T extends SecurityEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecurityEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecurityEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecurityEventGroupByOutputType[P]>
            : GetScalarType<T[P], SecurityEventGroupByOutputType[P]>
        }
      >
    >


  export type SecurityEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    severity?: boolean
    ip?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | SecurityEvent$userArgs<ExtArgs>
  }, ExtArgs["result"]["securityEvent"]>

  export type SecurityEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    severity?: boolean
    ip?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | SecurityEvent$userArgs<ExtArgs>
  }, ExtArgs["result"]["securityEvent"]>

  export type SecurityEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    severity?: boolean
    ip?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | SecurityEvent$userArgs<ExtArgs>
  }, ExtArgs["result"]["securityEvent"]>

  export type SecurityEventSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    severity?: boolean
    ip?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type SecurityEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "severity" | "ip" | "metadata" | "createdAt", ExtArgs["result"]["securityEvent"]>
  export type SecurityEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SecurityEvent$userArgs<ExtArgs>
  }
  export type SecurityEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SecurityEvent$userArgs<ExtArgs>
  }
  export type SecurityEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SecurityEvent$userArgs<ExtArgs>
  }

  export type $SecurityEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SecurityEvent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      type: string
      severity: string
      ip: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["securityEvent"]>
    composites: {}
  }

  type SecurityEventGetPayload<S extends boolean | null | undefined | SecurityEventDefaultArgs> = $Result.GetResult<Prisma.$SecurityEventPayload, S>

  type SecurityEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SecurityEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecurityEventCountAggregateInputType | true
    }

  export interface SecurityEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SecurityEvent'], meta: { name: 'SecurityEvent' } }
    /**
     * Find zero or one SecurityEvent that matches the filter.
     * @param {SecurityEventFindUniqueArgs} args - Arguments to find a SecurityEvent
     * @example
     * // Get one SecurityEvent
     * const securityEvent = await prisma.securityEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecurityEventFindUniqueArgs>(args: SelectSubset<T, SecurityEventFindUniqueArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SecurityEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecurityEventFindUniqueOrThrowArgs} args - Arguments to find a SecurityEvent
     * @example
     * // Get one SecurityEvent
     * const securityEvent = await prisma.securityEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecurityEventFindUniqueOrThrowArgs>(args: SelectSubset<T, SecurityEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventFindFirstArgs} args - Arguments to find a SecurityEvent
     * @example
     * // Get one SecurityEvent
     * const securityEvent = await prisma.securityEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecurityEventFindFirstArgs>(args?: SelectSubset<T, SecurityEventFindFirstArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventFindFirstOrThrowArgs} args - Arguments to find a SecurityEvent
     * @example
     * // Get one SecurityEvent
     * const securityEvent = await prisma.securityEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecurityEventFindFirstOrThrowArgs>(args?: SelectSubset<T, SecurityEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SecurityEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SecurityEvents
     * const securityEvents = await prisma.securityEvent.findMany()
     * 
     * // Get first 10 SecurityEvents
     * const securityEvents = await prisma.securityEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const securityEventWithIdOnly = await prisma.securityEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecurityEventFindManyArgs>(args?: SelectSubset<T, SecurityEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SecurityEvent.
     * @param {SecurityEventCreateArgs} args - Arguments to create a SecurityEvent.
     * @example
     * // Create one SecurityEvent
     * const SecurityEvent = await prisma.securityEvent.create({
     *   data: {
     *     // ... data to create a SecurityEvent
     *   }
     * })
     * 
     */
    create<T extends SecurityEventCreateArgs>(args: SelectSubset<T, SecurityEventCreateArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SecurityEvents.
     * @param {SecurityEventCreateManyArgs} args - Arguments to create many SecurityEvents.
     * @example
     * // Create many SecurityEvents
     * const securityEvent = await prisma.securityEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecurityEventCreateManyArgs>(args?: SelectSubset<T, SecurityEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SecurityEvents and returns the data saved in the database.
     * @param {SecurityEventCreateManyAndReturnArgs} args - Arguments to create many SecurityEvents.
     * @example
     * // Create many SecurityEvents
     * const securityEvent = await prisma.securityEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SecurityEvents and only return the `id`
     * const securityEventWithIdOnly = await prisma.securityEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecurityEventCreateManyAndReturnArgs>(args?: SelectSubset<T, SecurityEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SecurityEvent.
     * @param {SecurityEventDeleteArgs} args - Arguments to delete one SecurityEvent.
     * @example
     * // Delete one SecurityEvent
     * const SecurityEvent = await prisma.securityEvent.delete({
     *   where: {
     *     // ... filter to delete one SecurityEvent
     *   }
     * })
     * 
     */
    delete<T extends SecurityEventDeleteArgs>(args: SelectSubset<T, SecurityEventDeleteArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SecurityEvent.
     * @param {SecurityEventUpdateArgs} args - Arguments to update one SecurityEvent.
     * @example
     * // Update one SecurityEvent
     * const securityEvent = await prisma.securityEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecurityEventUpdateArgs>(args: SelectSubset<T, SecurityEventUpdateArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SecurityEvents.
     * @param {SecurityEventDeleteManyArgs} args - Arguments to filter SecurityEvents to delete.
     * @example
     * // Delete a few SecurityEvents
     * const { count } = await prisma.securityEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecurityEventDeleteManyArgs>(args?: SelectSubset<T, SecurityEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SecurityEvents
     * const securityEvent = await prisma.securityEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecurityEventUpdateManyArgs>(args: SelectSubset<T, SecurityEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityEvents and returns the data updated in the database.
     * @param {SecurityEventUpdateManyAndReturnArgs} args - Arguments to update many SecurityEvents.
     * @example
     * // Update many SecurityEvents
     * const securityEvent = await prisma.securityEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SecurityEvents and only return the `id`
     * const securityEventWithIdOnly = await prisma.securityEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SecurityEventUpdateManyAndReturnArgs>(args: SelectSubset<T, SecurityEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SecurityEvent.
     * @param {SecurityEventUpsertArgs} args - Arguments to update or create a SecurityEvent.
     * @example
     * // Update or create a SecurityEvent
     * const securityEvent = await prisma.securityEvent.upsert({
     *   create: {
     *     // ... data to create a SecurityEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SecurityEvent we want to update
     *   }
     * })
     */
    upsert<T extends SecurityEventUpsertArgs>(args: SelectSubset<T, SecurityEventUpsertArgs<ExtArgs>>): Prisma__SecurityEventClient<$Result.GetResult<Prisma.$SecurityEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SecurityEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventCountArgs} args - Arguments to filter SecurityEvents to count.
     * @example
     * // Count the number of SecurityEvents
     * const count = await prisma.securityEvent.count({
     *   where: {
     *     // ... the filter for the SecurityEvents we want to count
     *   }
     * })
    **/
    count<T extends SecurityEventCountArgs>(
      args?: Subset<T, SecurityEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecurityEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SecurityEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SecurityEventAggregateArgs>(args: Subset<T, SecurityEventAggregateArgs>): Prisma.PrismaPromise<GetSecurityEventAggregateType<T>>

    /**
     * Group by SecurityEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SecurityEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecurityEventGroupByArgs['orderBy'] }
        : { orderBy?: SecurityEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SecurityEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecurityEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SecurityEvent model
   */
  readonly fields: SecurityEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SecurityEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecurityEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends SecurityEvent$userArgs<ExtArgs> = {}>(args?: Subset<T, SecurityEvent$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SecurityEvent model
   */
  interface SecurityEventFieldRefs {
    readonly id: FieldRef<"SecurityEvent", 'String'>
    readonly userId: FieldRef<"SecurityEvent", 'String'>
    readonly type: FieldRef<"SecurityEvent", 'String'>
    readonly severity: FieldRef<"SecurityEvent", 'String'>
    readonly ip: FieldRef<"SecurityEvent", 'String'>
    readonly metadata: FieldRef<"SecurityEvent", 'Json'>
    readonly createdAt: FieldRef<"SecurityEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SecurityEvent findUnique
   */
  export type SecurityEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * Filter, which SecurityEvent to fetch.
     */
    where: SecurityEventWhereUniqueInput
  }

  /**
   * SecurityEvent findUniqueOrThrow
   */
  export type SecurityEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * Filter, which SecurityEvent to fetch.
     */
    where: SecurityEventWhereUniqueInput
  }

  /**
   * SecurityEvent findFirst
   */
  export type SecurityEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * Filter, which SecurityEvent to fetch.
     */
    where?: SecurityEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityEvents to fetch.
     */
    orderBy?: SecurityEventOrderByWithRelationInput | SecurityEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityEvents.
     */
    cursor?: SecurityEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityEvents.
     */
    distinct?: SecurityEventScalarFieldEnum | SecurityEventScalarFieldEnum[]
  }

  /**
   * SecurityEvent findFirstOrThrow
   */
  export type SecurityEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * Filter, which SecurityEvent to fetch.
     */
    where?: SecurityEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityEvents to fetch.
     */
    orderBy?: SecurityEventOrderByWithRelationInput | SecurityEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityEvents.
     */
    cursor?: SecurityEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityEvents.
     */
    distinct?: SecurityEventScalarFieldEnum | SecurityEventScalarFieldEnum[]
  }

  /**
   * SecurityEvent findMany
   */
  export type SecurityEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * Filter, which SecurityEvents to fetch.
     */
    where?: SecurityEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityEvents to fetch.
     */
    orderBy?: SecurityEventOrderByWithRelationInput | SecurityEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SecurityEvents.
     */
    cursor?: SecurityEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityEvents.
     */
    skip?: number
    distinct?: SecurityEventScalarFieldEnum | SecurityEventScalarFieldEnum[]
  }

  /**
   * SecurityEvent create
   */
  export type SecurityEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * The data needed to create a SecurityEvent.
     */
    data: XOR<SecurityEventCreateInput, SecurityEventUncheckedCreateInput>
  }

  /**
   * SecurityEvent createMany
   */
  export type SecurityEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SecurityEvents.
     */
    data: SecurityEventCreateManyInput | SecurityEventCreateManyInput[]
  }

  /**
   * SecurityEvent createManyAndReturn
   */
  export type SecurityEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * The data used to create many SecurityEvents.
     */
    data: SecurityEventCreateManyInput | SecurityEventCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SecurityEvent update
   */
  export type SecurityEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * The data needed to update a SecurityEvent.
     */
    data: XOR<SecurityEventUpdateInput, SecurityEventUncheckedUpdateInput>
    /**
     * Choose, which SecurityEvent to update.
     */
    where: SecurityEventWhereUniqueInput
  }

  /**
   * SecurityEvent updateMany
   */
  export type SecurityEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SecurityEvents.
     */
    data: XOR<SecurityEventUpdateManyMutationInput, SecurityEventUncheckedUpdateManyInput>
    /**
     * Filter which SecurityEvents to update
     */
    where?: SecurityEventWhereInput
    /**
     * Limit how many SecurityEvents to update.
     */
    limit?: number
  }

  /**
   * SecurityEvent updateManyAndReturn
   */
  export type SecurityEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * The data used to update SecurityEvents.
     */
    data: XOR<SecurityEventUpdateManyMutationInput, SecurityEventUncheckedUpdateManyInput>
    /**
     * Filter which SecurityEvents to update
     */
    where?: SecurityEventWhereInput
    /**
     * Limit how many SecurityEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SecurityEvent upsert
   */
  export type SecurityEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * The filter to search for the SecurityEvent to update in case it exists.
     */
    where: SecurityEventWhereUniqueInput
    /**
     * In case the SecurityEvent found by the `where` argument doesn't exist, create a new SecurityEvent with this data.
     */
    create: XOR<SecurityEventCreateInput, SecurityEventUncheckedCreateInput>
    /**
     * In case the SecurityEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecurityEventUpdateInput, SecurityEventUncheckedUpdateInput>
  }

  /**
   * SecurityEvent delete
   */
  export type SecurityEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
    /**
     * Filter which SecurityEvent to delete.
     */
    where: SecurityEventWhereUniqueInput
  }

  /**
   * SecurityEvent deleteMany
   */
  export type SecurityEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityEvents to delete
     */
    where?: SecurityEventWhereInput
    /**
     * Limit how many SecurityEvents to delete.
     */
    limit?: number
  }

  /**
   * SecurityEvent.user
   */
  export type SecurityEvent$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * SecurityEvent without action
   */
  export type SecurityEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityEvent
     */
    select?: SecurityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityEvent
     */
    omit?: SecurityEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityEventInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    hashedToken: string | null
    userId: string | null
    issuedAt: Date | null
    expiresAt: Date | null
    revokedAt: Date | null
    replacedByTokenId: string | null
    createdAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    hashedToken: string | null
    userId: string | null
    issuedAt: Date | null
    expiresAt: Date | null
    revokedAt: Date | null
    replacedByTokenId: string | null
    createdAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    hashedToken: number
    userId: number
    issuedAt: number
    expiresAt: number
    revokedAt: number
    replacedByTokenId: number
    createdAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    hashedToken?: true
    userId?: true
    issuedAt?: true
    expiresAt?: true
    revokedAt?: true
    replacedByTokenId?: true
    createdAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    hashedToken?: true
    userId?: true
    issuedAt?: true
    expiresAt?: true
    revokedAt?: true
    replacedByTokenId?: true
    createdAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    hashedToken?: true
    userId?: true
    issuedAt?: true
    expiresAt?: true
    revokedAt?: true
    replacedByTokenId?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    hashedToken: string
    userId: string
    issuedAt: Date
    expiresAt: Date
    revokedAt: Date | null
    replacedByTokenId: string | null
    createdAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hashedToken?: boolean
    userId?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    replacedByTokenId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hashedToken?: boolean
    userId?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    replacedByTokenId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hashedToken?: boolean
    userId?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    replacedByTokenId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    hashedToken?: boolean
    userId?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    revokedAt?: boolean
    replacedByTokenId?: boolean
    createdAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hashedToken" | "userId" | "issuedAt" | "expiresAt" | "revokedAt" | "replacedByTokenId" | "createdAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hashedToken: string
      userId: string
      issuedAt: Date
      expiresAt: Date
      revokedAt: Date | null
      replacedByTokenId: string | null
      createdAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly hashedToken: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly issuedAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly revokedAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly replacedByTokenId: FieldRef<"RefreshToken", 'String'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model UsageCounter
   */

  export type AggregateUsageCounter = {
    _count: UsageCounterCountAggregateOutputType | null
    _avg: UsageCounterAvgAggregateOutputType | null
    _sum: UsageCounterSumAggregateOutputType | null
    _min: UsageCounterMinAggregateOutputType | null
    _max: UsageCounterMaxAggregateOutputType | null
  }

  export type UsageCounterAvgAggregateOutputType = {
    chatCount: number | null
    editCount: number | null
  }

  export type UsageCounterSumAggregateOutputType = {
    chatCount: number | null
    editCount: number | null
  }

  export type UsageCounterMinAggregateOutputType = {
    id: string | null
    userId: string | null
    chatCount: number | null
    editCount: number | null
    date: string | null
    createdAt: Date | null
  }

  export type UsageCounterMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    chatCount: number | null
    editCount: number | null
    date: string | null
    createdAt: Date | null
  }

  export type UsageCounterCountAggregateOutputType = {
    id: number
    userId: number
    chatCount: number
    editCount: number
    date: number
    createdAt: number
    _all: number
  }


  export type UsageCounterAvgAggregateInputType = {
    chatCount?: true
    editCount?: true
  }

  export type UsageCounterSumAggregateInputType = {
    chatCount?: true
    editCount?: true
  }

  export type UsageCounterMinAggregateInputType = {
    id?: true
    userId?: true
    chatCount?: true
    editCount?: true
    date?: true
    createdAt?: true
  }

  export type UsageCounterMaxAggregateInputType = {
    id?: true
    userId?: true
    chatCount?: true
    editCount?: true
    date?: true
    createdAt?: true
  }

  export type UsageCounterCountAggregateInputType = {
    id?: true
    userId?: true
    chatCount?: true
    editCount?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type UsageCounterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageCounter to aggregate.
     */
    where?: UsageCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageCounters to fetch.
     */
    orderBy?: UsageCounterOrderByWithRelationInput | UsageCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsageCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsageCounters
    **/
    _count?: true | UsageCounterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsageCounterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsageCounterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsageCounterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsageCounterMaxAggregateInputType
  }

  export type GetUsageCounterAggregateType<T extends UsageCounterAggregateArgs> = {
        [P in keyof T & keyof AggregateUsageCounter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsageCounter[P]>
      : GetScalarType<T[P], AggregateUsageCounter[P]>
  }




  export type UsageCounterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageCounterWhereInput
    orderBy?: UsageCounterOrderByWithAggregationInput | UsageCounterOrderByWithAggregationInput[]
    by: UsageCounterScalarFieldEnum[] | UsageCounterScalarFieldEnum
    having?: UsageCounterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsageCounterCountAggregateInputType | true
    _avg?: UsageCounterAvgAggregateInputType
    _sum?: UsageCounterSumAggregateInputType
    _min?: UsageCounterMinAggregateInputType
    _max?: UsageCounterMaxAggregateInputType
  }

  export type UsageCounterGroupByOutputType = {
    id: string
    userId: string
    chatCount: number
    editCount: number
    date: string
    createdAt: Date
    _count: UsageCounterCountAggregateOutputType | null
    _avg: UsageCounterAvgAggregateOutputType | null
    _sum: UsageCounterSumAggregateOutputType | null
    _min: UsageCounterMinAggregateOutputType | null
    _max: UsageCounterMaxAggregateOutputType | null
  }

  type GetUsageCounterGroupByPayload<T extends UsageCounterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsageCounterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsageCounterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsageCounterGroupByOutputType[P]>
            : GetScalarType<T[P], UsageCounterGroupByOutputType[P]>
        }
      >
    >


  export type UsageCounterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatCount?: boolean
    editCount?: boolean
    date?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usageCounter"]>

  export type UsageCounterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatCount?: boolean
    editCount?: boolean
    date?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usageCounter"]>

  export type UsageCounterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatCount?: boolean
    editCount?: boolean
    date?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usageCounter"]>

  export type UsageCounterSelectScalar = {
    id?: boolean
    userId?: boolean
    chatCount?: boolean
    editCount?: boolean
    date?: boolean
    createdAt?: boolean
  }

  export type UsageCounterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "chatCount" | "editCount" | "date" | "createdAt", ExtArgs["result"]["usageCounter"]>
  export type UsageCounterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UsageCounterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UsageCounterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UsageCounterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsageCounter"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      chatCount: number
      editCount: number
      date: string
      createdAt: Date
    }, ExtArgs["result"]["usageCounter"]>
    composites: {}
  }

  type UsageCounterGetPayload<S extends boolean | null | undefined | UsageCounterDefaultArgs> = $Result.GetResult<Prisma.$UsageCounterPayload, S>

  type UsageCounterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsageCounterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsageCounterCountAggregateInputType | true
    }

  export interface UsageCounterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsageCounter'], meta: { name: 'UsageCounter' } }
    /**
     * Find zero or one UsageCounter that matches the filter.
     * @param {UsageCounterFindUniqueArgs} args - Arguments to find a UsageCounter
     * @example
     * // Get one UsageCounter
     * const usageCounter = await prisma.usageCounter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsageCounterFindUniqueArgs>(args: SelectSubset<T, UsageCounterFindUniqueArgs<ExtArgs>>): Prisma__UsageCounterClient<$Result.GetResult<Prisma.$UsageCounterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsageCounter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsageCounterFindUniqueOrThrowArgs} args - Arguments to find a UsageCounter
     * @example
     * // Get one UsageCounter
     * const usageCounter = await prisma.usageCounter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsageCounterFindUniqueOrThrowArgs>(args: SelectSubset<T, UsageCounterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsageCounterClient<$Result.GetResult<Prisma.$UsageCounterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsageCounter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageCounterFindFirstArgs} args - Arguments to find a UsageCounter
     * @example
     * // Get one UsageCounter
     * const usageCounter = await prisma.usageCounter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsageCounterFindFirstArgs>(args?: SelectSubset<T, UsageCounterFindFirstArgs<ExtArgs>>): Prisma__UsageCounterClient<$Result.GetResult<Prisma.$UsageCounterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsageCounter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageCounterFindFirstOrThrowArgs} args - Arguments to find a UsageCounter
     * @example
     * // Get one UsageCounter
     * const usageCounter = await prisma.usageCounter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsageCounterFindFirstOrThrowArgs>(args?: SelectSubset<T, UsageCounterFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsageCounterClient<$Result.GetResult<Prisma.$UsageCounterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsageCounters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageCounterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsageCounters
     * const usageCounters = await prisma.usageCounter.findMany()
     * 
     * // Get first 10 UsageCounters
     * const usageCounters = await prisma.usageCounter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usageCounterWithIdOnly = await prisma.usageCounter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsageCounterFindManyArgs>(args?: SelectSubset<T, UsageCounterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageCounterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsageCounter.
     * @param {UsageCounterCreateArgs} args - Arguments to create a UsageCounter.
     * @example
     * // Create one UsageCounter
     * const UsageCounter = await prisma.usageCounter.create({
     *   data: {
     *     // ... data to create a UsageCounter
     *   }
     * })
     * 
     */
    create<T extends UsageCounterCreateArgs>(args: SelectSubset<T, UsageCounterCreateArgs<ExtArgs>>): Prisma__UsageCounterClient<$Result.GetResult<Prisma.$UsageCounterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsageCounters.
     * @param {UsageCounterCreateManyArgs} args - Arguments to create many UsageCounters.
     * @example
     * // Create many UsageCounters
     * const usageCounter = await prisma.usageCounter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsageCounterCreateManyArgs>(args?: SelectSubset<T, UsageCounterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsageCounters and returns the data saved in the database.
     * @param {UsageCounterCreateManyAndReturnArgs} args - Arguments to create many UsageCounters.
     * @example
     * // Create many UsageCounters
     * const usageCounter = await prisma.usageCounter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsageCounters and only return the `id`
     * const usageCounterWithIdOnly = await prisma.usageCounter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsageCounterCreateManyAndReturnArgs>(args?: SelectSubset<T, UsageCounterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageCounterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsageCounter.
     * @param {UsageCounterDeleteArgs} args - Arguments to delete one UsageCounter.
     * @example
     * // Delete one UsageCounter
     * const UsageCounter = await prisma.usageCounter.delete({
     *   where: {
     *     // ... filter to delete one UsageCounter
     *   }
     * })
     * 
     */
    delete<T extends UsageCounterDeleteArgs>(args: SelectSubset<T, UsageCounterDeleteArgs<ExtArgs>>): Prisma__UsageCounterClient<$Result.GetResult<Prisma.$UsageCounterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsageCounter.
     * @param {UsageCounterUpdateArgs} args - Arguments to update one UsageCounter.
     * @example
     * // Update one UsageCounter
     * const usageCounter = await prisma.usageCounter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsageCounterUpdateArgs>(args: SelectSubset<T, UsageCounterUpdateArgs<ExtArgs>>): Prisma__UsageCounterClient<$Result.GetResult<Prisma.$UsageCounterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsageCounters.
     * @param {UsageCounterDeleteManyArgs} args - Arguments to filter UsageCounters to delete.
     * @example
     * // Delete a few UsageCounters
     * const { count } = await prisma.usageCounter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsageCounterDeleteManyArgs>(args?: SelectSubset<T, UsageCounterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsageCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageCounterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsageCounters
     * const usageCounter = await prisma.usageCounter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsageCounterUpdateManyArgs>(args: SelectSubset<T, UsageCounterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsageCounters and returns the data updated in the database.
     * @param {UsageCounterUpdateManyAndReturnArgs} args - Arguments to update many UsageCounters.
     * @example
     * // Update many UsageCounters
     * const usageCounter = await prisma.usageCounter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsageCounters and only return the `id`
     * const usageCounterWithIdOnly = await prisma.usageCounter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsageCounterUpdateManyAndReturnArgs>(args: SelectSubset<T, UsageCounterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageCounterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsageCounter.
     * @param {UsageCounterUpsertArgs} args - Arguments to update or create a UsageCounter.
     * @example
     * // Update or create a UsageCounter
     * const usageCounter = await prisma.usageCounter.upsert({
     *   create: {
     *     // ... data to create a UsageCounter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsageCounter we want to update
     *   }
     * })
     */
    upsert<T extends UsageCounterUpsertArgs>(args: SelectSubset<T, UsageCounterUpsertArgs<ExtArgs>>): Prisma__UsageCounterClient<$Result.GetResult<Prisma.$UsageCounterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsageCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageCounterCountArgs} args - Arguments to filter UsageCounters to count.
     * @example
     * // Count the number of UsageCounters
     * const count = await prisma.usageCounter.count({
     *   where: {
     *     // ... the filter for the UsageCounters we want to count
     *   }
     * })
    **/
    count<T extends UsageCounterCountArgs>(
      args?: Subset<T, UsageCounterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsageCounterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsageCounter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageCounterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsageCounterAggregateArgs>(args: Subset<T, UsageCounterAggregateArgs>): Prisma.PrismaPromise<GetUsageCounterAggregateType<T>>

    /**
     * Group by UsageCounter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageCounterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsageCounterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsageCounterGroupByArgs['orderBy'] }
        : { orderBy?: UsageCounterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsageCounterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsageCounterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsageCounter model
   */
  readonly fields: UsageCounterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsageCounter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsageCounterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsageCounter model
   */
  interface UsageCounterFieldRefs {
    readonly id: FieldRef<"UsageCounter", 'String'>
    readonly userId: FieldRef<"UsageCounter", 'String'>
    readonly chatCount: FieldRef<"UsageCounter", 'Int'>
    readonly editCount: FieldRef<"UsageCounter", 'Int'>
    readonly date: FieldRef<"UsageCounter", 'String'>
    readonly createdAt: FieldRef<"UsageCounter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UsageCounter findUnique
   */
  export type UsageCounterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageCounter
     */
    select?: UsageCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageCounter
     */
    omit?: UsageCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageCounterInclude<ExtArgs> | null
    /**
     * Filter, which UsageCounter to fetch.
     */
    where: UsageCounterWhereUniqueInput
  }

  /**
   * UsageCounter findUniqueOrThrow
   */
  export type UsageCounterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageCounter
     */
    select?: UsageCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageCounter
     */
    omit?: UsageCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageCounterInclude<ExtArgs> | null
    /**
     * Filter, which UsageCounter to fetch.
     */
    where: UsageCounterWhereUniqueInput
  }

  /**
   * UsageCounter findFirst
   */
  export type UsageCounterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageCounter
     */
    select?: UsageCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageCounter
     */
    omit?: UsageCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageCounterInclude<ExtArgs> | null
    /**
     * Filter, which UsageCounter to fetch.
     */
    where?: UsageCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageCounters to fetch.
     */
    orderBy?: UsageCounterOrderByWithRelationInput | UsageCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageCounters.
     */
    cursor?: UsageCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageCounters.
     */
    distinct?: UsageCounterScalarFieldEnum | UsageCounterScalarFieldEnum[]
  }

  /**
   * UsageCounter findFirstOrThrow
   */
  export type UsageCounterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageCounter
     */
    select?: UsageCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageCounter
     */
    omit?: UsageCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageCounterInclude<ExtArgs> | null
    /**
     * Filter, which UsageCounter to fetch.
     */
    where?: UsageCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageCounters to fetch.
     */
    orderBy?: UsageCounterOrderByWithRelationInput | UsageCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageCounters.
     */
    cursor?: UsageCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageCounters.
     */
    distinct?: UsageCounterScalarFieldEnum | UsageCounterScalarFieldEnum[]
  }

  /**
   * UsageCounter findMany
   */
  export type UsageCounterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageCounter
     */
    select?: UsageCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageCounter
     */
    omit?: UsageCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageCounterInclude<ExtArgs> | null
    /**
     * Filter, which UsageCounters to fetch.
     */
    where?: UsageCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageCounters to fetch.
     */
    orderBy?: UsageCounterOrderByWithRelationInput | UsageCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsageCounters.
     */
    cursor?: UsageCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageCounters.
     */
    skip?: number
    distinct?: UsageCounterScalarFieldEnum | UsageCounterScalarFieldEnum[]
  }

  /**
   * UsageCounter create
   */
  export type UsageCounterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageCounter
     */
    select?: UsageCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageCounter
     */
    omit?: UsageCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageCounterInclude<ExtArgs> | null
    /**
     * The data needed to create a UsageCounter.
     */
    data: XOR<UsageCounterCreateInput, UsageCounterUncheckedCreateInput>
  }

  /**
   * UsageCounter createMany
   */
  export type UsageCounterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsageCounters.
     */
    data: UsageCounterCreateManyInput | UsageCounterCreateManyInput[]
  }

  /**
   * UsageCounter createManyAndReturn
   */
  export type UsageCounterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageCounter
     */
    select?: UsageCounterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsageCounter
     */
    omit?: UsageCounterOmit<ExtArgs> | null
    /**
     * The data used to create many UsageCounters.
     */
    data: UsageCounterCreateManyInput | UsageCounterCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageCounterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsageCounter update
   */
  export type UsageCounterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageCounter
     */
    select?: UsageCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageCounter
     */
    omit?: UsageCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageCounterInclude<ExtArgs> | null
    /**
     * The data needed to update a UsageCounter.
     */
    data: XOR<UsageCounterUpdateInput, UsageCounterUncheckedUpdateInput>
    /**
     * Choose, which UsageCounter to update.
     */
    where: UsageCounterWhereUniqueInput
  }

  /**
   * UsageCounter updateMany
   */
  export type UsageCounterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsageCounters.
     */
    data: XOR<UsageCounterUpdateManyMutationInput, UsageCounterUncheckedUpdateManyInput>
    /**
     * Filter which UsageCounters to update
     */
    where?: UsageCounterWhereInput
    /**
     * Limit how many UsageCounters to update.
     */
    limit?: number
  }

  /**
   * UsageCounter updateManyAndReturn
   */
  export type UsageCounterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageCounter
     */
    select?: UsageCounterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsageCounter
     */
    omit?: UsageCounterOmit<ExtArgs> | null
    /**
     * The data used to update UsageCounters.
     */
    data: XOR<UsageCounterUpdateManyMutationInput, UsageCounterUncheckedUpdateManyInput>
    /**
     * Filter which UsageCounters to update
     */
    where?: UsageCounterWhereInput
    /**
     * Limit how many UsageCounters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageCounterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsageCounter upsert
   */
  export type UsageCounterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageCounter
     */
    select?: UsageCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageCounter
     */
    omit?: UsageCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageCounterInclude<ExtArgs> | null
    /**
     * The filter to search for the UsageCounter to update in case it exists.
     */
    where: UsageCounterWhereUniqueInput
    /**
     * In case the UsageCounter found by the `where` argument doesn't exist, create a new UsageCounter with this data.
     */
    create: XOR<UsageCounterCreateInput, UsageCounterUncheckedCreateInput>
    /**
     * In case the UsageCounter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsageCounterUpdateInput, UsageCounterUncheckedUpdateInput>
  }

  /**
   * UsageCounter delete
   */
  export type UsageCounterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageCounter
     */
    select?: UsageCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageCounter
     */
    omit?: UsageCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageCounterInclude<ExtArgs> | null
    /**
     * Filter which UsageCounter to delete.
     */
    where: UsageCounterWhereUniqueInput
  }

  /**
   * UsageCounter deleteMany
   */
  export type UsageCounterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageCounters to delete
     */
    where?: UsageCounterWhereInput
    /**
     * Limit how many UsageCounters to delete.
     */
    limit?: number
  }

  /**
   * UsageCounter without action
   */
  export type UsageCounterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageCounter
     */
    select?: UsageCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageCounter
     */
    omit?: UsageCounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageCounterInclude<ExtArgs> | null
  }


  /**
   * Model UsageEvent
   */

  export type AggregateUsageEvent = {
    _count: UsageEventCountAggregateOutputType | null
    _avg: UsageEventAvgAggregateOutputType | null
    _sum: UsageEventSumAggregateOutputType | null
    _min: UsageEventMinAggregateOutputType | null
    _max: UsageEventMaxAggregateOutputType | null
  }

  export type UsageEventAvgAggregateOutputType = {
    tokens: number | null
  }

  export type UsageEventSumAggregateOutputType = {
    tokens: number | null
  }

  export type UsageEventMinAggregateOutputType = {
    id: string | null
    userId: string | null
    clientRequestId: string | null
    type: string | null
    status: string | null
    model: string | null
    tokens: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsageEventMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    clientRequestId: string | null
    type: string | null
    status: string | null
    model: string | null
    tokens: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsageEventCountAggregateOutputType = {
    id: number
    userId: number
    clientRequestId: number
    type: number
    status: number
    model: number
    tokens: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsageEventAvgAggregateInputType = {
    tokens?: true
  }

  export type UsageEventSumAggregateInputType = {
    tokens?: true
  }

  export type UsageEventMinAggregateInputType = {
    id?: true
    userId?: true
    clientRequestId?: true
    type?: true
    status?: true
    model?: true
    tokens?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsageEventMaxAggregateInputType = {
    id?: true
    userId?: true
    clientRequestId?: true
    type?: true
    status?: true
    model?: true
    tokens?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsageEventCountAggregateInputType = {
    id?: true
    userId?: true
    clientRequestId?: true
    type?: true
    status?: true
    model?: true
    tokens?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsageEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageEvent to aggregate.
     */
    where?: UsageEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageEvents to fetch.
     */
    orderBy?: UsageEventOrderByWithRelationInput | UsageEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsageEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsageEvents
    **/
    _count?: true | UsageEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsageEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsageEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsageEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsageEventMaxAggregateInputType
  }

  export type GetUsageEventAggregateType<T extends UsageEventAggregateArgs> = {
        [P in keyof T & keyof AggregateUsageEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsageEvent[P]>
      : GetScalarType<T[P], AggregateUsageEvent[P]>
  }




  export type UsageEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageEventWhereInput
    orderBy?: UsageEventOrderByWithAggregationInput | UsageEventOrderByWithAggregationInput[]
    by: UsageEventScalarFieldEnum[] | UsageEventScalarFieldEnum
    having?: UsageEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsageEventCountAggregateInputType | true
    _avg?: UsageEventAvgAggregateInputType
    _sum?: UsageEventSumAggregateInputType
    _min?: UsageEventMinAggregateInputType
    _max?: UsageEventMaxAggregateInputType
  }

  export type UsageEventGroupByOutputType = {
    id: string
    userId: string
    clientRequestId: string
    type: string
    status: string
    model: string | null
    tokens: number | null
    createdAt: Date
    updatedAt: Date
    _count: UsageEventCountAggregateOutputType | null
    _avg: UsageEventAvgAggregateOutputType | null
    _sum: UsageEventSumAggregateOutputType | null
    _min: UsageEventMinAggregateOutputType | null
    _max: UsageEventMaxAggregateOutputType | null
  }

  type GetUsageEventGroupByPayload<T extends UsageEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsageEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsageEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsageEventGroupByOutputType[P]>
            : GetScalarType<T[P], UsageEventGroupByOutputType[P]>
        }
      >
    >


  export type UsageEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    clientRequestId?: boolean
    type?: boolean
    status?: boolean
    model?: boolean
    tokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usageEvent"]>

  export type UsageEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    clientRequestId?: boolean
    type?: boolean
    status?: boolean
    model?: boolean
    tokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usageEvent"]>

  export type UsageEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    clientRequestId?: boolean
    type?: boolean
    status?: boolean
    model?: boolean
    tokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usageEvent"]>

  export type UsageEventSelectScalar = {
    id?: boolean
    userId?: boolean
    clientRequestId?: boolean
    type?: boolean
    status?: boolean
    model?: boolean
    tokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsageEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "clientRequestId" | "type" | "status" | "model" | "tokens" | "createdAt" | "updatedAt", ExtArgs["result"]["usageEvent"]>

  export type $UsageEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsageEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      clientRequestId: string
      type: string
      status: string
      model: string | null
      tokens: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usageEvent"]>
    composites: {}
  }

  type UsageEventGetPayload<S extends boolean | null | undefined | UsageEventDefaultArgs> = $Result.GetResult<Prisma.$UsageEventPayload, S>

  type UsageEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsageEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsageEventCountAggregateInputType | true
    }

  export interface UsageEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsageEvent'], meta: { name: 'UsageEvent' } }
    /**
     * Find zero or one UsageEvent that matches the filter.
     * @param {UsageEventFindUniqueArgs} args - Arguments to find a UsageEvent
     * @example
     * // Get one UsageEvent
     * const usageEvent = await prisma.usageEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsageEventFindUniqueArgs>(args: SelectSubset<T, UsageEventFindUniqueArgs<ExtArgs>>): Prisma__UsageEventClient<$Result.GetResult<Prisma.$UsageEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsageEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsageEventFindUniqueOrThrowArgs} args - Arguments to find a UsageEvent
     * @example
     * // Get one UsageEvent
     * const usageEvent = await prisma.usageEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsageEventFindUniqueOrThrowArgs>(args: SelectSubset<T, UsageEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsageEventClient<$Result.GetResult<Prisma.$UsageEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsageEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageEventFindFirstArgs} args - Arguments to find a UsageEvent
     * @example
     * // Get one UsageEvent
     * const usageEvent = await prisma.usageEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsageEventFindFirstArgs>(args?: SelectSubset<T, UsageEventFindFirstArgs<ExtArgs>>): Prisma__UsageEventClient<$Result.GetResult<Prisma.$UsageEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsageEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageEventFindFirstOrThrowArgs} args - Arguments to find a UsageEvent
     * @example
     * // Get one UsageEvent
     * const usageEvent = await prisma.usageEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsageEventFindFirstOrThrowArgs>(args?: SelectSubset<T, UsageEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsageEventClient<$Result.GetResult<Prisma.$UsageEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsageEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsageEvents
     * const usageEvents = await prisma.usageEvent.findMany()
     * 
     * // Get first 10 UsageEvents
     * const usageEvents = await prisma.usageEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usageEventWithIdOnly = await prisma.usageEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsageEventFindManyArgs>(args?: SelectSubset<T, UsageEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsageEvent.
     * @param {UsageEventCreateArgs} args - Arguments to create a UsageEvent.
     * @example
     * // Create one UsageEvent
     * const UsageEvent = await prisma.usageEvent.create({
     *   data: {
     *     // ... data to create a UsageEvent
     *   }
     * })
     * 
     */
    create<T extends UsageEventCreateArgs>(args: SelectSubset<T, UsageEventCreateArgs<ExtArgs>>): Prisma__UsageEventClient<$Result.GetResult<Prisma.$UsageEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsageEvents.
     * @param {UsageEventCreateManyArgs} args - Arguments to create many UsageEvents.
     * @example
     * // Create many UsageEvents
     * const usageEvent = await prisma.usageEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsageEventCreateManyArgs>(args?: SelectSubset<T, UsageEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsageEvents and returns the data saved in the database.
     * @param {UsageEventCreateManyAndReturnArgs} args - Arguments to create many UsageEvents.
     * @example
     * // Create many UsageEvents
     * const usageEvent = await prisma.usageEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsageEvents and only return the `id`
     * const usageEventWithIdOnly = await prisma.usageEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsageEventCreateManyAndReturnArgs>(args?: SelectSubset<T, UsageEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsageEvent.
     * @param {UsageEventDeleteArgs} args - Arguments to delete one UsageEvent.
     * @example
     * // Delete one UsageEvent
     * const UsageEvent = await prisma.usageEvent.delete({
     *   where: {
     *     // ... filter to delete one UsageEvent
     *   }
     * })
     * 
     */
    delete<T extends UsageEventDeleteArgs>(args: SelectSubset<T, UsageEventDeleteArgs<ExtArgs>>): Prisma__UsageEventClient<$Result.GetResult<Prisma.$UsageEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsageEvent.
     * @param {UsageEventUpdateArgs} args - Arguments to update one UsageEvent.
     * @example
     * // Update one UsageEvent
     * const usageEvent = await prisma.usageEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsageEventUpdateArgs>(args: SelectSubset<T, UsageEventUpdateArgs<ExtArgs>>): Prisma__UsageEventClient<$Result.GetResult<Prisma.$UsageEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsageEvents.
     * @param {UsageEventDeleteManyArgs} args - Arguments to filter UsageEvents to delete.
     * @example
     * // Delete a few UsageEvents
     * const { count } = await prisma.usageEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsageEventDeleteManyArgs>(args?: SelectSubset<T, UsageEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsageEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsageEvents
     * const usageEvent = await prisma.usageEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsageEventUpdateManyArgs>(args: SelectSubset<T, UsageEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsageEvents and returns the data updated in the database.
     * @param {UsageEventUpdateManyAndReturnArgs} args - Arguments to update many UsageEvents.
     * @example
     * // Update many UsageEvents
     * const usageEvent = await prisma.usageEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsageEvents and only return the `id`
     * const usageEventWithIdOnly = await prisma.usageEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsageEventUpdateManyAndReturnArgs>(args: SelectSubset<T, UsageEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsageEvent.
     * @param {UsageEventUpsertArgs} args - Arguments to update or create a UsageEvent.
     * @example
     * // Update or create a UsageEvent
     * const usageEvent = await prisma.usageEvent.upsert({
     *   create: {
     *     // ... data to create a UsageEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsageEvent we want to update
     *   }
     * })
     */
    upsert<T extends UsageEventUpsertArgs>(args: SelectSubset<T, UsageEventUpsertArgs<ExtArgs>>): Prisma__UsageEventClient<$Result.GetResult<Prisma.$UsageEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsageEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageEventCountArgs} args - Arguments to filter UsageEvents to count.
     * @example
     * // Count the number of UsageEvents
     * const count = await prisma.usageEvent.count({
     *   where: {
     *     // ... the filter for the UsageEvents we want to count
     *   }
     * })
    **/
    count<T extends UsageEventCountArgs>(
      args?: Subset<T, UsageEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsageEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsageEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsageEventAggregateArgs>(args: Subset<T, UsageEventAggregateArgs>): Prisma.PrismaPromise<GetUsageEventAggregateType<T>>

    /**
     * Group by UsageEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsageEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsageEventGroupByArgs['orderBy'] }
        : { orderBy?: UsageEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsageEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsageEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsageEvent model
   */
  readonly fields: UsageEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsageEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsageEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsageEvent model
   */
  interface UsageEventFieldRefs {
    readonly id: FieldRef<"UsageEvent", 'String'>
    readonly userId: FieldRef<"UsageEvent", 'String'>
    readonly clientRequestId: FieldRef<"UsageEvent", 'String'>
    readonly type: FieldRef<"UsageEvent", 'String'>
    readonly status: FieldRef<"UsageEvent", 'String'>
    readonly model: FieldRef<"UsageEvent", 'String'>
    readonly tokens: FieldRef<"UsageEvent", 'Int'>
    readonly createdAt: FieldRef<"UsageEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"UsageEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UsageEvent findUnique
   */
  export type UsageEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageEvent
     */
    select?: UsageEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageEvent
     */
    omit?: UsageEventOmit<ExtArgs> | null
    /**
     * Filter, which UsageEvent to fetch.
     */
    where: UsageEventWhereUniqueInput
  }

  /**
   * UsageEvent findUniqueOrThrow
   */
  export type UsageEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageEvent
     */
    select?: UsageEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageEvent
     */
    omit?: UsageEventOmit<ExtArgs> | null
    /**
     * Filter, which UsageEvent to fetch.
     */
    where: UsageEventWhereUniqueInput
  }

  /**
   * UsageEvent findFirst
   */
  export type UsageEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageEvent
     */
    select?: UsageEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageEvent
     */
    omit?: UsageEventOmit<ExtArgs> | null
    /**
     * Filter, which UsageEvent to fetch.
     */
    where?: UsageEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageEvents to fetch.
     */
    orderBy?: UsageEventOrderByWithRelationInput | UsageEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageEvents.
     */
    cursor?: UsageEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageEvents.
     */
    distinct?: UsageEventScalarFieldEnum | UsageEventScalarFieldEnum[]
  }

  /**
   * UsageEvent findFirstOrThrow
   */
  export type UsageEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageEvent
     */
    select?: UsageEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageEvent
     */
    omit?: UsageEventOmit<ExtArgs> | null
    /**
     * Filter, which UsageEvent to fetch.
     */
    where?: UsageEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageEvents to fetch.
     */
    orderBy?: UsageEventOrderByWithRelationInput | UsageEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageEvents.
     */
    cursor?: UsageEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageEvents.
     */
    distinct?: UsageEventScalarFieldEnum | UsageEventScalarFieldEnum[]
  }

  /**
   * UsageEvent findMany
   */
  export type UsageEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageEvent
     */
    select?: UsageEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageEvent
     */
    omit?: UsageEventOmit<ExtArgs> | null
    /**
     * Filter, which UsageEvents to fetch.
     */
    where?: UsageEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageEvents to fetch.
     */
    orderBy?: UsageEventOrderByWithRelationInput | UsageEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsageEvents.
     */
    cursor?: UsageEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageEvents.
     */
    skip?: number
    distinct?: UsageEventScalarFieldEnum | UsageEventScalarFieldEnum[]
  }

  /**
   * UsageEvent create
   */
  export type UsageEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageEvent
     */
    select?: UsageEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageEvent
     */
    omit?: UsageEventOmit<ExtArgs> | null
    /**
     * The data needed to create a UsageEvent.
     */
    data: XOR<UsageEventCreateInput, UsageEventUncheckedCreateInput>
  }

  /**
   * UsageEvent createMany
   */
  export type UsageEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsageEvents.
     */
    data: UsageEventCreateManyInput | UsageEventCreateManyInput[]
  }

  /**
   * UsageEvent createManyAndReturn
   */
  export type UsageEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageEvent
     */
    select?: UsageEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsageEvent
     */
    omit?: UsageEventOmit<ExtArgs> | null
    /**
     * The data used to create many UsageEvents.
     */
    data: UsageEventCreateManyInput | UsageEventCreateManyInput[]
  }

  /**
   * UsageEvent update
   */
  export type UsageEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageEvent
     */
    select?: UsageEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageEvent
     */
    omit?: UsageEventOmit<ExtArgs> | null
    /**
     * The data needed to update a UsageEvent.
     */
    data: XOR<UsageEventUpdateInput, UsageEventUncheckedUpdateInput>
    /**
     * Choose, which UsageEvent to update.
     */
    where: UsageEventWhereUniqueInput
  }

  /**
   * UsageEvent updateMany
   */
  export type UsageEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsageEvents.
     */
    data: XOR<UsageEventUpdateManyMutationInput, UsageEventUncheckedUpdateManyInput>
    /**
     * Filter which UsageEvents to update
     */
    where?: UsageEventWhereInput
    /**
     * Limit how many UsageEvents to update.
     */
    limit?: number
  }

  /**
   * UsageEvent updateManyAndReturn
   */
  export type UsageEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageEvent
     */
    select?: UsageEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsageEvent
     */
    omit?: UsageEventOmit<ExtArgs> | null
    /**
     * The data used to update UsageEvents.
     */
    data: XOR<UsageEventUpdateManyMutationInput, UsageEventUncheckedUpdateManyInput>
    /**
     * Filter which UsageEvents to update
     */
    where?: UsageEventWhereInput
    /**
     * Limit how many UsageEvents to update.
     */
    limit?: number
  }

  /**
   * UsageEvent upsert
   */
  export type UsageEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageEvent
     */
    select?: UsageEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageEvent
     */
    omit?: UsageEventOmit<ExtArgs> | null
    /**
     * The filter to search for the UsageEvent to update in case it exists.
     */
    where: UsageEventWhereUniqueInput
    /**
     * In case the UsageEvent found by the `where` argument doesn't exist, create a new UsageEvent with this data.
     */
    create: XOR<UsageEventCreateInput, UsageEventUncheckedCreateInput>
    /**
     * In case the UsageEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsageEventUpdateInput, UsageEventUncheckedUpdateInput>
  }

  /**
   * UsageEvent delete
   */
  export type UsageEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageEvent
     */
    select?: UsageEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageEvent
     */
    omit?: UsageEventOmit<ExtArgs> | null
    /**
     * Filter which UsageEvent to delete.
     */
    where: UsageEventWhereUniqueInput
  }

  /**
   * UsageEvent deleteMany
   */
  export type UsageEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageEvents to delete
     */
    where?: UsageEventWhereInput
    /**
     * Limit how many UsageEvents to delete.
     */
    limit?: number
  }

  /**
   * UsageEvent without action
   */
  export type UsageEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageEvent
     */
    select?: UsageEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageEvent
     */
    omit?: UsageEventOmit<ExtArgs> | null
  }


  /**
   * Model StripeCustomer
   */

  export type AggregateStripeCustomer = {
    _count: StripeCustomerCountAggregateOutputType | null
    _min: StripeCustomerMinAggregateOutputType | null
    _max: StripeCustomerMaxAggregateOutputType | null
  }

  export type StripeCustomerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    stripeCustomerId: string | null
    createdAt: Date | null
  }

  export type StripeCustomerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    stripeCustomerId: string | null
    createdAt: Date | null
  }

  export type StripeCustomerCountAggregateOutputType = {
    id: number
    userId: number
    stripeCustomerId: number
    createdAt: number
    _all: number
  }


  export type StripeCustomerMinAggregateInputType = {
    id?: true
    userId?: true
    stripeCustomerId?: true
    createdAt?: true
  }

  export type StripeCustomerMaxAggregateInputType = {
    id?: true
    userId?: true
    stripeCustomerId?: true
    createdAt?: true
  }

  export type StripeCustomerCountAggregateInputType = {
    id?: true
    userId?: true
    stripeCustomerId?: true
    createdAt?: true
    _all?: true
  }

  export type StripeCustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StripeCustomer to aggregate.
     */
    where?: StripeCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripeCustomers to fetch.
     */
    orderBy?: StripeCustomerOrderByWithRelationInput | StripeCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StripeCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripeCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripeCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StripeCustomers
    **/
    _count?: true | StripeCustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StripeCustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StripeCustomerMaxAggregateInputType
  }

  export type GetStripeCustomerAggregateType<T extends StripeCustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateStripeCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStripeCustomer[P]>
      : GetScalarType<T[P], AggregateStripeCustomer[P]>
  }




  export type StripeCustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StripeCustomerWhereInput
    orderBy?: StripeCustomerOrderByWithAggregationInput | StripeCustomerOrderByWithAggregationInput[]
    by: StripeCustomerScalarFieldEnum[] | StripeCustomerScalarFieldEnum
    having?: StripeCustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StripeCustomerCountAggregateInputType | true
    _min?: StripeCustomerMinAggregateInputType
    _max?: StripeCustomerMaxAggregateInputType
  }

  export type StripeCustomerGroupByOutputType = {
    id: string
    userId: string
    stripeCustomerId: string
    createdAt: Date
    _count: StripeCustomerCountAggregateOutputType | null
    _min: StripeCustomerMinAggregateOutputType | null
    _max: StripeCustomerMaxAggregateOutputType | null
  }

  type GetStripeCustomerGroupByPayload<T extends StripeCustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StripeCustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StripeCustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StripeCustomerGroupByOutputType[P]>
            : GetScalarType<T[P], StripeCustomerGroupByOutputType[P]>
        }
      >
    >


  export type StripeCustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeCustomerId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stripeCustomer"]>

  export type StripeCustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeCustomerId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stripeCustomer"]>

  export type StripeCustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeCustomerId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stripeCustomer"]>

  export type StripeCustomerSelectScalar = {
    id?: boolean
    userId?: boolean
    stripeCustomerId?: boolean
    createdAt?: boolean
  }

  export type StripeCustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "stripeCustomerId" | "createdAt", ExtArgs["result"]["stripeCustomer"]>
  export type StripeCustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StripeCustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StripeCustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StripeCustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StripeCustomer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      stripeCustomerId: string
      createdAt: Date
    }, ExtArgs["result"]["stripeCustomer"]>
    composites: {}
  }

  type StripeCustomerGetPayload<S extends boolean | null | undefined | StripeCustomerDefaultArgs> = $Result.GetResult<Prisma.$StripeCustomerPayload, S>

  type StripeCustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StripeCustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StripeCustomerCountAggregateInputType | true
    }

  export interface StripeCustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StripeCustomer'], meta: { name: 'StripeCustomer' } }
    /**
     * Find zero or one StripeCustomer that matches the filter.
     * @param {StripeCustomerFindUniqueArgs} args - Arguments to find a StripeCustomer
     * @example
     * // Get one StripeCustomer
     * const stripeCustomer = await prisma.stripeCustomer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StripeCustomerFindUniqueArgs>(args: SelectSubset<T, StripeCustomerFindUniqueArgs<ExtArgs>>): Prisma__StripeCustomerClient<$Result.GetResult<Prisma.$StripeCustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StripeCustomer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StripeCustomerFindUniqueOrThrowArgs} args - Arguments to find a StripeCustomer
     * @example
     * // Get one StripeCustomer
     * const stripeCustomer = await prisma.stripeCustomer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StripeCustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, StripeCustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StripeCustomerClient<$Result.GetResult<Prisma.$StripeCustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StripeCustomer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeCustomerFindFirstArgs} args - Arguments to find a StripeCustomer
     * @example
     * // Get one StripeCustomer
     * const stripeCustomer = await prisma.stripeCustomer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StripeCustomerFindFirstArgs>(args?: SelectSubset<T, StripeCustomerFindFirstArgs<ExtArgs>>): Prisma__StripeCustomerClient<$Result.GetResult<Prisma.$StripeCustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StripeCustomer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeCustomerFindFirstOrThrowArgs} args - Arguments to find a StripeCustomer
     * @example
     * // Get one StripeCustomer
     * const stripeCustomer = await prisma.stripeCustomer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StripeCustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, StripeCustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__StripeCustomerClient<$Result.GetResult<Prisma.$StripeCustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StripeCustomers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeCustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StripeCustomers
     * const stripeCustomers = await prisma.stripeCustomer.findMany()
     * 
     * // Get first 10 StripeCustomers
     * const stripeCustomers = await prisma.stripeCustomer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stripeCustomerWithIdOnly = await prisma.stripeCustomer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StripeCustomerFindManyArgs>(args?: SelectSubset<T, StripeCustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StripeCustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StripeCustomer.
     * @param {StripeCustomerCreateArgs} args - Arguments to create a StripeCustomer.
     * @example
     * // Create one StripeCustomer
     * const StripeCustomer = await prisma.stripeCustomer.create({
     *   data: {
     *     // ... data to create a StripeCustomer
     *   }
     * })
     * 
     */
    create<T extends StripeCustomerCreateArgs>(args: SelectSubset<T, StripeCustomerCreateArgs<ExtArgs>>): Prisma__StripeCustomerClient<$Result.GetResult<Prisma.$StripeCustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StripeCustomers.
     * @param {StripeCustomerCreateManyArgs} args - Arguments to create many StripeCustomers.
     * @example
     * // Create many StripeCustomers
     * const stripeCustomer = await prisma.stripeCustomer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StripeCustomerCreateManyArgs>(args?: SelectSubset<T, StripeCustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StripeCustomers and returns the data saved in the database.
     * @param {StripeCustomerCreateManyAndReturnArgs} args - Arguments to create many StripeCustomers.
     * @example
     * // Create many StripeCustomers
     * const stripeCustomer = await prisma.stripeCustomer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StripeCustomers and only return the `id`
     * const stripeCustomerWithIdOnly = await prisma.stripeCustomer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StripeCustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, StripeCustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StripeCustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StripeCustomer.
     * @param {StripeCustomerDeleteArgs} args - Arguments to delete one StripeCustomer.
     * @example
     * // Delete one StripeCustomer
     * const StripeCustomer = await prisma.stripeCustomer.delete({
     *   where: {
     *     // ... filter to delete one StripeCustomer
     *   }
     * })
     * 
     */
    delete<T extends StripeCustomerDeleteArgs>(args: SelectSubset<T, StripeCustomerDeleteArgs<ExtArgs>>): Prisma__StripeCustomerClient<$Result.GetResult<Prisma.$StripeCustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StripeCustomer.
     * @param {StripeCustomerUpdateArgs} args - Arguments to update one StripeCustomer.
     * @example
     * // Update one StripeCustomer
     * const stripeCustomer = await prisma.stripeCustomer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StripeCustomerUpdateArgs>(args: SelectSubset<T, StripeCustomerUpdateArgs<ExtArgs>>): Prisma__StripeCustomerClient<$Result.GetResult<Prisma.$StripeCustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StripeCustomers.
     * @param {StripeCustomerDeleteManyArgs} args - Arguments to filter StripeCustomers to delete.
     * @example
     * // Delete a few StripeCustomers
     * const { count } = await prisma.stripeCustomer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StripeCustomerDeleteManyArgs>(args?: SelectSubset<T, StripeCustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StripeCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeCustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StripeCustomers
     * const stripeCustomer = await prisma.stripeCustomer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StripeCustomerUpdateManyArgs>(args: SelectSubset<T, StripeCustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StripeCustomers and returns the data updated in the database.
     * @param {StripeCustomerUpdateManyAndReturnArgs} args - Arguments to update many StripeCustomers.
     * @example
     * // Update many StripeCustomers
     * const stripeCustomer = await prisma.stripeCustomer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StripeCustomers and only return the `id`
     * const stripeCustomerWithIdOnly = await prisma.stripeCustomer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StripeCustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, StripeCustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StripeCustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StripeCustomer.
     * @param {StripeCustomerUpsertArgs} args - Arguments to update or create a StripeCustomer.
     * @example
     * // Update or create a StripeCustomer
     * const stripeCustomer = await prisma.stripeCustomer.upsert({
     *   create: {
     *     // ... data to create a StripeCustomer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StripeCustomer we want to update
     *   }
     * })
     */
    upsert<T extends StripeCustomerUpsertArgs>(args: SelectSubset<T, StripeCustomerUpsertArgs<ExtArgs>>): Prisma__StripeCustomerClient<$Result.GetResult<Prisma.$StripeCustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StripeCustomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeCustomerCountArgs} args - Arguments to filter StripeCustomers to count.
     * @example
     * // Count the number of StripeCustomers
     * const count = await prisma.stripeCustomer.count({
     *   where: {
     *     // ... the filter for the StripeCustomers we want to count
     *   }
     * })
    **/
    count<T extends StripeCustomerCountArgs>(
      args?: Subset<T, StripeCustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StripeCustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StripeCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeCustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StripeCustomerAggregateArgs>(args: Subset<T, StripeCustomerAggregateArgs>): Prisma.PrismaPromise<GetStripeCustomerAggregateType<T>>

    /**
     * Group by StripeCustomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeCustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StripeCustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StripeCustomerGroupByArgs['orderBy'] }
        : { orderBy?: StripeCustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StripeCustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStripeCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StripeCustomer model
   */
  readonly fields: StripeCustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StripeCustomer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StripeCustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StripeCustomer model
   */
  interface StripeCustomerFieldRefs {
    readonly id: FieldRef<"StripeCustomer", 'String'>
    readonly userId: FieldRef<"StripeCustomer", 'String'>
    readonly stripeCustomerId: FieldRef<"StripeCustomer", 'String'>
    readonly createdAt: FieldRef<"StripeCustomer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StripeCustomer findUnique
   */
  export type StripeCustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeCustomer
     */
    select?: StripeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeCustomer
     */
    omit?: StripeCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripeCustomerInclude<ExtArgs> | null
    /**
     * Filter, which StripeCustomer to fetch.
     */
    where: StripeCustomerWhereUniqueInput
  }

  /**
   * StripeCustomer findUniqueOrThrow
   */
  export type StripeCustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeCustomer
     */
    select?: StripeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeCustomer
     */
    omit?: StripeCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripeCustomerInclude<ExtArgs> | null
    /**
     * Filter, which StripeCustomer to fetch.
     */
    where: StripeCustomerWhereUniqueInput
  }

  /**
   * StripeCustomer findFirst
   */
  export type StripeCustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeCustomer
     */
    select?: StripeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeCustomer
     */
    omit?: StripeCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripeCustomerInclude<ExtArgs> | null
    /**
     * Filter, which StripeCustomer to fetch.
     */
    where?: StripeCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripeCustomers to fetch.
     */
    orderBy?: StripeCustomerOrderByWithRelationInput | StripeCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StripeCustomers.
     */
    cursor?: StripeCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripeCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripeCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StripeCustomers.
     */
    distinct?: StripeCustomerScalarFieldEnum | StripeCustomerScalarFieldEnum[]
  }

  /**
   * StripeCustomer findFirstOrThrow
   */
  export type StripeCustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeCustomer
     */
    select?: StripeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeCustomer
     */
    omit?: StripeCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripeCustomerInclude<ExtArgs> | null
    /**
     * Filter, which StripeCustomer to fetch.
     */
    where?: StripeCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripeCustomers to fetch.
     */
    orderBy?: StripeCustomerOrderByWithRelationInput | StripeCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StripeCustomers.
     */
    cursor?: StripeCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripeCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripeCustomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StripeCustomers.
     */
    distinct?: StripeCustomerScalarFieldEnum | StripeCustomerScalarFieldEnum[]
  }

  /**
   * StripeCustomer findMany
   */
  export type StripeCustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeCustomer
     */
    select?: StripeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeCustomer
     */
    omit?: StripeCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripeCustomerInclude<ExtArgs> | null
    /**
     * Filter, which StripeCustomers to fetch.
     */
    where?: StripeCustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripeCustomers to fetch.
     */
    orderBy?: StripeCustomerOrderByWithRelationInput | StripeCustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StripeCustomers.
     */
    cursor?: StripeCustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripeCustomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripeCustomers.
     */
    skip?: number
    distinct?: StripeCustomerScalarFieldEnum | StripeCustomerScalarFieldEnum[]
  }

  /**
   * StripeCustomer create
   */
  export type StripeCustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeCustomer
     */
    select?: StripeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeCustomer
     */
    omit?: StripeCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripeCustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a StripeCustomer.
     */
    data: XOR<StripeCustomerCreateInput, StripeCustomerUncheckedCreateInput>
  }

  /**
   * StripeCustomer createMany
   */
  export type StripeCustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StripeCustomers.
     */
    data: StripeCustomerCreateManyInput | StripeCustomerCreateManyInput[]
  }

  /**
   * StripeCustomer createManyAndReturn
   */
  export type StripeCustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeCustomer
     */
    select?: StripeCustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StripeCustomer
     */
    omit?: StripeCustomerOmit<ExtArgs> | null
    /**
     * The data used to create many StripeCustomers.
     */
    data: StripeCustomerCreateManyInput | StripeCustomerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripeCustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StripeCustomer update
   */
  export type StripeCustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeCustomer
     */
    select?: StripeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeCustomer
     */
    omit?: StripeCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripeCustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a StripeCustomer.
     */
    data: XOR<StripeCustomerUpdateInput, StripeCustomerUncheckedUpdateInput>
    /**
     * Choose, which StripeCustomer to update.
     */
    where: StripeCustomerWhereUniqueInput
  }

  /**
   * StripeCustomer updateMany
   */
  export type StripeCustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StripeCustomers.
     */
    data: XOR<StripeCustomerUpdateManyMutationInput, StripeCustomerUncheckedUpdateManyInput>
    /**
     * Filter which StripeCustomers to update
     */
    where?: StripeCustomerWhereInput
    /**
     * Limit how many StripeCustomers to update.
     */
    limit?: number
  }

  /**
   * StripeCustomer updateManyAndReturn
   */
  export type StripeCustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeCustomer
     */
    select?: StripeCustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StripeCustomer
     */
    omit?: StripeCustomerOmit<ExtArgs> | null
    /**
     * The data used to update StripeCustomers.
     */
    data: XOR<StripeCustomerUpdateManyMutationInput, StripeCustomerUncheckedUpdateManyInput>
    /**
     * Filter which StripeCustomers to update
     */
    where?: StripeCustomerWhereInput
    /**
     * Limit how many StripeCustomers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripeCustomerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StripeCustomer upsert
   */
  export type StripeCustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeCustomer
     */
    select?: StripeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeCustomer
     */
    omit?: StripeCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripeCustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the StripeCustomer to update in case it exists.
     */
    where: StripeCustomerWhereUniqueInput
    /**
     * In case the StripeCustomer found by the `where` argument doesn't exist, create a new StripeCustomer with this data.
     */
    create: XOR<StripeCustomerCreateInput, StripeCustomerUncheckedCreateInput>
    /**
     * In case the StripeCustomer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StripeCustomerUpdateInput, StripeCustomerUncheckedUpdateInput>
  }

  /**
   * StripeCustomer delete
   */
  export type StripeCustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeCustomer
     */
    select?: StripeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeCustomer
     */
    omit?: StripeCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripeCustomerInclude<ExtArgs> | null
    /**
     * Filter which StripeCustomer to delete.
     */
    where: StripeCustomerWhereUniqueInput
  }

  /**
   * StripeCustomer deleteMany
   */
  export type StripeCustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StripeCustomers to delete
     */
    where?: StripeCustomerWhereInput
    /**
     * Limit how many StripeCustomers to delete.
     */
    limit?: number
  }

  /**
   * StripeCustomer without action
   */
  export type StripeCustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeCustomer
     */
    select?: StripeCustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeCustomer
     */
    omit?: StripeCustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StripeCustomerInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    stripeSubscriptionId: string | null
    status: string | null
    plan: string | null
    currentPeriodEnd: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    stripeSubscriptionId: string | null
    status: string | null
    plan: string | null
    currentPeriodEnd: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    stripeSubscriptionId: number
    status: number
    plan: number
    currentPeriodEnd: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    stripeSubscriptionId?: true
    status?: true
    plan?: true
    currentPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    stripeSubscriptionId?: true
    status?: true
    plan?: true
    currentPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    stripeSubscriptionId?: true
    status?: true
    plan?: true
    currentPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    userId: string
    stripeSubscriptionId: string
    status: string
    plan: string
    currentPeriodEnd: Date
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeSubscriptionId?: boolean
    status?: boolean
    plan?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeSubscriptionId?: boolean
    status?: boolean
    plan?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeSubscriptionId?: boolean
    status?: boolean
    plan?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    stripeSubscriptionId?: boolean
    status?: boolean
    plan?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "stripeSubscriptionId" | "status" | "plan" | "currentPeriodEnd" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      stripeSubscriptionId: string
      status: string
      plan: string
      currentPeriodEnd: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly stripeSubscriptionId: FieldRef<"Subscription", 'String'>
    readonly status: FieldRef<"Subscription", 'String'>
    readonly plan: FieldRef<"Subscription", 'String'>
    readonly currentPeriodEnd: FieldRef<"Subscription", 'DateTime'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model WebhookEvent
   */

  export type AggregateWebhookEvent = {
    _count: WebhookEventCountAggregateOutputType | null
    _min: WebhookEventMinAggregateOutputType | null
    _max: WebhookEventMaxAggregateOutputType | null
  }

  export type WebhookEventMinAggregateOutputType = {
    id: string | null
    processedAt: Date | null
  }

  export type WebhookEventMaxAggregateOutputType = {
    id: string | null
    processedAt: Date | null
  }

  export type WebhookEventCountAggregateOutputType = {
    id: number
    processedAt: number
    _all: number
  }


  export type WebhookEventMinAggregateInputType = {
    id?: true
    processedAt?: true
  }

  export type WebhookEventMaxAggregateInputType = {
    id?: true
    processedAt?: true
  }

  export type WebhookEventCountAggregateInputType = {
    id?: true
    processedAt?: true
    _all?: true
  }

  export type WebhookEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookEvent to aggregate.
     */
    where?: WebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventOrderByWithRelationInput | WebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebhookEvents
    **/
    _count?: true | WebhookEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookEventMaxAggregateInputType
  }

  export type GetWebhookEventAggregateType<T extends WebhookEventAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhookEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhookEvent[P]>
      : GetScalarType<T[P], AggregateWebhookEvent[P]>
  }




  export type WebhookEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookEventWhereInput
    orderBy?: WebhookEventOrderByWithAggregationInput | WebhookEventOrderByWithAggregationInput[]
    by: WebhookEventScalarFieldEnum[] | WebhookEventScalarFieldEnum
    having?: WebhookEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookEventCountAggregateInputType | true
    _min?: WebhookEventMinAggregateInputType
    _max?: WebhookEventMaxAggregateInputType
  }

  export type WebhookEventGroupByOutputType = {
    id: string
    processedAt: Date
    _count: WebhookEventCountAggregateOutputType | null
    _min: WebhookEventMinAggregateOutputType | null
    _max: WebhookEventMaxAggregateOutputType | null
  }

  type GetWebhookEventGroupByPayload<T extends WebhookEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookEventGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookEventGroupByOutputType[P]>
        }
      >
    >


  export type WebhookEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    processedAt?: boolean
  }, ExtArgs["result"]["webhookEvent"]>

  export type WebhookEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    processedAt?: boolean
  }, ExtArgs["result"]["webhookEvent"]>

  export type WebhookEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    processedAt?: boolean
  }, ExtArgs["result"]["webhookEvent"]>

  export type WebhookEventSelectScalar = {
    id?: boolean
    processedAt?: boolean
  }

  export type WebhookEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "processedAt", ExtArgs["result"]["webhookEvent"]>

  export type $WebhookEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebhookEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      processedAt: Date
    }, ExtArgs["result"]["webhookEvent"]>
    composites: {}
  }

  type WebhookEventGetPayload<S extends boolean | null | undefined | WebhookEventDefaultArgs> = $Result.GetResult<Prisma.$WebhookEventPayload, S>

  type WebhookEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebhookEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebhookEventCountAggregateInputType | true
    }

  export interface WebhookEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebhookEvent'], meta: { name: 'WebhookEvent' } }
    /**
     * Find zero or one WebhookEvent that matches the filter.
     * @param {WebhookEventFindUniqueArgs} args - Arguments to find a WebhookEvent
     * @example
     * // Get one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookEventFindUniqueArgs>(args: SelectSubset<T, WebhookEventFindUniqueArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebhookEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebhookEventFindUniqueOrThrowArgs} args - Arguments to find a WebhookEvent
     * @example
     * // Get one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookEventFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventFindFirstArgs} args - Arguments to find a WebhookEvent
     * @example
     * // Get one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookEventFindFirstArgs>(args?: SelectSubset<T, WebhookEventFindFirstArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventFindFirstOrThrowArgs} args - Arguments to find a WebhookEvent
     * @example
     * // Get one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookEventFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebhookEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebhookEvents
     * const webhookEvents = await prisma.webhookEvent.findMany()
     * 
     * // Get first 10 WebhookEvents
     * const webhookEvents = await prisma.webhookEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookEventWithIdOnly = await prisma.webhookEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookEventFindManyArgs>(args?: SelectSubset<T, WebhookEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebhookEvent.
     * @param {WebhookEventCreateArgs} args - Arguments to create a WebhookEvent.
     * @example
     * // Create one WebhookEvent
     * const WebhookEvent = await prisma.webhookEvent.create({
     *   data: {
     *     // ... data to create a WebhookEvent
     *   }
     * })
     * 
     */
    create<T extends WebhookEventCreateArgs>(args: SelectSubset<T, WebhookEventCreateArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebhookEvents.
     * @param {WebhookEventCreateManyArgs} args - Arguments to create many WebhookEvents.
     * @example
     * // Create many WebhookEvents
     * const webhookEvent = await prisma.webhookEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookEventCreateManyArgs>(args?: SelectSubset<T, WebhookEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebhookEvents and returns the data saved in the database.
     * @param {WebhookEventCreateManyAndReturnArgs} args - Arguments to create many WebhookEvents.
     * @example
     * // Create many WebhookEvents
     * const webhookEvent = await prisma.webhookEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebhookEvents and only return the `id`
     * const webhookEventWithIdOnly = await prisma.webhookEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebhookEventCreateManyAndReturnArgs>(args?: SelectSubset<T, WebhookEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WebhookEvent.
     * @param {WebhookEventDeleteArgs} args - Arguments to delete one WebhookEvent.
     * @example
     * // Delete one WebhookEvent
     * const WebhookEvent = await prisma.webhookEvent.delete({
     *   where: {
     *     // ... filter to delete one WebhookEvent
     *   }
     * })
     * 
     */
    delete<T extends WebhookEventDeleteArgs>(args: SelectSubset<T, WebhookEventDeleteArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebhookEvent.
     * @param {WebhookEventUpdateArgs} args - Arguments to update one WebhookEvent.
     * @example
     * // Update one WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookEventUpdateArgs>(args: SelectSubset<T, WebhookEventUpdateArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebhookEvents.
     * @param {WebhookEventDeleteManyArgs} args - Arguments to filter WebhookEvents to delete.
     * @example
     * // Delete a few WebhookEvents
     * const { count } = await prisma.webhookEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookEventDeleteManyArgs>(args?: SelectSubset<T, WebhookEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebhookEvents
     * const webhookEvent = await prisma.webhookEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookEventUpdateManyArgs>(args: SelectSubset<T, WebhookEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookEvents and returns the data updated in the database.
     * @param {WebhookEventUpdateManyAndReturnArgs} args - Arguments to update many WebhookEvents.
     * @example
     * // Update many WebhookEvents
     * const webhookEvent = await prisma.webhookEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebhookEvents and only return the `id`
     * const webhookEventWithIdOnly = await prisma.webhookEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebhookEventUpdateManyAndReturnArgs>(args: SelectSubset<T, WebhookEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WebhookEvent.
     * @param {WebhookEventUpsertArgs} args - Arguments to update or create a WebhookEvent.
     * @example
     * // Update or create a WebhookEvent
     * const webhookEvent = await prisma.webhookEvent.upsert({
     *   create: {
     *     // ... data to create a WebhookEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebhookEvent we want to update
     *   }
     * })
     */
    upsert<T extends WebhookEventUpsertArgs>(args: SelectSubset<T, WebhookEventUpsertArgs<ExtArgs>>): Prisma__WebhookEventClient<$Result.GetResult<Prisma.$WebhookEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebhookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventCountArgs} args - Arguments to filter WebhookEvents to count.
     * @example
     * // Count the number of WebhookEvents
     * const count = await prisma.webhookEvent.count({
     *   where: {
     *     // ... the filter for the WebhookEvents we want to count
     *   }
     * })
    **/
    count<T extends WebhookEventCountArgs>(
      args?: Subset<T, WebhookEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebhookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebhookEventAggregateArgs>(args: Subset<T, WebhookEventAggregateArgs>): Prisma.PrismaPromise<GetWebhookEventAggregateType<T>>

    /**
     * Group by WebhookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebhookEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookEventGroupByArgs['orderBy'] }
        : { orderBy?: WebhookEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebhookEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebhookEvent model
   */
  readonly fields: WebhookEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebhookEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WebhookEvent model
   */
  interface WebhookEventFieldRefs {
    readonly id: FieldRef<"WebhookEvent", 'String'>
    readonly processedAt: FieldRef<"WebhookEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebhookEvent findUnique
   */
  export type WebhookEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which WebhookEvent to fetch.
     */
    where: WebhookEventWhereUniqueInput
  }

  /**
   * WebhookEvent findUniqueOrThrow
   */
  export type WebhookEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which WebhookEvent to fetch.
     */
    where: WebhookEventWhereUniqueInput
  }

  /**
   * WebhookEvent findFirst
   */
  export type WebhookEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which WebhookEvent to fetch.
     */
    where?: WebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventOrderByWithRelationInput | WebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookEvents.
     */
    cursor?: WebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookEvents.
     */
    distinct?: WebhookEventScalarFieldEnum | WebhookEventScalarFieldEnum[]
  }

  /**
   * WebhookEvent findFirstOrThrow
   */
  export type WebhookEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which WebhookEvent to fetch.
     */
    where?: WebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventOrderByWithRelationInput | WebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookEvents.
     */
    cursor?: WebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookEvents.
     */
    distinct?: WebhookEventScalarFieldEnum | WebhookEventScalarFieldEnum[]
  }

  /**
   * WebhookEvent findMany
   */
  export type WebhookEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which WebhookEvents to fetch.
     */
    where?: WebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEvents to fetch.
     */
    orderBy?: WebhookEventOrderByWithRelationInput | WebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebhookEvents.
     */
    cursor?: WebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEvents.
     */
    skip?: number
    distinct?: WebhookEventScalarFieldEnum | WebhookEventScalarFieldEnum[]
  }

  /**
   * WebhookEvent create
   */
  export type WebhookEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * The data needed to create a WebhookEvent.
     */
    data: XOR<WebhookEventCreateInput, WebhookEventUncheckedCreateInput>
  }

  /**
   * WebhookEvent createMany
   */
  export type WebhookEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebhookEvents.
     */
    data: WebhookEventCreateManyInput | WebhookEventCreateManyInput[]
  }

  /**
   * WebhookEvent createManyAndReturn
   */
  export type WebhookEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * The data used to create many WebhookEvents.
     */
    data: WebhookEventCreateManyInput | WebhookEventCreateManyInput[]
  }

  /**
   * WebhookEvent update
   */
  export type WebhookEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * The data needed to update a WebhookEvent.
     */
    data: XOR<WebhookEventUpdateInput, WebhookEventUncheckedUpdateInput>
    /**
     * Choose, which WebhookEvent to update.
     */
    where: WebhookEventWhereUniqueInput
  }

  /**
   * WebhookEvent updateMany
   */
  export type WebhookEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebhookEvents.
     */
    data: XOR<WebhookEventUpdateManyMutationInput, WebhookEventUncheckedUpdateManyInput>
    /**
     * Filter which WebhookEvents to update
     */
    where?: WebhookEventWhereInput
    /**
     * Limit how many WebhookEvents to update.
     */
    limit?: number
  }

  /**
   * WebhookEvent updateManyAndReturn
   */
  export type WebhookEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * The data used to update WebhookEvents.
     */
    data: XOR<WebhookEventUpdateManyMutationInput, WebhookEventUncheckedUpdateManyInput>
    /**
     * Filter which WebhookEvents to update
     */
    where?: WebhookEventWhereInput
    /**
     * Limit how many WebhookEvents to update.
     */
    limit?: number
  }

  /**
   * WebhookEvent upsert
   */
  export type WebhookEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * The filter to search for the WebhookEvent to update in case it exists.
     */
    where: WebhookEventWhereUniqueInput
    /**
     * In case the WebhookEvent found by the `where` argument doesn't exist, create a new WebhookEvent with this data.
     */
    create: XOR<WebhookEventCreateInput, WebhookEventUncheckedCreateInput>
    /**
     * In case the WebhookEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookEventUpdateInput, WebhookEventUncheckedUpdateInput>
  }

  /**
   * WebhookEvent delete
   */
  export type WebhookEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
    /**
     * Filter which WebhookEvent to delete.
     */
    where: WebhookEventWhereUniqueInput
  }

  /**
   * WebhookEvent deleteMany
   */
  export type WebhookEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookEvents to delete
     */
    where?: WebhookEventWhereInput
    /**
     * Limit how many WebhookEvents to delete.
     */
    limit?: number
  }

  /**
   * WebhookEvent without action
   */
  export type WebhookEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEvent
     */
    select?: WebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookEvent
     */
    omit?: WebhookEventOmit<ExtArgs> | null
  }


  /**
   * Model TelemetryEvent
   */

  export type AggregateTelemetryEvent = {
    _count: TelemetryEventCountAggregateOutputType | null
    _avg: TelemetryEventAvgAggregateOutputType | null
    _sum: TelemetryEventSumAggregateOutputType | null
    _min: TelemetryEventMinAggregateOutputType | null
    _max: TelemetryEventMaxAggregateOutputType | null
  }

  export type TelemetryEventAvgAggregateOutputType = {
    value: number | null
  }

  export type TelemetryEventSumAggregateOutputType = {
    value: number | null
  }

  export type TelemetryEventMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    event: string | null
    value: number | null
    version: string | null
    createdAt: Date | null
  }

  export type TelemetryEventMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    event: string | null
    value: number | null
    version: string | null
    createdAt: Date | null
  }

  export type TelemetryEventCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    event: number
    value: number
    metadata: number
    version: number
    createdAt: number
    _all: number
  }


  export type TelemetryEventAvgAggregateInputType = {
    value?: true
  }

  export type TelemetryEventSumAggregateInputType = {
    value?: true
  }

  export type TelemetryEventMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    event?: true
    value?: true
    version?: true
    createdAt?: true
  }

  export type TelemetryEventMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    event?: true
    value?: true
    version?: true
    createdAt?: true
  }

  export type TelemetryEventCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    event?: true
    value?: true
    metadata?: true
    version?: true
    createdAt?: true
    _all?: true
  }

  export type TelemetryEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelemetryEvent to aggregate.
     */
    where?: TelemetryEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelemetryEvents to fetch.
     */
    orderBy?: TelemetryEventOrderByWithRelationInput | TelemetryEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TelemetryEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelemetryEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelemetryEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TelemetryEvents
    **/
    _count?: true | TelemetryEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TelemetryEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TelemetryEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TelemetryEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TelemetryEventMaxAggregateInputType
  }

  export type GetTelemetryEventAggregateType<T extends TelemetryEventAggregateArgs> = {
        [P in keyof T & keyof AggregateTelemetryEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTelemetryEvent[P]>
      : GetScalarType<T[P], AggregateTelemetryEvent[P]>
  }




  export type TelemetryEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelemetryEventWhereInput
    orderBy?: TelemetryEventOrderByWithAggregationInput | TelemetryEventOrderByWithAggregationInput[]
    by: TelemetryEventScalarFieldEnum[] | TelemetryEventScalarFieldEnum
    having?: TelemetryEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TelemetryEventCountAggregateInputType | true
    _avg?: TelemetryEventAvgAggregateInputType
    _sum?: TelemetryEventSumAggregateInputType
    _min?: TelemetryEventMinAggregateInputType
    _max?: TelemetryEventMaxAggregateInputType
  }

  export type TelemetryEventGroupByOutputType = {
    id: string
    userId: string | null
    type: string
    event: string
    value: number | null
    metadata: JsonValue | null
    version: string | null
    createdAt: Date
    _count: TelemetryEventCountAggregateOutputType | null
    _avg: TelemetryEventAvgAggregateOutputType | null
    _sum: TelemetryEventSumAggregateOutputType | null
    _min: TelemetryEventMinAggregateOutputType | null
    _max: TelemetryEventMaxAggregateOutputType | null
  }

  type GetTelemetryEventGroupByPayload<T extends TelemetryEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TelemetryEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TelemetryEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TelemetryEventGroupByOutputType[P]>
            : GetScalarType<T[P], TelemetryEventGroupByOutputType[P]>
        }
      >
    >


  export type TelemetryEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    event?: boolean
    value?: boolean
    metadata?: boolean
    version?: boolean
    createdAt?: boolean
    user?: boolean | TelemetryEvent$userArgs<ExtArgs>
  }, ExtArgs["result"]["telemetryEvent"]>

  export type TelemetryEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    event?: boolean
    value?: boolean
    metadata?: boolean
    version?: boolean
    createdAt?: boolean
    user?: boolean | TelemetryEvent$userArgs<ExtArgs>
  }, ExtArgs["result"]["telemetryEvent"]>

  export type TelemetryEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    event?: boolean
    value?: boolean
    metadata?: boolean
    version?: boolean
    createdAt?: boolean
    user?: boolean | TelemetryEvent$userArgs<ExtArgs>
  }, ExtArgs["result"]["telemetryEvent"]>

  export type TelemetryEventSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    event?: boolean
    value?: boolean
    metadata?: boolean
    version?: boolean
    createdAt?: boolean
  }

  export type TelemetryEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "event" | "value" | "metadata" | "version" | "createdAt", ExtArgs["result"]["telemetryEvent"]>
  export type TelemetryEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | TelemetryEvent$userArgs<ExtArgs>
  }
  export type TelemetryEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | TelemetryEvent$userArgs<ExtArgs>
  }
  export type TelemetryEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | TelemetryEvent$userArgs<ExtArgs>
  }

  export type $TelemetryEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TelemetryEvent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      type: string
      event: string
      value: number | null
      metadata: Prisma.JsonValue | null
      version: string | null
      createdAt: Date
    }, ExtArgs["result"]["telemetryEvent"]>
    composites: {}
  }

  type TelemetryEventGetPayload<S extends boolean | null | undefined | TelemetryEventDefaultArgs> = $Result.GetResult<Prisma.$TelemetryEventPayload, S>

  type TelemetryEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TelemetryEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TelemetryEventCountAggregateInputType | true
    }

  export interface TelemetryEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TelemetryEvent'], meta: { name: 'TelemetryEvent' } }
    /**
     * Find zero or one TelemetryEvent that matches the filter.
     * @param {TelemetryEventFindUniqueArgs} args - Arguments to find a TelemetryEvent
     * @example
     * // Get one TelemetryEvent
     * const telemetryEvent = await prisma.telemetryEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TelemetryEventFindUniqueArgs>(args: SelectSubset<T, TelemetryEventFindUniqueArgs<ExtArgs>>): Prisma__TelemetryEventClient<$Result.GetResult<Prisma.$TelemetryEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TelemetryEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TelemetryEventFindUniqueOrThrowArgs} args - Arguments to find a TelemetryEvent
     * @example
     * // Get one TelemetryEvent
     * const telemetryEvent = await prisma.telemetryEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TelemetryEventFindUniqueOrThrowArgs>(args: SelectSubset<T, TelemetryEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TelemetryEventClient<$Result.GetResult<Prisma.$TelemetryEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TelemetryEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryEventFindFirstArgs} args - Arguments to find a TelemetryEvent
     * @example
     * // Get one TelemetryEvent
     * const telemetryEvent = await prisma.telemetryEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TelemetryEventFindFirstArgs>(args?: SelectSubset<T, TelemetryEventFindFirstArgs<ExtArgs>>): Prisma__TelemetryEventClient<$Result.GetResult<Prisma.$TelemetryEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TelemetryEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryEventFindFirstOrThrowArgs} args - Arguments to find a TelemetryEvent
     * @example
     * // Get one TelemetryEvent
     * const telemetryEvent = await prisma.telemetryEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TelemetryEventFindFirstOrThrowArgs>(args?: SelectSubset<T, TelemetryEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__TelemetryEventClient<$Result.GetResult<Prisma.$TelemetryEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TelemetryEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TelemetryEvents
     * const telemetryEvents = await prisma.telemetryEvent.findMany()
     * 
     * // Get first 10 TelemetryEvents
     * const telemetryEvents = await prisma.telemetryEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const telemetryEventWithIdOnly = await prisma.telemetryEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TelemetryEventFindManyArgs>(args?: SelectSubset<T, TelemetryEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelemetryEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TelemetryEvent.
     * @param {TelemetryEventCreateArgs} args - Arguments to create a TelemetryEvent.
     * @example
     * // Create one TelemetryEvent
     * const TelemetryEvent = await prisma.telemetryEvent.create({
     *   data: {
     *     // ... data to create a TelemetryEvent
     *   }
     * })
     * 
     */
    create<T extends TelemetryEventCreateArgs>(args: SelectSubset<T, TelemetryEventCreateArgs<ExtArgs>>): Prisma__TelemetryEventClient<$Result.GetResult<Prisma.$TelemetryEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TelemetryEvents.
     * @param {TelemetryEventCreateManyArgs} args - Arguments to create many TelemetryEvents.
     * @example
     * // Create many TelemetryEvents
     * const telemetryEvent = await prisma.telemetryEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TelemetryEventCreateManyArgs>(args?: SelectSubset<T, TelemetryEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TelemetryEvents and returns the data saved in the database.
     * @param {TelemetryEventCreateManyAndReturnArgs} args - Arguments to create many TelemetryEvents.
     * @example
     * // Create many TelemetryEvents
     * const telemetryEvent = await prisma.telemetryEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TelemetryEvents and only return the `id`
     * const telemetryEventWithIdOnly = await prisma.telemetryEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TelemetryEventCreateManyAndReturnArgs>(args?: SelectSubset<T, TelemetryEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelemetryEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TelemetryEvent.
     * @param {TelemetryEventDeleteArgs} args - Arguments to delete one TelemetryEvent.
     * @example
     * // Delete one TelemetryEvent
     * const TelemetryEvent = await prisma.telemetryEvent.delete({
     *   where: {
     *     // ... filter to delete one TelemetryEvent
     *   }
     * })
     * 
     */
    delete<T extends TelemetryEventDeleteArgs>(args: SelectSubset<T, TelemetryEventDeleteArgs<ExtArgs>>): Prisma__TelemetryEventClient<$Result.GetResult<Prisma.$TelemetryEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TelemetryEvent.
     * @param {TelemetryEventUpdateArgs} args - Arguments to update one TelemetryEvent.
     * @example
     * // Update one TelemetryEvent
     * const telemetryEvent = await prisma.telemetryEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TelemetryEventUpdateArgs>(args: SelectSubset<T, TelemetryEventUpdateArgs<ExtArgs>>): Prisma__TelemetryEventClient<$Result.GetResult<Prisma.$TelemetryEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TelemetryEvents.
     * @param {TelemetryEventDeleteManyArgs} args - Arguments to filter TelemetryEvents to delete.
     * @example
     * // Delete a few TelemetryEvents
     * const { count } = await prisma.telemetryEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TelemetryEventDeleteManyArgs>(args?: SelectSubset<T, TelemetryEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelemetryEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TelemetryEvents
     * const telemetryEvent = await prisma.telemetryEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TelemetryEventUpdateManyArgs>(args: SelectSubset<T, TelemetryEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelemetryEvents and returns the data updated in the database.
     * @param {TelemetryEventUpdateManyAndReturnArgs} args - Arguments to update many TelemetryEvents.
     * @example
     * // Update many TelemetryEvents
     * const telemetryEvent = await prisma.telemetryEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TelemetryEvents and only return the `id`
     * const telemetryEventWithIdOnly = await prisma.telemetryEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TelemetryEventUpdateManyAndReturnArgs>(args: SelectSubset<T, TelemetryEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelemetryEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TelemetryEvent.
     * @param {TelemetryEventUpsertArgs} args - Arguments to update or create a TelemetryEvent.
     * @example
     * // Update or create a TelemetryEvent
     * const telemetryEvent = await prisma.telemetryEvent.upsert({
     *   create: {
     *     // ... data to create a TelemetryEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TelemetryEvent we want to update
     *   }
     * })
     */
    upsert<T extends TelemetryEventUpsertArgs>(args: SelectSubset<T, TelemetryEventUpsertArgs<ExtArgs>>): Prisma__TelemetryEventClient<$Result.GetResult<Prisma.$TelemetryEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TelemetryEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryEventCountArgs} args - Arguments to filter TelemetryEvents to count.
     * @example
     * // Count the number of TelemetryEvents
     * const count = await prisma.telemetryEvent.count({
     *   where: {
     *     // ... the filter for the TelemetryEvents we want to count
     *   }
     * })
    **/
    count<T extends TelemetryEventCountArgs>(
      args?: Subset<T, TelemetryEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TelemetryEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TelemetryEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TelemetryEventAggregateArgs>(args: Subset<T, TelemetryEventAggregateArgs>): Prisma.PrismaPromise<GetTelemetryEventAggregateType<T>>

    /**
     * Group by TelemetryEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TelemetryEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TelemetryEventGroupByArgs['orderBy'] }
        : { orderBy?: TelemetryEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TelemetryEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTelemetryEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TelemetryEvent model
   */
  readonly fields: TelemetryEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TelemetryEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TelemetryEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends TelemetryEvent$userArgs<ExtArgs> = {}>(args?: Subset<T, TelemetryEvent$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TelemetryEvent model
   */
  interface TelemetryEventFieldRefs {
    readonly id: FieldRef<"TelemetryEvent", 'String'>
    readonly userId: FieldRef<"TelemetryEvent", 'String'>
    readonly type: FieldRef<"TelemetryEvent", 'String'>
    readonly event: FieldRef<"TelemetryEvent", 'String'>
    readonly value: FieldRef<"TelemetryEvent", 'Float'>
    readonly metadata: FieldRef<"TelemetryEvent", 'Json'>
    readonly version: FieldRef<"TelemetryEvent", 'String'>
    readonly createdAt: FieldRef<"TelemetryEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TelemetryEvent findUnique
   */
  export type TelemetryEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryEvent
     */
    select?: TelemetryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryEvent
     */
    omit?: TelemetryEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryEventInclude<ExtArgs> | null
    /**
     * Filter, which TelemetryEvent to fetch.
     */
    where: TelemetryEventWhereUniqueInput
  }

  /**
   * TelemetryEvent findUniqueOrThrow
   */
  export type TelemetryEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryEvent
     */
    select?: TelemetryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryEvent
     */
    omit?: TelemetryEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryEventInclude<ExtArgs> | null
    /**
     * Filter, which TelemetryEvent to fetch.
     */
    where: TelemetryEventWhereUniqueInput
  }

  /**
   * TelemetryEvent findFirst
   */
  export type TelemetryEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryEvent
     */
    select?: TelemetryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryEvent
     */
    omit?: TelemetryEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryEventInclude<ExtArgs> | null
    /**
     * Filter, which TelemetryEvent to fetch.
     */
    where?: TelemetryEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelemetryEvents to fetch.
     */
    orderBy?: TelemetryEventOrderByWithRelationInput | TelemetryEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelemetryEvents.
     */
    cursor?: TelemetryEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelemetryEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelemetryEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelemetryEvents.
     */
    distinct?: TelemetryEventScalarFieldEnum | TelemetryEventScalarFieldEnum[]
  }

  /**
   * TelemetryEvent findFirstOrThrow
   */
  export type TelemetryEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryEvent
     */
    select?: TelemetryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryEvent
     */
    omit?: TelemetryEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryEventInclude<ExtArgs> | null
    /**
     * Filter, which TelemetryEvent to fetch.
     */
    where?: TelemetryEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelemetryEvents to fetch.
     */
    orderBy?: TelemetryEventOrderByWithRelationInput | TelemetryEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelemetryEvents.
     */
    cursor?: TelemetryEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelemetryEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelemetryEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelemetryEvents.
     */
    distinct?: TelemetryEventScalarFieldEnum | TelemetryEventScalarFieldEnum[]
  }

  /**
   * TelemetryEvent findMany
   */
  export type TelemetryEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryEvent
     */
    select?: TelemetryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryEvent
     */
    omit?: TelemetryEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryEventInclude<ExtArgs> | null
    /**
     * Filter, which TelemetryEvents to fetch.
     */
    where?: TelemetryEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelemetryEvents to fetch.
     */
    orderBy?: TelemetryEventOrderByWithRelationInput | TelemetryEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TelemetryEvents.
     */
    cursor?: TelemetryEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelemetryEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelemetryEvents.
     */
    skip?: number
    distinct?: TelemetryEventScalarFieldEnum | TelemetryEventScalarFieldEnum[]
  }

  /**
   * TelemetryEvent create
   */
  export type TelemetryEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryEvent
     */
    select?: TelemetryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryEvent
     */
    omit?: TelemetryEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryEventInclude<ExtArgs> | null
    /**
     * The data needed to create a TelemetryEvent.
     */
    data: XOR<TelemetryEventCreateInput, TelemetryEventUncheckedCreateInput>
  }

  /**
   * TelemetryEvent createMany
   */
  export type TelemetryEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TelemetryEvents.
     */
    data: TelemetryEventCreateManyInput | TelemetryEventCreateManyInput[]
  }

  /**
   * TelemetryEvent createManyAndReturn
   */
  export type TelemetryEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryEvent
     */
    select?: TelemetryEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryEvent
     */
    omit?: TelemetryEventOmit<ExtArgs> | null
    /**
     * The data used to create many TelemetryEvents.
     */
    data: TelemetryEventCreateManyInput | TelemetryEventCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TelemetryEvent update
   */
  export type TelemetryEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryEvent
     */
    select?: TelemetryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryEvent
     */
    omit?: TelemetryEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryEventInclude<ExtArgs> | null
    /**
     * The data needed to update a TelemetryEvent.
     */
    data: XOR<TelemetryEventUpdateInput, TelemetryEventUncheckedUpdateInput>
    /**
     * Choose, which TelemetryEvent to update.
     */
    where: TelemetryEventWhereUniqueInput
  }

  /**
   * TelemetryEvent updateMany
   */
  export type TelemetryEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TelemetryEvents.
     */
    data: XOR<TelemetryEventUpdateManyMutationInput, TelemetryEventUncheckedUpdateManyInput>
    /**
     * Filter which TelemetryEvents to update
     */
    where?: TelemetryEventWhereInput
    /**
     * Limit how many TelemetryEvents to update.
     */
    limit?: number
  }

  /**
   * TelemetryEvent updateManyAndReturn
   */
  export type TelemetryEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryEvent
     */
    select?: TelemetryEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryEvent
     */
    omit?: TelemetryEventOmit<ExtArgs> | null
    /**
     * The data used to update TelemetryEvents.
     */
    data: XOR<TelemetryEventUpdateManyMutationInput, TelemetryEventUncheckedUpdateManyInput>
    /**
     * Filter which TelemetryEvents to update
     */
    where?: TelemetryEventWhereInput
    /**
     * Limit how many TelemetryEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TelemetryEvent upsert
   */
  export type TelemetryEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryEvent
     */
    select?: TelemetryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryEvent
     */
    omit?: TelemetryEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryEventInclude<ExtArgs> | null
    /**
     * The filter to search for the TelemetryEvent to update in case it exists.
     */
    where: TelemetryEventWhereUniqueInput
    /**
     * In case the TelemetryEvent found by the `where` argument doesn't exist, create a new TelemetryEvent with this data.
     */
    create: XOR<TelemetryEventCreateInput, TelemetryEventUncheckedCreateInput>
    /**
     * In case the TelemetryEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TelemetryEventUpdateInput, TelemetryEventUncheckedUpdateInput>
  }

  /**
   * TelemetryEvent delete
   */
  export type TelemetryEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryEvent
     */
    select?: TelemetryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryEvent
     */
    omit?: TelemetryEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryEventInclude<ExtArgs> | null
    /**
     * Filter which TelemetryEvent to delete.
     */
    where: TelemetryEventWhereUniqueInput
  }

  /**
   * TelemetryEvent deleteMany
   */
  export type TelemetryEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelemetryEvents to delete
     */
    where?: TelemetryEventWhereInput
    /**
     * Limit how many TelemetryEvents to delete.
     */
    limit?: number
  }

  /**
   * TelemetryEvent.user
   */
  export type TelemetryEvent$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * TelemetryEvent without action
   */
  export type TelemetryEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryEvent
     */
    select?: TelemetryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryEvent
     */
    omit?: TelemetryEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryEventInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    id: number
    email: number
    token: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    id: string
    email: string
    token: string
    expiresAt: Date
    createdAt: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "token" | "expiresAt" | "createdAt", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      token: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly id: FieldRef<"VerificationToken", 'String'>
    readonly email: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expiresAt: FieldRef<"VerificationToken", 'DateTime'>
    readonly createdAt: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    plan: 'plan',
    stripeId: 'stripeId',
    entitlements: 'entitlements'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    plan: 'plan',
    stripeId: 'stripeId'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const TeamMembershipScalarFieldEnum: {
    id: 'id',
    role: 'role',
    userId: 'userId',
    teamId: 'teamId',
    createdAt: 'createdAt'
  };

  export type TeamMembershipScalarFieldEnum = (typeof TeamMembershipScalarFieldEnum)[keyof typeof TeamMembershipScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    prompt: 'prompt',
    response: 'response',
    model: 'model',
    tokens: 'tokens',
    createdAt: 'createdAt'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const EditScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    instruction: 'instruction',
    fileContent: 'fileContent',
    diff: 'diff',
    language: 'language',
    createdAt: 'createdAt'
  };

  export type EditScalarFieldEnum = (typeof EditScalarFieldEnum)[keyof typeof EditScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    userId: 'userId',
    action: 'action',
    entityId: 'entityId',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SecurityEventScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    severity: 'severity',
    ip: 'ip',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type SecurityEventScalarFieldEnum = (typeof SecurityEventScalarFieldEnum)[keyof typeof SecurityEventScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    hashedToken: 'hashedToken',
    userId: 'userId',
    issuedAt: 'issuedAt',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    replacedByTokenId: 'replacedByTokenId',
    createdAt: 'createdAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const UsageCounterScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    chatCount: 'chatCount',
    editCount: 'editCount',
    date: 'date',
    createdAt: 'createdAt'
  };

  export type UsageCounterScalarFieldEnum = (typeof UsageCounterScalarFieldEnum)[keyof typeof UsageCounterScalarFieldEnum]


  export const UsageEventScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    clientRequestId: 'clientRequestId',
    type: 'type',
    status: 'status',
    model: 'model',
    tokens: 'tokens',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsageEventScalarFieldEnum = (typeof UsageEventScalarFieldEnum)[keyof typeof UsageEventScalarFieldEnum]


  export const StripeCustomerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    stripeCustomerId: 'stripeCustomerId',
    createdAt: 'createdAt'
  };

  export type StripeCustomerScalarFieldEnum = (typeof StripeCustomerScalarFieldEnum)[keyof typeof StripeCustomerScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    stripeSubscriptionId: 'stripeSubscriptionId',
    status: 'status',
    plan: 'plan',
    currentPeriodEnd: 'currentPeriodEnd',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const WebhookEventScalarFieldEnum: {
    id: 'id',
    processedAt: 'processedAt'
  };

  export type WebhookEventScalarFieldEnum = (typeof WebhookEventScalarFieldEnum)[keyof typeof WebhookEventScalarFieldEnum]


  export const TelemetryEventScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    event: 'event',
    value: 'value',
    metadata: 'metadata',
    version: 'version',
    createdAt: 'createdAt'
  };

  export type TelemetryEventScalarFieldEnum = (typeof TelemetryEventScalarFieldEnum)[keyof typeof TelemetryEventScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    plan?: StringFilter<"User"> | string
    stripeId?: StringNullableFilter<"User"> | string | null
    entitlements?: JsonNullableFilter<"User">
    chats?: ChatListRelationFilter
    edits?: EditListRelationFilter
    memberships?: TeamMembershipListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    securityEvents?: SecurityEventListRelationFilter
    telemetryEvents?: TelemetryEventListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    usageCounters?: UsageCounterListRelationFilter
    stripeCustomer?: XOR<StripeCustomerNullableScalarRelationFilter, StripeCustomerWhereInput> | null
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SortOrder
    stripeId?: SortOrderInput | SortOrder
    entitlements?: SortOrderInput | SortOrder
    chats?: ChatOrderByRelationAggregateInput
    edits?: EditOrderByRelationAggregateInput
    memberships?: TeamMembershipOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
    securityEvents?: SecurityEventOrderByRelationAggregateInput
    telemetryEvents?: TelemetryEventOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    usageCounters?: UsageCounterOrderByRelationAggregateInput
    stripeCustomer?: StripeCustomerOrderByWithRelationInput
    subscription?: SubscriptionOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    stripeId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    plan?: StringFilter<"User"> | string
    entitlements?: JsonNullableFilter<"User">
    chats?: ChatListRelationFilter
    edits?: EditListRelationFilter
    memberships?: TeamMembershipListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    securityEvents?: SecurityEventListRelationFilter
    telemetryEvents?: TelemetryEventListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    usageCounters?: UsageCounterListRelationFilter
    stripeCustomer?: XOR<StripeCustomerNullableScalarRelationFilter, StripeCustomerWhereInput> | null
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
  }, "id" | "email" | "stripeId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SortOrder
    stripeId?: SortOrderInput | SortOrder
    entitlements?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    plan?: StringWithAggregatesFilter<"User"> | string
    stripeId?: StringNullableWithAggregatesFilter<"User"> | string | null
    entitlements?: JsonNullableWithAggregatesFilter<"User">
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    plan?: StringFilter<"Team"> | string
    stripeId?: StringNullableFilter<"Team"> | string | null
    members?: TeamMembershipListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SortOrder
    stripeId?: SortOrderInput | SortOrder
    members?: TeamMembershipOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripeId?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    plan?: StringFilter<"Team"> | string
    members?: TeamMembershipListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "stripeId">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SortOrder
    stripeId?: SortOrderInput | SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    plan?: StringWithAggregatesFilter<"Team"> | string
    stripeId?: StringNullableWithAggregatesFilter<"Team"> | string | null
  }

  export type TeamMembershipWhereInput = {
    AND?: TeamMembershipWhereInput | TeamMembershipWhereInput[]
    OR?: TeamMembershipWhereInput[]
    NOT?: TeamMembershipWhereInput | TeamMembershipWhereInput[]
    id?: StringFilter<"TeamMembership"> | string
    role?: StringFilter<"TeamMembership"> | string
    userId?: StringFilter<"TeamMembership"> | string
    teamId?: StringFilter<"TeamMembership"> | string
    createdAt?: DateTimeFilter<"TeamMembership"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type TeamMembershipOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
  }

  export type TeamMembershipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_teamId?: TeamMembershipUserIdTeamIdCompoundUniqueInput
    AND?: TeamMembershipWhereInput | TeamMembershipWhereInput[]
    OR?: TeamMembershipWhereInput[]
    NOT?: TeamMembershipWhereInput | TeamMembershipWhereInput[]
    role?: StringFilter<"TeamMembership"> | string
    userId?: StringFilter<"TeamMembership"> | string
    teamId?: StringFilter<"TeamMembership"> | string
    createdAt?: DateTimeFilter<"TeamMembership"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "id" | "userId_teamId">

  export type TeamMembershipOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    _count?: TeamMembershipCountOrderByAggregateInput
    _max?: TeamMembershipMaxOrderByAggregateInput
    _min?: TeamMembershipMinOrderByAggregateInput
  }

  export type TeamMembershipScalarWhereWithAggregatesInput = {
    AND?: TeamMembershipScalarWhereWithAggregatesInput | TeamMembershipScalarWhereWithAggregatesInput[]
    OR?: TeamMembershipScalarWhereWithAggregatesInput[]
    NOT?: TeamMembershipScalarWhereWithAggregatesInput | TeamMembershipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamMembership"> | string
    role?: StringWithAggregatesFilter<"TeamMembership"> | string
    userId?: StringWithAggregatesFilter<"TeamMembership"> | string
    teamId?: StringWithAggregatesFilter<"TeamMembership"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TeamMembership"> | Date | string
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: StringFilter<"Chat"> | string
    userId?: StringFilter<"Chat"> | string
    prompt?: StringFilter<"Chat"> | string
    response?: StringNullableFilter<"Chat"> | string | null
    model?: StringNullableFilter<"Chat"> | string | null
    tokens?: IntNullableFilter<"Chat"> | number | null
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    prompt?: SortOrder
    response?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    tokens?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    userId?: StringFilter<"Chat"> | string
    prompt?: StringFilter<"Chat"> | string
    response?: StringNullableFilter<"Chat"> | string | null
    model?: StringNullableFilter<"Chat"> | string | null
    tokens?: IntNullableFilter<"Chat"> | number | null
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    prompt?: SortOrder
    response?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    tokens?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _avg?: ChatAvgOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
    _sum?: ChatSumOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chat"> | string
    userId?: StringWithAggregatesFilter<"Chat"> | string
    prompt?: StringWithAggregatesFilter<"Chat"> | string
    response?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    model?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    tokens?: IntNullableWithAggregatesFilter<"Chat"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
  }

  export type EditWhereInput = {
    AND?: EditWhereInput | EditWhereInput[]
    OR?: EditWhereInput[]
    NOT?: EditWhereInput | EditWhereInput[]
    id?: StringFilter<"Edit"> | string
    userId?: StringFilter<"Edit"> | string
    instruction?: StringFilter<"Edit"> | string
    fileContent?: StringFilter<"Edit"> | string
    diff?: StringNullableFilter<"Edit"> | string | null
    language?: StringNullableFilter<"Edit"> | string | null
    createdAt?: DateTimeFilter<"Edit"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EditOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    instruction?: SortOrder
    fileContent?: SortOrder
    diff?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EditWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EditWhereInput | EditWhereInput[]
    OR?: EditWhereInput[]
    NOT?: EditWhereInput | EditWhereInput[]
    userId?: StringFilter<"Edit"> | string
    instruction?: StringFilter<"Edit"> | string
    fileContent?: StringFilter<"Edit"> | string
    diff?: StringNullableFilter<"Edit"> | string | null
    language?: StringNullableFilter<"Edit"> | string | null
    createdAt?: DateTimeFilter<"Edit"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EditOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    instruction?: SortOrder
    fileContent?: SortOrder
    diff?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EditCountOrderByAggregateInput
    _max?: EditMaxOrderByAggregateInput
    _min?: EditMinOrderByAggregateInput
  }

  export type EditScalarWhereWithAggregatesInput = {
    AND?: EditScalarWhereWithAggregatesInput | EditScalarWhereWithAggregatesInput[]
    OR?: EditScalarWhereWithAggregatesInput[]
    NOT?: EditScalarWhereWithAggregatesInput | EditScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Edit"> | string
    userId?: StringWithAggregatesFilter<"Edit"> | string
    instruction?: StringWithAggregatesFilter<"Edit"> | string
    fileContent?: StringWithAggregatesFilter<"Edit"> | string
    diff?: StringNullableWithAggregatesFilter<"Edit"> | string | null
    language?: StringNullableWithAggregatesFilter<"Edit"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Edit"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    teamId?: StringFilter<"AuditLog"> | string
    userId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    team?: TeamOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    teamId?: StringFilter<"AuditLog"> | string
    userId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    teamId?: StringWithAggregatesFilter<"AuditLog"> | string
    userId?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"AuditLog">
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type SecurityEventWhereInput = {
    AND?: SecurityEventWhereInput | SecurityEventWhereInput[]
    OR?: SecurityEventWhereInput[]
    NOT?: SecurityEventWhereInput | SecurityEventWhereInput[]
    id?: StringFilter<"SecurityEvent"> | string
    userId?: StringNullableFilter<"SecurityEvent"> | string | null
    type?: StringFilter<"SecurityEvent"> | string
    severity?: StringFilter<"SecurityEvent"> | string
    ip?: StringNullableFilter<"SecurityEvent"> | string | null
    metadata?: JsonNullableFilter<"SecurityEvent">
    createdAt?: DateTimeFilter<"SecurityEvent"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type SecurityEventOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    type?: SortOrder
    severity?: SortOrder
    ip?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SecurityEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SecurityEventWhereInput | SecurityEventWhereInput[]
    OR?: SecurityEventWhereInput[]
    NOT?: SecurityEventWhereInput | SecurityEventWhereInput[]
    userId?: StringNullableFilter<"SecurityEvent"> | string | null
    type?: StringFilter<"SecurityEvent"> | string
    severity?: StringFilter<"SecurityEvent"> | string
    ip?: StringNullableFilter<"SecurityEvent"> | string | null
    metadata?: JsonNullableFilter<"SecurityEvent">
    createdAt?: DateTimeFilter<"SecurityEvent"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type SecurityEventOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    type?: SortOrder
    severity?: SortOrder
    ip?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SecurityEventCountOrderByAggregateInput
    _max?: SecurityEventMaxOrderByAggregateInput
    _min?: SecurityEventMinOrderByAggregateInput
  }

  export type SecurityEventScalarWhereWithAggregatesInput = {
    AND?: SecurityEventScalarWhereWithAggregatesInput | SecurityEventScalarWhereWithAggregatesInput[]
    OR?: SecurityEventScalarWhereWithAggregatesInput[]
    NOT?: SecurityEventScalarWhereWithAggregatesInput | SecurityEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SecurityEvent"> | string
    userId?: StringNullableWithAggregatesFilter<"SecurityEvent"> | string | null
    type?: StringWithAggregatesFilter<"SecurityEvent"> | string
    severity?: StringWithAggregatesFilter<"SecurityEvent"> | string
    ip?: StringNullableWithAggregatesFilter<"SecurityEvent"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"SecurityEvent">
    createdAt?: DateTimeWithAggregatesFilter<"SecurityEvent"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    hashedToken?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    issuedAt?: DateTimeFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
    replacedByTokenId?: StringNullableFilter<"RefreshToken"> | string | null
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    hashedToken?: SortOrder
    userId?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    replacedByTokenId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    hashedToken?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: StringFilter<"RefreshToken"> | string
    issuedAt?: DateTimeFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
    replacedByTokenId?: StringNullableFilter<"RefreshToken"> | string | null
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "hashedToken">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    hashedToken?: SortOrder
    userId?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    replacedByTokenId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    hashedToken?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    issuedAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableWithAggregatesFilter<"RefreshToken"> | Date | string | null
    replacedByTokenId?: StringNullableWithAggregatesFilter<"RefreshToken"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type UsageCounterWhereInput = {
    AND?: UsageCounterWhereInput | UsageCounterWhereInput[]
    OR?: UsageCounterWhereInput[]
    NOT?: UsageCounterWhereInput | UsageCounterWhereInput[]
    id?: StringFilter<"UsageCounter"> | string
    userId?: StringFilter<"UsageCounter"> | string
    chatCount?: IntFilter<"UsageCounter"> | number
    editCount?: IntFilter<"UsageCounter"> | number
    date?: StringFilter<"UsageCounter"> | string
    createdAt?: DateTimeFilter<"UsageCounter"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UsageCounterOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    chatCount?: SortOrder
    editCount?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UsageCounterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_date?: UsageCounterUserIdDateCompoundUniqueInput
    AND?: UsageCounterWhereInput | UsageCounterWhereInput[]
    OR?: UsageCounterWhereInput[]
    NOT?: UsageCounterWhereInput | UsageCounterWhereInput[]
    userId?: StringFilter<"UsageCounter"> | string
    chatCount?: IntFilter<"UsageCounter"> | number
    editCount?: IntFilter<"UsageCounter"> | number
    date?: StringFilter<"UsageCounter"> | string
    createdAt?: DateTimeFilter<"UsageCounter"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_date">

  export type UsageCounterOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    chatCount?: SortOrder
    editCount?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: UsageCounterCountOrderByAggregateInput
    _avg?: UsageCounterAvgOrderByAggregateInput
    _max?: UsageCounterMaxOrderByAggregateInput
    _min?: UsageCounterMinOrderByAggregateInput
    _sum?: UsageCounterSumOrderByAggregateInput
  }

  export type UsageCounterScalarWhereWithAggregatesInput = {
    AND?: UsageCounterScalarWhereWithAggregatesInput | UsageCounterScalarWhereWithAggregatesInput[]
    OR?: UsageCounterScalarWhereWithAggregatesInput[]
    NOT?: UsageCounterScalarWhereWithAggregatesInput | UsageCounterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UsageCounter"> | string
    userId?: StringWithAggregatesFilter<"UsageCounter"> | string
    chatCount?: IntWithAggregatesFilter<"UsageCounter"> | number
    editCount?: IntWithAggregatesFilter<"UsageCounter"> | number
    date?: StringWithAggregatesFilter<"UsageCounter"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UsageCounter"> | Date | string
  }

  export type UsageEventWhereInput = {
    AND?: UsageEventWhereInput | UsageEventWhereInput[]
    OR?: UsageEventWhereInput[]
    NOT?: UsageEventWhereInput | UsageEventWhereInput[]
    id?: StringFilter<"UsageEvent"> | string
    userId?: StringFilter<"UsageEvent"> | string
    clientRequestId?: StringFilter<"UsageEvent"> | string
    type?: StringFilter<"UsageEvent"> | string
    status?: StringFilter<"UsageEvent"> | string
    model?: StringNullableFilter<"UsageEvent"> | string | null
    tokens?: IntNullableFilter<"UsageEvent"> | number | null
    createdAt?: DateTimeFilter<"UsageEvent"> | Date | string
    updatedAt?: DateTimeFilter<"UsageEvent"> | Date | string
  }

  export type UsageEventOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    clientRequestId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    model?: SortOrderInput | SortOrder
    tokens?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsageEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clientRequestId?: string
    AND?: UsageEventWhereInput | UsageEventWhereInput[]
    OR?: UsageEventWhereInput[]
    NOT?: UsageEventWhereInput | UsageEventWhereInput[]
    userId?: StringFilter<"UsageEvent"> | string
    type?: StringFilter<"UsageEvent"> | string
    status?: StringFilter<"UsageEvent"> | string
    model?: StringNullableFilter<"UsageEvent"> | string | null
    tokens?: IntNullableFilter<"UsageEvent"> | number | null
    createdAt?: DateTimeFilter<"UsageEvent"> | Date | string
    updatedAt?: DateTimeFilter<"UsageEvent"> | Date | string
  }, "id" | "clientRequestId">

  export type UsageEventOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    clientRequestId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    model?: SortOrderInput | SortOrder
    tokens?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsageEventCountOrderByAggregateInput
    _avg?: UsageEventAvgOrderByAggregateInput
    _max?: UsageEventMaxOrderByAggregateInput
    _min?: UsageEventMinOrderByAggregateInput
    _sum?: UsageEventSumOrderByAggregateInput
  }

  export type UsageEventScalarWhereWithAggregatesInput = {
    AND?: UsageEventScalarWhereWithAggregatesInput | UsageEventScalarWhereWithAggregatesInput[]
    OR?: UsageEventScalarWhereWithAggregatesInput[]
    NOT?: UsageEventScalarWhereWithAggregatesInput | UsageEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UsageEvent"> | string
    userId?: StringWithAggregatesFilter<"UsageEvent"> | string
    clientRequestId?: StringWithAggregatesFilter<"UsageEvent"> | string
    type?: StringWithAggregatesFilter<"UsageEvent"> | string
    status?: StringWithAggregatesFilter<"UsageEvent"> | string
    model?: StringNullableWithAggregatesFilter<"UsageEvent"> | string | null
    tokens?: IntNullableWithAggregatesFilter<"UsageEvent"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"UsageEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UsageEvent"> | Date | string
  }

  export type StripeCustomerWhereInput = {
    AND?: StripeCustomerWhereInput | StripeCustomerWhereInput[]
    OR?: StripeCustomerWhereInput[]
    NOT?: StripeCustomerWhereInput | StripeCustomerWhereInput[]
    id?: StringFilter<"StripeCustomer"> | string
    userId?: StringFilter<"StripeCustomer"> | string
    stripeCustomerId?: StringFilter<"StripeCustomer"> | string
    createdAt?: DateTimeFilter<"StripeCustomer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StripeCustomerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StripeCustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    stripeCustomerId?: string
    AND?: StripeCustomerWhereInput | StripeCustomerWhereInput[]
    OR?: StripeCustomerWhereInput[]
    NOT?: StripeCustomerWhereInput | StripeCustomerWhereInput[]
    createdAt?: DateTimeFilter<"StripeCustomer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "stripeCustomerId">

  export type StripeCustomerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    createdAt?: SortOrder
    _count?: StripeCustomerCountOrderByAggregateInput
    _max?: StripeCustomerMaxOrderByAggregateInput
    _min?: StripeCustomerMinOrderByAggregateInput
  }

  export type StripeCustomerScalarWhereWithAggregatesInput = {
    AND?: StripeCustomerScalarWhereWithAggregatesInput | StripeCustomerScalarWhereWithAggregatesInput[]
    OR?: StripeCustomerScalarWhereWithAggregatesInput[]
    NOT?: StripeCustomerScalarWhereWithAggregatesInput | StripeCustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StripeCustomer"> | string
    userId?: StringWithAggregatesFilter<"StripeCustomer"> | string
    stripeCustomerId?: StringWithAggregatesFilter<"StripeCustomer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StripeCustomer"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    stripeSubscriptionId?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    plan?: StringFilter<"Subscription"> | string
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeSubscriptionId?: SortOrder
    status?: SortOrder
    plan?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    stripeSubscriptionId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    status?: StringFilter<"Subscription"> | string
    plan?: StringFilter<"Subscription"> | string
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "stripeSubscriptionId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeSubscriptionId?: SortOrder
    status?: SortOrder
    plan?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    userId?: StringWithAggregatesFilter<"Subscription"> | string
    stripeSubscriptionId?: StringWithAggregatesFilter<"Subscription"> | string
    status?: StringWithAggregatesFilter<"Subscription"> | string
    plan?: StringWithAggregatesFilter<"Subscription"> | string
    currentPeriodEnd?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type WebhookEventWhereInput = {
    AND?: WebhookEventWhereInput | WebhookEventWhereInput[]
    OR?: WebhookEventWhereInput[]
    NOT?: WebhookEventWhereInput | WebhookEventWhereInput[]
    id?: StringFilter<"WebhookEvent"> | string
    processedAt?: DateTimeFilter<"WebhookEvent"> | Date | string
  }

  export type WebhookEventOrderByWithRelationInput = {
    id?: SortOrder
    processedAt?: SortOrder
  }

  export type WebhookEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebhookEventWhereInput | WebhookEventWhereInput[]
    OR?: WebhookEventWhereInput[]
    NOT?: WebhookEventWhereInput | WebhookEventWhereInput[]
    processedAt?: DateTimeFilter<"WebhookEvent"> | Date | string
  }, "id">

  export type WebhookEventOrderByWithAggregationInput = {
    id?: SortOrder
    processedAt?: SortOrder
    _count?: WebhookEventCountOrderByAggregateInput
    _max?: WebhookEventMaxOrderByAggregateInput
    _min?: WebhookEventMinOrderByAggregateInput
  }

  export type WebhookEventScalarWhereWithAggregatesInput = {
    AND?: WebhookEventScalarWhereWithAggregatesInput | WebhookEventScalarWhereWithAggregatesInput[]
    OR?: WebhookEventScalarWhereWithAggregatesInput[]
    NOT?: WebhookEventScalarWhereWithAggregatesInput | WebhookEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebhookEvent"> | string
    processedAt?: DateTimeWithAggregatesFilter<"WebhookEvent"> | Date | string
  }

  export type TelemetryEventWhereInput = {
    AND?: TelemetryEventWhereInput | TelemetryEventWhereInput[]
    OR?: TelemetryEventWhereInput[]
    NOT?: TelemetryEventWhereInput | TelemetryEventWhereInput[]
    id?: StringFilter<"TelemetryEvent"> | string
    userId?: StringNullableFilter<"TelemetryEvent"> | string | null
    type?: StringFilter<"TelemetryEvent"> | string
    event?: StringFilter<"TelemetryEvent"> | string
    value?: FloatNullableFilter<"TelemetryEvent"> | number | null
    metadata?: JsonNullableFilter<"TelemetryEvent">
    version?: StringNullableFilter<"TelemetryEvent"> | string | null
    createdAt?: DateTimeFilter<"TelemetryEvent"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type TelemetryEventOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    type?: SortOrder
    event?: SortOrder
    value?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TelemetryEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TelemetryEventWhereInput | TelemetryEventWhereInput[]
    OR?: TelemetryEventWhereInput[]
    NOT?: TelemetryEventWhereInput | TelemetryEventWhereInput[]
    userId?: StringNullableFilter<"TelemetryEvent"> | string | null
    type?: StringFilter<"TelemetryEvent"> | string
    event?: StringFilter<"TelemetryEvent"> | string
    value?: FloatNullableFilter<"TelemetryEvent"> | number | null
    metadata?: JsonNullableFilter<"TelemetryEvent">
    version?: StringNullableFilter<"TelemetryEvent"> | string | null
    createdAt?: DateTimeFilter<"TelemetryEvent"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type TelemetryEventOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    type?: SortOrder
    event?: SortOrder
    value?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TelemetryEventCountOrderByAggregateInput
    _avg?: TelemetryEventAvgOrderByAggregateInput
    _max?: TelemetryEventMaxOrderByAggregateInput
    _min?: TelemetryEventMinOrderByAggregateInput
    _sum?: TelemetryEventSumOrderByAggregateInput
  }

  export type TelemetryEventScalarWhereWithAggregatesInput = {
    AND?: TelemetryEventScalarWhereWithAggregatesInput | TelemetryEventScalarWhereWithAggregatesInput[]
    OR?: TelemetryEventScalarWhereWithAggregatesInput[]
    NOT?: TelemetryEventScalarWhereWithAggregatesInput | TelemetryEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TelemetryEvent"> | string
    userId?: StringNullableWithAggregatesFilter<"TelemetryEvent"> | string | null
    type?: StringWithAggregatesFilter<"TelemetryEvent"> | string
    event?: StringWithAggregatesFilter<"TelemetryEvent"> | string
    value?: FloatNullableWithAggregatesFilter<"TelemetryEvent"> | number | null
    metadata?: JsonNullableWithAggregatesFilter<"TelemetryEvent">
    version?: StringNullableWithAggregatesFilter<"TelemetryEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TelemetryEvent"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    id?: StringFilter<"VerificationToken"> | string
    email?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expiresAt?: DateTimeFilter<"VerificationToken"> | Date | string
    createdAt?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    email_token?: VerificationTokenEmailTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    email?: StringFilter<"VerificationToken"> | string
    expiresAt?: DateTimeFilter<"VerificationToken"> | Date | string
    createdAt?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "id" | "token" | "email_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationToken"> | string
    email?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatCreateNestedManyWithoutUserInput
    edits?: EditCreateNestedManyWithoutUserInput
    memberships?: TeamMembershipCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    securityEvents?: SecurityEventCreateNestedManyWithoutUserInput
    telemetryEvents?: TelemetryEventCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    usageCounters?: UsageCounterCreateNestedManyWithoutUserInput
    stripeCustomer?: StripeCustomerCreateNestedOneWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUncheckedCreateNestedManyWithoutUserInput
    edits?: EditUncheckedCreateNestedManyWithoutUserInput
    memberships?: TeamMembershipUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutUserInput
    telemetryEvents?: TelemetryEventUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    usageCounters?: UsageCounterUncheckedCreateNestedManyWithoutUserInput
    stripeCustomer?: StripeCustomerUncheckedCreateNestedOneWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUpdateManyWithoutUserNestedInput
    edits?: EditUpdateManyWithoutUserNestedInput
    memberships?: TeamMembershipUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutUserNestedInput
    telemetryEvents?: TelemetryEventUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    usageCounters?: UsageCounterUpdateManyWithoutUserNestedInput
    stripeCustomer?: StripeCustomerUpdateOneWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUncheckedUpdateManyWithoutUserNestedInput
    edits?: EditUncheckedUpdateManyWithoutUserNestedInput
    memberships?: TeamMembershipUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutUserNestedInput
    telemetryEvents?: TelemetryEventUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    usageCounters?: UsageCounterUncheckedUpdateManyWithoutUserNestedInput
    stripeCustomer?: StripeCustomerUncheckedUpdateOneWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TeamCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    members?: TeamMembershipCreateNestedManyWithoutTeamInput
    auditLogs?: AuditLogCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    members?: TeamMembershipUncheckedCreateNestedManyWithoutTeamInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    members?: TeamMembershipUpdateManyWithoutTeamNestedInput
    auditLogs?: AuditLogUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    members?: TeamMembershipUncheckedUpdateManyWithoutTeamNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamMembershipCreateInput = {
    id?: string
    role?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
    team: TeamCreateNestedOneWithoutMembersInput
  }

  export type TeamMembershipUncheckedCreateInput = {
    id?: string
    role?: string
    userId: string
    teamId: string
    createdAt?: Date | string
  }

  export type TeamMembershipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type TeamMembershipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMembershipCreateManyInput = {
    id?: string
    role?: string
    userId: string
    teamId: string
    createdAt?: Date | string
  }

  export type TeamMembershipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMembershipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateInput = {
    id?: string
    prompt: string
    response?: string | null
    model?: string | null
    tokens?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChatsInput
  }

  export type ChatUncheckedCreateInput = {
    id?: string
    userId: string
    prompt: string
    response?: string | null
    model?: string | null
    tokens?: number | null
    createdAt?: Date | string
  }

  export type ChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatsNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateManyInput = {
    id?: string
    userId: string
    prompt: string
    response?: string | null
    model?: string | null
    tokens?: number | null
    createdAt?: Date | string
  }

  export type ChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EditCreateInput = {
    id?: string
    instruction: string
    fileContent: string
    diff?: string | null
    language?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEditsInput
  }

  export type EditUncheckedCreateInput = {
    id?: string
    userId: string
    instruction: string
    fileContent: string
    diff?: string | null
    language?: string | null
    createdAt?: Date | string
  }

  export type EditUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    fileContent?: StringFieldUpdateOperationsInput | string
    diff?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEditsNestedInput
  }

  export type EditUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    fileContent?: StringFieldUpdateOperationsInput | string
    diff?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EditCreateManyInput = {
    id?: string
    userId: string
    instruction: string
    fileContent: string
    diff?: string | null
    language?: string | null
    createdAt?: Date | string
  }

  export type EditUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    fileContent?: StringFieldUpdateOperationsInput | string
    diff?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EditUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    fileContent?: StringFieldUpdateOperationsInput | string
    diff?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    team: TeamCreateNestedOneWithoutAuditLogsInput
    user: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    teamId: string
    userId: string
    action: string
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutAuditLogsNestedInput
    user?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    teamId: string
    userId: string
    action: string
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityEventCreateInput = {
    id?: string
    type: string
    severity?: string
    ip?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutSecurityEventsInput
  }

  export type SecurityEventUncheckedCreateInput = {
    id?: string
    userId?: string | null
    type: string
    severity?: string
    ip?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SecurityEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSecurityEventsNestedInput
  }

  export type SecurityEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityEventCreateManyInput = {
    id?: string
    userId?: string | null
    type: string
    severity?: string
    ip?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SecurityEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    hashedToken: string
    issuedAt?: Date | string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    replacedByTokenId?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    hashedToken: string
    userId: string
    issuedAt?: Date | string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    replacedByTokenId?: string | null
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashedToken?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replacedByTokenId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashedToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replacedByTokenId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    hashedToken: string
    userId: string
    issuedAt?: Date | string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    replacedByTokenId?: string | null
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashedToken?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replacedByTokenId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashedToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replacedByTokenId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageCounterCreateInput = {
    id?: string
    chatCount?: number
    editCount?: number
    date: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUsageCountersInput
  }

  export type UsageCounterUncheckedCreateInput = {
    id?: string
    userId: string
    chatCount?: number
    editCount?: number
    date: string
    createdAt?: Date | string
  }

  export type UsageCounterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatCount?: IntFieldUpdateOperationsInput | number
    editCount?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUsageCountersNestedInput
  }

  export type UsageCounterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chatCount?: IntFieldUpdateOperationsInput | number
    editCount?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageCounterCreateManyInput = {
    id?: string
    userId: string
    chatCount?: number
    editCount?: number
    date: string
    createdAt?: Date | string
  }

  export type UsageCounterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatCount?: IntFieldUpdateOperationsInput | number
    editCount?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageCounterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    chatCount?: IntFieldUpdateOperationsInput | number
    editCount?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageEventCreateInput = {
    id?: string
    userId: string
    clientRequestId: string
    type: string
    status: string
    model?: string | null
    tokens?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsageEventUncheckedCreateInput = {
    id?: string
    userId: string
    clientRequestId: string
    type: string
    status: string
    model?: string | null
    tokens?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsageEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    clientRequestId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    clientRequestId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageEventCreateManyInput = {
    id?: string
    userId: string
    clientRequestId: string
    type: string
    status: string
    model?: string | null
    tokens?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsageEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    clientRequestId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    clientRequestId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StripeCustomerCreateInput = {
    id?: string
    stripeCustomerId: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStripeCustomerInput
  }

  export type StripeCustomerUncheckedCreateInput = {
    id?: string
    userId: string
    stripeCustomerId: string
    createdAt?: Date | string
  }

  export type StripeCustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStripeCustomerNestedInput
  }

  export type StripeCustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StripeCustomerCreateManyInput = {
    id?: string
    userId: string
    stripeCustomerId: string
    createdAt?: Date | string
  }

  export type StripeCustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StripeCustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    stripeSubscriptionId: string
    status: string
    plan: string
    currentPeriodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    stripeSubscriptionId: string
    status: string
    plan: string
    currentPeriodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    userId: string
    stripeSubscriptionId: string
    status: string
    plan: string
    currentPeriodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEventCreateInput = {
    id: string
    processedAt?: Date | string
  }

  export type WebhookEventUncheckedCreateInput = {
    id: string
    processedAt?: Date | string
  }

  export type WebhookEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEventCreateManyInput = {
    id: string
    processedAt?: Date | string
  }

  export type WebhookEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelemetryEventCreateInput = {
    id?: string
    type: string
    event: string
    value?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutTelemetryEventsInput
  }

  export type TelemetryEventUncheckedCreateInput = {
    id?: string
    userId?: string | null
    type: string
    event: string
    value?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: string | null
    createdAt?: Date | string
  }

  export type TelemetryEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTelemetryEventsNestedInput
  }

  export type TelemetryEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelemetryEventCreateManyInput = {
    id?: string
    userId?: string | null
    type: string
    event: string
    value?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: string | null
    createdAt?: Date | string
  }

  export type TelemetryEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelemetryEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type VerificationTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type EditListRelationFilter = {
    every?: EditWhereInput
    some?: EditWhereInput
    none?: EditWhereInput
  }

  export type TeamMembershipListRelationFilter = {
    every?: TeamMembershipWhereInput
    some?: TeamMembershipWhereInput
    none?: TeamMembershipWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SecurityEventListRelationFilter = {
    every?: SecurityEventWhereInput
    some?: SecurityEventWhereInput
    none?: SecurityEventWhereInput
  }

  export type TelemetryEventListRelationFilter = {
    every?: TelemetryEventWhereInput
    some?: TelemetryEventWhereInput
    none?: TelemetryEventWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type UsageCounterListRelationFilter = {
    every?: UsageCounterWhereInput
    some?: UsageCounterWhereInput
    none?: UsageCounterWhereInput
  }

  export type StripeCustomerNullableScalarRelationFilter = {
    is?: StripeCustomerWhereInput | null
    isNot?: StripeCustomerWhereInput | null
  }

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EditOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamMembershipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SecurityEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TelemetryEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsageCounterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SortOrder
    stripeId?: SortOrder
    entitlements?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SortOrder
    stripeId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SortOrder
    stripeId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SortOrder
    stripeId?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SortOrder
    stripeId?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SortOrder
    stripeId?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type TeamMembershipUserIdTeamIdCompoundUniqueInput = {
    userId: string
    teamId: string
  }

  export type TeamMembershipCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamMembershipMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamMembershipMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    model?: SortOrder
    tokens?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatAvgOrderByAggregateInput = {
    tokens?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    model?: SortOrder
    tokens?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    model?: SortOrder
    tokens?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatSumOrderByAggregateInput = {
    tokens?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EditCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    instruction?: SortOrder
    fileContent?: SortOrder
    diff?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
  }

  export type EditMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    instruction?: SortOrder
    fileContent?: SortOrder
    diff?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
  }

  export type EditMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    instruction?: SortOrder
    fileContent?: SortOrder
    diff?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SecurityEventCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    ip?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type SecurityEventMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
  }

  export type SecurityEventMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    hashedToken?: SortOrder
    userId?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    replacedByTokenId?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    hashedToken?: SortOrder
    userId?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    replacedByTokenId?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    hashedToken?: SortOrder
    userId?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    revokedAt?: SortOrder
    replacedByTokenId?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UsageCounterUserIdDateCompoundUniqueInput = {
    userId: string
    date: string
  }

  export type UsageCounterCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatCount?: SortOrder
    editCount?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type UsageCounterAvgOrderByAggregateInput = {
    chatCount?: SortOrder
    editCount?: SortOrder
  }

  export type UsageCounterMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatCount?: SortOrder
    editCount?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type UsageCounterMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatCount?: SortOrder
    editCount?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type UsageCounterSumOrderByAggregateInput = {
    chatCount?: SortOrder
    editCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UsageEventCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clientRequestId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    model?: SortOrder
    tokens?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsageEventAvgOrderByAggregateInput = {
    tokens?: SortOrder
  }

  export type UsageEventMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clientRequestId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    model?: SortOrder
    tokens?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsageEventMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clientRequestId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    model?: SortOrder
    tokens?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsageEventSumOrderByAggregateInput = {
    tokens?: SortOrder
  }

  export type StripeCustomerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    createdAt?: SortOrder
  }

  export type StripeCustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    createdAt?: SortOrder
  }

  export type StripeCustomerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeCustomerId?: SortOrder
    createdAt?: SortOrder
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeSubscriptionId?: SortOrder
    status?: SortOrder
    plan?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeSubscriptionId?: SortOrder
    status?: SortOrder
    plan?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeSubscriptionId?: SortOrder
    status?: SortOrder
    plan?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebhookEventCountOrderByAggregateInput = {
    id?: SortOrder
    processedAt?: SortOrder
  }

  export type WebhookEventMaxOrderByAggregateInput = {
    id?: SortOrder
    processedAt?: SortOrder
  }

  export type WebhookEventMinOrderByAggregateInput = {
    id?: SortOrder
    processedAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type TelemetryEventCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    event?: SortOrder
    value?: SortOrder
    metadata?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
  }

  export type TelemetryEventAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type TelemetryEventMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    event?: SortOrder
    value?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
  }

  export type TelemetryEventMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    event?: SortOrder
    value?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
  }

  export type TelemetryEventSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type VerificationTokenEmailTokenCompoundUniqueInput = {
    email: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput> | ChatCreateWithoutUserInput[] | ChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUserInput | ChatCreateOrConnectWithoutUserInput[]
    createMany?: ChatCreateManyUserInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type EditCreateNestedManyWithoutUserInput = {
    create?: XOR<EditCreateWithoutUserInput, EditUncheckedCreateWithoutUserInput> | EditCreateWithoutUserInput[] | EditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EditCreateOrConnectWithoutUserInput | EditCreateOrConnectWithoutUserInput[]
    createMany?: EditCreateManyUserInputEnvelope
    connect?: EditWhereUniqueInput | EditWhereUniqueInput[]
  }

  export type TeamMembershipCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamMembershipCreateWithoutUserInput, TeamMembershipUncheckedCreateWithoutUserInput> | TeamMembershipCreateWithoutUserInput[] | TeamMembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMembershipCreateOrConnectWithoutUserInput | TeamMembershipCreateOrConnectWithoutUserInput[]
    createMany?: TeamMembershipCreateManyUserInputEnvelope
    connect?: TeamMembershipWhereUniqueInput | TeamMembershipWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type SecurityEventCreateNestedManyWithoutUserInput = {
    create?: XOR<SecurityEventCreateWithoutUserInput, SecurityEventUncheckedCreateWithoutUserInput> | SecurityEventCreateWithoutUserInput[] | SecurityEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SecurityEventCreateOrConnectWithoutUserInput | SecurityEventCreateOrConnectWithoutUserInput[]
    createMany?: SecurityEventCreateManyUserInputEnvelope
    connect?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
  }

  export type TelemetryEventCreateNestedManyWithoutUserInput = {
    create?: XOR<TelemetryEventCreateWithoutUserInput, TelemetryEventUncheckedCreateWithoutUserInput> | TelemetryEventCreateWithoutUserInput[] | TelemetryEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TelemetryEventCreateOrConnectWithoutUserInput | TelemetryEventCreateOrConnectWithoutUserInput[]
    createMany?: TelemetryEventCreateManyUserInputEnvelope
    connect?: TelemetryEventWhereUniqueInput | TelemetryEventWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type UsageCounterCreateNestedManyWithoutUserInput = {
    create?: XOR<UsageCounterCreateWithoutUserInput, UsageCounterUncheckedCreateWithoutUserInput> | UsageCounterCreateWithoutUserInput[] | UsageCounterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsageCounterCreateOrConnectWithoutUserInput | UsageCounterCreateOrConnectWithoutUserInput[]
    createMany?: UsageCounterCreateManyUserInputEnvelope
    connect?: UsageCounterWhereUniqueInput | UsageCounterWhereUniqueInput[]
  }

  export type StripeCustomerCreateNestedOneWithoutUserInput = {
    create?: XOR<StripeCustomerCreateWithoutUserInput, StripeCustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: StripeCustomerCreateOrConnectWithoutUserInput
    connect?: StripeCustomerWhereUniqueInput
  }

  export type SubscriptionCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type ChatUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput> | ChatCreateWithoutUserInput[] | ChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUserInput | ChatCreateOrConnectWithoutUserInput[]
    createMany?: ChatCreateManyUserInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type EditUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EditCreateWithoutUserInput, EditUncheckedCreateWithoutUserInput> | EditCreateWithoutUserInput[] | EditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EditCreateOrConnectWithoutUserInput | EditCreateOrConnectWithoutUserInput[]
    createMany?: EditCreateManyUserInputEnvelope
    connect?: EditWhereUniqueInput | EditWhereUniqueInput[]
  }

  export type TeamMembershipUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamMembershipCreateWithoutUserInput, TeamMembershipUncheckedCreateWithoutUserInput> | TeamMembershipCreateWithoutUserInput[] | TeamMembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMembershipCreateOrConnectWithoutUserInput | TeamMembershipCreateOrConnectWithoutUserInput[]
    createMany?: TeamMembershipCreateManyUserInputEnvelope
    connect?: TeamMembershipWhereUniqueInput | TeamMembershipWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type SecurityEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SecurityEventCreateWithoutUserInput, SecurityEventUncheckedCreateWithoutUserInput> | SecurityEventCreateWithoutUserInput[] | SecurityEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SecurityEventCreateOrConnectWithoutUserInput | SecurityEventCreateOrConnectWithoutUserInput[]
    createMany?: SecurityEventCreateManyUserInputEnvelope
    connect?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
  }

  export type TelemetryEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TelemetryEventCreateWithoutUserInput, TelemetryEventUncheckedCreateWithoutUserInput> | TelemetryEventCreateWithoutUserInput[] | TelemetryEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TelemetryEventCreateOrConnectWithoutUserInput | TelemetryEventCreateOrConnectWithoutUserInput[]
    createMany?: TelemetryEventCreateManyUserInputEnvelope
    connect?: TelemetryEventWhereUniqueInput | TelemetryEventWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type UsageCounterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UsageCounterCreateWithoutUserInput, UsageCounterUncheckedCreateWithoutUserInput> | UsageCounterCreateWithoutUserInput[] | UsageCounterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsageCounterCreateOrConnectWithoutUserInput | UsageCounterCreateOrConnectWithoutUserInput[]
    createMany?: UsageCounterCreateManyUserInputEnvelope
    connect?: UsageCounterWhereUniqueInput | UsageCounterWhereUniqueInput[]
  }

  export type StripeCustomerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StripeCustomerCreateWithoutUserInput, StripeCustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: StripeCustomerCreateOrConnectWithoutUserInput
    connect?: StripeCustomerWhereUniqueInput
  }

  export type SubscriptionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ChatUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput> | ChatCreateWithoutUserInput[] | ChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUserInput | ChatCreateOrConnectWithoutUserInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutUserInput | ChatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatCreateManyUserInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutUserInput | ChatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutUserInput | ChatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type EditUpdateManyWithoutUserNestedInput = {
    create?: XOR<EditCreateWithoutUserInput, EditUncheckedCreateWithoutUserInput> | EditCreateWithoutUserInput[] | EditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EditCreateOrConnectWithoutUserInput | EditCreateOrConnectWithoutUserInput[]
    upsert?: EditUpsertWithWhereUniqueWithoutUserInput | EditUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EditCreateManyUserInputEnvelope
    set?: EditWhereUniqueInput | EditWhereUniqueInput[]
    disconnect?: EditWhereUniqueInput | EditWhereUniqueInput[]
    delete?: EditWhereUniqueInput | EditWhereUniqueInput[]
    connect?: EditWhereUniqueInput | EditWhereUniqueInput[]
    update?: EditUpdateWithWhereUniqueWithoutUserInput | EditUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EditUpdateManyWithWhereWithoutUserInput | EditUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EditScalarWhereInput | EditScalarWhereInput[]
  }

  export type TeamMembershipUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamMembershipCreateWithoutUserInput, TeamMembershipUncheckedCreateWithoutUserInput> | TeamMembershipCreateWithoutUserInput[] | TeamMembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMembershipCreateOrConnectWithoutUserInput | TeamMembershipCreateOrConnectWithoutUserInput[]
    upsert?: TeamMembershipUpsertWithWhereUniqueWithoutUserInput | TeamMembershipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamMembershipCreateManyUserInputEnvelope
    set?: TeamMembershipWhereUniqueInput | TeamMembershipWhereUniqueInput[]
    disconnect?: TeamMembershipWhereUniqueInput | TeamMembershipWhereUniqueInput[]
    delete?: TeamMembershipWhereUniqueInput | TeamMembershipWhereUniqueInput[]
    connect?: TeamMembershipWhereUniqueInput | TeamMembershipWhereUniqueInput[]
    update?: TeamMembershipUpdateWithWhereUniqueWithoutUserInput | TeamMembershipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamMembershipUpdateManyWithWhereWithoutUserInput | TeamMembershipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamMembershipScalarWhereInput | TeamMembershipScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type SecurityEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<SecurityEventCreateWithoutUserInput, SecurityEventUncheckedCreateWithoutUserInput> | SecurityEventCreateWithoutUserInput[] | SecurityEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SecurityEventCreateOrConnectWithoutUserInput | SecurityEventCreateOrConnectWithoutUserInput[]
    upsert?: SecurityEventUpsertWithWhereUniqueWithoutUserInput | SecurityEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SecurityEventCreateManyUserInputEnvelope
    set?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    disconnect?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    delete?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    connect?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    update?: SecurityEventUpdateWithWhereUniqueWithoutUserInput | SecurityEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SecurityEventUpdateManyWithWhereWithoutUserInput | SecurityEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SecurityEventScalarWhereInput | SecurityEventScalarWhereInput[]
  }

  export type TelemetryEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<TelemetryEventCreateWithoutUserInput, TelemetryEventUncheckedCreateWithoutUserInput> | TelemetryEventCreateWithoutUserInput[] | TelemetryEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TelemetryEventCreateOrConnectWithoutUserInput | TelemetryEventCreateOrConnectWithoutUserInput[]
    upsert?: TelemetryEventUpsertWithWhereUniqueWithoutUserInput | TelemetryEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TelemetryEventCreateManyUserInputEnvelope
    set?: TelemetryEventWhereUniqueInput | TelemetryEventWhereUniqueInput[]
    disconnect?: TelemetryEventWhereUniqueInput | TelemetryEventWhereUniqueInput[]
    delete?: TelemetryEventWhereUniqueInput | TelemetryEventWhereUniqueInput[]
    connect?: TelemetryEventWhereUniqueInput | TelemetryEventWhereUniqueInput[]
    update?: TelemetryEventUpdateWithWhereUniqueWithoutUserInput | TelemetryEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TelemetryEventUpdateManyWithWhereWithoutUserInput | TelemetryEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TelemetryEventScalarWhereInput | TelemetryEventScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type UsageCounterUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsageCounterCreateWithoutUserInput, UsageCounterUncheckedCreateWithoutUserInput> | UsageCounterCreateWithoutUserInput[] | UsageCounterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsageCounterCreateOrConnectWithoutUserInput | UsageCounterCreateOrConnectWithoutUserInput[]
    upsert?: UsageCounterUpsertWithWhereUniqueWithoutUserInput | UsageCounterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsageCounterCreateManyUserInputEnvelope
    set?: UsageCounterWhereUniqueInput | UsageCounterWhereUniqueInput[]
    disconnect?: UsageCounterWhereUniqueInput | UsageCounterWhereUniqueInput[]
    delete?: UsageCounterWhereUniqueInput | UsageCounterWhereUniqueInput[]
    connect?: UsageCounterWhereUniqueInput | UsageCounterWhereUniqueInput[]
    update?: UsageCounterUpdateWithWhereUniqueWithoutUserInput | UsageCounterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsageCounterUpdateManyWithWhereWithoutUserInput | UsageCounterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsageCounterScalarWhereInput | UsageCounterScalarWhereInput[]
  }

  export type StripeCustomerUpdateOneWithoutUserNestedInput = {
    create?: XOR<StripeCustomerCreateWithoutUserInput, StripeCustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: StripeCustomerCreateOrConnectWithoutUserInput
    upsert?: StripeCustomerUpsertWithoutUserInput
    disconnect?: StripeCustomerWhereInput | boolean
    delete?: StripeCustomerWhereInput | boolean
    connect?: StripeCustomerWhereUniqueInput
    update?: XOR<XOR<StripeCustomerUpdateToOneWithWhereWithoutUserInput, StripeCustomerUpdateWithoutUserInput>, StripeCustomerUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type ChatUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput> | ChatCreateWithoutUserInput[] | ChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUserInput | ChatCreateOrConnectWithoutUserInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutUserInput | ChatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatCreateManyUserInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutUserInput | ChatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutUserInput | ChatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type EditUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EditCreateWithoutUserInput, EditUncheckedCreateWithoutUserInput> | EditCreateWithoutUserInput[] | EditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EditCreateOrConnectWithoutUserInput | EditCreateOrConnectWithoutUserInput[]
    upsert?: EditUpsertWithWhereUniqueWithoutUserInput | EditUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EditCreateManyUserInputEnvelope
    set?: EditWhereUniqueInput | EditWhereUniqueInput[]
    disconnect?: EditWhereUniqueInput | EditWhereUniqueInput[]
    delete?: EditWhereUniqueInput | EditWhereUniqueInput[]
    connect?: EditWhereUniqueInput | EditWhereUniqueInput[]
    update?: EditUpdateWithWhereUniqueWithoutUserInput | EditUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EditUpdateManyWithWhereWithoutUserInput | EditUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EditScalarWhereInput | EditScalarWhereInput[]
  }

  export type TeamMembershipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamMembershipCreateWithoutUserInput, TeamMembershipUncheckedCreateWithoutUserInput> | TeamMembershipCreateWithoutUserInput[] | TeamMembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMembershipCreateOrConnectWithoutUserInput | TeamMembershipCreateOrConnectWithoutUserInput[]
    upsert?: TeamMembershipUpsertWithWhereUniqueWithoutUserInput | TeamMembershipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamMembershipCreateManyUserInputEnvelope
    set?: TeamMembershipWhereUniqueInput | TeamMembershipWhereUniqueInput[]
    disconnect?: TeamMembershipWhereUniqueInput | TeamMembershipWhereUniqueInput[]
    delete?: TeamMembershipWhereUniqueInput | TeamMembershipWhereUniqueInput[]
    connect?: TeamMembershipWhereUniqueInput | TeamMembershipWhereUniqueInput[]
    update?: TeamMembershipUpdateWithWhereUniqueWithoutUserInput | TeamMembershipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamMembershipUpdateManyWithWhereWithoutUserInput | TeamMembershipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamMembershipScalarWhereInput | TeamMembershipScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type SecurityEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SecurityEventCreateWithoutUserInput, SecurityEventUncheckedCreateWithoutUserInput> | SecurityEventCreateWithoutUserInput[] | SecurityEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SecurityEventCreateOrConnectWithoutUserInput | SecurityEventCreateOrConnectWithoutUserInput[]
    upsert?: SecurityEventUpsertWithWhereUniqueWithoutUserInput | SecurityEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SecurityEventCreateManyUserInputEnvelope
    set?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    disconnect?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    delete?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    connect?: SecurityEventWhereUniqueInput | SecurityEventWhereUniqueInput[]
    update?: SecurityEventUpdateWithWhereUniqueWithoutUserInput | SecurityEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SecurityEventUpdateManyWithWhereWithoutUserInput | SecurityEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SecurityEventScalarWhereInput | SecurityEventScalarWhereInput[]
  }

  export type TelemetryEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TelemetryEventCreateWithoutUserInput, TelemetryEventUncheckedCreateWithoutUserInput> | TelemetryEventCreateWithoutUserInput[] | TelemetryEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TelemetryEventCreateOrConnectWithoutUserInput | TelemetryEventCreateOrConnectWithoutUserInput[]
    upsert?: TelemetryEventUpsertWithWhereUniqueWithoutUserInput | TelemetryEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TelemetryEventCreateManyUserInputEnvelope
    set?: TelemetryEventWhereUniqueInput | TelemetryEventWhereUniqueInput[]
    disconnect?: TelemetryEventWhereUniqueInput | TelemetryEventWhereUniqueInput[]
    delete?: TelemetryEventWhereUniqueInput | TelemetryEventWhereUniqueInput[]
    connect?: TelemetryEventWhereUniqueInput | TelemetryEventWhereUniqueInput[]
    update?: TelemetryEventUpdateWithWhereUniqueWithoutUserInput | TelemetryEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TelemetryEventUpdateManyWithWhereWithoutUserInput | TelemetryEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TelemetryEventScalarWhereInput | TelemetryEventScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type UsageCounterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsageCounterCreateWithoutUserInput, UsageCounterUncheckedCreateWithoutUserInput> | UsageCounterCreateWithoutUserInput[] | UsageCounterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsageCounterCreateOrConnectWithoutUserInput | UsageCounterCreateOrConnectWithoutUserInput[]
    upsert?: UsageCounterUpsertWithWhereUniqueWithoutUserInput | UsageCounterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsageCounterCreateManyUserInputEnvelope
    set?: UsageCounterWhereUniqueInput | UsageCounterWhereUniqueInput[]
    disconnect?: UsageCounterWhereUniqueInput | UsageCounterWhereUniqueInput[]
    delete?: UsageCounterWhereUniqueInput | UsageCounterWhereUniqueInput[]
    connect?: UsageCounterWhereUniqueInput | UsageCounterWhereUniqueInput[]
    update?: UsageCounterUpdateWithWhereUniqueWithoutUserInput | UsageCounterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsageCounterUpdateManyWithWhereWithoutUserInput | UsageCounterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsageCounterScalarWhereInput | UsageCounterScalarWhereInput[]
  }

  export type StripeCustomerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StripeCustomerCreateWithoutUserInput, StripeCustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: StripeCustomerCreateOrConnectWithoutUserInput
    upsert?: StripeCustomerUpsertWithoutUserInput
    disconnect?: StripeCustomerWhereInput | boolean
    delete?: StripeCustomerWhereInput | boolean
    connect?: StripeCustomerWhereUniqueInput
    update?: XOR<XOR<StripeCustomerUpdateToOneWithWhereWithoutUserInput, StripeCustomerUpdateWithoutUserInput>, StripeCustomerUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type TeamMembershipCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamMembershipCreateWithoutTeamInput, TeamMembershipUncheckedCreateWithoutTeamInput> | TeamMembershipCreateWithoutTeamInput[] | TeamMembershipUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMembershipCreateOrConnectWithoutTeamInput | TeamMembershipCreateOrConnectWithoutTeamInput[]
    createMany?: TeamMembershipCreateManyTeamInputEnvelope
    connect?: TeamMembershipWhereUniqueInput | TeamMembershipWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutTeamInput = {
    create?: XOR<AuditLogCreateWithoutTeamInput, AuditLogUncheckedCreateWithoutTeamInput> | AuditLogCreateWithoutTeamInput[] | AuditLogUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutTeamInput | AuditLogCreateOrConnectWithoutTeamInput[]
    createMany?: AuditLogCreateManyTeamInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type TeamMembershipUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamMembershipCreateWithoutTeamInput, TeamMembershipUncheckedCreateWithoutTeamInput> | TeamMembershipCreateWithoutTeamInput[] | TeamMembershipUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMembershipCreateOrConnectWithoutTeamInput | TeamMembershipCreateOrConnectWithoutTeamInput[]
    createMany?: TeamMembershipCreateManyTeamInputEnvelope
    connect?: TeamMembershipWhereUniqueInput | TeamMembershipWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<AuditLogCreateWithoutTeamInput, AuditLogUncheckedCreateWithoutTeamInput> | AuditLogCreateWithoutTeamInput[] | AuditLogUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutTeamInput | AuditLogCreateOrConnectWithoutTeamInput[]
    createMany?: AuditLogCreateManyTeamInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type TeamMembershipUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamMembershipCreateWithoutTeamInput, TeamMembershipUncheckedCreateWithoutTeamInput> | TeamMembershipCreateWithoutTeamInput[] | TeamMembershipUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMembershipCreateOrConnectWithoutTeamInput | TeamMembershipCreateOrConnectWithoutTeamInput[]
    upsert?: TeamMembershipUpsertWithWhereUniqueWithoutTeamInput | TeamMembershipUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamMembershipCreateManyTeamInputEnvelope
    set?: TeamMembershipWhereUniqueInput | TeamMembershipWhereUniqueInput[]
    disconnect?: TeamMembershipWhereUniqueInput | TeamMembershipWhereUniqueInput[]
    delete?: TeamMembershipWhereUniqueInput | TeamMembershipWhereUniqueInput[]
    connect?: TeamMembershipWhereUniqueInput | TeamMembershipWhereUniqueInput[]
    update?: TeamMembershipUpdateWithWhereUniqueWithoutTeamInput | TeamMembershipUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamMembershipUpdateManyWithWhereWithoutTeamInput | TeamMembershipUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamMembershipScalarWhereInput | TeamMembershipScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutTeamNestedInput = {
    create?: XOR<AuditLogCreateWithoutTeamInput, AuditLogUncheckedCreateWithoutTeamInput> | AuditLogCreateWithoutTeamInput[] | AuditLogUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutTeamInput | AuditLogCreateOrConnectWithoutTeamInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutTeamInput | AuditLogUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: AuditLogCreateManyTeamInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutTeamInput | AuditLogUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutTeamInput | AuditLogUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type TeamMembershipUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamMembershipCreateWithoutTeamInput, TeamMembershipUncheckedCreateWithoutTeamInput> | TeamMembershipCreateWithoutTeamInput[] | TeamMembershipUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMembershipCreateOrConnectWithoutTeamInput | TeamMembershipCreateOrConnectWithoutTeamInput[]
    upsert?: TeamMembershipUpsertWithWhereUniqueWithoutTeamInput | TeamMembershipUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamMembershipCreateManyTeamInputEnvelope
    set?: TeamMembershipWhereUniqueInput | TeamMembershipWhereUniqueInput[]
    disconnect?: TeamMembershipWhereUniqueInput | TeamMembershipWhereUniqueInput[]
    delete?: TeamMembershipWhereUniqueInput | TeamMembershipWhereUniqueInput[]
    connect?: TeamMembershipWhereUniqueInput | TeamMembershipWhereUniqueInput[]
    update?: TeamMembershipUpdateWithWhereUniqueWithoutTeamInput | TeamMembershipUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamMembershipUpdateManyWithWhereWithoutTeamInput | TeamMembershipUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamMembershipScalarWhereInput | TeamMembershipScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<AuditLogCreateWithoutTeamInput, AuditLogUncheckedCreateWithoutTeamInput> | AuditLogCreateWithoutTeamInput[] | AuditLogUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutTeamInput | AuditLogCreateOrConnectWithoutTeamInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutTeamInput | AuditLogUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: AuditLogCreateManyTeamInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutTeamInput | AuditLogUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutTeamInput | AuditLogUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutMembersInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    connect?: TeamWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type TeamUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    upsert?: TeamUpsertWithoutMembersInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMembersInput, TeamUpdateWithoutMembersInput>, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type UserCreateNestedOneWithoutChatsInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput
    upsert?: UserUpsertWithoutChatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatsInput, UserUpdateWithoutChatsInput>, UserUncheckedUpdateWithoutChatsInput>
  }

  export type UserCreateNestedOneWithoutEditsInput = {
    create?: XOR<UserCreateWithoutEditsInput, UserUncheckedCreateWithoutEditsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEditsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEditsNestedInput = {
    create?: XOR<UserCreateWithoutEditsInput, UserUncheckedCreateWithoutEditsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEditsInput
    upsert?: UserUpsertWithoutEditsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEditsInput, UserUpdateWithoutEditsInput>, UserUncheckedUpdateWithoutEditsInput>
  }

  export type TeamCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<TeamCreateWithoutAuditLogsInput, TeamUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutAuditLogsInput
    connect?: TeamWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type TeamUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<TeamCreateWithoutAuditLogsInput, TeamUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutAuditLogsInput
    upsert?: TeamUpsertWithoutAuditLogsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutAuditLogsInput, TeamUpdateWithoutAuditLogsInput>, TeamUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserCreateNestedOneWithoutSecurityEventsInput = {
    create?: XOR<UserCreateWithoutSecurityEventsInput, UserUncheckedCreateWithoutSecurityEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSecurityEventsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutSecurityEventsNestedInput = {
    create?: XOR<UserCreateWithoutSecurityEventsInput, UserUncheckedCreateWithoutSecurityEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSecurityEventsInput
    upsert?: UserUpsertWithoutSecurityEventsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSecurityEventsInput, UserUpdateWithoutSecurityEventsInput>, UserUncheckedUpdateWithoutSecurityEventsInput>
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserCreateNestedOneWithoutUsageCountersInput = {
    create?: XOR<UserCreateWithoutUsageCountersInput, UserUncheckedCreateWithoutUsageCountersInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsageCountersInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutUsageCountersNestedInput = {
    create?: XOR<UserCreateWithoutUsageCountersInput, UserUncheckedCreateWithoutUsageCountersInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsageCountersInput
    upsert?: UserUpsertWithoutUsageCountersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUsageCountersInput, UserUpdateWithoutUsageCountersInput>, UserUncheckedUpdateWithoutUsageCountersInput>
  }

  export type UserCreateNestedOneWithoutStripeCustomerInput = {
    create?: XOR<UserCreateWithoutStripeCustomerInput, UserUncheckedCreateWithoutStripeCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutStripeCustomerInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStripeCustomerNestedInput = {
    create?: XOR<UserCreateWithoutStripeCustomerInput, UserUncheckedCreateWithoutStripeCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutStripeCustomerInput
    upsert?: UserUpsertWithoutStripeCustomerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStripeCustomerInput, UserUpdateWithoutStripeCustomerInput>, UserUncheckedUpdateWithoutStripeCustomerInput>
  }

  export type UserCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    upsert?: UserUpsertWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionInput, UserUpdateWithoutSubscriptionInput>, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserCreateNestedOneWithoutTelemetryEventsInput = {
    create?: XOR<UserCreateWithoutTelemetryEventsInput, UserUncheckedCreateWithoutTelemetryEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTelemetryEventsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutTelemetryEventsNestedInput = {
    create?: XOR<UserCreateWithoutTelemetryEventsInput, UserUncheckedCreateWithoutTelemetryEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTelemetryEventsInput
    upsert?: UserUpsertWithoutTelemetryEventsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTelemetryEventsInput, UserUpdateWithoutTelemetryEventsInput>, UserUncheckedUpdateWithoutTelemetryEventsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ChatCreateWithoutUserInput = {
    id?: string
    prompt: string
    response?: string | null
    model?: string | null
    tokens?: number | null
    createdAt?: Date | string
  }

  export type ChatUncheckedCreateWithoutUserInput = {
    id?: string
    prompt: string
    response?: string | null
    model?: string | null
    tokens?: number | null
    createdAt?: Date | string
  }

  export type ChatCreateOrConnectWithoutUserInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput>
  }

  export type ChatCreateManyUserInputEnvelope = {
    data: ChatCreateManyUserInput | ChatCreateManyUserInput[]
  }

  export type EditCreateWithoutUserInput = {
    id?: string
    instruction: string
    fileContent: string
    diff?: string | null
    language?: string | null
    createdAt?: Date | string
  }

  export type EditUncheckedCreateWithoutUserInput = {
    id?: string
    instruction: string
    fileContent: string
    diff?: string | null
    language?: string | null
    createdAt?: Date | string
  }

  export type EditCreateOrConnectWithoutUserInput = {
    where: EditWhereUniqueInput
    create: XOR<EditCreateWithoutUserInput, EditUncheckedCreateWithoutUserInput>
  }

  export type EditCreateManyUserInputEnvelope = {
    data: EditCreateManyUserInput | EditCreateManyUserInput[]
  }

  export type TeamMembershipCreateWithoutUserInput = {
    id?: string
    role?: string
    createdAt?: Date | string
    team: TeamCreateNestedOneWithoutMembersInput
  }

  export type TeamMembershipUncheckedCreateWithoutUserInput = {
    id?: string
    role?: string
    teamId: string
    createdAt?: Date | string
  }

  export type TeamMembershipCreateOrConnectWithoutUserInput = {
    where: TeamMembershipWhereUniqueInput
    create: XOR<TeamMembershipCreateWithoutUserInput, TeamMembershipUncheckedCreateWithoutUserInput>
  }

  export type TeamMembershipCreateManyUserInputEnvelope = {
    data: TeamMembershipCreateManyUserInput | TeamMembershipCreateManyUserInput[]
  }

  export type AuditLogCreateWithoutUserInput = {
    id?: string
    action: string
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    team: TeamCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    teamId: string
    action: string
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
  }

  export type SecurityEventCreateWithoutUserInput = {
    id?: string
    type: string
    severity?: string
    ip?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SecurityEventUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    severity?: string
    ip?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SecurityEventCreateOrConnectWithoutUserInput = {
    where: SecurityEventWhereUniqueInput
    create: XOR<SecurityEventCreateWithoutUserInput, SecurityEventUncheckedCreateWithoutUserInput>
  }

  export type SecurityEventCreateManyUserInputEnvelope = {
    data: SecurityEventCreateManyUserInput | SecurityEventCreateManyUserInput[]
  }

  export type TelemetryEventCreateWithoutUserInput = {
    id?: string
    type: string
    event: string
    value?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: string | null
    createdAt?: Date | string
  }

  export type TelemetryEventUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    event: string
    value?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: string | null
    createdAt?: Date | string
  }

  export type TelemetryEventCreateOrConnectWithoutUserInput = {
    where: TelemetryEventWhereUniqueInput
    create: XOR<TelemetryEventCreateWithoutUserInput, TelemetryEventUncheckedCreateWithoutUserInput>
  }

  export type TelemetryEventCreateManyUserInputEnvelope = {
    data: TelemetryEventCreateManyUserInput | TelemetryEventCreateManyUserInput[]
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    hashedToken: string
    issuedAt?: Date | string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    replacedByTokenId?: string | null
    createdAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    hashedToken: string
    issuedAt?: Date | string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    replacedByTokenId?: string | null
    createdAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
  }

  export type UsageCounterCreateWithoutUserInput = {
    id?: string
    chatCount?: number
    editCount?: number
    date: string
    createdAt?: Date | string
  }

  export type UsageCounterUncheckedCreateWithoutUserInput = {
    id?: string
    chatCount?: number
    editCount?: number
    date: string
    createdAt?: Date | string
  }

  export type UsageCounterCreateOrConnectWithoutUserInput = {
    where: UsageCounterWhereUniqueInput
    create: XOR<UsageCounterCreateWithoutUserInput, UsageCounterUncheckedCreateWithoutUserInput>
  }

  export type UsageCounterCreateManyUserInputEnvelope = {
    data: UsageCounterCreateManyUserInput | UsageCounterCreateManyUserInput[]
  }

  export type StripeCustomerCreateWithoutUserInput = {
    id?: string
    stripeCustomerId: string
    createdAt?: Date | string
  }

  export type StripeCustomerUncheckedCreateWithoutUserInput = {
    id?: string
    stripeCustomerId: string
    createdAt?: Date | string
  }

  export type StripeCustomerCreateOrConnectWithoutUserInput = {
    where: StripeCustomerWhereUniqueInput
    create: XOR<StripeCustomerCreateWithoutUserInput, StripeCustomerUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    stripeSubscriptionId: string
    status: string
    plan: string
    currentPeriodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    stripeSubscriptionId: string
    status: string
    plan: string
    currentPeriodEnd: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type ChatUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutUserInput, ChatUncheckedUpdateWithoutUserInput>
    create: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutUserInput, ChatUncheckedUpdateWithoutUserInput>
  }

  export type ChatUpdateManyWithWhereWithoutUserInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: StringFilter<"Chat"> | string
    userId?: StringFilter<"Chat"> | string
    prompt?: StringFilter<"Chat"> | string
    response?: StringNullableFilter<"Chat"> | string | null
    model?: StringNullableFilter<"Chat"> | string | null
    tokens?: IntNullableFilter<"Chat"> | number | null
    createdAt?: DateTimeFilter<"Chat"> | Date | string
  }

  export type EditUpsertWithWhereUniqueWithoutUserInput = {
    where: EditWhereUniqueInput
    update: XOR<EditUpdateWithoutUserInput, EditUncheckedUpdateWithoutUserInput>
    create: XOR<EditCreateWithoutUserInput, EditUncheckedCreateWithoutUserInput>
  }

  export type EditUpdateWithWhereUniqueWithoutUserInput = {
    where: EditWhereUniqueInput
    data: XOR<EditUpdateWithoutUserInput, EditUncheckedUpdateWithoutUserInput>
  }

  export type EditUpdateManyWithWhereWithoutUserInput = {
    where: EditScalarWhereInput
    data: XOR<EditUpdateManyMutationInput, EditUncheckedUpdateManyWithoutUserInput>
  }

  export type EditScalarWhereInput = {
    AND?: EditScalarWhereInput | EditScalarWhereInput[]
    OR?: EditScalarWhereInput[]
    NOT?: EditScalarWhereInput | EditScalarWhereInput[]
    id?: StringFilter<"Edit"> | string
    userId?: StringFilter<"Edit"> | string
    instruction?: StringFilter<"Edit"> | string
    fileContent?: StringFilter<"Edit"> | string
    diff?: StringNullableFilter<"Edit"> | string | null
    language?: StringNullableFilter<"Edit"> | string | null
    createdAt?: DateTimeFilter<"Edit"> | Date | string
  }

  export type TeamMembershipUpsertWithWhereUniqueWithoutUserInput = {
    where: TeamMembershipWhereUniqueInput
    update: XOR<TeamMembershipUpdateWithoutUserInput, TeamMembershipUncheckedUpdateWithoutUserInput>
    create: XOR<TeamMembershipCreateWithoutUserInput, TeamMembershipUncheckedCreateWithoutUserInput>
  }

  export type TeamMembershipUpdateWithWhereUniqueWithoutUserInput = {
    where: TeamMembershipWhereUniqueInput
    data: XOR<TeamMembershipUpdateWithoutUserInput, TeamMembershipUncheckedUpdateWithoutUserInput>
  }

  export type TeamMembershipUpdateManyWithWhereWithoutUserInput = {
    where: TeamMembershipScalarWhereInput
    data: XOR<TeamMembershipUpdateManyMutationInput, TeamMembershipUncheckedUpdateManyWithoutUserInput>
  }

  export type TeamMembershipScalarWhereInput = {
    AND?: TeamMembershipScalarWhereInput | TeamMembershipScalarWhereInput[]
    OR?: TeamMembershipScalarWhereInput[]
    NOT?: TeamMembershipScalarWhereInput | TeamMembershipScalarWhereInput[]
    id?: StringFilter<"TeamMembership"> | string
    role?: StringFilter<"TeamMembership"> | string
    userId?: StringFilter<"TeamMembership"> | string
    teamId?: StringFilter<"TeamMembership"> | string
    createdAt?: DateTimeFilter<"TeamMembership"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    teamId?: StringFilter<"AuditLog"> | string
    userId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type SecurityEventUpsertWithWhereUniqueWithoutUserInput = {
    where: SecurityEventWhereUniqueInput
    update: XOR<SecurityEventUpdateWithoutUserInput, SecurityEventUncheckedUpdateWithoutUserInput>
    create: XOR<SecurityEventCreateWithoutUserInput, SecurityEventUncheckedCreateWithoutUserInput>
  }

  export type SecurityEventUpdateWithWhereUniqueWithoutUserInput = {
    where: SecurityEventWhereUniqueInput
    data: XOR<SecurityEventUpdateWithoutUserInput, SecurityEventUncheckedUpdateWithoutUserInput>
  }

  export type SecurityEventUpdateManyWithWhereWithoutUserInput = {
    where: SecurityEventScalarWhereInput
    data: XOR<SecurityEventUpdateManyMutationInput, SecurityEventUncheckedUpdateManyWithoutUserInput>
  }

  export type SecurityEventScalarWhereInput = {
    AND?: SecurityEventScalarWhereInput | SecurityEventScalarWhereInput[]
    OR?: SecurityEventScalarWhereInput[]
    NOT?: SecurityEventScalarWhereInput | SecurityEventScalarWhereInput[]
    id?: StringFilter<"SecurityEvent"> | string
    userId?: StringNullableFilter<"SecurityEvent"> | string | null
    type?: StringFilter<"SecurityEvent"> | string
    severity?: StringFilter<"SecurityEvent"> | string
    ip?: StringNullableFilter<"SecurityEvent"> | string | null
    metadata?: JsonNullableFilter<"SecurityEvent">
    createdAt?: DateTimeFilter<"SecurityEvent"> | Date | string
  }

  export type TelemetryEventUpsertWithWhereUniqueWithoutUserInput = {
    where: TelemetryEventWhereUniqueInput
    update: XOR<TelemetryEventUpdateWithoutUserInput, TelemetryEventUncheckedUpdateWithoutUserInput>
    create: XOR<TelemetryEventCreateWithoutUserInput, TelemetryEventUncheckedCreateWithoutUserInput>
  }

  export type TelemetryEventUpdateWithWhereUniqueWithoutUserInput = {
    where: TelemetryEventWhereUniqueInput
    data: XOR<TelemetryEventUpdateWithoutUserInput, TelemetryEventUncheckedUpdateWithoutUserInput>
  }

  export type TelemetryEventUpdateManyWithWhereWithoutUserInput = {
    where: TelemetryEventScalarWhereInput
    data: XOR<TelemetryEventUpdateManyMutationInput, TelemetryEventUncheckedUpdateManyWithoutUserInput>
  }

  export type TelemetryEventScalarWhereInput = {
    AND?: TelemetryEventScalarWhereInput | TelemetryEventScalarWhereInput[]
    OR?: TelemetryEventScalarWhereInput[]
    NOT?: TelemetryEventScalarWhereInput | TelemetryEventScalarWhereInput[]
    id?: StringFilter<"TelemetryEvent"> | string
    userId?: StringNullableFilter<"TelemetryEvent"> | string | null
    type?: StringFilter<"TelemetryEvent"> | string
    event?: StringFilter<"TelemetryEvent"> | string
    value?: FloatNullableFilter<"TelemetryEvent"> | number | null
    metadata?: JsonNullableFilter<"TelemetryEvent">
    version?: StringNullableFilter<"TelemetryEvent"> | string | null
    createdAt?: DateTimeFilter<"TelemetryEvent"> | Date | string
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    hashedToken?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    issuedAt?: DateTimeFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revokedAt?: DateTimeNullableFilter<"RefreshToken"> | Date | string | null
    replacedByTokenId?: StringNullableFilter<"RefreshToken"> | string | null
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type UsageCounterUpsertWithWhereUniqueWithoutUserInput = {
    where: UsageCounterWhereUniqueInput
    update: XOR<UsageCounterUpdateWithoutUserInput, UsageCounterUncheckedUpdateWithoutUserInput>
    create: XOR<UsageCounterCreateWithoutUserInput, UsageCounterUncheckedCreateWithoutUserInput>
  }

  export type UsageCounterUpdateWithWhereUniqueWithoutUserInput = {
    where: UsageCounterWhereUniqueInput
    data: XOR<UsageCounterUpdateWithoutUserInput, UsageCounterUncheckedUpdateWithoutUserInput>
  }

  export type UsageCounterUpdateManyWithWhereWithoutUserInput = {
    where: UsageCounterScalarWhereInput
    data: XOR<UsageCounterUpdateManyMutationInput, UsageCounterUncheckedUpdateManyWithoutUserInput>
  }

  export type UsageCounterScalarWhereInput = {
    AND?: UsageCounterScalarWhereInput | UsageCounterScalarWhereInput[]
    OR?: UsageCounterScalarWhereInput[]
    NOT?: UsageCounterScalarWhereInput | UsageCounterScalarWhereInput[]
    id?: StringFilter<"UsageCounter"> | string
    userId?: StringFilter<"UsageCounter"> | string
    chatCount?: IntFilter<"UsageCounter"> | number
    editCount?: IntFilter<"UsageCounter"> | number
    date?: StringFilter<"UsageCounter"> | string
    createdAt?: DateTimeFilter<"UsageCounter"> | Date | string
  }

  export type StripeCustomerUpsertWithoutUserInput = {
    update: XOR<StripeCustomerUpdateWithoutUserInput, StripeCustomerUncheckedUpdateWithoutUserInput>
    create: XOR<StripeCustomerCreateWithoutUserInput, StripeCustomerUncheckedCreateWithoutUserInput>
    where?: StripeCustomerWhereInput
  }

  export type StripeCustomerUpdateToOneWithWhereWithoutUserInput = {
    where?: StripeCustomerWhereInput
    data: XOR<StripeCustomerUpdateWithoutUserInput, StripeCustomerUncheckedUpdateWithoutUserInput>
  }

  export type StripeCustomerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StripeCustomerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUpsertWithoutUserInput = {
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutUserInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMembershipCreateWithoutTeamInput = {
    id?: string
    role?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type TeamMembershipUncheckedCreateWithoutTeamInput = {
    id?: string
    role?: string
    userId: string
    createdAt?: Date | string
  }

  export type TeamMembershipCreateOrConnectWithoutTeamInput = {
    where: TeamMembershipWhereUniqueInput
    create: XOR<TeamMembershipCreateWithoutTeamInput, TeamMembershipUncheckedCreateWithoutTeamInput>
  }

  export type TeamMembershipCreateManyTeamInputEnvelope = {
    data: TeamMembershipCreateManyTeamInput | TeamMembershipCreateManyTeamInput[]
  }

  export type AuditLogCreateWithoutTeamInput = {
    id?: string
    action: string
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutTeamInput = {
    id?: string
    userId: string
    action: string
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutTeamInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutTeamInput, AuditLogUncheckedCreateWithoutTeamInput>
  }

  export type AuditLogCreateManyTeamInputEnvelope = {
    data: AuditLogCreateManyTeamInput | AuditLogCreateManyTeamInput[]
  }

  export type TeamMembershipUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamMembershipWhereUniqueInput
    update: XOR<TeamMembershipUpdateWithoutTeamInput, TeamMembershipUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamMembershipCreateWithoutTeamInput, TeamMembershipUncheckedCreateWithoutTeamInput>
  }

  export type TeamMembershipUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamMembershipWhereUniqueInput
    data: XOR<TeamMembershipUpdateWithoutTeamInput, TeamMembershipUncheckedUpdateWithoutTeamInput>
  }

  export type TeamMembershipUpdateManyWithWhereWithoutTeamInput = {
    where: TeamMembershipScalarWhereInput
    data: XOR<TeamMembershipUpdateManyMutationInput, TeamMembershipUncheckedUpdateManyWithoutTeamInput>
  }

  export type AuditLogUpsertWithWhereUniqueWithoutTeamInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutTeamInput, AuditLogUncheckedUpdateWithoutTeamInput>
    create: XOR<AuditLogCreateWithoutTeamInput, AuditLogUncheckedCreateWithoutTeamInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutTeamInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutTeamInput, AuditLogUncheckedUpdateWithoutTeamInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutTeamInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutTeamInput>
  }

  export type UserCreateWithoutMembershipsInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatCreateNestedManyWithoutUserInput
    edits?: EditCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    securityEvents?: SecurityEventCreateNestedManyWithoutUserInput
    telemetryEvents?: TelemetryEventCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    usageCounters?: UsageCounterCreateNestedManyWithoutUserInput
    stripeCustomer?: StripeCustomerCreateNestedOneWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUncheckedCreateNestedManyWithoutUserInput
    edits?: EditUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutUserInput
    telemetryEvents?: TelemetryEventUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    usageCounters?: UsageCounterUncheckedCreateNestedManyWithoutUserInput
    stripeCustomer?: StripeCustomerUncheckedCreateNestedOneWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type TeamCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    auditLogs?: AuditLogCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutMembersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUpdateManyWithoutUserNestedInput
    edits?: EditUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutUserNestedInput
    telemetryEvents?: TelemetryEventUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    usageCounters?: UsageCounterUpdateManyWithoutUserNestedInput
    stripeCustomer?: StripeCustomerUpdateOneWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUncheckedUpdateManyWithoutUserNestedInput
    edits?: EditUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutUserNestedInput
    telemetryEvents?: TelemetryEventUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    usageCounters?: UsageCounterUncheckedUpdateManyWithoutUserNestedInput
    stripeCustomer?: StripeCustomerUncheckedUpdateOneWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TeamUpsertWithoutMembersInput = {
    update: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMembersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type TeamUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    auditLogs?: AuditLogUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    auditLogs?: AuditLogUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserCreateWithoutChatsInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    edits?: EditCreateNestedManyWithoutUserInput
    memberships?: TeamMembershipCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    securityEvents?: SecurityEventCreateNestedManyWithoutUserInput
    telemetryEvents?: TelemetryEventCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    usageCounters?: UsageCounterCreateNestedManyWithoutUserInput
    stripeCustomer?: StripeCustomerCreateNestedOneWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatsInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    edits?: EditUncheckedCreateNestedManyWithoutUserInput
    memberships?: TeamMembershipUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutUserInput
    telemetryEvents?: TelemetryEventUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    usageCounters?: UsageCounterUncheckedCreateNestedManyWithoutUserInput
    stripeCustomer?: StripeCustomerUncheckedCreateNestedOneWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
  }

  export type UserUpsertWithoutChatsInput = {
    update: XOR<UserUpdateWithoutChatsInput, UserUncheckedUpdateWithoutChatsInput>
    create: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatsInput, UserUncheckedUpdateWithoutChatsInput>
  }

  export type UserUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    edits?: EditUpdateManyWithoutUserNestedInput
    memberships?: TeamMembershipUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutUserNestedInput
    telemetryEvents?: TelemetryEventUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    usageCounters?: UsageCounterUpdateManyWithoutUserNestedInput
    stripeCustomer?: StripeCustomerUpdateOneWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    edits?: EditUncheckedUpdateManyWithoutUserNestedInput
    memberships?: TeamMembershipUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutUserNestedInput
    telemetryEvents?: TelemetryEventUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    usageCounters?: UsageCounterUncheckedUpdateManyWithoutUserNestedInput
    stripeCustomer?: StripeCustomerUncheckedUpdateOneWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutEditsInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatCreateNestedManyWithoutUserInput
    memberships?: TeamMembershipCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    securityEvents?: SecurityEventCreateNestedManyWithoutUserInput
    telemetryEvents?: TelemetryEventCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    usageCounters?: UsageCounterCreateNestedManyWithoutUserInput
    stripeCustomer?: StripeCustomerCreateNestedOneWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEditsInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUncheckedCreateNestedManyWithoutUserInput
    memberships?: TeamMembershipUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutUserInput
    telemetryEvents?: TelemetryEventUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    usageCounters?: UsageCounterUncheckedCreateNestedManyWithoutUserInput
    stripeCustomer?: StripeCustomerUncheckedCreateNestedOneWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEditsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEditsInput, UserUncheckedCreateWithoutEditsInput>
  }

  export type UserUpsertWithoutEditsInput = {
    update: XOR<UserUpdateWithoutEditsInput, UserUncheckedUpdateWithoutEditsInput>
    create: XOR<UserCreateWithoutEditsInput, UserUncheckedCreateWithoutEditsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEditsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEditsInput, UserUncheckedUpdateWithoutEditsInput>
  }

  export type UserUpdateWithoutEditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUpdateManyWithoutUserNestedInput
    memberships?: TeamMembershipUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutUserNestedInput
    telemetryEvents?: TelemetryEventUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    usageCounters?: UsageCounterUpdateManyWithoutUserNestedInput
    stripeCustomer?: StripeCustomerUpdateOneWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUncheckedUpdateManyWithoutUserNestedInput
    memberships?: TeamMembershipUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutUserNestedInput
    telemetryEvents?: TelemetryEventUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    usageCounters?: UsageCounterUncheckedUpdateManyWithoutUserNestedInput
    stripeCustomer?: StripeCustomerUncheckedUpdateOneWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TeamCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    members?: TeamMembershipCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    members?: TeamMembershipUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutAuditLogsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutAuditLogsInput, TeamUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatCreateNestedManyWithoutUserInput
    edits?: EditCreateNestedManyWithoutUserInput
    memberships?: TeamMembershipCreateNestedManyWithoutUserInput
    securityEvents?: SecurityEventCreateNestedManyWithoutUserInput
    telemetryEvents?: TelemetryEventCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    usageCounters?: UsageCounterCreateNestedManyWithoutUserInput
    stripeCustomer?: StripeCustomerCreateNestedOneWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUncheckedCreateNestedManyWithoutUserInput
    edits?: EditUncheckedCreateNestedManyWithoutUserInput
    memberships?: TeamMembershipUncheckedCreateNestedManyWithoutUserInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutUserInput
    telemetryEvents?: TelemetryEventUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    usageCounters?: UsageCounterUncheckedCreateNestedManyWithoutUserInput
    stripeCustomer?: StripeCustomerUncheckedCreateNestedOneWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type TeamUpsertWithoutAuditLogsInput = {
    update: XOR<TeamUpdateWithoutAuditLogsInput, TeamUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<TeamCreateWithoutAuditLogsInput, TeamUncheckedCreateWithoutAuditLogsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutAuditLogsInput, TeamUncheckedUpdateWithoutAuditLogsInput>
  }

  export type TeamUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    members?: TeamMembershipUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    members?: TeamMembershipUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUpdateManyWithoutUserNestedInput
    edits?: EditUpdateManyWithoutUserNestedInput
    memberships?: TeamMembershipUpdateManyWithoutUserNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutUserNestedInput
    telemetryEvents?: TelemetryEventUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    usageCounters?: UsageCounterUpdateManyWithoutUserNestedInput
    stripeCustomer?: StripeCustomerUpdateOneWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUncheckedUpdateManyWithoutUserNestedInput
    edits?: EditUncheckedUpdateManyWithoutUserNestedInput
    memberships?: TeamMembershipUncheckedUpdateManyWithoutUserNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutUserNestedInput
    telemetryEvents?: TelemetryEventUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    usageCounters?: UsageCounterUncheckedUpdateManyWithoutUserNestedInput
    stripeCustomer?: StripeCustomerUncheckedUpdateOneWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutSecurityEventsInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatCreateNestedManyWithoutUserInput
    edits?: EditCreateNestedManyWithoutUserInput
    memberships?: TeamMembershipCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    telemetryEvents?: TelemetryEventCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    usageCounters?: UsageCounterCreateNestedManyWithoutUserInput
    stripeCustomer?: StripeCustomerCreateNestedOneWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSecurityEventsInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUncheckedCreateNestedManyWithoutUserInput
    edits?: EditUncheckedCreateNestedManyWithoutUserInput
    memberships?: TeamMembershipUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    telemetryEvents?: TelemetryEventUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    usageCounters?: UsageCounterUncheckedCreateNestedManyWithoutUserInput
    stripeCustomer?: StripeCustomerUncheckedCreateNestedOneWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSecurityEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSecurityEventsInput, UserUncheckedCreateWithoutSecurityEventsInput>
  }

  export type UserUpsertWithoutSecurityEventsInput = {
    update: XOR<UserUpdateWithoutSecurityEventsInput, UserUncheckedUpdateWithoutSecurityEventsInput>
    create: XOR<UserCreateWithoutSecurityEventsInput, UserUncheckedCreateWithoutSecurityEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSecurityEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSecurityEventsInput, UserUncheckedUpdateWithoutSecurityEventsInput>
  }

  export type UserUpdateWithoutSecurityEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUpdateManyWithoutUserNestedInput
    edits?: EditUpdateManyWithoutUserNestedInput
    memberships?: TeamMembershipUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    telemetryEvents?: TelemetryEventUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    usageCounters?: UsageCounterUpdateManyWithoutUserNestedInput
    stripeCustomer?: StripeCustomerUpdateOneWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSecurityEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUncheckedUpdateManyWithoutUserNestedInput
    edits?: EditUncheckedUpdateManyWithoutUserNestedInput
    memberships?: TeamMembershipUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    telemetryEvents?: TelemetryEventUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    usageCounters?: UsageCounterUncheckedUpdateManyWithoutUserNestedInput
    stripeCustomer?: StripeCustomerUncheckedUpdateOneWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatCreateNestedManyWithoutUserInput
    edits?: EditCreateNestedManyWithoutUserInput
    memberships?: TeamMembershipCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    securityEvents?: SecurityEventCreateNestedManyWithoutUserInput
    telemetryEvents?: TelemetryEventCreateNestedManyWithoutUserInput
    usageCounters?: UsageCounterCreateNestedManyWithoutUserInput
    stripeCustomer?: StripeCustomerCreateNestedOneWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUncheckedCreateNestedManyWithoutUserInput
    edits?: EditUncheckedCreateNestedManyWithoutUserInput
    memberships?: TeamMembershipUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutUserInput
    telemetryEvents?: TelemetryEventUncheckedCreateNestedManyWithoutUserInput
    usageCounters?: UsageCounterUncheckedCreateNestedManyWithoutUserInput
    stripeCustomer?: StripeCustomerUncheckedCreateNestedOneWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUpdateManyWithoutUserNestedInput
    edits?: EditUpdateManyWithoutUserNestedInput
    memberships?: TeamMembershipUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutUserNestedInput
    telemetryEvents?: TelemetryEventUpdateManyWithoutUserNestedInput
    usageCounters?: UsageCounterUpdateManyWithoutUserNestedInput
    stripeCustomer?: StripeCustomerUpdateOneWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUncheckedUpdateManyWithoutUserNestedInput
    edits?: EditUncheckedUpdateManyWithoutUserNestedInput
    memberships?: TeamMembershipUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutUserNestedInput
    telemetryEvents?: TelemetryEventUncheckedUpdateManyWithoutUserNestedInput
    usageCounters?: UsageCounterUncheckedUpdateManyWithoutUserNestedInput
    stripeCustomer?: StripeCustomerUncheckedUpdateOneWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutUsageCountersInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatCreateNestedManyWithoutUserInput
    edits?: EditCreateNestedManyWithoutUserInput
    memberships?: TeamMembershipCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    securityEvents?: SecurityEventCreateNestedManyWithoutUserInput
    telemetryEvents?: TelemetryEventCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    stripeCustomer?: StripeCustomerCreateNestedOneWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUsageCountersInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUncheckedCreateNestedManyWithoutUserInput
    edits?: EditUncheckedCreateNestedManyWithoutUserInput
    memberships?: TeamMembershipUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutUserInput
    telemetryEvents?: TelemetryEventUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    stripeCustomer?: StripeCustomerUncheckedCreateNestedOneWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUsageCountersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUsageCountersInput, UserUncheckedCreateWithoutUsageCountersInput>
  }

  export type UserUpsertWithoutUsageCountersInput = {
    update: XOR<UserUpdateWithoutUsageCountersInput, UserUncheckedUpdateWithoutUsageCountersInput>
    create: XOR<UserCreateWithoutUsageCountersInput, UserUncheckedCreateWithoutUsageCountersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUsageCountersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUsageCountersInput, UserUncheckedUpdateWithoutUsageCountersInput>
  }

  export type UserUpdateWithoutUsageCountersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUpdateManyWithoutUserNestedInput
    edits?: EditUpdateManyWithoutUserNestedInput
    memberships?: TeamMembershipUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutUserNestedInput
    telemetryEvents?: TelemetryEventUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    stripeCustomer?: StripeCustomerUpdateOneWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUsageCountersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUncheckedUpdateManyWithoutUserNestedInput
    edits?: EditUncheckedUpdateManyWithoutUserNestedInput
    memberships?: TeamMembershipUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutUserNestedInput
    telemetryEvents?: TelemetryEventUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    stripeCustomer?: StripeCustomerUncheckedUpdateOneWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutStripeCustomerInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatCreateNestedManyWithoutUserInput
    edits?: EditCreateNestedManyWithoutUserInput
    memberships?: TeamMembershipCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    securityEvents?: SecurityEventCreateNestedManyWithoutUserInput
    telemetryEvents?: TelemetryEventCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    usageCounters?: UsageCounterCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStripeCustomerInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUncheckedCreateNestedManyWithoutUserInput
    edits?: EditUncheckedCreateNestedManyWithoutUserInput
    memberships?: TeamMembershipUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutUserInput
    telemetryEvents?: TelemetryEventUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    usageCounters?: UsageCounterUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStripeCustomerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStripeCustomerInput, UserUncheckedCreateWithoutStripeCustomerInput>
  }

  export type UserUpsertWithoutStripeCustomerInput = {
    update: XOR<UserUpdateWithoutStripeCustomerInput, UserUncheckedUpdateWithoutStripeCustomerInput>
    create: XOR<UserCreateWithoutStripeCustomerInput, UserUncheckedCreateWithoutStripeCustomerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStripeCustomerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStripeCustomerInput, UserUncheckedUpdateWithoutStripeCustomerInput>
  }

  export type UserUpdateWithoutStripeCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUpdateManyWithoutUserNestedInput
    edits?: EditUpdateManyWithoutUserNestedInput
    memberships?: TeamMembershipUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutUserNestedInput
    telemetryEvents?: TelemetryEventUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    usageCounters?: UsageCounterUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStripeCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUncheckedUpdateManyWithoutUserNestedInput
    edits?: EditUncheckedUpdateManyWithoutUserNestedInput
    memberships?: TeamMembershipUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutUserNestedInput
    telemetryEvents?: TelemetryEventUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    usageCounters?: UsageCounterUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutSubscriptionInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatCreateNestedManyWithoutUserInput
    edits?: EditCreateNestedManyWithoutUserInput
    memberships?: TeamMembershipCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    securityEvents?: SecurityEventCreateNestedManyWithoutUserInput
    telemetryEvents?: TelemetryEventCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    usageCounters?: UsageCounterCreateNestedManyWithoutUserInput
    stripeCustomer?: StripeCustomerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUncheckedCreateNestedManyWithoutUserInput
    edits?: EditUncheckedCreateNestedManyWithoutUserInput
    memberships?: TeamMembershipUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutUserInput
    telemetryEvents?: TelemetryEventUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    usageCounters?: UsageCounterUncheckedCreateNestedManyWithoutUserInput
    stripeCustomer?: StripeCustomerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
  }

  export type UserUpsertWithoutSubscriptionInput = {
    update: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUpdateManyWithoutUserNestedInput
    edits?: EditUpdateManyWithoutUserNestedInput
    memberships?: TeamMembershipUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutUserNestedInput
    telemetryEvents?: TelemetryEventUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    usageCounters?: UsageCounterUpdateManyWithoutUserNestedInput
    stripeCustomer?: StripeCustomerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUncheckedUpdateManyWithoutUserNestedInput
    edits?: EditUncheckedUpdateManyWithoutUserNestedInput
    memberships?: TeamMembershipUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutUserNestedInput
    telemetryEvents?: TelemetryEventUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    usageCounters?: UsageCounterUncheckedUpdateManyWithoutUserNestedInput
    stripeCustomer?: StripeCustomerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutTelemetryEventsInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatCreateNestedManyWithoutUserInput
    edits?: EditCreateNestedManyWithoutUserInput
    memberships?: TeamMembershipCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    securityEvents?: SecurityEventCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    usageCounters?: UsageCounterCreateNestedManyWithoutUserInput
    stripeCustomer?: StripeCustomerCreateNestedOneWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTelemetryEventsInput = {
    id?: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: string
    stripeId?: string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUncheckedCreateNestedManyWithoutUserInput
    edits?: EditUncheckedCreateNestedManyWithoutUserInput
    memberships?: TeamMembershipUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    securityEvents?: SecurityEventUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    usageCounters?: UsageCounterUncheckedCreateNestedManyWithoutUserInput
    stripeCustomer?: StripeCustomerUncheckedCreateNestedOneWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTelemetryEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTelemetryEventsInput, UserUncheckedCreateWithoutTelemetryEventsInput>
  }

  export type UserUpsertWithoutTelemetryEventsInput = {
    update: XOR<UserUpdateWithoutTelemetryEventsInput, UserUncheckedUpdateWithoutTelemetryEventsInput>
    create: XOR<UserCreateWithoutTelemetryEventsInput, UserUncheckedCreateWithoutTelemetryEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTelemetryEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTelemetryEventsInput, UserUncheckedUpdateWithoutTelemetryEventsInput>
  }

  export type UserUpdateWithoutTelemetryEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUpdateManyWithoutUserNestedInput
    edits?: EditUpdateManyWithoutUserNestedInput
    memberships?: TeamMembershipUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    securityEvents?: SecurityEventUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    usageCounters?: UsageCounterUpdateManyWithoutUserNestedInput
    stripeCustomer?: StripeCustomerUpdateOneWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTelemetryEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: StringFieldUpdateOperationsInput | string
    stripeId?: NullableStringFieldUpdateOperationsInput | string | null
    entitlements?: NullableJsonNullValueInput | InputJsonValue
    chats?: ChatUncheckedUpdateManyWithoutUserNestedInput
    edits?: EditUncheckedUpdateManyWithoutUserNestedInput
    memberships?: TeamMembershipUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    securityEvents?: SecurityEventUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    usageCounters?: UsageCounterUncheckedUpdateManyWithoutUserNestedInput
    stripeCustomer?: StripeCustomerUncheckedUpdateOneWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ChatCreateManyUserInput = {
    id?: string
    prompt: string
    response?: string | null
    model?: string | null
    tokens?: number | null
    createdAt?: Date | string
  }

  export type EditCreateManyUserInput = {
    id?: string
    instruction: string
    fileContent: string
    diff?: string | null
    language?: string | null
    createdAt?: Date | string
  }

  export type TeamMembershipCreateManyUserInput = {
    id?: string
    role?: string
    teamId: string
    createdAt?: Date | string
  }

  export type AuditLogCreateManyUserInput = {
    id?: string
    teamId: string
    action: string
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SecurityEventCreateManyUserInput = {
    id?: string
    type: string
    severity?: string
    ip?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TelemetryEventCreateManyUserInput = {
    id?: string
    type: string
    event: string
    value?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: string | null
    createdAt?: Date | string
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    hashedToken: string
    issuedAt?: Date | string
    expiresAt: Date | string
    revokedAt?: Date | string | null
    replacedByTokenId?: string | null
    createdAt?: Date | string
  }

  export type UsageCounterCreateManyUserInput = {
    id?: string
    chatCount?: number
    editCount?: number
    date: string
    createdAt?: Date | string
  }

  export type ChatUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EditUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    fileContent?: StringFieldUpdateOperationsInput | string
    diff?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EditUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    fileContent?: StringFieldUpdateOperationsInput | string
    diff?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EditUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    instruction?: StringFieldUpdateOperationsInput | string
    fileContent?: StringFieldUpdateOperationsInput | string
    diff?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMembershipUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type TeamMembershipUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMembershipUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityEventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityEventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityEventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelemetryEventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelemetryEventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelemetryEventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashedToken?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replacedByTokenId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashedToken?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replacedByTokenId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashedToken?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replacedByTokenId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageCounterUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatCount?: IntFieldUpdateOperationsInput | number
    editCount?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageCounterUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatCount?: IntFieldUpdateOperationsInput | number
    editCount?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageCounterUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatCount?: IntFieldUpdateOperationsInput | number
    editCount?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMembershipCreateManyTeamInput = {
    id?: string
    role?: string
    userId: string
    createdAt?: Date | string
  }

  export type AuditLogCreateManyTeamInput = {
    id?: string
    userId: string
    action: string
    entityId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TeamMembershipUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type TeamMembershipUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMembershipUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}