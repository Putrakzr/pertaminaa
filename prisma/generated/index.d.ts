
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
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model LaporanInspeksi
 * 
 */
export type LaporanInspeksi = $Result.DefaultSelection<Prisma.$LaporanInspeksiPayload>
/**
 * Model DataInjeksi
 * 
 */
export type DataInjeksi = $Result.DefaultSelection<Prisma.$DataInjeksiPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Material
 * 
 */
export type Material = $Result.DefaultSelection<Prisma.$MaterialPayload>
/**
 * Model KompetensiPersonil
 * 
 */
export type KompetensiPersonil = $Result.DefaultSelection<Prisma.$KompetensiPersonilPayload>
/**
 * Model SertifikasiPeralatan
 * 
 */
export type SertifikasiPeralatan = $Result.DefaultSelection<Prisma.$SertifikasiPeralatanPayload>
/**
 * Model SystemSettings
 * 
 */
export type SystemSettings = $Result.DefaultSelection<Prisma.$SystemSettingsPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>
/**
 * Model MasterLokasi
 * 
 */
export type MasterLokasi = $Result.DefaultSelection<Prisma.$MasterLokasiPayload>
/**
 * Model Tugas
 * 
 */
export type Tugas = $Result.DefaultSelection<Prisma.$TugasPayload>

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.laporanInspeksi`: Exposes CRUD operations for the **LaporanInspeksi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LaporanInspeksis
    * const laporanInspeksis = await prisma.laporanInspeksi.findMany()
    * ```
    */
  get laporanInspeksi(): Prisma.LaporanInspeksiDelegate<ExtArgs>;

  /**
   * `prisma.dataInjeksi`: Exposes CRUD operations for the **DataInjeksi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataInjeksis
    * const dataInjeksis = await prisma.dataInjeksi.findMany()
    * ```
    */
  get dataInjeksi(): Prisma.DataInjeksiDelegate<ExtArgs>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs>;

  /**
   * `prisma.material`: Exposes CRUD operations for the **Material** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.material.findMany()
    * ```
    */
  get material(): Prisma.MaterialDelegate<ExtArgs>;

  /**
   * `prisma.kompetensiPersonil`: Exposes CRUD operations for the **KompetensiPersonil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KompetensiPersonils
    * const kompetensiPersonils = await prisma.kompetensiPersonil.findMany()
    * ```
    */
  get kompetensiPersonil(): Prisma.KompetensiPersonilDelegate<ExtArgs>;

  /**
   * `prisma.sertifikasiPeralatan`: Exposes CRUD operations for the **SertifikasiPeralatan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SertifikasiPeralatans
    * const sertifikasiPeralatans = await prisma.sertifikasiPeralatan.findMany()
    * ```
    */
  get sertifikasiPeralatan(): Prisma.SertifikasiPeralatanDelegate<ExtArgs>;

  /**
   * `prisma.systemSettings`: Exposes CRUD operations for the **SystemSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemSettings
    * const systemSettings = await prisma.systemSettings.findMany()
    * ```
    */
  get systemSettings(): Prisma.SystemSettingsDelegate<ExtArgs>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs>;

  /**
   * `prisma.masterLokasi`: Exposes CRUD operations for the **MasterLokasi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MasterLokasis
    * const masterLokasis = await prisma.masterLokasi.findMany()
    * ```
    */
  get masterLokasi(): Prisma.MasterLokasiDelegate<ExtArgs>;

  /**
   * `prisma.tugas`: Exposes CRUD operations for the **Tugas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tugases
    * const tugases = await prisma.tugas.findMany()
    * ```
    */
  get tugas(): Prisma.TugasDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Admin: 'Admin',
    LaporanInspeksi: 'LaporanInspeksi',
    DataInjeksi: 'DataInjeksi',
    Notification: 'Notification',
    Material: 'Material',
    KompetensiPersonil: 'KompetensiPersonil',
    SertifikasiPeralatan: 'SertifikasiPeralatan',
    SystemSettings: 'SystemSettings',
    ActivityLog: 'ActivityLog',
    MasterLokasi: 'MasterLokasi',
    Tugas: 'Tugas'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "admin" | "laporanInspeksi" | "dataInjeksi" | "notification" | "material" | "kompetensiPersonil" | "sertifikasiPeralatan" | "systemSettings" | "activityLog" | "masterLokasi" | "tugas"
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
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      LaporanInspeksi: {
        payload: Prisma.$LaporanInspeksiPayload<ExtArgs>
        fields: Prisma.LaporanInspeksiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LaporanInspeksiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanInspeksiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LaporanInspeksiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanInspeksiPayload>
          }
          findFirst: {
            args: Prisma.LaporanInspeksiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanInspeksiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LaporanInspeksiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanInspeksiPayload>
          }
          findMany: {
            args: Prisma.LaporanInspeksiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanInspeksiPayload>[]
          }
          create: {
            args: Prisma.LaporanInspeksiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanInspeksiPayload>
          }
          createMany: {
            args: Prisma.LaporanInspeksiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LaporanInspeksiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanInspeksiPayload>
          }
          update: {
            args: Prisma.LaporanInspeksiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanInspeksiPayload>
          }
          deleteMany: {
            args: Prisma.LaporanInspeksiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LaporanInspeksiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LaporanInspeksiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanInspeksiPayload>
          }
          aggregate: {
            args: Prisma.LaporanInspeksiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLaporanInspeksi>
          }
          groupBy: {
            args: Prisma.LaporanInspeksiGroupByArgs<ExtArgs>
            result: $Utils.Optional<LaporanInspeksiGroupByOutputType>[]
          }
          count: {
            args: Prisma.LaporanInspeksiCountArgs<ExtArgs>
            result: $Utils.Optional<LaporanInspeksiCountAggregateOutputType> | number
          }
        }
      }
      DataInjeksi: {
        payload: Prisma.$DataInjeksiPayload<ExtArgs>
        fields: Prisma.DataInjeksiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataInjeksiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataInjeksiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataInjeksiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataInjeksiPayload>
          }
          findFirst: {
            args: Prisma.DataInjeksiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataInjeksiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataInjeksiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataInjeksiPayload>
          }
          findMany: {
            args: Prisma.DataInjeksiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataInjeksiPayload>[]
          }
          create: {
            args: Prisma.DataInjeksiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataInjeksiPayload>
          }
          createMany: {
            args: Prisma.DataInjeksiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DataInjeksiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataInjeksiPayload>
          }
          update: {
            args: Prisma.DataInjeksiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataInjeksiPayload>
          }
          deleteMany: {
            args: Prisma.DataInjeksiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataInjeksiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DataInjeksiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataInjeksiPayload>
          }
          aggregate: {
            args: Prisma.DataInjeksiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataInjeksi>
          }
          groupBy: {
            args: Prisma.DataInjeksiGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataInjeksiGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataInjeksiCountArgs<ExtArgs>
            result: $Utils.Optional<DataInjeksiCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Material: {
        payload: Prisma.$MaterialPayload<ExtArgs>
        fields: Prisma.MaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findFirst: {
            args: Prisma.MaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findMany: {
            args: Prisma.MaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          create: {
            args: Prisma.MaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          createMany: {
            args: Prisma.MaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          update: {
            args: Prisma.MaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          deleteMany: {
            args: Prisma.MaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          aggregate: {
            args: Prisma.MaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterial>
          }
          groupBy: {
            args: Prisma.MaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialCountAggregateOutputType> | number
          }
        }
      }
      KompetensiPersonil: {
        payload: Prisma.$KompetensiPersonilPayload<ExtArgs>
        fields: Prisma.KompetensiPersonilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KompetensiPersonilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetensiPersonilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KompetensiPersonilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetensiPersonilPayload>
          }
          findFirst: {
            args: Prisma.KompetensiPersonilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetensiPersonilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KompetensiPersonilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetensiPersonilPayload>
          }
          findMany: {
            args: Prisma.KompetensiPersonilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetensiPersonilPayload>[]
          }
          create: {
            args: Prisma.KompetensiPersonilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetensiPersonilPayload>
          }
          createMany: {
            args: Prisma.KompetensiPersonilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.KompetensiPersonilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetensiPersonilPayload>
          }
          update: {
            args: Prisma.KompetensiPersonilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetensiPersonilPayload>
          }
          deleteMany: {
            args: Prisma.KompetensiPersonilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KompetensiPersonilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KompetensiPersonilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetensiPersonilPayload>
          }
          aggregate: {
            args: Prisma.KompetensiPersonilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKompetensiPersonil>
          }
          groupBy: {
            args: Prisma.KompetensiPersonilGroupByArgs<ExtArgs>
            result: $Utils.Optional<KompetensiPersonilGroupByOutputType>[]
          }
          count: {
            args: Prisma.KompetensiPersonilCountArgs<ExtArgs>
            result: $Utils.Optional<KompetensiPersonilCountAggregateOutputType> | number
          }
        }
      }
      SertifikasiPeralatan: {
        payload: Prisma.$SertifikasiPeralatanPayload<ExtArgs>
        fields: Prisma.SertifikasiPeralatanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SertifikasiPeralatanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikasiPeralatanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SertifikasiPeralatanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikasiPeralatanPayload>
          }
          findFirst: {
            args: Prisma.SertifikasiPeralatanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikasiPeralatanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SertifikasiPeralatanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikasiPeralatanPayload>
          }
          findMany: {
            args: Prisma.SertifikasiPeralatanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikasiPeralatanPayload>[]
          }
          create: {
            args: Prisma.SertifikasiPeralatanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikasiPeralatanPayload>
          }
          createMany: {
            args: Prisma.SertifikasiPeralatanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SertifikasiPeralatanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikasiPeralatanPayload>
          }
          update: {
            args: Prisma.SertifikasiPeralatanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikasiPeralatanPayload>
          }
          deleteMany: {
            args: Prisma.SertifikasiPeralatanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SertifikasiPeralatanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SertifikasiPeralatanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikasiPeralatanPayload>
          }
          aggregate: {
            args: Prisma.SertifikasiPeralatanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSertifikasiPeralatan>
          }
          groupBy: {
            args: Prisma.SertifikasiPeralatanGroupByArgs<ExtArgs>
            result: $Utils.Optional<SertifikasiPeralatanGroupByOutputType>[]
          }
          count: {
            args: Prisma.SertifikasiPeralatanCountArgs<ExtArgs>
            result: $Utils.Optional<SertifikasiPeralatanCountAggregateOutputType> | number
          }
        }
      }
      SystemSettings: {
        payload: Prisma.$SystemSettingsPayload<ExtArgs>
        fields: Prisma.SystemSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          findFirst: {
            args: Prisma.SystemSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          findMany: {
            args: Prisma.SystemSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>[]
          }
          create: {
            args: Prisma.SystemSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          createMany: {
            args: Prisma.SystemSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SystemSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          update: {
            args: Prisma.SystemSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          deleteMany: {
            args: Prisma.SystemSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SystemSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          aggregate: {
            args: Prisma.SystemSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemSettings>
          }
          groupBy: {
            args: Prisma.SystemSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingsCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
      MasterLokasi: {
        payload: Prisma.$MasterLokasiPayload<ExtArgs>
        fields: Prisma.MasterLokasiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MasterLokasiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterLokasiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MasterLokasiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterLokasiPayload>
          }
          findFirst: {
            args: Prisma.MasterLokasiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterLokasiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MasterLokasiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterLokasiPayload>
          }
          findMany: {
            args: Prisma.MasterLokasiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterLokasiPayload>[]
          }
          create: {
            args: Prisma.MasterLokasiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterLokasiPayload>
          }
          createMany: {
            args: Prisma.MasterLokasiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MasterLokasiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterLokasiPayload>
          }
          update: {
            args: Prisma.MasterLokasiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterLokasiPayload>
          }
          deleteMany: {
            args: Prisma.MasterLokasiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MasterLokasiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MasterLokasiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterLokasiPayload>
          }
          aggregate: {
            args: Prisma.MasterLokasiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMasterLokasi>
          }
          groupBy: {
            args: Prisma.MasterLokasiGroupByArgs<ExtArgs>
            result: $Utils.Optional<MasterLokasiGroupByOutputType>[]
          }
          count: {
            args: Prisma.MasterLokasiCountArgs<ExtArgs>
            result: $Utils.Optional<MasterLokasiCountAggregateOutputType> | number
          }
        }
      }
      Tugas: {
        payload: Prisma.$TugasPayload<ExtArgs>
        fields: Prisma.TugasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TugasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TugasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>
          }
          findFirst: {
            args: Prisma.TugasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TugasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>
          }
          findMany: {
            args: Prisma.TugasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>[]
          }
          create: {
            args: Prisma.TugasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>
          }
          createMany: {
            args: Prisma.TugasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TugasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>
          }
          update: {
            args: Prisma.TugasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>
          }
          deleteMany: {
            args: Prisma.TugasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TugasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TugasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>
          }
          aggregate: {
            args: Prisma.TugasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTugas>
          }
          groupBy: {
            args: Prisma.TugasGroupByArgs<ExtArgs>
            result: $Utils.Optional<TugasGroupByOutputType>[]
          }
          count: {
            args: Prisma.TugasCountArgs<ExtArgs>
            result: $Utils.Optional<TugasCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    laporan: number
    dataInjeksi: number
    notifications: number
    activityLogs: number
    tugas: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laporan?: boolean | UserCountOutputTypeCountLaporanArgs
    dataInjeksi?: boolean | UserCountOutputTypeCountDataInjeksiArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    activityLogs?: boolean | UserCountOutputTypeCountActivityLogsArgs
    tugas?: boolean | UserCountOutputTypeCountTugasArgs
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
  export type UserCountOutputTypeCountLaporanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaporanInspeksiWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDataInjeksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataInjeksiWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TugasWhereInput
  }


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    notifications: number
    activityLogs: number
    tugasDibuat: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | AdminCountOutputTypeCountNotificationsArgs
    activityLogs?: boolean | AdminCountOutputTypeCountActivityLogsArgs
    tugasDibuat?: boolean | AdminCountOutputTypeCountTugasDibuatArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountTugasDibuatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TugasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    nama: string | null
    email: string | null
    password: string | null
    jabatan: string | null
    lokasiSite: string | null
    foto: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    email: string | null
    password: string | null
    jabatan: string | null
    lokasiSite: string | null
    foto: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nama: number
    email: number
    password: number
    jabatan: number
    lokasiSite: number
    foto: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    jabatan?: true
    lokasiSite?: true
    foto?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    jabatan?: true
    lokasiSite?: true
    foto?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    jabatan?: true
    lokasiSite?: true
    foto?: true
    createdAt?: true
    updatedAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    nama: string
    email: string
    password: string
    jabatan: string
    lokasiSite: string
    foto: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    nama?: boolean
    email?: boolean
    password?: boolean
    jabatan?: boolean
    lokasiSite?: boolean
    foto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    laporan?: boolean | User$laporanArgs<ExtArgs>
    dataInjeksi?: boolean | User$dataInjeksiArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    tugas?: boolean | User$tugasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    jabatan?: boolean
    lokasiSite?: boolean
    foto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laporan?: boolean | User$laporanArgs<ExtArgs>
    dataInjeksi?: boolean | User$dataInjeksiArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    tugas?: boolean | User$tugasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      laporan: Prisma.$LaporanInspeksiPayload<ExtArgs>[]
      dataInjeksi: Prisma.$DataInjeksiPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
      tugas: Prisma.$TugasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      email: string
      password: string
      jabatan: string
      lokasiSite: string
      foto: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    laporan<T extends User$laporanArgs<ExtArgs> = {}>(args?: Subset<T, User$laporanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanInspeksiPayload<ExtArgs>, T, "findMany"> | Null>
    dataInjeksi<T extends User$dataInjeksiArgs<ExtArgs> = {}>(args?: Subset<T, User$dataInjeksiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataInjeksiPayload<ExtArgs>, T, "findMany"> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany"> | Null>
    activityLogs<T extends User$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany"> | Null>
    tugas<T extends User$tugasArgs<ExtArgs> = {}>(args?: Subset<T, User$tugasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly nama: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly jabatan: FieldRef<"User", 'String'>
    readonly lokasiSite: FieldRef<"User", 'String'>
    readonly foto: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    skipDuplicates?: boolean
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
  }

  /**
   * User.laporan
   */
  export type User$laporanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanInspeksi
     */
    select?: LaporanInspeksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInspeksiInclude<ExtArgs> | null
    where?: LaporanInspeksiWhereInput
    orderBy?: LaporanInspeksiOrderByWithRelationInput | LaporanInspeksiOrderByWithRelationInput[]
    cursor?: LaporanInspeksiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LaporanInspeksiScalarFieldEnum | LaporanInspeksiScalarFieldEnum[]
  }

  /**
   * User.dataInjeksi
   */
  export type User$dataInjeksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataInjeksi
     */
    select?: DataInjeksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInjeksiInclude<ExtArgs> | null
    where?: DataInjeksiWhereInput
    orderBy?: DataInjeksiOrderByWithRelationInput | DataInjeksiOrderByWithRelationInput[]
    cursor?: DataInjeksiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DataInjeksiScalarFieldEnum | DataInjeksiScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.activityLogs
   */
  export type User$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * User.tugas
   */
  export type User$tugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    where?: TugasWhereInput
    orderBy?: TugasOrderByWithRelationInput | TugasOrderByWithRelationInput[]
    cursor?: TugasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TugasScalarFieldEnum | TugasScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    nama: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    nama: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    nama: string
    email: string
    password: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notifications?: boolean | Admin$notificationsArgs<ExtArgs>
    activityLogs?: boolean | Admin$activityLogsArgs<ExtArgs>
    tugasDibuat?: boolean | Admin$tugasDibuatArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>


  export type AdminSelectScalar = {
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | Admin$notificationsArgs<ExtArgs>
    activityLogs?: boolean | Admin$activityLogsArgs<ExtArgs>
    tugasDibuat?: boolean | Admin$tugasDibuatArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
      tugasDibuat: Prisma.$TugasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      email: string
      password: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notifications<T extends Admin$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany"> | Null>
    activityLogs<T extends Admin$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany"> | Null>
    tugasDibuat<T extends Admin$tugasDibuatArgs<ExtArgs> = {}>(args?: Subset<T, Admin$tugasDibuatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly nama: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }

  /**
   * Admin.notifications
   */
  export type Admin$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Admin.activityLogs
   */
  export type Admin$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * Admin.tugasDibuat
   */
  export type Admin$tugasDibuatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    where?: TugasWhereInput
    orderBy?: TugasOrderByWithRelationInput | TugasOrderByWithRelationInput[]
    cursor?: TugasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TugasScalarFieldEnum | TugasScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model LaporanInspeksi
   */

  export type AggregateLaporanInspeksi = {
    _count: LaporanInspeksiCountAggregateOutputType | null
    _avg: LaporanInspeksiAvgAggregateOutputType | null
    _sum: LaporanInspeksiSumAggregateOutputType | null
    _min: LaporanInspeksiMinAggregateOutputType | null
    _max: LaporanInspeksiMaxAggregateOutputType | null
  }

  export type LaporanInspeksiAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LaporanInspeksiSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LaporanInspeksiMinAggregateOutputType = {
    id: number | null
    userId: number | null
    tanggal: Date | null
    lokasi: string | null
    kategori: string | null
    deskripsi: string | null
    risiko: string | null
    tindakan: string | null
    foto: string | null
    status: string | null
    catatan: string | null
    dueDate: Date | null
    fungsi: string | null
    statusTemuan: string | null
    tanggalPenyelesaian: Date | null
    catatanPenyelesaian: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LaporanInspeksiMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    tanggal: Date | null
    lokasi: string | null
    kategori: string | null
    deskripsi: string | null
    risiko: string | null
    tindakan: string | null
    foto: string | null
    status: string | null
    catatan: string | null
    dueDate: Date | null
    fungsi: string | null
    statusTemuan: string | null
    tanggalPenyelesaian: Date | null
    catatanPenyelesaian: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LaporanInspeksiCountAggregateOutputType = {
    id: number
    userId: number
    tanggal: number
    lokasi: number
    kategori: number
    deskripsi: number
    risiko: number
    tindakan: number
    foto: number
    status: number
    catatan: number
    dueDate: number
    fungsi: number
    statusTemuan: number
    tanggalPenyelesaian: number
    catatanPenyelesaian: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LaporanInspeksiAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LaporanInspeksiSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LaporanInspeksiMinAggregateInputType = {
    id?: true
    userId?: true
    tanggal?: true
    lokasi?: true
    kategori?: true
    deskripsi?: true
    risiko?: true
    tindakan?: true
    foto?: true
    status?: true
    catatan?: true
    dueDate?: true
    fungsi?: true
    statusTemuan?: true
    tanggalPenyelesaian?: true
    catatanPenyelesaian?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LaporanInspeksiMaxAggregateInputType = {
    id?: true
    userId?: true
    tanggal?: true
    lokasi?: true
    kategori?: true
    deskripsi?: true
    risiko?: true
    tindakan?: true
    foto?: true
    status?: true
    catatan?: true
    dueDate?: true
    fungsi?: true
    statusTemuan?: true
    tanggalPenyelesaian?: true
    catatanPenyelesaian?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LaporanInspeksiCountAggregateInputType = {
    id?: true
    userId?: true
    tanggal?: true
    lokasi?: true
    kategori?: true
    deskripsi?: true
    risiko?: true
    tindakan?: true
    foto?: true
    status?: true
    catatan?: true
    dueDate?: true
    fungsi?: true
    statusTemuan?: true
    tanggalPenyelesaian?: true
    catatanPenyelesaian?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LaporanInspeksiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LaporanInspeksi to aggregate.
     */
    where?: LaporanInspeksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaporanInspeksis to fetch.
     */
    orderBy?: LaporanInspeksiOrderByWithRelationInput | LaporanInspeksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LaporanInspeksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaporanInspeksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaporanInspeksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LaporanInspeksis
    **/
    _count?: true | LaporanInspeksiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LaporanInspeksiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LaporanInspeksiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LaporanInspeksiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LaporanInspeksiMaxAggregateInputType
  }

  export type GetLaporanInspeksiAggregateType<T extends LaporanInspeksiAggregateArgs> = {
        [P in keyof T & keyof AggregateLaporanInspeksi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLaporanInspeksi[P]>
      : GetScalarType<T[P], AggregateLaporanInspeksi[P]>
  }




  export type LaporanInspeksiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaporanInspeksiWhereInput
    orderBy?: LaporanInspeksiOrderByWithAggregationInput | LaporanInspeksiOrderByWithAggregationInput[]
    by: LaporanInspeksiScalarFieldEnum[] | LaporanInspeksiScalarFieldEnum
    having?: LaporanInspeksiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LaporanInspeksiCountAggregateInputType | true
    _avg?: LaporanInspeksiAvgAggregateInputType
    _sum?: LaporanInspeksiSumAggregateInputType
    _min?: LaporanInspeksiMinAggregateInputType
    _max?: LaporanInspeksiMaxAggregateInputType
  }

  export type LaporanInspeksiGroupByOutputType = {
    id: number
    userId: number
    tanggal: Date
    lokasi: string
    kategori: string
    deskripsi: string
    risiko: string
    tindakan: string
    foto: string | null
    status: string
    catatan: string | null
    dueDate: Date | null
    fungsi: string | null
    statusTemuan: string
    tanggalPenyelesaian: Date | null
    catatanPenyelesaian: string | null
    createdAt: Date
    updatedAt: Date
    _count: LaporanInspeksiCountAggregateOutputType | null
    _avg: LaporanInspeksiAvgAggregateOutputType | null
    _sum: LaporanInspeksiSumAggregateOutputType | null
    _min: LaporanInspeksiMinAggregateOutputType | null
    _max: LaporanInspeksiMaxAggregateOutputType | null
  }

  type GetLaporanInspeksiGroupByPayload<T extends LaporanInspeksiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LaporanInspeksiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LaporanInspeksiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LaporanInspeksiGroupByOutputType[P]>
            : GetScalarType<T[P], LaporanInspeksiGroupByOutputType[P]>
        }
      >
    >


  export type LaporanInspeksiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tanggal?: boolean
    lokasi?: boolean
    kategori?: boolean
    deskripsi?: boolean
    risiko?: boolean
    tindakan?: boolean
    foto?: boolean
    status?: boolean
    catatan?: boolean
    dueDate?: boolean
    fungsi?: boolean
    statusTemuan?: boolean
    tanggalPenyelesaian?: boolean
    catatanPenyelesaian?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laporanInspeksi"]>


  export type LaporanInspeksiSelectScalar = {
    id?: boolean
    userId?: boolean
    tanggal?: boolean
    lokasi?: boolean
    kategori?: boolean
    deskripsi?: boolean
    risiko?: boolean
    tindakan?: boolean
    foto?: boolean
    status?: boolean
    catatan?: boolean
    dueDate?: boolean
    fungsi?: boolean
    statusTemuan?: boolean
    tanggalPenyelesaian?: boolean
    catatanPenyelesaian?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LaporanInspeksiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LaporanInspeksiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LaporanInspeksi"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      tanggal: Date
      lokasi: string
      kategori: string
      deskripsi: string
      risiko: string
      tindakan: string
      foto: string | null
      status: string
      catatan: string | null
      dueDate: Date | null
      fungsi: string | null
      statusTemuan: string
      tanggalPenyelesaian: Date | null
      catatanPenyelesaian: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["laporanInspeksi"]>
    composites: {}
  }

  type LaporanInspeksiGetPayload<S extends boolean | null | undefined | LaporanInspeksiDefaultArgs> = $Result.GetResult<Prisma.$LaporanInspeksiPayload, S>

  type LaporanInspeksiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LaporanInspeksiFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LaporanInspeksiCountAggregateInputType | true
    }

  export interface LaporanInspeksiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LaporanInspeksi'], meta: { name: 'LaporanInspeksi' } }
    /**
     * Find zero or one LaporanInspeksi that matches the filter.
     * @param {LaporanInspeksiFindUniqueArgs} args - Arguments to find a LaporanInspeksi
     * @example
     * // Get one LaporanInspeksi
     * const laporanInspeksi = await prisma.laporanInspeksi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LaporanInspeksiFindUniqueArgs>(args: SelectSubset<T, LaporanInspeksiFindUniqueArgs<ExtArgs>>): Prisma__LaporanInspeksiClient<$Result.GetResult<Prisma.$LaporanInspeksiPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LaporanInspeksi that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LaporanInspeksiFindUniqueOrThrowArgs} args - Arguments to find a LaporanInspeksi
     * @example
     * // Get one LaporanInspeksi
     * const laporanInspeksi = await prisma.laporanInspeksi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LaporanInspeksiFindUniqueOrThrowArgs>(args: SelectSubset<T, LaporanInspeksiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LaporanInspeksiClient<$Result.GetResult<Prisma.$LaporanInspeksiPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LaporanInspeksi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanInspeksiFindFirstArgs} args - Arguments to find a LaporanInspeksi
     * @example
     * // Get one LaporanInspeksi
     * const laporanInspeksi = await prisma.laporanInspeksi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LaporanInspeksiFindFirstArgs>(args?: SelectSubset<T, LaporanInspeksiFindFirstArgs<ExtArgs>>): Prisma__LaporanInspeksiClient<$Result.GetResult<Prisma.$LaporanInspeksiPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LaporanInspeksi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanInspeksiFindFirstOrThrowArgs} args - Arguments to find a LaporanInspeksi
     * @example
     * // Get one LaporanInspeksi
     * const laporanInspeksi = await prisma.laporanInspeksi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LaporanInspeksiFindFirstOrThrowArgs>(args?: SelectSubset<T, LaporanInspeksiFindFirstOrThrowArgs<ExtArgs>>): Prisma__LaporanInspeksiClient<$Result.GetResult<Prisma.$LaporanInspeksiPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LaporanInspeksis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanInspeksiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LaporanInspeksis
     * const laporanInspeksis = await prisma.laporanInspeksi.findMany()
     * 
     * // Get first 10 LaporanInspeksis
     * const laporanInspeksis = await prisma.laporanInspeksi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const laporanInspeksiWithIdOnly = await prisma.laporanInspeksi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LaporanInspeksiFindManyArgs>(args?: SelectSubset<T, LaporanInspeksiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanInspeksiPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LaporanInspeksi.
     * @param {LaporanInspeksiCreateArgs} args - Arguments to create a LaporanInspeksi.
     * @example
     * // Create one LaporanInspeksi
     * const LaporanInspeksi = await prisma.laporanInspeksi.create({
     *   data: {
     *     // ... data to create a LaporanInspeksi
     *   }
     * })
     * 
     */
    create<T extends LaporanInspeksiCreateArgs>(args: SelectSubset<T, LaporanInspeksiCreateArgs<ExtArgs>>): Prisma__LaporanInspeksiClient<$Result.GetResult<Prisma.$LaporanInspeksiPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LaporanInspeksis.
     * @param {LaporanInspeksiCreateManyArgs} args - Arguments to create many LaporanInspeksis.
     * @example
     * // Create many LaporanInspeksis
     * const laporanInspeksi = await prisma.laporanInspeksi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LaporanInspeksiCreateManyArgs>(args?: SelectSubset<T, LaporanInspeksiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LaporanInspeksi.
     * @param {LaporanInspeksiDeleteArgs} args - Arguments to delete one LaporanInspeksi.
     * @example
     * // Delete one LaporanInspeksi
     * const LaporanInspeksi = await prisma.laporanInspeksi.delete({
     *   where: {
     *     // ... filter to delete one LaporanInspeksi
     *   }
     * })
     * 
     */
    delete<T extends LaporanInspeksiDeleteArgs>(args: SelectSubset<T, LaporanInspeksiDeleteArgs<ExtArgs>>): Prisma__LaporanInspeksiClient<$Result.GetResult<Prisma.$LaporanInspeksiPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LaporanInspeksi.
     * @param {LaporanInspeksiUpdateArgs} args - Arguments to update one LaporanInspeksi.
     * @example
     * // Update one LaporanInspeksi
     * const laporanInspeksi = await prisma.laporanInspeksi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LaporanInspeksiUpdateArgs>(args: SelectSubset<T, LaporanInspeksiUpdateArgs<ExtArgs>>): Prisma__LaporanInspeksiClient<$Result.GetResult<Prisma.$LaporanInspeksiPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LaporanInspeksis.
     * @param {LaporanInspeksiDeleteManyArgs} args - Arguments to filter LaporanInspeksis to delete.
     * @example
     * // Delete a few LaporanInspeksis
     * const { count } = await prisma.laporanInspeksi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LaporanInspeksiDeleteManyArgs>(args?: SelectSubset<T, LaporanInspeksiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LaporanInspeksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanInspeksiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LaporanInspeksis
     * const laporanInspeksi = await prisma.laporanInspeksi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LaporanInspeksiUpdateManyArgs>(args: SelectSubset<T, LaporanInspeksiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LaporanInspeksi.
     * @param {LaporanInspeksiUpsertArgs} args - Arguments to update or create a LaporanInspeksi.
     * @example
     * // Update or create a LaporanInspeksi
     * const laporanInspeksi = await prisma.laporanInspeksi.upsert({
     *   create: {
     *     // ... data to create a LaporanInspeksi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LaporanInspeksi we want to update
     *   }
     * })
     */
    upsert<T extends LaporanInspeksiUpsertArgs>(args: SelectSubset<T, LaporanInspeksiUpsertArgs<ExtArgs>>): Prisma__LaporanInspeksiClient<$Result.GetResult<Prisma.$LaporanInspeksiPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LaporanInspeksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanInspeksiCountArgs} args - Arguments to filter LaporanInspeksis to count.
     * @example
     * // Count the number of LaporanInspeksis
     * const count = await prisma.laporanInspeksi.count({
     *   where: {
     *     // ... the filter for the LaporanInspeksis we want to count
     *   }
     * })
    **/
    count<T extends LaporanInspeksiCountArgs>(
      args?: Subset<T, LaporanInspeksiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LaporanInspeksiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LaporanInspeksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanInspeksiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LaporanInspeksiAggregateArgs>(args: Subset<T, LaporanInspeksiAggregateArgs>): Prisma.PrismaPromise<GetLaporanInspeksiAggregateType<T>>

    /**
     * Group by LaporanInspeksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanInspeksiGroupByArgs} args - Group by arguments.
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
      T extends LaporanInspeksiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LaporanInspeksiGroupByArgs['orderBy'] }
        : { orderBy?: LaporanInspeksiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LaporanInspeksiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLaporanInspeksiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LaporanInspeksi model
   */
  readonly fields: LaporanInspeksiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LaporanInspeksi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LaporanInspeksiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the LaporanInspeksi model
   */ 
  interface LaporanInspeksiFieldRefs {
    readonly id: FieldRef<"LaporanInspeksi", 'Int'>
    readonly userId: FieldRef<"LaporanInspeksi", 'Int'>
    readonly tanggal: FieldRef<"LaporanInspeksi", 'DateTime'>
    readonly lokasi: FieldRef<"LaporanInspeksi", 'String'>
    readonly kategori: FieldRef<"LaporanInspeksi", 'String'>
    readonly deskripsi: FieldRef<"LaporanInspeksi", 'String'>
    readonly risiko: FieldRef<"LaporanInspeksi", 'String'>
    readonly tindakan: FieldRef<"LaporanInspeksi", 'String'>
    readonly foto: FieldRef<"LaporanInspeksi", 'String'>
    readonly status: FieldRef<"LaporanInspeksi", 'String'>
    readonly catatan: FieldRef<"LaporanInspeksi", 'String'>
    readonly dueDate: FieldRef<"LaporanInspeksi", 'DateTime'>
    readonly fungsi: FieldRef<"LaporanInspeksi", 'String'>
    readonly statusTemuan: FieldRef<"LaporanInspeksi", 'String'>
    readonly tanggalPenyelesaian: FieldRef<"LaporanInspeksi", 'DateTime'>
    readonly catatanPenyelesaian: FieldRef<"LaporanInspeksi", 'String'>
    readonly createdAt: FieldRef<"LaporanInspeksi", 'DateTime'>
    readonly updatedAt: FieldRef<"LaporanInspeksi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LaporanInspeksi findUnique
   */
  export type LaporanInspeksiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanInspeksi
     */
    select?: LaporanInspeksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInspeksiInclude<ExtArgs> | null
    /**
     * Filter, which LaporanInspeksi to fetch.
     */
    where: LaporanInspeksiWhereUniqueInput
  }

  /**
   * LaporanInspeksi findUniqueOrThrow
   */
  export type LaporanInspeksiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanInspeksi
     */
    select?: LaporanInspeksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInspeksiInclude<ExtArgs> | null
    /**
     * Filter, which LaporanInspeksi to fetch.
     */
    where: LaporanInspeksiWhereUniqueInput
  }

  /**
   * LaporanInspeksi findFirst
   */
  export type LaporanInspeksiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanInspeksi
     */
    select?: LaporanInspeksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInspeksiInclude<ExtArgs> | null
    /**
     * Filter, which LaporanInspeksi to fetch.
     */
    where?: LaporanInspeksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaporanInspeksis to fetch.
     */
    orderBy?: LaporanInspeksiOrderByWithRelationInput | LaporanInspeksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LaporanInspeksis.
     */
    cursor?: LaporanInspeksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaporanInspeksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaporanInspeksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LaporanInspeksis.
     */
    distinct?: LaporanInspeksiScalarFieldEnum | LaporanInspeksiScalarFieldEnum[]
  }

  /**
   * LaporanInspeksi findFirstOrThrow
   */
  export type LaporanInspeksiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanInspeksi
     */
    select?: LaporanInspeksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInspeksiInclude<ExtArgs> | null
    /**
     * Filter, which LaporanInspeksi to fetch.
     */
    where?: LaporanInspeksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaporanInspeksis to fetch.
     */
    orderBy?: LaporanInspeksiOrderByWithRelationInput | LaporanInspeksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LaporanInspeksis.
     */
    cursor?: LaporanInspeksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaporanInspeksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaporanInspeksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LaporanInspeksis.
     */
    distinct?: LaporanInspeksiScalarFieldEnum | LaporanInspeksiScalarFieldEnum[]
  }

  /**
   * LaporanInspeksi findMany
   */
  export type LaporanInspeksiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanInspeksi
     */
    select?: LaporanInspeksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInspeksiInclude<ExtArgs> | null
    /**
     * Filter, which LaporanInspeksis to fetch.
     */
    where?: LaporanInspeksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaporanInspeksis to fetch.
     */
    orderBy?: LaporanInspeksiOrderByWithRelationInput | LaporanInspeksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LaporanInspeksis.
     */
    cursor?: LaporanInspeksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaporanInspeksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaporanInspeksis.
     */
    skip?: number
    distinct?: LaporanInspeksiScalarFieldEnum | LaporanInspeksiScalarFieldEnum[]
  }

  /**
   * LaporanInspeksi create
   */
  export type LaporanInspeksiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanInspeksi
     */
    select?: LaporanInspeksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInspeksiInclude<ExtArgs> | null
    /**
     * The data needed to create a LaporanInspeksi.
     */
    data: XOR<LaporanInspeksiCreateInput, LaporanInspeksiUncheckedCreateInput>
  }

  /**
   * LaporanInspeksi createMany
   */
  export type LaporanInspeksiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LaporanInspeksis.
     */
    data: LaporanInspeksiCreateManyInput | LaporanInspeksiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LaporanInspeksi update
   */
  export type LaporanInspeksiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanInspeksi
     */
    select?: LaporanInspeksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInspeksiInclude<ExtArgs> | null
    /**
     * The data needed to update a LaporanInspeksi.
     */
    data: XOR<LaporanInspeksiUpdateInput, LaporanInspeksiUncheckedUpdateInput>
    /**
     * Choose, which LaporanInspeksi to update.
     */
    where: LaporanInspeksiWhereUniqueInput
  }

  /**
   * LaporanInspeksi updateMany
   */
  export type LaporanInspeksiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LaporanInspeksis.
     */
    data: XOR<LaporanInspeksiUpdateManyMutationInput, LaporanInspeksiUncheckedUpdateManyInput>
    /**
     * Filter which LaporanInspeksis to update
     */
    where?: LaporanInspeksiWhereInput
  }

  /**
   * LaporanInspeksi upsert
   */
  export type LaporanInspeksiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanInspeksi
     */
    select?: LaporanInspeksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInspeksiInclude<ExtArgs> | null
    /**
     * The filter to search for the LaporanInspeksi to update in case it exists.
     */
    where: LaporanInspeksiWhereUniqueInput
    /**
     * In case the LaporanInspeksi found by the `where` argument doesn't exist, create a new LaporanInspeksi with this data.
     */
    create: XOR<LaporanInspeksiCreateInput, LaporanInspeksiUncheckedCreateInput>
    /**
     * In case the LaporanInspeksi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LaporanInspeksiUpdateInput, LaporanInspeksiUncheckedUpdateInput>
  }

  /**
   * LaporanInspeksi delete
   */
  export type LaporanInspeksiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanInspeksi
     */
    select?: LaporanInspeksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInspeksiInclude<ExtArgs> | null
    /**
     * Filter which LaporanInspeksi to delete.
     */
    where: LaporanInspeksiWhereUniqueInput
  }

  /**
   * LaporanInspeksi deleteMany
   */
  export type LaporanInspeksiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LaporanInspeksis to delete
     */
    where?: LaporanInspeksiWhereInput
  }

  /**
   * LaporanInspeksi without action
   */
  export type LaporanInspeksiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanInspeksi
     */
    select?: LaporanInspeksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInspeksiInclude<ExtArgs> | null
  }


  /**
   * Model DataInjeksi
   */

  export type AggregateDataInjeksi = {
    _count: DataInjeksiCountAggregateOutputType | null
    _avg: DataInjeksiAvgAggregateOutputType | null
    _sum: DataInjeksiSumAggregateOutputType | null
    _min: DataInjeksiMinAggregateOutputType | null
    _max: DataInjeksiMaxAggregateOutputType | null
  }

  export type DataInjeksiAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    nilaiRaw: number | null
    hasilPerhitungan: number | null
  }

  export type DataInjeksiSumAggregateOutputType = {
    id: number | null
    userId: number | null
    nilaiRaw: number | null
    hasilPerhitungan: number | null
  }

  export type DataInjeksiMinAggregateOutputType = {
    id: number | null
    userId: number | null
    tanggal: Date | null
    nilaiRaw: number | null
    hasilPerhitungan: number | null
    formulaUsed: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DataInjeksiMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    tanggal: Date | null
    nilaiRaw: number | null
    hasilPerhitungan: number | null
    formulaUsed: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DataInjeksiCountAggregateOutputType = {
    id: number
    userId: number
    tanggal: number
    nilaiRaw: number
    hasilPerhitungan: number
    formulaUsed: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DataInjeksiAvgAggregateInputType = {
    id?: true
    userId?: true
    nilaiRaw?: true
    hasilPerhitungan?: true
  }

  export type DataInjeksiSumAggregateInputType = {
    id?: true
    userId?: true
    nilaiRaw?: true
    hasilPerhitungan?: true
  }

  export type DataInjeksiMinAggregateInputType = {
    id?: true
    userId?: true
    tanggal?: true
    nilaiRaw?: true
    hasilPerhitungan?: true
    formulaUsed?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DataInjeksiMaxAggregateInputType = {
    id?: true
    userId?: true
    tanggal?: true
    nilaiRaw?: true
    hasilPerhitungan?: true
    formulaUsed?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DataInjeksiCountAggregateInputType = {
    id?: true
    userId?: true
    tanggal?: true
    nilaiRaw?: true
    hasilPerhitungan?: true
    formulaUsed?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DataInjeksiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataInjeksi to aggregate.
     */
    where?: DataInjeksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataInjeksis to fetch.
     */
    orderBy?: DataInjeksiOrderByWithRelationInput | DataInjeksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataInjeksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataInjeksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataInjeksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataInjeksis
    **/
    _count?: true | DataInjeksiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataInjeksiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataInjeksiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataInjeksiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataInjeksiMaxAggregateInputType
  }

  export type GetDataInjeksiAggregateType<T extends DataInjeksiAggregateArgs> = {
        [P in keyof T & keyof AggregateDataInjeksi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataInjeksi[P]>
      : GetScalarType<T[P], AggregateDataInjeksi[P]>
  }




  export type DataInjeksiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataInjeksiWhereInput
    orderBy?: DataInjeksiOrderByWithAggregationInput | DataInjeksiOrderByWithAggregationInput[]
    by: DataInjeksiScalarFieldEnum[] | DataInjeksiScalarFieldEnum
    having?: DataInjeksiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataInjeksiCountAggregateInputType | true
    _avg?: DataInjeksiAvgAggregateInputType
    _sum?: DataInjeksiSumAggregateInputType
    _min?: DataInjeksiMinAggregateInputType
    _max?: DataInjeksiMaxAggregateInputType
  }

  export type DataInjeksiGroupByOutputType = {
    id: number
    userId: number
    tanggal: Date
    nilaiRaw: number
    hasilPerhitungan: number | null
    formulaUsed: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: DataInjeksiCountAggregateOutputType | null
    _avg: DataInjeksiAvgAggregateOutputType | null
    _sum: DataInjeksiSumAggregateOutputType | null
    _min: DataInjeksiMinAggregateOutputType | null
    _max: DataInjeksiMaxAggregateOutputType | null
  }

  type GetDataInjeksiGroupByPayload<T extends DataInjeksiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataInjeksiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataInjeksiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataInjeksiGroupByOutputType[P]>
            : GetScalarType<T[P], DataInjeksiGroupByOutputType[P]>
        }
      >
    >


  export type DataInjeksiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tanggal?: boolean
    nilaiRaw?: boolean
    hasilPerhitungan?: boolean
    formulaUsed?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataInjeksi"]>


  export type DataInjeksiSelectScalar = {
    id?: boolean
    userId?: boolean
    tanggal?: boolean
    nilaiRaw?: boolean
    hasilPerhitungan?: boolean
    formulaUsed?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DataInjeksiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DataInjeksiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataInjeksi"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      tanggal: Date
      nilaiRaw: number
      hasilPerhitungan: number | null
      formulaUsed: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dataInjeksi"]>
    composites: {}
  }

  type DataInjeksiGetPayload<S extends boolean | null | undefined | DataInjeksiDefaultArgs> = $Result.GetResult<Prisma.$DataInjeksiPayload, S>

  type DataInjeksiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DataInjeksiFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DataInjeksiCountAggregateInputType | true
    }

  export interface DataInjeksiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataInjeksi'], meta: { name: 'DataInjeksi' } }
    /**
     * Find zero or one DataInjeksi that matches the filter.
     * @param {DataInjeksiFindUniqueArgs} args - Arguments to find a DataInjeksi
     * @example
     * // Get one DataInjeksi
     * const dataInjeksi = await prisma.dataInjeksi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataInjeksiFindUniqueArgs>(args: SelectSubset<T, DataInjeksiFindUniqueArgs<ExtArgs>>): Prisma__DataInjeksiClient<$Result.GetResult<Prisma.$DataInjeksiPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DataInjeksi that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DataInjeksiFindUniqueOrThrowArgs} args - Arguments to find a DataInjeksi
     * @example
     * // Get one DataInjeksi
     * const dataInjeksi = await prisma.dataInjeksi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataInjeksiFindUniqueOrThrowArgs>(args: SelectSubset<T, DataInjeksiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataInjeksiClient<$Result.GetResult<Prisma.$DataInjeksiPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DataInjeksi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataInjeksiFindFirstArgs} args - Arguments to find a DataInjeksi
     * @example
     * // Get one DataInjeksi
     * const dataInjeksi = await prisma.dataInjeksi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataInjeksiFindFirstArgs>(args?: SelectSubset<T, DataInjeksiFindFirstArgs<ExtArgs>>): Prisma__DataInjeksiClient<$Result.GetResult<Prisma.$DataInjeksiPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DataInjeksi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataInjeksiFindFirstOrThrowArgs} args - Arguments to find a DataInjeksi
     * @example
     * // Get one DataInjeksi
     * const dataInjeksi = await prisma.dataInjeksi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataInjeksiFindFirstOrThrowArgs>(args?: SelectSubset<T, DataInjeksiFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataInjeksiClient<$Result.GetResult<Prisma.$DataInjeksiPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DataInjeksis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataInjeksiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataInjeksis
     * const dataInjeksis = await prisma.dataInjeksi.findMany()
     * 
     * // Get first 10 DataInjeksis
     * const dataInjeksis = await prisma.dataInjeksi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataInjeksiWithIdOnly = await prisma.dataInjeksi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DataInjeksiFindManyArgs>(args?: SelectSubset<T, DataInjeksiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataInjeksiPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DataInjeksi.
     * @param {DataInjeksiCreateArgs} args - Arguments to create a DataInjeksi.
     * @example
     * // Create one DataInjeksi
     * const DataInjeksi = await prisma.dataInjeksi.create({
     *   data: {
     *     // ... data to create a DataInjeksi
     *   }
     * })
     * 
     */
    create<T extends DataInjeksiCreateArgs>(args: SelectSubset<T, DataInjeksiCreateArgs<ExtArgs>>): Prisma__DataInjeksiClient<$Result.GetResult<Prisma.$DataInjeksiPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DataInjeksis.
     * @param {DataInjeksiCreateManyArgs} args - Arguments to create many DataInjeksis.
     * @example
     * // Create many DataInjeksis
     * const dataInjeksi = await prisma.dataInjeksi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataInjeksiCreateManyArgs>(args?: SelectSubset<T, DataInjeksiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DataInjeksi.
     * @param {DataInjeksiDeleteArgs} args - Arguments to delete one DataInjeksi.
     * @example
     * // Delete one DataInjeksi
     * const DataInjeksi = await prisma.dataInjeksi.delete({
     *   where: {
     *     // ... filter to delete one DataInjeksi
     *   }
     * })
     * 
     */
    delete<T extends DataInjeksiDeleteArgs>(args: SelectSubset<T, DataInjeksiDeleteArgs<ExtArgs>>): Prisma__DataInjeksiClient<$Result.GetResult<Prisma.$DataInjeksiPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DataInjeksi.
     * @param {DataInjeksiUpdateArgs} args - Arguments to update one DataInjeksi.
     * @example
     * // Update one DataInjeksi
     * const dataInjeksi = await prisma.dataInjeksi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataInjeksiUpdateArgs>(args: SelectSubset<T, DataInjeksiUpdateArgs<ExtArgs>>): Prisma__DataInjeksiClient<$Result.GetResult<Prisma.$DataInjeksiPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DataInjeksis.
     * @param {DataInjeksiDeleteManyArgs} args - Arguments to filter DataInjeksis to delete.
     * @example
     * // Delete a few DataInjeksis
     * const { count } = await prisma.dataInjeksi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataInjeksiDeleteManyArgs>(args?: SelectSubset<T, DataInjeksiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataInjeksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataInjeksiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataInjeksis
     * const dataInjeksi = await prisma.dataInjeksi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataInjeksiUpdateManyArgs>(args: SelectSubset<T, DataInjeksiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DataInjeksi.
     * @param {DataInjeksiUpsertArgs} args - Arguments to update or create a DataInjeksi.
     * @example
     * // Update or create a DataInjeksi
     * const dataInjeksi = await prisma.dataInjeksi.upsert({
     *   create: {
     *     // ... data to create a DataInjeksi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataInjeksi we want to update
     *   }
     * })
     */
    upsert<T extends DataInjeksiUpsertArgs>(args: SelectSubset<T, DataInjeksiUpsertArgs<ExtArgs>>): Prisma__DataInjeksiClient<$Result.GetResult<Prisma.$DataInjeksiPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DataInjeksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataInjeksiCountArgs} args - Arguments to filter DataInjeksis to count.
     * @example
     * // Count the number of DataInjeksis
     * const count = await prisma.dataInjeksi.count({
     *   where: {
     *     // ... the filter for the DataInjeksis we want to count
     *   }
     * })
    **/
    count<T extends DataInjeksiCountArgs>(
      args?: Subset<T, DataInjeksiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataInjeksiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataInjeksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataInjeksiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DataInjeksiAggregateArgs>(args: Subset<T, DataInjeksiAggregateArgs>): Prisma.PrismaPromise<GetDataInjeksiAggregateType<T>>

    /**
     * Group by DataInjeksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataInjeksiGroupByArgs} args - Group by arguments.
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
      T extends DataInjeksiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataInjeksiGroupByArgs['orderBy'] }
        : { orderBy?: DataInjeksiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DataInjeksiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataInjeksiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataInjeksi model
   */
  readonly fields: DataInjeksiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataInjeksi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataInjeksiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the DataInjeksi model
   */ 
  interface DataInjeksiFieldRefs {
    readonly id: FieldRef<"DataInjeksi", 'Int'>
    readonly userId: FieldRef<"DataInjeksi", 'Int'>
    readonly tanggal: FieldRef<"DataInjeksi", 'DateTime'>
    readonly nilaiRaw: FieldRef<"DataInjeksi", 'Float'>
    readonly hasilPerhitungan: FieldRef<"DataInjeksi", 'Float'>
    readonly formulaUsed: FieldRef<"DataInjeksi", 'String'>
    readonly status: FieldRef<"DataInjeksi", 'String'>
    readonly createdAt: FieldRef<"DataInjeksi", 'DateTime'>
    readonly updatedAt: FieldRef<"DataInjeksi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DataInjeksi findUnique
   */
  export type DataInjeksiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataInjeksi
     */
    select?: DataInjeksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInjeksiInclude<ExtArgs> | null
    /**
     * Filter, which DataInjeksi to fetch.
     */
    where: DataInjeksiWhereUniqueInput
  }

  /**
   * DataInjeksi findUniqueOrThrow
   */
  export type DataInjeksiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataInjeksi
     */
    select?: DataInjeksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInjeksiInclude<ExtArgs> | null
    /**
     * Filter, which DataInjeksi to fetch.
     */
    where: DataInjeksiWhereUniqueInput
  }

  /**
   * DataInjeksi findFirst
   */
  export type DataInjeksiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataInjeksi
     */
    select?: DataInjeksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInjeksiInclude<ExtArgs> | null
    /**
     * Filter, which DataInjeksi to fetch.
     */
    where?: DataInjeksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataInjeksis to fetch.
     */
    orderBy?: DataInjeksiOrderByWithRelationInput | DataInjeksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataInjeksis.
     */
    cursor?: DataInjeksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataInjeksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataInjeksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataInjeksis.
     */
    distinct?: DataInjeksiScalarFieldEnum | DataInjeksiScalarFieldEnum[]
  }

  /**
   * DataInjeksi findFirstOrThrow
   */
  export type DataInjeksiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataInjeksi
     */
    select?: DataInjeksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInjeksiInclude<ExtArgs> | null
    /**
     * Filter, which DataInjeksi to fetch.
     */
    where?: DataInjeksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataInjeksis to fetch.
     */
    orderBy?: DataInjeksiOrderByWithRelationInput | DataInjeksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataInjeksis.
     */
    cursor?: DataInjeksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataInjeksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataInjeksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataInjeksis.
     */
    distinct?: DataInjeksiScalarFieldEnum | DataInjeksiScalarFieldEnum[]
  }

  /**
   * DataInjeksi findMany
   */
  export type DataInjeksiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataInjeksi
     */
    select?: DataInjeksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInjeksiInclude<ExtArgs> | null
    /**
     * Filter, which DataInjeksis to fetch.
     */
    where?: DataInjeksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataInjeksis to fetch.
     */
    orderBy?: DataInjeksiOrderByWithRelationInput | DataInjeksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataInjeksis.
     */
    cursor?: DataInjeksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataInjeksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataInjeksis.
     */
    skip?: number
    distinct?: DataInjeksiScalarFieldEnum | DataInjeksiScalarFieldEnum[]
  }

  /**
   * DataInjeksi create
   */
  export type DataInjeksiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataInjeksi
     */
    select?: DataInjeksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInjeksiInclude<ExtArgs> | null
    /**
     * The data needed to create a DataInjeksi.
     */
    data: XOR<DataInjeksiCreateInput, DataInjeksiUncheckedCreateInput>
  }

  /**
   * DataInjeksi createMany
   */
  export type DataInjeksiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataInjeksis.
     */
    data: DataInjeksiCreateManyInput | DataInjeksiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataInjeksi update
   */
  export type DataInjeksiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataInjeksi
     */
    select?: DataInjeksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInjeksiInclude<ExtArgs> | null
    /**
     * The data needed to update a DataInjeksi.
     */
    data: XOR<DataInjeksiUpdateInput, DataInjeksiUncheckedUpdateInput>
    /**
     * Choose, which DataInjeksi to update.
     */
    where: DataInjeksiWhereUniqueInput
  }

  /**
   * DataInjeksi updateMany
   */
  export type DataInjeksiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataInjeksis.
     */
    data: XOR<DataInjeksiUpdateManyMutationInput, DataInjeksiUncheckedUpdateManyInput>
    /**
     * Filter which DataInjeksis to update
     */
    where?: DataInjeksiWhereInput
  }

  /**
   * DataInjeksi upsert
   */
  export type DataInjeksiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataInjeksi
     */
    select?: DataInjeksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInjeksiInclude<ExtArgs> | null
    /**
     * The filter to search for the DataInjeksi to update in case it exists.
     */
    where: DataInjeksiWhereUniqueInput
    /**
     * In case the DataInjeksi found by the `where` argument doesn't exist, create a new DataInjeksi with this data.
     */
    create: XOR<DataInjeksiCreateInput, DataInjeksiUncheckedCreateInput>
    /**
     * In case the DataInjeksi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataInjeksiUpdateInput, DataInjeksiUncheckedUpdateInput>
  }

  /**
   * DataInjeksi delete
   */
  export type DataInjeksiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataInjeksi
     */
    select?: DataInjeksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInjeksiInclude<ExtArgs> | null
    /**
     * Filter which DataInjeksi to delete.
     */
    where: DataInjeksiWhereUniqueInput
  }

  /**
   * DataInjeksi deleteMany
   */
  export type DataInjeksiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataInjeksis to delete
     */
    where?: DataInjeksiWhereInput
  }

  /**
   * DataInjeksi without action
   */
  export type DataInjeksiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataInjeksi
     */
    select?: DataInjeksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataInjeksiInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    adminId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
    adminId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    adminId: number | null
    type: string | null
    title: string | null
    message: string | null
    isRead: boolean | null
    data: string | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    adminId: number | null
    type: string | null
    title: string | null
    message: string | null
    isRead: boolean | null
    data: string | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    adminId: number
    type: number
    title: number
    message: number
    isRead: number
    data: number
    createdAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
    adminId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
    adminId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    adminId?: true
    type?: true
    title?: true
    message?: true
    isRead?: true
    data?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    adminId?: true
    type?: true
    title?: true
    message?: true
    isRead?: true
    data?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    adminId?: true
    type?: true
    title?: true
    message?: true
    isRead?: true
    data?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    userId: number | null
    adminId: number | null
    type: string
    title: string
    message: string
    isRead: boolean
    data: string | null
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    adminId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    data?: boolean
    createdAt?: boolean
    user?: boolean | Notification$userArgs<ExtArgs>
    admin?: boolean | Notification$adminArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>


  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    adminId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    data?: boolean
    createdAt?: boolean
  }

  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Notification$userArgs<ExtArgs>
    admin?: boolean | Notification$adminArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      admin: Prisma.$AdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      adminId: number | null
      type: string
      title: string
      message: string
      isRead: boolean
      data: string | null
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Notification$userArgs<ExtArgs> = {}>(args?: Subset<T, Notification$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    admin<T extends Notification$adminArgs<ExtArgs> = {}>(args?: Subset<T, Notification$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Notification model
   */ 
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly userId: FieldRef<"Notification", 'Int'>
    readonly adminId: FieldRef<"Notification", 'Int'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly data: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification.user
   */
  export type Notification$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Notification.admin
   */
  export type Notification$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Material
   */

  export type AggregateMaterial = {
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  export type MaterialAvgAggregateOutputType = {
    id: number | null
    tahunPembelian: number | null
    jumlah: number | null
  }

  export type MaterialSumAggregateOutputType = {
    id: number | null
    tahunPembelian: number | null
    jumlah: number | null
  }

  export type MaterialMinAggregateOutputType = {
    id: number | null
    namaMaterial: string | null
    kodeMaterial: string | null
    spesifikasi: string | null
    tahunPembelian: number | null
    vendor: string | null
    jumlah: number | null
    unit: string | null
    lokasiPenyimpanan: string | null
    dokumentasi: string | null
    typePeralatan: string | null
    masaBerlakuType: Date | null
    kondisi: string | null
    catatan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaterialMaxAggregateOutputType = {
    id: number | null
    namaMaterial: string | null
    kodeMaterial: string | null
    spesifikasi: string | null
    tahunPembelian: number | null
    vendor: string | null
    jumlah: number | null
    unit: string | null
    lokasiPenyimpanan: string | null
    dokumentasi: string | null
    typePeralatan: string | null
    masaBerlakuType: Date | null
    kondisi: string | null
    catatan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaterialCountAggregateOutputType = {
    id: number
    namaMaterial: number
    kodeMaterial: number
    spesifikasi: number
    tahunPembelian: number
    vendor: number
    jumlah: number
    unit: number
    lokasiPenyimpanan: number
    dokumentasi: number
    typePeralatan: number
    masaBerlakuType: number
    kondisi: number
    catatan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MaterialAvgAggregateInputType = {
    id?: true
    tahunPembelian?: true
    jumlah?: true
  }

  export type MaterialSumAggregateInputType = {
    id?: true
    tahunPembelian?: true
    jumlah?: true
  }

  export type MaterialMinAggregateInputType = {
    id?: true
    namaMaterial?: true
    kodeMaterial?: true
    spesifikasi?: true
    tahunPembelian?: true
    vendor?: true
    jumlah?: true
    unit?: true
    lokasiPenyimpanan?: true
    dokumentasi?: true
    typePeralatan?: true
    masaBerlakuType?: true
    kondisi?: true
    catatan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaterialMaxAggregateInputType = {
    id?: true
    namaMaterial?: true
    kodeMaterial?: true
    spesifikasi?: true
    tahunPembelian?: true
    vendor?: true
    jumlah?: true
    unit?: true
    lokasiPenyimpanan?: true
    dokumentasi?: true
    typePeralatan?: true
    masaBerlakuType?: true
    kondisi?: true
    catatan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaterialCountAggregateInputType = {
    id?: true
    namaMaterial?: true
    kodeMaterial?: true
    spesifikasi?: true
    tahunPembelian?: true
    vendor?: true
    jumlah?: true
    unit?: true
    lokasiPenyimpanan?: true
    dokumentasi?: true
    typePeralatan?: true
    masaBerlakuType?: true
    kondisi?: true
    catatan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Material to aggregate.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materials
    **/
    _count?: true | MaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialMaxAggregateInputType
  }

  export type GetMaterialAggregateType<T extends MaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial[P]>
      : GetScalarType<T[P], AggregateMaterial[P]>
  }




  export type MaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithAggregationInput | MaterialOrderByWithAggregationInput[]
    by: MaterialScalarFieldEnum[] | MaterialScalarFieldEnum
    having?: MaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialCountAggregateInputType | true
    _avg?: MaterialAvgAggregateInputType
    _sum?: MaterialSumAggregateInputType
    _min?: MaterialMinAggregateInputType
    _max?: MaterialMaxAggregateInputType
  }

  export type MaterialGroupByOutputType = {
    id: number
    namaMaterial: string
    kodeMaterial: string | null
    spesifikasi: string | null
    tahunPembelian: number | null
    vendor: string | null
    jumlah: number | null
    unit: string | null
    lokasiPenyimpanan: string | null
    dokumentasi: string | null
    typePeralatan: string | null
    masaBerlakuType: Date | null
    kondisi: string | null
    catatan: string | null
    createdAt: Date
    updatedAt: Date
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  type GetMaterialGroupByPayload<T extends MaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialGroupByOutputType[P]>
        }
      >
    >


  export type MaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaMaterial?: boolean
    kodeMaterial?: boolean
    spesifikasi?: boolean
    tahunPembelian?: boolean
    vendor?: boolean
    jumlah?: boolean
    unit?: boolean
    lokasiPenyimpanan?: boolean
    dokumentasi?: boolean
    typePeralatan?: boolean
    masaBerlakuType?: boolean
    kondisi?: boolean
    catatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["material"]>


  export type MaterialSelectScalar = {
    id?: boolean
    namaMaterial?: boolean
    kodeMaterial?: boolean
    spesifikasi?: boolean
    tahunPembelian?: boolean
    vendor?: boolean
    jumlah?: boolean
    unit?: boolean
    lokasiPenyimpanan?: boolean
    dokumentasi?: boolean
    typePeralatan?: boolean
    masaBerlakuType?: boolean
    kondisi?: boolean
    catatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $MaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Material"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      namaMaterial: string
      kodeMaterial: string | null
      spesifikasi: string | null
      tahunPembelian: number | null
      vendor: string | null
      jumlah: number | null
      unit: string | null
      lokasiPenyimpanan: string | null
      dokumentasi: string | null
      typePeralatan: string | null
      masaBerlakuType: Date | null
      kondisi: string | null
      catatan: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["material"]>
    composites: {}
  }

  type MaterialGetPayload<S extends boolean | null | undefined | MaterialDefaultArgs> = $Result.GetResult<Prisma.$MaterialPayload, S>

  type MaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MaterialFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MaterialCountAggregateInputType | true
    }

  export interface MaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Material'], meta: { name: 'Material' } }
    /**
     * Find zero or one Material that matches the filter.
     * @param {MaterialFindUniqueArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialFindUniqueArgs>(args: SelectSubset<T, MaterialFindUniqueArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Material that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MaterialFindUniqueOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Material that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialFindFirstArgs>(args?: SelectSubset<T, MaterialFindFirstArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Material that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.material.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.material.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialWithIdOnly = await prisma.material.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialFindManyArgs>(args?: SelectSubset<T, MaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Material.
     * @param {MaterialCreateArgs} args - Arguments to create a Material.
     * @example
     * // Create one Material
     * const Material = await prisma.material.create({
     *   data: {
     *     // ... data to create a Material
     *   }
     * })
     * 
     */
    create<T extends MaterialCreateArgs>(args: SelectSubset<T, MaterialCreateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Materials.
     * @param {MaterialCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialCreateManyArgs>(args?: SelectSubset<T, MaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Material.
     * @param {MaterialDeleteArgs} args - Arguments to delete one Material.
     * @example
     * // Delete one Material
     * const Material = await prisma.material.delete({
     *   where: {
     *     // ... filter to delete one Material
     *   }
     * })
     * 
     */
    delete<T extends MaterialDeleteArgs>(args: SelectSubset<T, MaterialDeleteArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Material.
     * @param {MaterialUpdateArgs} args - Arguments to update one Material.
     * @example
     * // Update one Material
     * const material = await prisma.material.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialUpdateArgs>(args: SelectSubset<T, MaterialUpdateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Materials.
     * @param {MaterialDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.material.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialDeleteManyArgs>(args?: SelectSubset<T, MaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialUpdateManyArgs>(args: SelectSubset<T, MaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Material.
     * @param {MaterialUpsertArgs} args - Arguments to update or create a Material.
     * @example
     * // Update or create a Material
     * const material = await prisma.material.upsert({
     *   create: {
     *     // ... data to create a Material
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material we want to update
     *   }
     * })
     */
    upsert<T extends MaterialUpsertArgs>(args: SelectSubset<T, MaterialUpsertArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.material.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends MaterialCountArgs>(
      args?: Subset<T, MaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialAggregateArgs>(args: Subset<T, MaterialAggregateArgs>): Prisma.PrismaPromise<GetMaterialAggregateType<T>>

    /**
     * Group by Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialGroupByArgs} args - Group by arguments.
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
      T extends MaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialGroupByArgs['orderBy'] }
        : { orderBy?: MaterialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Material model
   */
  readonly fields: MaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Material.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Material model
   */ 
  interface MaterialFieldRefs {
    readonly id: FieldRef<"Material", 'Int'>
    readonly namaMaterial: FieldRef<"Material", 'String'>
    readonly kodeMaterial: FieldRef<"Material", 'String'>
    readonly spesifikasi: FieldRef<"Material", 'String'>
    readonly tahunPembelian: FieldRef<"Material", 'Int'>
    readonly vendor: FieldRef<"Material", 'String'>
    readonly jumlah: FieldRef<"Material", 'Int'>
    readonly unit: FieldRef<"Material", 'String'>
    readonly lokasiPenyimpanan: FieldRef<"Material", 'String'>
    readonly dokumentasi: FieldRef<"Material", 'String'>
    readonly typePeralatan: FieldRef<"Material", 'String'>
    readonly masaBerlakuType: FieldRef<"Material", 'DateTime'>
    readonly kondisi: FieldRef<"Material", 'String'>
    readonly catatan: FieldRef<"Material", 'String'>
    readonly createdAt: FieldRef<"Material", 'DateTime'>
    readonly updatedAt: FieldRef<"Material", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Material findUnique
   */
  export type MaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findUniqueOrThrow
   */
  export type MaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findFirst
   */
  export type MaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findFirstOrThrow
   */
  export type MaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findMany
   */
  export type MaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material create
   */
  export type MaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * The data needed to create a Material.
     */
    data: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
  }

  /**
   * Material createMany
   */
  export type MaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Material update
   */
  export type MaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * The data needed to update a Material.
     */
    data: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
    /**
     * Choose, which Material to update.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material updateMany
   */
  export type MaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
  }

  /**
   * Material upsert
   */
  export type MaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * The filter to search for the Material to update in case it exists.
     */
    where: MaterialWhereUniqueInput
    /**
     * In case the Material found by the `where` argument doesn't exist, create a new Material with this data.
     */
    create: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
    /**
     * In case the Material was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
  }

  /**
   * Material delete
   */
  export type MaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Filter which Material to delete.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material deleteMany
   */
  export type MaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to delete
     */
    where?: MaterialWhereInput
  }

  /**
   * Material without action
   */
  export type MaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
  }


  /**
   * Model KompetensiPersonil
   */

  export type AggregateKompetensiPersonil = {
    _count: KompetensiPersonilCountAggregateOutputType | null
    _avg: KompetensiPersonilAvgAggregateOutputType | null
    _sum: KompetensiPersonilSumAggregateOutputType | null
    _min: KompetensiPersonilMinAggregateOutputType | null
    _max: KompetensiPersonilMaxAggregateOutputType | null
  }

  export type KompetensiPersonilAvgAggregateOutputType = {
    id: number | null
  }

  export type KompetensiPersonilSumAggregateOutputType = {
    id: number | null
  }

  export type KompetensiPersonilMinAggregateOutputType = {
    id: number | null
    nama: string | null
    nip: string | null
    jabatan: string | null
    unitKerja: string | null
    jenisKompetensi: string | null
    namaSertifikasi: string | null
    nomorSertifikasi: string | null
    lembagaPenerbit: string | null
    tanggalTerbit: Date | null
    masaBerlakuSertifikasi: Date | null
    statusKompetensi: string | null
    catatan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KompetensiPersonilMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    nip: string | null
    jabatan: string | null
    unitKerja: string | null
    jenisKompetensi: string | null
    namaSertifikasi: string | null
    nomorSertifikasi: string | null
    lembagaPenerbit: string | null
    tanggalTerbit: Date | null
    masaBerlakuSertifikasi: Date | null
    statusKompetensi: string | null
    catatan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KompetensiPersonilCountAggregateOutputType = {
    id: number
    nama: number
    nip: number
    jabatan: number
    unitKerja: number
    jenisKompetensi: number
    namaSertifikasi: number
    nomorSertifikasi: number
    lembagaPenerbit: number
    tanggalTerbit: number
    masaBerlakuSertifikasi: number
    statusKompetensi: number
    catatan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KompetensiPersonilAvgAggregateInputType = {
    id?: true
  }

  export type KompetensiPersonilSumAggregateInputType = {
    id?: true
  }

  export type KompetensiPersonilMinAggregateInputType = {
    id?: true
    nama?: true
    nip?: true
    jabatan?: true
    unitKerja?: true
    jenisKompetensi?: true
    namaSertifikasi?: true
    nomorSertifikasi?: true
    lembagaPenerbit?: true
    tanggalTerbit?: true
    masaBerlakuSertifikasi?: true
    statusKompetensi?: true
    catatan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KompetensiPersonilMaxAggregateInputType = {
    id?: true
    nama?: true
    nip?: true
    jabatan?: true
    unitKerja?: true
    jenisKompetensi?: true
    namaSertifikasi?: true
    nomorSertifikasi?: true
    lembagaPenerbit?: true
    tanggalTerbit?: true
    masaBerlakuSertifikasi?: true
    statusKompetensi?: true
    catatan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KompetensiPersonilCountAggregateInputType = {
    id?: true
    nama?: true
    nip?: true
    jabatan?: true
    unitKerja?: true
    jenisKompetensi?: true
    namaSertifikasi?: true
    nomorSertifikasi?: true
    lembagaPenerbit?: true
    tanggalTerbit?: true
    masaBerlakuSertifikasi?: true
    statusKompetensi?: true
    catatan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KompetensiPersonilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KompetensiPersonil to aggregate.
     */
    where?: KompetensiPersonilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KompetensiPersonils to fetch.
     */
    orderBy?: KompetensiPersonilOrderByWithRelationInput | KompetensiPersonilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KompetensiPersonilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KompetensiPersonils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KompetensiPersonils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KompetensiPersonils
    **/
    _count?: true | KompetensiPersonilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KompetensiPersonilAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KompetensiPersonilSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KompetensiPersonilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KompetensiPersonilMaxAggregateInputType
  }

  export type GetKompetensiPersonilAggregateType<T extends KompetensiPersonilAggregateArgs> = {
        [P in keyof T & keyof AggregateKompetensiPersonil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKompetensiPersonil[P]>
      : GetScalarType<T[P], AggregateKompetensiPersonil[P]>
  }




  export type KompetensiPersonilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KompetensiPersonilWhereInput
    orderBy?: KompetensiPersonilOrderByWithAggregationInput | KompetensiPersonilOrderByWithAggregationInput[]
    by: KompetensiPersonilScalarFieldEnum[] | KompetensiPersonilScalarFieldEnum
    having?: KompetensiPersonilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KompetensiPersonilCountAggregateInputType | true
    _avg?: KompetensiPersonilAvgAggregateInputType
    _sum?: KompetensiPersonilSumAggregateInputType
    _min?: KompetensiPersonilMinAggregateInputType
    _max?: KompetensiPersonilMaxAggregateInputType
  }

  export type KompetensiPersonilGroupByOutputType = {
    id: number
    nama: string
    nip: string | null
    jabatan: string | null
    unitKerja: string | null
    jenisKompetensi: string
    namaSertifikasi: string | null
    nomorSertifikasi: string | null
    lembagaPenerbit: string | null
    tanggalTerbit: Date | null
    masaBerlakuSertifikasi: Date | null
    statusKompetensi: string
    catatan: string | null
    createdAt: Date
    updatedAt: Date
    _count: KompetensiPersonilCountAggregateOutputType | null
    _avg: KompetensiPersonilAvgAggregateOutputType | null
    _sum: KompetensiPersonilSumAggregateOutputType | null
    _min: KompetensiPersonilMinAggregateOutputType | null
    _max: KompetensiPersonilMaxAggregateOutputType | null
  }

  type GetKompetensiPersonilGroupByPayload<T extends KompetensiPersonilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KompetensiPersonilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KompetensiPersonilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KompetensiPersonilGroupByOutputType[P]>
            : GetScalarType<T[P], KompetensiPersonilGroupByOutputType[P]>
        }
      >
    >


  export type KompetensiPersonilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    nip?: boolean
    jabatan?: boolean
    unitKerja?: boolean
    jenisKompetensi?: boolean
    namaSertifikasi?: boolean
    nomorSertifikasi?: boolean
    lembagaPenerbit?: boolean
    tanggalTerbit?: boolean
    masaBerlakuSertifikasi?: boolean
    statusKompetensi?: boolean
    catatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["kompetensiPersonil"]>


  export type KompetensiPersonilSelectScalar = {
    id?: boolean
    nama?: boolean
    nip?: boolean
    jabatan?: boolean
    unitKerja?: boolean
    jenisKompetensi?: boolean
    namaSertifikasi?: boolean
    nomorSertifikasi?: boolean
    lembagaPenerbit?: boolean
    tanggalTerbit?: boolean
    masaBerlakuSertifikasi?: boolean
    statusKompetensi?: boolean
    catatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $KompetensiPersonilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KompetensiPersonil"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      nip: string | null
      jabatan: string | null
      unitKerja: string | null
      jenisKompetensi: string
      namaSertifikasi: string | null
      nomorSertifikasi: string | null
      lembagaPenerbit: string | null
      tanggalTerbit: Date | null
      masaBerlakuSertifikasi: Date | null
      statusKompetensi: string
      catatan: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["kompetensiPersonil"]>
    composites: {}
  }

  type KompetensiPersonilGetPayload<S extends boolean | null | undefined | KompetensiPersonilDefaultArgs> = $Result.GetResult<Prisma.$KompetensiPersonilPayload, S>

  type KompetensiPersonilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<KompetensiPersonilFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: KompetensiPersonilCountAggregateInputType | true
    }

  export interface KompetensiPersonilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KompetensiPersonil'], meta: { name: 'KompetensiPersonil' } }
    /**
     * Find zero or one KompetensiPersonil that matches the filter.
     * @param {KompetensiPersonilFindUniqueArgs} args - Arguments to find a KompetensiPersonil
     * @example
     * // Get one KompetensiPersonil
     * const kompetensiPersonil = await prisma.kompetensiPersonil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KompetensiPersonilFindUniqueArgs>(args: SelectSubset<T, KompetensiPersonilFindUniqueArgs<ExtArgs>>): Prisma__KompetensiPersonilClient<$Result.GetResult<Prisma.$KompetensiPersonilPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one KompetensiPersonil that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {KompetensiPersonilFindUniqueOrThrowArgs} args - Arguments to find a KompetensiPersonil
     * @example
     * // Get one KompetensiPersonil
     * const kompetensiPersonil = await prisma.kompetensiPersonil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KompetensiPersonilFindUniqueOrThrowArgs>(args: SelectSubset<T, KompetensiPersonilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KompetensiPersonilClient<$Result.GetResult<Prisma.$KompetensiPersonilPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first KompetensiPersonil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KompetensiPersonilFindFirstArgs} args - Arguments to find a KompetensiPersonil
     * @example
     * // Get one KompetensiPersonil
     * const kompetensiPersonil = await prisma.kompetensiPersonil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KompetensiPersonilFindFirstArgs>(args?: SelectSubset<T, KompetensiPersonilFindFirstArgs<ExtArgs>>): Prisma__KompetensiPersonilClient<$Result.GetResult<Prisma.$KompetensiPersonilPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first KompetensiPersonil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KompetensiPersonilFindFirstOrThrowArgs} args - Arguments to find a KompetensiPersonil
     * @example
     * // Get one KompetensiPersonil
     * const kompetensiPersonil = await prisma.kompetensiPersonil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KompetensiPersonilFindFirstOrThrowArgs>(args?: SelectSubset<T, KompetensiPersonilFindFirstOrThrowArgs<ExtArgs>>): Prisma__KompetensiPersonilClient<$Result.GetResult<Prisma.$KompetensiPersonilPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more KompetensiPersonils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KompetensiPersonilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KompetensiPersonils
     * const kompetensiPersonils = await prisma.kompetensiPersonil.findMany()
     * 
     * // Get first 10 KompetensiPersonils
     * const kompetensiPersonils = await prisma.kompetensiPersonil.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kompetensiPersonilWithIdOnly = await prisma.kompetensiPersonil.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KompetensiPersonilFindManyArgs>(args?: SelectSubset<T, KompetensiPersonilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KompetensiPersonilPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a KompetensiPersonil.
     * @param {KompetensiPersonilCreateArgs} args - Arguments to create a KompetensiPersonil.
     * @example
     * // Create one KompetensiPersonil
     * const KompetensiPersonil = await prisma.kompetensiPersonil.create({
     *   data: {
     *     // ... data to create a KompetensiPersonil
     *   }
     * })
     * 
     */
    create<T extends KompetensiPersonilCreateArgs>(args: SelectSubset<T, KompetensiPersonilCreateArgs<ExtArgs>>): Prisma__KompetensiPersonilClient<$Result.GetResult<Prisma.$KompetensiPersonilPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many KompetensiPersonils.
     * @param {KompetensiPersonilCreateManyArgs} args - Arguments to create many KompetensiPersonils.
     * @example
     * // Create many KompetensiPersonils
     * const kompetensiPersonil = await prisma.kompetensiPersonil.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KompetensiPersonilCreateManyArgs>(args?: SelectSubset<T, KompetensiPersonilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a KompetensiPersonil.
     * @param {KompetensiPersonilDeleteArgs} args - Arguments to delete one KompetensiPersonil.
     * @example
     * // Delete one KompetensiPersonil
     * const KompetensiPersonil = await prisma.kompetensiPersonil.delete({
     *   where: {
     *     // ... filter to delete one KompetensiPersonil
     *   }
     * })
     * 
     */
    delete<T extends KompetensiPersonilDeleteArgs>(args: SelectSubset<T, KompetensiPersonilDeleteArgs<ExtArgs>>): Prisma__KompetensiPersonilClient<$Result.GetResult<Prisma.$KompetensiPersonilPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one KompetensiPersonil.
     * @param {KompetensiPersonilUpdateArgs} args - Arguments to update one KompetensiPersonil.
     * @example
     * // Update one KompetensiPersonil
     * const kompetensiPersonil = await prisma.kompetensiPersonil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KompetensiPersonilUpdateArgs>(args: SelectSubset<T, KompetensiPersonilUpdateArgs<ExtArgs>>): Prisma__KompetensiPersonilClient<$Result.GetResult<Prisma.$KompetensiPersonilPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more KompetensiPersonils.
     * @param {KompetensiPersonilDeleteManyArgs} args - Arguments to filter KompetensiPersonils to delete.
     * @example
     * // Delete a few KompetensiPersonils
     * const { count } = await prisma.kompetensiPersonil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KompetensiPersonilDeleteManyArgs>(args?: SelectSubset<T, KompetensiPersonilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KompetensiPersonils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KompetensiPersonilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KompetensiPersonils
     * const kompetensiPersonil = await prisma.kompetensiPersonil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KompetensiPersonilUpdateManyArgs>(args: SelectSubset<T, KompetensiPersonilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one KompetensiPersonil.
     * @param {KompetensiPersonilUpsertArgs} args - Arguments to update or create a KompetensiPersonil.
     * @example
     * // Update or create a KompetensiPersonil
     * const kompetensiPersonil = await prisma.kompetensiPersonil.upsert({
     *   create: {
     *     // ... data to create a KompetensiPersonil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KompetensiPersonil we want to update
     *   }
     * })
     */
    upsert<T extends KompetensiPersonilUpsertArgs>(args: SelectSubset<T, KompetensiPersonilUpsertArgs<ExtArgs>>): Prisma__KompetensiPersonilClient<$Result.GetResult<Prisma.$KompetensiPersonilPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of KompetensiPersonils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KompetensiPersonilCountArgs} args - Arguments to filter KompetensiPersonils to count.
     * @example
     * // Count the number of KompetensiPersonils
     * const count = await prisma.kompetensiPersonil.count({
     *   where: {
     *     // ... the filter for the KompetensiPersonils we want to count
     *   }
     * })
    **/
    count<T extends KompetensiPersonilCountArgs>(
      args?: Subset<T, KompetensiPersonilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KompetensiPersonilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KompetensiPersonil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KompetensiPersonilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KompetensiPersonilAggregateArgs>(args: Subset<T, KompetensiPersonilAggregateArgs>): Prisma.PrismaPromise<GetKompetensiPersonilAggregateType<T>>

    /**
     * Group by KompetensiPersonil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KompetensiPersonilGroupByArgs} args - Group by arguments.
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
      T extends KompetensiPersonilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KompetensiPersonilGroupByArgs['orderBy'] }
        : { orderBy?: KompetensiPersonilGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KompetensiPersonilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKompetensiPersonilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KompetensiPersonil model
   */
  readonly fields: KompetensiPersonilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KompetensiPersonil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KompetensiPersonilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the KompetensiPersonil model
   */ 
  interface KompetensiPersonilFieldRefs {
    readonly id: FieldRef<"KompetensiPersonil", 'Int'>
    readonly nama: FieldRef<"KompetensiPersonil", 'String'>
    readonly nip: FieldRef<"KompetensiPersonil", 'String'>
    readonly jabatan: FieldRef<"KompetensiPersonil", 'String'>
    readonly unitKerja: FieldRef<"KompetensiPersonil", 'String'>
    readonly jenisKompetensi: FieldRef<"KompetensiPersonil", 'String'>
    readonly namaSertifikasi: FieldRef<"KompetensiPersonil", 'String'>
    readonly nomorSertifikasi: FieldRef<"KompetensiPersonil", 'String'>
    readonly lembagaPenerbit: FieldRef<"KompetensiPersonil", 'String'>
    readonly tanggalTerbit: FieldRef<"KompetensiPersonil", 'DateTime'>
    readonly masaBerlakuSertifikasi: FieldRef<"KompetensiPersonil", 'DateTime'>
    readonly statusKompetensi: FieldRef<"KompetensiPersonil", 'String'>
    readonly catatan: FieldRef<"KompetensiPersonil", 'String'>
    readonly createdAt: FieldRef<"KompetensiPersonil", 'DateTime'>
    readonly updatedAt: FieldRef<"KompetensiPersonil", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KompetensiPersonil findUnique
   */
  export type KompetensiPersonilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KompetensiPersonil
     */
    select?: KompetensiPersonilSelect<ExtArgs> | null
    /**
     * Filter, which KompetensiPersonil to fetch.
     */
    where: KompetensiPersonilWhereUniqueInput
  }

  /**
   * KompetensiPersonil findUniqueOrThrow
   */
  export type KompetensiPersonilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KompetensiPersonil
     */
    select?: KompetensiPersonilSelect<ExtArgs> | null
    /**
     * Filter, which KompetensiPersonil to fetch.
     */
    where: KompetensiPersonilWhereUniqueInput
  }

  /**
   * KompetensiPersonil findFirst
   */
  export type KompetensiPersonilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KompetensiPersonil
     */
    select?: KompetensiPersonilSelect<ExtArgs> | null
    /**
     * Filter, which KompetensiPersonil to fetch.
     */
    where?: KompetensiPersonilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KompetensiPersonils to fetch.
     */
    orderBy?: KompetensiPersonilOrderByWithRelationInput | KompetensiPersonilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KompetensiPersonils.
     */
    cursor?: KompetensiPersonilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KompetensiPersonils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KompetensiPersonils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KompetensiPersonils.
     */
    distinct?: KompetensiPersonilScalarFieldEnum | KompetensiPersonilScalarFieldEnum[]
  }

  /**
   * KompetensiPersonil findFirstOrThrow
   */
  export type KompetensiPersonilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KompetensiPersonil
     */
    select?: KompetensiPersonilSelect<ExtArgs> | null
    /**
     * Filter, which KompetensiPersonil to fetch.
     */
    where?: KompetensiPersonilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KompetensiPersonils to fetch.
     */
    orderBy?: KompetensiPersonilOrderByWithRelationInput | KompetensiPersonilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KompetensiPersonils.
     */
    cursor?: KompetensiPersonilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KompetensiPersonils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KompetensiPersonils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KompetensiPersonils.
     */
    distinct?: KompetensiPersonilScalarFieldEnum | KompetensiPersonilScalarFieldEnum[]
  }

  /**
   * KompetensiPersonil findMany
   */
  export type KompetensiPersonilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KompetensiPersonil
     */
    select?: KompetensiPersonilSelect<ExtArgs> | null
    /**
     * Filter, which KompetensiPersonils to fetch.
     */
    where?: KompetensiPersonilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KompetensiPersonils to fetch.
     */
    orderBy?: KompetensiPersonilOrderByWithRelationInput | KompetensiPersonilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KompetensiPersonils.
     */
    cursor?: KompetensiPersonilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KompetensiPersonils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KompetensiPersonils.
     */
    skip?: number
    distinct?: KompetensiPersonilScalarFieldEnum | KompetensiPersonilScalarFieldEnum[]
  }

  /**
   * KompetensiPersonil create
   */
  export type KompetensiPersonilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KompetensiPersonil
     */
    select?: KompetensiPersonilSelect<ExtArgs> | null
    /**
     * The data needed to create a KompetensiPersonil.
     */
    data: XOR<KompetensiPersonilCreateInput, KompetensiPersonilUncheckedCreateInput>
  }

  /**
   * KompetensiPersonil createMany
   */
  export type KompetensiPersonilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KompetensiPersonils.
     */
    data: KompetensiPersonilCreateManyInput | KompetensiPersonilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KompetensiPersonil update
   */
  export type KompetensiPersonilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KompetensiPersonil
     */
    select?: KompetensiPersonilSelect<ExtArgs> | null
    /**
     * The data needed to update a KompetensiPersonil.
     */
    data: XOR<KompetensiPersonilUpdateInput, KompetensiPersonilUncheckedUpdateInput>
    /**
     * Choose, which KompetensiPersonil to update.
     */
    where: KompetensiPersonilWhereUniqueInput
  }

  /**
   * KompetensiPersonil updateMany
   */
  export type KompetensiPersonilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KompetensiPersonils.
     */
    data: XOR<KompetensiPersonilUpdateManyMutationInput, KompetensiPersonilUncheckedUpdateManyInput>
    /**
     * Filter which KompetensiPersonils to update
     */
    where?: KompetensiPersonilWhereInput
  }

  /**
   * KompetensiPersonil upsert
   */
  export type KompetensiPersonilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KompetensiPersonil
     */
    select?: KompetensiPersonilSelect<ExtArgs> | null
    /**
     * The filter to search for the KompetensiPersonil to update in case it exists.
     */
    where: KompetensiPersonilWhereUniqueInput
    /**
     * In case the KompetensiPersonil found by the `where` argument doesn't exist, create a new KompetensiPersonil with this data.
     */
    create: XOR<KompetensiPersonilCreateInput, KompetensiPersonilUncheckedCreateInput>
    /**
     * In case the KompetensiPersonil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KompetensiPersonilUpdateInput, KompetensiPersonilUncheckedUpdateInput>
  }

  /**
   * KompetensiPersonil delete
   */
  export type KompetensiPersonilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KompetensiPersonil
     */
    select?: KompetensiPersonilSelect<ExtArgs> | null
    /**
     * Filter which KompetensiPersonil to delete.
     */
    where: KompetensiPersonilWhereUniqueInput
  }

  /**
   * KompetensiPersonil deleteMany
   */
  export type KompetensiPersonilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KompetensiPersonils to delete
     */
    where?: KompetensiPersonilWhereInput
  }

  /**
   * KompetensiPersonil without action
   */
  export type KompetensiPersonilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KompetensiPersonil
     */
    select?: KompetensiPersonilSelect<ExtArgs> | null
  }


  /**
   * Model SertifikasiPeralatan
   */

  export type AggregateSertifikasiPeralatan = {
    _count: SertifikasiPeralatanCountAggregateOutputType | null
    _avg: SertifikasiPeralatanAvgAggregateOutputType | null
    _sum: SertifikasiPeralatanSumAggregateOutputType | null
    _min: SertifikasiPeralatanMinAggregateOutputType | null
    _max: SertifikasiPeralatanMaxAggregateOutputType | null
  }

  export type SertifikasiPeralatanAvgAggregateOutputType = {
    id: number | null
    tahunProduksi: number | null
  }

  export type SertifikasiPeralatanSumAggregateOutputType = {
    id: number | null
    tahunProduksi: number | null
  }

  export type SertifikasiPeralatanMinAggregateOutputType = {
    id: number | null
    namaPeralatan: string | null
    kodePeralatan: string | null
    jenisPeralatan: string | null
    merk: string | null
    type: string | null
    nomorSeri: string | null
    tahunProduksi: number | null
    lokasiPemasangan: string | null
    namaOperator: string | null
    nomorSertifikasiOperator: string | null
    jenisSertifikasiOperator: string | null
    masaBerlakuSertifikasiOperator: Date | null
    nomorSertifikatPeralatan: string | null
    lembagaPenerbitSertifikat: string | null
    masaBerlakuSertifikatPeralatan: Date | null
    tanggalTerbitSertifikat: Date | null
    kondisi: string | null
    hasilInspeksiTerakhir: Date | null
    catatatan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SertifikasiPeralatanMaxAggregateOutputType = {
    id: number | null
    namaPeralatan: string | null
    kodePeralatan: string | null
    jenisPeralatan: string | null
    merk: string | null
    type: string | null
    nomorSeri: string | null
    tahunProduksi: number | null
    lokasiPemasangan: string | null
    namaOperator: string | null
    nomorSertifikasiOperator: string | null
    jenisSertifikasiOperator: string | null
    masaBerlakuSertifikasiOperator: Date | null
    nomorSertifikatPeralatan: string | null
    lembagaPenerbitSertifikat: string | null
    masaBerlakuSertifikatPeralatan: Date | null
    tanggalTerbitSertifikat: Date | null
    kondisi: string | null
    hasilInspeksiTerakhir: Date | null
    catatatan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SertifikasiPeralatanCountAggregateOutputType = {
    id: number
    namaPeralatan: number
    kodePeralatan: number
    jenisPeralatan: number
    merk: number
    type: number
    nomorSeri: number
    tahunProduksi: number
    lokasiPemasangan: number
    namaOperator: number
    nomorSertifikasiOperator: number
    jenisSertifikasiOperator: number
    masaBerlakuSertifikasiOperator: number
    nomorSertifikatPeralatan: number
    lembagaPenerbitSertifikat: number
    masaBerlakuSertifikatPeralatan: number
    tanggalTerbitSertifikat: number
    kondisi: number
    hasilInspeksiTerakhir: number
    catatatan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SertifikasiPeralatanAvgAggregateInputType = {
    id?: true
    tahunProduksi?: true
  }

  export type SertifikasiPeralatanSumAggregateInputType = {
    id?: true
    tahunProduksi?: true
  }

  export type SertifikasiPeralatanMinAggregateInputType = {
    id?: true
    namaPeralatan?: true
    kodePeralatan?: true
    jenisPeralatan?: true
    merk?: true
    type?: true
    nomorSeri?: true
    tahunProduksi?: true
    lokasiPemasangan?: true
    namaOperator?: true
    nomorSertifikasiOperator?: true
    jenisSertifikasiOperator?: true
    masaBerlakuSertifikasiOperator?: true
    nomorSertifikatPeralatan?: true
    lembagaPenerbitSertifikat?: true
    masaBerlakuSertifikatPeralatan?: true
    tanggalTerbitSertifikat?: true
    kondisi?: true
    hasilInspeksiTerakhir?: true
    catatatan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SertifikasiPeralatanMaxAggregateInputType = {
    id?: true
    namaPeralatan?: true
    kodePeralatan?: true
    jenisPeralatan?: true
    merk?: true
    type?: true
    nomorSeri?: true
    tahunProduksi?: true
    lokasiPemasangan?: true
    namaOperator?: true
    nomorSertifikasiOperator?: true
    jenisSertifikasiOperator?: true
    masaBerlakuSertifikasiOperator?: true
    nomorSertifikatPeralatan?: true
    lembagaPenerbitSertifikat?: true
    masaBerlakuSertifikatPeralatan?: true
    tanggalTerbitSertifikat?: true
    kondisi?: true
    hasilInspeksiTerakhir?: true
    catatatan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SertifikasiPeralatanCountAggregateInputType = {
    id?: true
    namaPeralatan?: true
    kodePeralatan?: true
    jenisPeralatan?: true
    merk?: true
    type?: true
    nomorSeri?: true
    tahunProduksi?: true
    lokasiPemasangan?: true
    namaOperator?: true
    nomorSertifikasiOperator?: true
    jenisSertifikasiOperator?: true
    masaBerlakuSertifikasiOperator?: true
    nomorSertifikatPeralatan?: true
    lembagaPenerbitSertifikat?: true
    masaBerlakuSertifikatPeralatan?: true
    tanggalTerbitSertifikat?: true
    kondisi?: true
    hasilInspeksiTerakhir?: true
    catatatan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SertifikasiPeralatanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SertifikasiPeralatan to aggregate.
     */
    where?: SertifikasiPeralatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SertifikasiPeralatans to fetch.
     */
    orderBy?: SertifikasiPeralatanOrderByWithRelationInput | SertifikasiPeralatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SertifikasiPeralatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SertifikasiPeralatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SertifikasiPeralatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SertifikasiPeralatans
    **/
    _count?: true | SertifikasiPeralatanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SertifikasiPeralatanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SertifikasiPeralatanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SertifikasiPeralatanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SertifikasiPeralatanMaxAggregateInputType
  }

  export type GetSertifikasiPeralatanAggregateType<T extends SertifikasiPeralatanAggregateArgs> = {
        [P in keyof T & keyof AggregateSertifikasiPeralatan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSertifikasiPeralatan[P]>
      : GetScalarType<T[P], AggregateSertifikasiPeralatan[P]>
  }




  export type SertifikasiPeralatanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SertifikasiPeralatanWhereInput
    orderBy?: SertifikasiPeralatanOrderByWithAggregationInput | SertifikasiPeralatanOrderByWithAggregationInput[]
    by: SertifikasiPeralatanScalarFieldEnum[] | SertifikasiPeralatanScalarFieldEnum
    having?: SertifikasiPeralatanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SertifikasiPeralatanCountAggregateInputType | true
    _avg?: SertifikasiPeralatanAvgAggregateInputType
    _sum?: SertifikasiPeralatanSumAggregateInputType
    _min?: SertifikasiPeralatanMinAggregateInputType
    _max?: SertifikasiPeralatanMaxAggregateInputType
  }

  export type SertifikasiPeralatanGroupByOutputType = {
    id: number
    namaPeralatan: string
    kodePeralatan: string | null
    jenisPeralatan: string | null
    merk: string | null
    type: string | null
    nomorSeri: string | null
    tahunProduksi: number | null
    lokasiPemasangan: string | null
    namaOperator: string | null
    nomorSertifikasiOperator: string | null
    jenisSertifikasiOperator: string | null
    masaBerlakuSertifikasiOperator: Date | null
    nomorSertifikatPeralatan: string | null
    lembagaPenerbitSertifikat: string | null
    masaBerlakuSertifikatPeralatan: Date | null
    tanggalTerbitSertifikat: Date | null
    kondisi: string | null
    hasilInspeksiTerakhir: Date | null
    catatatan: string | null
    createdAt: Date
    updatedAt: Date
    _count: SertifikasiPeralatanCountAggregateOutputType | null
    _avg: SertifikasiPeralatanAvgAggregateOutputType | null
    _sum: SertifikasiPeralatanSumAggregateOutputType | null
    _min: SertifikasiPeralatanMinAggregateOutputType | null
    _max: SertifikasiPeralatanMaxAggregateOutputType | null
  }

  type GetSertifikasiPeralatanGroupByPayload<T extends SertifikasiPeralatanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SertifikasiPeralatanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SertifikasiPeralatanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SertifikasiPeralatanGroupByOutputType[P]>
            : GetScalarType<T[P], SertifikasiPeralatanGroupByOutputType[P]>
        }
      >
    >


  export type SertifikasiPeralatanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaPeralatan?: boolean
    kodePeralatan?: boolean
    jenisPeralatan?: boolean
    merk?: boolean
    type?: boolean
    nomorSeri?: boolean
    tahunProduksi?: boolean
    lokasiPemasangan?: boolean
    namaOperator?: boolean
    nomorSertifikasiOperator?: boolean
    jenisSertifikasiOperator?: boolean
    masaBerlakuSertifikasiOperator?: boolean
    nomorSertifikatPeralatan?: boolean
    lembagaPenerbitSertifikat?: boolean
    masaBerlakuSertifikatPeralatan?: boolean
    tanggalTerbitSertifikat?: boolean
    kondisi?: boolean
    hasilInspeksiTerakhir?: boolean
    catatatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sertifikasiPeralatan"]>


  export type SertifikasiPeralatanSelectScalar = {
    id?: boolean
    namaPeralatan?: boolean
    kodePeralatan?: boolean
    jenisPeralatan?: boolean
    merk?: boolean
    type?: boolean
    nomorSeri?: boolean
    tahunProduksi?: boolean
    lokasiPemasangan?: boolean
    namaOperator?: boolean
    nomorSertifikasiOperator?: boolean
    jenisSertifikasiOperator?: boolean
    masaBerlakuSertifikasiOperator?: boolean
    nomorSertifikatPeralatan?: boolean
    lembagaPenerbitSertifikat?: boolean
    masaBerlakuSertifikatPeralatan?: boolean
    tanggalTerbitSertifikat?: boolean
    kondisi?: boolean
    hasilInspeksiTerakhir?: boolean
    catatatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $SertifikasiPeralatanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SertifikasiPeralatan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      namaPeralatan: string
      kodePeralatan: string | null
      jenisPeralatan: string | null
      merk: string | null
      type: string | null
      nomorSeri: string | null
      tahunProduksi: number | null
      lokasiPemasangan: string | null
      namaOperator: string | null
      nomorSertifikasiOperator: string | null
      jenisSertifikasiOperator: string | null
      masaBerlakuSertifikasiOperator: Date | null
      nomorSertifikatPeralatan: string | null
      lembagaPenerbitSertifikat: string | null
      masaBerlakuSertifikatPeralatan: Date | null
      tanggalTerbitSertifikat: Date | null
      kondisi: string | null
      hasilInspeksiTerakhir: Date | null
      catatatan: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sertifikasiPeralatan"]>
    composites: {}
  }

  type SertifikasiPeralatanGetPayload<S extends boolean | null | undefined | SertifikasiPeralatanDefaultArgs> = $Result.GetResult<Prisma.$SertifikasiPeralatanPayload, S>

  type SertifikasiPeralatanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SertifikasiPeralatanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SertifikasiPeralatanCountAggregateInputType | true
    }

  export interface SertifikasiPeralatanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SertifikasiPeralatan'], meta: { name: 'SertifikasiPeralatan' } }
    /**
     * Find zero or one SertifikasiPeralatan that matches the filter.
     * @param {SertifikasiPeralatanFindUniqueArgs} args - Arguments to find a SertifikasiPeralatan
     * @example
     * // Get one SertifikasiPeralatan
     * const sertifikasiPeralatan = await prisma.sertifikasiPeralatan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SertifikasiPeralatanFindUniqueArgs>(args: SelectSubset<T, SertifikasiPeralatanFindUniqueArgs<ExtArgs>>): Prisma__SertifikasiPeralatanClient<$Result.GetResult<Prisma.$SertifikasiPeralatanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SertifikasiPeralatan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SertifikasiPeralatanFindUniqueOrThrowArgs} args - Arguments to find a SertifikasiPeralatan
     * @example
     * // Get one SertifikasiPeralatan
     * const sertifikasiPeralatan = await prisma.sertifikasiPeralatan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SertifikasiPeralatanFindUniqueOrThrowArgs>(args: SelectSubset<T, SertifikasiPeralatanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SertifikasiPeralatanClient<$Result.GetResult<Prisma.$SertifikasiPeralatanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SertifikasiPeralatan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikasiPeralatanFindFirstArgs} args - Arguments to find a SertifikasiPeralatan
     * @example
     * // Get one SertifikasiPeralatan
     * const sertifikasiPeralatan = await prisma.sertifikasiPeralatan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SertifikasiPeralatanFindFirstArgs>(args?: SelectSubset<T, SertifikasiPeralatanFindFirstArgs<ExtArgs>>): Prisma__SertifikasiPeralatanClient<$Result.GetResult<Prisma.$SertifikasiPeralatanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SertifikasiPeralatan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikasiPeralatanFindFirstOrThrowArgs} args - Arguments to find a SertifikasiPeralatan
     * @example
     * // Get one SertifikasiPeralatan
     * const sertifikasiPeralatan = await prisma.sertifikasiPeralatan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SertifikasiPeralatanFindFirstOrThrowArgs>(args?: SelectSubset<T, SertifikasiPeralatanFindFirstOrThrowArgs<ExtArgs>>): Prisma__SertifikasiPeralatanClient<$Result.GetResult<Prisma.$SertifikasiPeralatanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SertifikasiPeralatans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikasiPeralatanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SertifikasiPeralatans
     * const sertifikasiPeralatans = await prisma.sertifikasiPeralatan.findMany()
     * 
     * // Get first 10 SertifikasiPeralatans
     * const sertifikasiPeralatans = await prisma.sertifikasiPeralatan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sertifikasiPeralatanWithIdOnly = await prisma.sertifikasiPeralatan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SertifikasiPeralatanFindManyArgs>(args?: SelectSubset<T, SertifikasiPeralatanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SertifikasiPeralatanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SertifikasiPeralatan.
     * @param {SertifikasiPeralatanCreateArgs} args - Arguments to create a SertifikasiPeralatan.
     * @example
     * // Create one SertifikasiPeralatan
     * const SertifikasiPeralatan = await prisma.sertifikasiPeralatan.create({
     *   data: {
     *     // ... data to create a SertifikasiPeralatan
     *   }
     * })
     * 
     */
    create<T extends SertifikasiPeralatanCreateArgs>(args: SelectSubset<T, SertifikasiPeralatanCreateArgs<ExtArgs>>): Prisma__SertifikasiPeralatanClient<$Result.GetResult<Prisma.$SertifikasiPeralatanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SertifikasiPeralatans.
     * @param {SertifikasiPeralatanCreateManyArgs} args - Arguments to create many SertifikasiPeralatans.
     * @example
     * // Create many SertifikasiPeralatans
     * const sertifikasiPeralatan = await prisma.sertifikasiPeralatan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SertifikasiPeralatanCreateManyArgs>(args?: SelectSubset<T, SertifikasiPeralatanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SertifikasiPeralatan.
     * @param {SertifikasiPeralatanDeleteArgs} args - Arguments to delete one SertifikasiPeralatan.
     * @example
     * // Delete one SertifikasiPeralatan
     * const SertifikasiPeralatan = await prisma.sertifikasiPeralatan.delete({
     *   where: {
     *     // ... filter to delete one SertifikasiPeralatan
     *   }
     * })
     * 
     */
    delete<T extends SertifikasiPeralatanDeleteArgs>(args: SelectSubset<T, SertifikasiPeralatanDeleteArgs<ExtArgs>>): Prisma__SertifikasiPeralatanClient<$Result.GetResult<Prisma.$SertifikasiPeralatanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SertifikasiPeralatan.
     * @param {SertifikasiPeralatanUpdateArgs} args - Arguments to update one SertifikasiPeralatan.
     * @example
     * // Update one SertifikasiPeralatan
     * const sertifikasiPeralatan = await prisma.sertifikasiPeralatan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SertifikasiPeralatanUpdateArgs>(args: SelectSubset<T, SertifikasiPeralatanUpdateArgs<ExtArgs>>): Prisma__SertifikasiPeralatanClient<$Result.GetResult<Prisma.$SertifikasiPeralatanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SertifikasiPeralatans.
     * @param {SertifikasiPeralatanDeleteManyArgs} args - Arguments to filter SertifikasiPeralatans to delete.
     * @example
     * // Delete a few SertifikasiPeralatans
     * const { count } = await prisma.sertifikasiPeralatan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SertifikasiPeralatanDeleteManyArgs>(args?: SelectSubset<T, SertifikasiPeralatanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SertifikasiPeralatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikasiPeralatanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SertifikasiPeralatans
     * const sertifikasiPeralatan = await prisma.sertifikasiPeralatan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SertifikasiPeralatanUpdateManyArgs>(args: SelectSubset<T, SertifikasiPeralatanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SertifikasiPeralatan.
     * @param {SertifikasiPeralatanUpsertArgs} args - Arguments to update or create a SertifikasiPeralatan.
     * @example
     * // Update or create a SertifikasiPeralatan
     * const sertifikasiPeralatan = await prisma.sertifikasiPeralatan.upsert({
     *   create: {
     *     // ... data to create a SertifikasiPeralatan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SertifikasiPeralatan we want to update
     *   }
     * })
     */
    upsert<T extends SertifikasiPeralatanUpsertArgs>(args: SelectSubset<T, SertifikasiPeralatanUpsertArgs<ExtArgs>>): Prisma__SertifikasiPeralatanClient<$Result.GetResult<Prisma.$SertifikasiPeralatanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SertifikasiPeralatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikasiPeralatanCountArgs} args - Arguments to filter SertifikasiPeralatans to count.
     * @example
     * // Count the number of SertifikasiPeralatans
     * const count = await prisma.sertifikasiPeralatan.count({
     *   where: {
     *     // ... the filter for the SertifikasiPeralatans we want to count
     *   }
     * })
    **/
    count<T extends SertifikasiPeralatanCountArgs>(
      args?: Subset<T, SertifikasiPeralatanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SertifikasiPeralatanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SertifikasiPeralatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikasiPeralatanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SertifikasiPeralatanAggregateArgs>(args: Subset<T, SertifikasiPeralatanAggregateArgs>): Prisma.PrismaPromise<GetSertifikasiPeralatanAggregateType<T>>

    /**
     * Group by SertifikasiPeralatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikasiPeralatanGroupByArgs} args - Group by arguments.
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
      T extends SertifikasiPeralatanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SertifikasiPeralatanGroupByArgs['orderBy'] }
        : { orderBy?: SertifikasiPeralatanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SertifikasiPeralatanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSertifikasiPeralatanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SertifikasiPeralatan model
   */
  readonly fields: SertifikasiPeralatanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SertifikasiPeralatan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SertifikasiPeralatanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SertifikasiPeralatan model
   */ 
  interface SertifikasiPeralatanFieldRefs {
    readonly id: FieldRef<"SertifikasiPeralatan", 'Int'>
    readonly namaPeralatan: FieldRef<"SertifikasiPeralatan", 'String'>
    readonly kodePeralatan: FieldRef<"SertifikasiPeralatan", 'String'>
    readonly jenisPeralatan: FieldRef<"SertifikasiPeralatan", 'String'>
    readonly merk: FieldRef<"SertifikasiPeralatan", 'String'>
    readonly type: FieldRef<"SertifikasiPeralatan", 'String'>
    readonly nomorSeri: FieldRef<"SertifikasiPeralatan", 'String'>
    readonly tahunProduksi: FieldRef<"SertifikasiPeralatan", 'Int'>
    readonly lokasiPemasangan: FieldRef<"SertifikasiPeralatan", 'String'>
    readonly namaOperator: FieldRef<"SertifikasiPeralatan", 'String'>
    readonly nomorSertifikasiOperator: FieldRef<"SertifikasiPeralatan", 'String'>
    readonly jenisSertifikasiOperator: FieldRef<"SertifikasiPeralatan", 'String'>
    readonly masaBerlakuSertifikasiOperator: FieldRef<"SertifikasiPeralatan", 'DateTime'>
    readonly nomorSertifikatPeralatan: FieldRef<"SertifikasiPeralatan", 'String'>
    readonly lembagaPenerbitSertifikat: FieldRef<"SertifikasiPeralatan", 'String'>
    readonly masaBerlakuSertifikatPeralatan: FieldRef<"SertifikasiPeralatan", 'DateTime'>
    readonly tanggalTerbitSertifikat: FieldRef<"SertifikasiPeralatan", 'DateTime'>
    readonly kondisi: FieldRef<"SertifikasiPeralatan", 'String'>
    readonly hasilInspeksiTerakhir: FieldRef<"SertifikasiPeralatan", 'DateTime'>
    readonly catatatan: FieldRef<"SertifikasiPeralatan", 'String'>
    readonly createdAt: FieldRef<"SertifikasiPeralatan", 'DateTime'>
    readonly updatedAt: FieldRef<"SertifikasiPeralatan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SertifikasiPeralatan findUnique
   */
  export type SertifikasiPeralatanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SertifikasiPeralatan
     */
    select?: SertifikasiPeralatanSelect<ExtArgs> | null
    /**
     * Filter, which SertifikasiPeralatan to fetch.
     */
    where: SertifikasiPeralatanWhereUniqueInput
  }

  /**
   * SertifikasiPeralatan findUniqueOrThrow
   */
  export type SertifikasiPeralatanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SertifikasiPeralatan
     */
    select?: SertifikasiPeralatanSelect<ExtArgs> | null
    /**
     * Filter, which SertifikasiPeralatan to fetch.
     */
    where: SertifikasiPeralatanWhereUniqueInput
  }

  /**
   * SertifikasiPeralatan findFirst
   */
  export type SertifikasiPeralatanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SertifikasiPeralatan
     */
    select?: SertifikasiPeralatanSelect<ExtArgs> | null
    /**
     * Filter, which SertifikasiPeralatan to fetch.
     */
    where?: SertifikasiPeralatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SertifikasiPeralatans to fetch.
     */
    orderBy?: SertifikasiPeralatanOrderByWithRelationInput | SertifikasiPeralatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SertifikasiPeralatans.
     */
    cursor?: SertifikasiPeralatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SertifikasiPeralatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SertifikasiPeralatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SertifikasiPeralatans.
     */
    distinct?: SertifikasiPeralatanScalarFieldEnum | SertifikasiPeralatanScalarFieldEnum[]
  }

  /**
   * SertifikasiPeralatan findFirstOrThrow
   */
  export type SertifikasiPeralatanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SertifikasiPeralatan
     */
    select?: SertifikasiPeralatanSelect<ExtArgs> | null
    /**
     * Filter, which SertifikasiPeralatan to fetch.
     */
    where?: SertifikasiPeralatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SertifikasiPeralatans to fetch.
     */
    orderBy?: SertifikasiPeralatanOrderByWithRelationInput | SertifikasiPeralatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SertifikasiPeralatans.
     */
    cursor?: SertifikasiPeralatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SertifikasiPeralatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SertifikasiPeralatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SertifikasiPeralatans.
     */
    distinct?: SertifikasiPeralatanScalarFieldEnum | SertifikasiPeralatanScalarFieldEnum[]
  }

  /**
   * SertifikasiPeralatan findMany
   */
  export type SertifikasiPeralatanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SertifikasiPeralatan
     */
    select?: SertifikasiPeralatanSelect<ExtArgs> | null
    /**
     * Filter, which SertifikasiPeralatans to fetch.
     */
    where?: SertifikasiPeralatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SertifikasiPeralatans to fetch.
     */
    orderBy?: SertifikasiPeralatanOrderByWithRelationInput | SertifikasiPeralatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SertifikasiPeralatans.
     */
    cursor?: SertifikasiPeralatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SertifikasiPeralatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SertifikasiPeralatans.
     */
    skip?: number
    distinct?: SertifikasiPeralatanScalarFieldEnum | SertifikasiPeralatanScalarFieldEnum[]
  }

  /**
   * SertifikasiPeralatan create
   */
  export type SertifikasiPeralatanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SertifikasiPeralatan
     */
    select?: SertifikasiPeralatanSelect<ExtArgs> | null
    /**
     * The data needed to create a SertifikasiPeralatan.
     */
    data: XOR<SertifikasiPeralatanCreateInput, SertifikasiPeralatanUncheckedCreateInput>
  }

  /**
   * SertifikasiPeralatan createMany
   */
  export type SertifikasiPeralatanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SertifikasiPeralatans.
     */
    data: SertifikasiPeralatanCreateManyInput | SertifikasiPeralatanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SertifikasiPeralatan update
   */
  export type SertifikasiPeralatanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SertifikasiPeralatan
     */
    select?: SertifikasiPeralatanSelect<ExtArgs> | null
    /**
     * The data needed to update a SertifikasiPeralatan.
     */
    data: XOR<SertifikasiPeralatanUpdateInput, SertifikasiPeralatanUncheckedUpdateInput>
    /**
     * Choose, which SertifikasiPeralatan to update.
     */
    where: SertifikasiPeralatanWhereUniqueInput
  }

  /**
   * SertifikasiPeralatan updateMany
   */
  export type SertifikasiPeralatanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SertifikasiPeralatans.
     */
    data: XOR<SertifikasiPeralatanUpdateManyMutationInput, SertifikasiPeralatanUncheckedUpdateManyInput>
    /**
     * Filter which SertifikasiPeralatans to update
     */
    where?: SertifikasiPeralatanWhereInput
  }

  /**
   * SertifikasiPeralatan upsert
   */
  export type SertifikasiPeralatanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SertifikasiPeralatan
     */
    select?: SertifikasiPeralatanSelect<ExtArgs> | null
    /**
     * The filter to search for the SertifikasiPeralatan to update in case it exists.
     */
    where: SertifikasiPeralatanWhereUniqueInput
    /**
     * In case the SertifikasiPeralatan found by the `where` argument doesn't exist, create a new SertifikasiPeralatan with this data.
     */
    create: XOR<SertifikasiPeralatanCreateInput, SertifikasiPeralatanUncheckedCreateInput>
    /**
     * In case the SertifikasiPeralatan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SertifikasiPeralatanUpdateInput, SertifikasiPeralatanUncheckedUpdateInput>
  }

  /**
   * SertifikasiPeralatan delete
   */
  export type SertifikasiPeralatanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SertifikasiPeralatan
     */
    select?: SertifikasiPeralatanSelect<ExtArgs> | null
    /**
     * Filter which SertifikasiPeralatan to delete.
     */
    where: SertifikasiPeralatanWhereUniqueInput
  }

  /**
   * SertifikasiPeralatan deleteMany
   */
  export type SertifikasiPeralatanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SertifikasiPeralatans to delete
     */
    where?: SertifikasiPeralatanWhereInput
  }

  /**
   * SertifikasiPeralatan without action
   */
  export type SertifikasiPeralatanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SertifikasiPeralatan
     */
    select?: SertifikasiPeralatanSelect<ExtArgs> | null
  }


  /**
   * Model SystemSettings
   */

  export type AggregateSystemSettings = {
    _count: SystemSettingsCountAggregateOutputType | null
    _avg: SystemSettingsAvgAggregateOutputType | null
    _sum: SystemSettingsSumAggregateOutputType | null
    _min: SystemSettingsMinAggregateOutputType | null
    _max: SystemSettingsMaxAggregateOutputType | null
  }

  export type SystemSettingsAvgAggregateOutputType = {
    id: number | null
  }

  export type SystemSettingsSumAggregateOutputType = {
    id: number | null
  }

  export type SystemSettingsMinAggregateOutputType = {
    id: number | null
    key: string | null
    value: string | null
    category: string | null
    description: string | null
    isVisible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemSettingsMaxAggregateOutputType = {
    id: number | null
    key: string | null
    value: string | null
    category: string | null
    description: string | null
    isVisible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemSettingsCountAggregateOutputType = {
    id: number
    key: number
    value: number
    category: number
    description: number
    isVisible: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SystemSettingsAvgAggregateInputType = {
    id?: true
  }

  export type SystemSettingsSumAggregateInputType = {
    id?: true
  }

  export type SystemSettingsMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    category?: true
    description?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemSettingsMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    category?: true
    description?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemSettingsCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    category?: true
    description?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSettings to aggregate.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemSettings
    **/
    _count?: true | SystemSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemSettingsMaxAggregateInputType
  }

  export type GetSystemSettingsAggregateType<T extends SystemSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemSettings[P]>
      : GetScalarType<T[P], AggregateSystemSettings[P]>
  }




  export type SystemSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemSettingsWhereInput
    orderBy?: SystemSettingsOrderByWithAggregationInput | SystemSettingsOrderByWithAggregationInput[]
    by: SystemSettingsScalarFieldEnum[] | SystemSettingsScalarFieldEnum
    having?: SystemSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemSettingsCountAggregateInputType | true
    _avg?: SystemSettingsAvgAggregateInputType
    _sum?: SystemSettingsSumAggregateInputType
    _min?: SystemSettingsMinAggregateInputType
    _max?: SystemSettingsMaxAggregateInputType
  }

  export type SystemSettingsGroupByOutputType = {
    id: number
    key: string
    value: string
    category: string
    description: string | null
    isVisible: boolean
    createdAt: Date
    updatedAt: Date
    _count: SystemSettingsCountAggregateOutputType | null
    _avg: SystemSettingsAvgAggregateOutputType | null
    _sum: SystemSettingsSumAggregateOutputType | null
    _min: SystemSettingsMinAggregateOutputType | null
    _max: SystemSettingsMaxAggregateOutputType | null
  }

  type GetSystemSettingsGroupByPayload<T extends SystemSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SystemSettingsGroupByOutputType[P]>
        }
      >
    >


  export type SystemSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    category?: boolean
    description?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSettings"]>


  export type SystemSettingsSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    category?: boolean
    description?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $SystemSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      key: string
      value: string
      category: string
      description: string | null
      isVisible: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["systemSettings"]>
    composites: {}
  }

  type SystemSettingsGetPayload<S extends boolean | null | undefined | SystemSettingsDefaultArgs> = $Result.GetResult<Prisma.$SystemSettingsPayload, S>

  type SystemSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SystemSettingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SystemSettingsCountAggregateInputType | true
    }

  export interface SystemSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemSettings'], meta: { name: 'SystemSettings' } }
    /**
     * Find zero or one SystemSettings that matches the filter.
     * @param {SystemSettingsFindUniqueArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemSettingsFindUniqueArgs>(args: SelectSubset<T, SystemSettingsFindUniqueArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SystemSettings that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SystemSettingsFindUniqueOrThrowArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SystemSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindFirstArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemSettingsFindFirstArgs>(args?: SelectSubset<T, SystemSettingsFindFirstArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SystemSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindFirstOrThrowArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SystemSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemSettings
     * const systemSettings = await prisma.systemSettings.findMany()
     * 
     * // Get first 10 SystemSettings
     * const systemSettings = await prisma.systemSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemSettingsWithIdOnly = await prisma.systemSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemSettingsFindManyArgs>(args?: SelectSubset<T, SystemSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SystemSettings.
     * @param {SystemSettingsCreateArgs} args - Arguments to create a SystemSettings.
     * @example
     * // Create one SystemSettings
     * const SystemSettings = await prisma.systemSettings.create({
     *   data: {
     *     // ... data to create a SystemSettings
     *   }
     * })
     * 
     */
    create<T extends SystemSettingsCreateArgs>(args: SelectSubset<T, SystemSettingsCreateArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SystemSettings.
     * @param {SystemSettingsCreateManyArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSettings = await prisma.systemSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemSettingsCreateManyArgs>(args?: SelectSubset<T, SystemSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SystemSettings.
     * @param {SystemSettingsDeleteArgs} args - Arguments to delete one SystemSettings.
     * @example
     * // Delete one SystemSettings
     * const SystemSettings = await prisma.systemSettings.delete({
     *   where: {
     *     // ... filter to delete one SystemSettings
     *   }
     * })
     * 
     */
    delete<T extends SystemSettingsDeleteArgs>(args: SelectSubset<T, SystemSettingsDeleteArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SystemSettings.
     * @param {SystemSettingsUpdateArgs} args - Arguments to update one SystemSettings.
     * @example
     * // Update one SystemSettings
     * const systemSettings = await prisma.systemSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemSettingsUpdateArgs>(args: SelectSubset<T, SystemSettingsUpdateArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SystemSettings.
     * @param {SystemSettingsDeleteManyArgs} args - Arguments to filter SystemSettings to delete.
     * @example
     * // Delete a few SystemSettings
     * const { count } = await prisma.systemSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemSettingsDeleteManyArgs>(args?: SelectSubset<T, SystemSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemSettings
     * const systemSettings = await prisma.systemSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemSettingsUpdateManyArgs>(args: SelectSubset<T, SystemSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SystemSettings.
     * @param {SystemSettingsUpsertArgs} args - Arguments to update or create a SystemSettings.
     * @example
     * // Update or create a SystemSettings
     * const systemSettings = await prisma.systemSettings.upsert({
     *   create: {
     *     // ... data to create a SystemSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemSettings we want to update
     *   }
     * })
     */
    upsert<T extends SystemSettingsUpsertArgs>(args: SelectSubset<T, SystemSettingsUpsertArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsCountArgs} args - Arguments to filter SystemSettings to count.
     * @example
     * // Count the number of SystemSettings
     * const count = await prisma.systemSettings.count({
     *   where: {
     *     // ... the filter for the SystemSettings we want to count
     *   }
     * })
    **/
    count<T extends SystemSettingsCountArgs>(
      args?: Subset<T, SystemSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemSettingsAggregateArgs>(args: Subset<T, SystemSettingsAggregateArgs>): Prisma.PrismaPromise<GetSystemSettingsAggregateType<T>>

    /**
     * Group by SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsGroupByArgs} args - Group by arguments.
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
      T extends SystemSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemSettingsGroupByArgs['orderBy'] }
        : { orderBy?: SystemSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemSettings model
   */
  readonly fields: SystemSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SystemSettings model
   */ 
  interface SystemSettingsFieldRefs {
    readonly id: FieldRef<"SystemSettings", 'Int'>
    readonly key: FieldRef<"SystemSettings", 'String'>
    readonly value: FieldRef<"SystemSettings", 'String'>
    readonly category: FieldRef<"SystemSettings", 'String'>
    readonly description: FieldRef<"SystemSettings", 'String'>
    readonly isVisible: FieldRef<"SystemSettings", 'Boolean'>
    readonly createdAt: FieldRef<"SystemSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"SystemSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemSettings findUnique
   */
  export type SystemSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings findUniqueOrThrow
   */
  export type SystemSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings findFirst
   */
  export type SystemSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings findFirstOrThrow
   */
  export type SystemSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings findMany
   */
  export type SystemSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings create
   */
  export type SystemSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * The data needed to create a SystemSettings.
     */
    data: XOR<SystemSettingsCreateInput, SystemSettingsUncheckedCreateInput>
  }

  /**
   * SystemSettings createMany
   */
  export type SystemSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingsCreateManyInput | SystemSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemSettings update
   */
  export type SystemSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * The data needed to update a SystemSettings.
     */
    data: XOR<SystemSettingsUpdateInput, SystemSettingsUncheckedUpdateInput>
    /**
     * Choose, which SystemSettings to update.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings updateMany
   */
  export type SystemSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingsUpdateManyMutationInput, SystemSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingsWhereInput
  }

  /**
   * SystemSettings upsert
   */
  export type SystemSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * The filter to search for the SystemSettings to update in case it exists.
     */
    where: SystemSettingsWhereUniqueInput
    /**
     * In case the SystemSettings found by the `where` argument doesn't exist, create a new SystemSettings with this data.
     */
    create: XOR<SystemSettingsCreateInput, SystemSettingsUncheckedCreateInput>
    /**
     * In case the SystemSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemSettingsUpdateInput, SystemSettingsUncheckedUpdateInput>
  }

  /**
   * SystemSettings delete
   */
  export type SystemSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Filter which SystemSettings to delete.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings deleteMany
   */
  export type SystemSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSettings to delete
     */
    where?: SystemSettingsWhereInput
  }

  /**
   * SystemSettings without action
   */
  export type SystemSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _avg: ActivityLogAvgAggregateOutputType | null
    _sum: ActivityLogSumAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    adminId: number | null
    entityId: number | null
  }

  export type ActivityLogSumAggregateOutputType = {
    id: number | null
    userId: number | null
    adminId: number | null
    entityId: number | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: number | null
    userId: number | null
    adminId: number | null
    action: string | null
    entityType: string | null
    entityId: number | null
    description: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    adminId: number | null
    action: string | null
    entityType: string | null
    entityId: number | null
    description: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    userId: number
    adminId: number
    action: number
    entityType: number
    entityId: number
    description: number
    ipAddress: number
    userAgent: number
    createdAt: number
    _all: number
  }


  export type ActivityLogAvgAggregateInputType = {
    id?: true
    userId?: true
    adminId?: true
    entityId?: true
  }

  export type ActivityLogSumAggregateInputType = {
    id?: true
    userId?: true
    adminId?: true
    entityId?: true
  }

  export type ActivityLogMinAggregateInputType = {
    id?: true
    userId?: true
    adminId?: true
    action?: true
    entityType?: true
    entityId?: true
    description?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    userId?: true
    adminId?: true
    action?: true
    entityType?: true
    entityId?: true
    description?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    userId?: true
    adminId?: true
    action?: true
    entityType?: true
    entityId?: true
    description?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _avg?: ActivityLogAvgAggregateInputType
    _sum?: ActivityLogSumAggregateInputType
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: number
    userId: number | null
    adminId: number | null
    action: string
    entityType: string
    entityId: number | null
    description: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    _count: ActivityLogCountAggregateOutputType | null
    _avg: ActivityLogAvgAggregateOutputType | null
    _sum: ActivityLogSumAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    adminId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    description?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
    admin?: boolean | ActivityLog$adminArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>


  export type ActivityLogSelectScalar = {
    id?: boolean
    userId?: boolean
    adminId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    description?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }

  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
    admin?: boolean | ActivityLog$adminArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      admin: Prisma.$AdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      adminId: number | null
      action: string
      entityType: string
      entityId: number | null
      description: string | null
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
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
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ActivityLog$userArgs<ExtArgs> = {}>(args?: Subset<T, ActivityLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    admin<T extends ActivityLog$adminArgs<ExtArgs> = {}>(args?: Subset<T, ActivityLog$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the ActivityLog model
   */ 
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'Int'>
    readonly userId: FieldRef<"ActivityLog", 'Int'>
    readonly adminId: FieldRef<"ActivityLog", 'Int'>
    readonly action: FieldRef<"ActivityLog", 'String'>
    readonly entityType: FieldRef<"ActivityLog", 'String'>
    readonly entityId: FieldRef<"ActivityLog", 'Int'>
    readonly description: FieldRef<"ActivityLog", 'String'>
    readonly ipAddress: FieldRef<"ActivityLog", 'String'>
    readonly userAgent: FieldRef<"ActivityLog", 'String'>
    readonly createdAt: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
  }

  /**
   * ActivityLog.user
   */
  export type ActivityLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ActivityLog.admin
   */
  export type ActivityLog$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
  }


  /**
   * Model MasterLokasi
   */

  export type AggregateMasterLokasi = {
    _count: MasterLokasiCountAggregateOutputType | null
    _avg: MasterLokasiAvgAggregateOutputType | null
    _sum: MasterLokasiSumAggregateOutputType | null
    _min: MasterLokasiMinAggregateOutputType | null
    _max: MasterLokasiMaxAggregateOutputType | null
  }

  export type MasterLokasiAvgAggregateOutputType = {
    id: number | null
  }

  export type MasterLokasiSumAggregateOutputType = {
    id: number | null
  }

  export type MasterLokasiMinAggregateOutputType = {
    id: number | null
    field: string | null
    kategori: string | null
    nama: string | null
    keterangan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MasterLokasiMaxAggregateOutputType = {
    id: number | null
    field: string | null
    kategori: string | null
    nama: string | null
    keterangan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MasterLokasiCountAggregateOutputType = {
    id: number
    field: number
    kategori: number
    nama: number
    keterangan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MasterLokasiAvgAggregateInputType = {
    id?: true
  }

  export type MasterLokasiSumAggregateInputType = {
    id?: true
  }

  export type MasterLokasiMinAggregateInputType = {
    id?: true
    field?: true
    kategori?: true
    nama?: true
    keterangan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MasterLokasiMaxAggregateInputType = {
    id?: true
    field?: true
    kategori?: true
    nama?: true
    keterangan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MasterLokasiCountAggregateInputType = {
    id?: true
    field?: true
    kategori?: true
    nama?: true
    keterangan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MasterLokasiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterLokasi to aggregate.
     */
    where?: MasterLokasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterLokasis to fetch.
     */
    orderBy?: MasterLokasiOrderByWithRelationInput | MasterLokasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MasterLokasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterLokasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterLokasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MasterLokasis
    **/
    _count?: true | MasterLokasiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MasterLokasiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MasterLokasiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MasterLokasiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MasterLokasiMaxAggregateInputType
  }

  export type GetMasterLokasiAggregateType<T extends MasterLokasiAggregateArgs> = {
        [P in keyof T & keyof AggregateMasterLokasi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMasterLokasi[P]>
      : GetScalarType<T[P], AggregateMasterLokasi[P]>
  }




  export type MasterLokasiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterLokasiWhereInput
    orderBy?: MasterLokasiOrderByWithAggregationInput | MasterLokasiOrderByWithAggregationInput[]
    by: MasterLokasiScalarFieldEnum[] | MasterLokasiScalarFieldEnum
    having?: MasterLokasiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MasterLokasiCountAggregateInputType | true
    _avg?: MasterLokasiAvgAggregateInputType
    _sum?: MasterLokasiSumAggregateInputType
    _min?: MasterLokasiMinAggregateInputType
    _max?: MasterLokasiMaxAggregateInputType
  }

  export type MasterLokasiGroupByOutputType = {
    id: number
    field: string | null
    kategori: string | null
    nama: string
    keterangan: string | null
    createdAt: Date
    updatedAt: Date
    _count: MasterLokasiCountAggregateOutputType | null
    _avg: MasterLokasiAvgAggregateOutputType | null
    _sum: MasterLokasiSumAggregateOutputType | null
    _min: MasterLokasiMinAggregateOutputType | null
    _max: MasterLokasiMaxAggregateOutputType | null
  }

  type GetMasterLokasiGroupByPayload<T extends MasterLokasiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MasterLokasiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MasterLokasiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MasterLokasiGroupByOutputType[P]>
            : GetScalarType<T[P], MasterLokasiGroupByOutputType[P]>
        }
      >
    >


  export type MasterLokasiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    field?: boolean
    kategori?: boolean
    nama?: boolean
    keterangan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["masterLokasi"]>


  export type MasterLokasiSelectScalar = {
    id?: boolean
    field?: boolean
    kategori?: boolean
    nama?: boolean
    keterangan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $MasterLokasiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MasterLokasi"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      field: string | null
      kategori: string | null
      nama: string
      keterangan: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["masterLokasi"]>
    composites: {}
  }

  type MasterLokasiGetPayload<S extends boolean | null | undefined | MasterLokasiDefaultArgs> = $Result.GetResult<Prisma.$MasterLokasiPayload, S>

  type MasterLokasiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MasterLokasiFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MasterLokasiCountAggregateInputType | true
    }

  export interface MasterLokasiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MasterLokasi'], meta: { name: 'MasterLokasi' } }
    /**
     * Find zero or one MasterLokasi that matches the filter.
     * @param {MasterLokasiFindUniqueArgs} args - Arguments to find a MasterLokasi
     * @example
     * // Get one MasterLokasi
     * const masterLokasi = await prisma.masterLokasi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MasterLokasiFindUniqueArgs>(args: SelectSubset<T, MasterLokasiFindUniqueArgs<ExtArgs>>): Prisma__MasterLokasiClient<$Result.GetResult<Prisma.$MasterLokasiPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MasterLokasi that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MasterLokasiFindUniqueOrThrowArgs} args - Arguments to find a MasterLokasi
     * @example
     * // Get one MasterLokasi
     * const masterLokasi = await prisma.masterLokasi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MasterLokasiFindUniqueOrThrowArgs>(args: SelectSubset<T, MasterLokasiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MasterLokasiClient<$Result.GetResult<Prisma.$MasterLokasiPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MasterLokasi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterLokasiFindFirstArgs} args - Arguments to find a MasterLokasi
     * @example
     * // Get one MasterLokasi
     * const masterLokasi = await prisma.masterLokasi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MasterLokasiFindFirstArgs>(args?: SelectSubset<T, MasterLokasiFindFirstArgs<ExtArgs>>): Prisma__MasterLokasiClient<$Result.GetResult<Prisma.$MasterLokasiPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MasterLokasi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterLokasiFindFirstOrThrowArgs} args - Arguments to find a MasterLokasi
     * @example
     * // Get one MasterLokasi
     * const masterLokasi = await prisma.masterLokasi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MasterLokasiFindFirstOrThrowArgs>(args?: SelectSubset<T, MasterLokasiFindFirstOrThrowArgs<ExtArgs>>): Prisma__MasterLokasiClient<$Result.GetResult<Prisma.$MasterLokasiPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MasterLokasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterLokasiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MasterLokasis
     * const masterLokasis = await prisma.masterLokasi.findMany()
     * 
     * // Get first 10 MasterLokasis
     * const masterLokasis = await prisma.masterLokasi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const masterLokasiWithIdOnly = await prisma.masterLokasi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MasterLokasiFindManyArgs>(args?: SelectSubset<T, MasterLokasiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterLokasiPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MasterLokasi.
     * @param {MasterLokasiCreateArgs} args - Arguments to create a MasterLokasi.
     * @example
     * // Create one MasterLokasi
     * const MasterLokasi = await prisma.masterLokasi.create({
     *   data: {
     *     // ... data to create a MasterLokasi
     *   }
     * })
     * 
     */
    create<T extends MasterLokasiCreateArgs>(args: SelectSubset<T, MasterLokasiCreateArgs<ExtArgs>>): Prisma__MasterLokasiClient<$Result.GetResult<Prisma.$MasterLokasiPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MasterLokasis.
     * @param {MasterLokasiCreateManyArgs} args - Arguments to create many MasterLokasis.
     * @example
     * // Create many MasterLokasis
     * const masterLokasi = await prisma.masterLokasi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MasterLokasiCreateManyArgs>(args?: SelectSubset<T, MasterLokasiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MasterLokasi.
     * @param {MasterLokasiDeleteArgs} args - Arguments to delete one MasterLokasi.
     * @example
     * // Delete one MasterLokasi
     * const MasterLokasi = await prisma.masterLokasi.delete({
     *   where: {
     *     // ... filter to delete one MasterLokasi
     *   }
     * })
     * 
     */
    delete<T extends MasterLokasiDeleteArgs>(args: SelectSubset<T, MasterLokasiDeleteArgs<ExtArgs>>): Prisma__MasterLokasiClient<$Result.GetResult<Prisma.$MasterLokasiPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MasterLokasi.
     * @param {MasterLokasiUpdateArgs} args - Arguments to update one MasterLokasi.
     * @example
     * // Update one MasterLokasi
     * const masterLokasi = await prisma.masterLokasi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MasterLokasiUpdateArgs>(args: SelectSubset<T, MasterLokasiUpdateArgs<ExtArgs>>): Prisma__MasterLokasiClient<$Result.GetResult<Prisma.$MasterLokasiPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MasterLokasis.
     * @param {MasterLokasiDeleteManyArgs} args - Arguments to filter MasterLokasis to delete.
     * @example
     * // Delete a few MasterLokasis
     * const { count } = await prisma.masterLokasi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MasterLokasiDeleteManyArgs>(args?: SelectSubset<T, MasterLokasiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterLokasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterLokasiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MasterLokasis
     * const masterLokasi = await prisma.masterLokasi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MasterLokasiUpdateManyArgs>(args: SelectSubset<T, MasterLokasiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MasterLokasi.
     * @param {MasterLokasiUpsertArgs} args - Arguments to update or create a MasterLokasi.
     * @example
     * // Update or create a MasterLokasi
     * const masterLokasi = await prisma.masterLokasi.upsert({
     *   create: {
     *     // ... data to create a MasterLokasi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MasterLokasi we want to update
     *   }
     * })
     */
    upsert<T extends MasterLokasiUpsertArgs>(args: SelectSubset<T, MasterLokasiUpsertArgs<ExtArgs>>): Prisma__MasterLokasiClient<$Result.GetResult<Prisma.$MasterLokasiPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MasterLokasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterLokasiCountArgs} args - Arguments to filter MasterLokasis to count.
     * @example
     * // Count the number of MasterLokasis
     * const count = await prisma.masterLokasi.count({
     *   where: {
     *     // ... the filter for the MasterLokasis we want to count
     *   }
     * })
    **/
    count<T extends MasterLokasiCountArgs>(
      args?: Subset<T, MasterLokasiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MasterLokasiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MasterLokasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterLokasiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MasterLokasiAggregateArgs>(args: Subset<T, MasterLokasiAggregateArgs>): Prisma.PrismaPromise<GetMasterLokasiAggregateType<T>>

    /**
     * Group by MasterLokasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterLokasiGroupByArgs} args - Group by arguments.
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
      T extends MasterLokasiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MasterLokasiGroupByArgs['orderBy'] }
        : { orderBy?: MasterLokasiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MasterLokasiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasterLokasiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MasterLokasi model
   */
  readonly fields: MasterLokasiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MasterLokasi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MasterLokasiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MasterLokasi model
   */ 
  interface MasterLokasiFieldRefs {
    readonly id: FieldRef<"MasterLokasi", 'Int'>
    readonly field: FieldRef<"MasterLokasi", 'String'>
    readonly kategori: FieldRef<"MasterLokasi", 'String'>
    readonly nama: FieldRef<"MasterLokasi", 'String'>
    readonly keterangan: FieldRef<"MasterLokasi", 'String'>
    readonly createdAt: FieldRef<"MasterLokasi", 'DateTime'>
    readonly updatedAt: FieldRef<"MasterLokasi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MasterLokasi findUnique
   */
  export type MasterLokasiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterLokasi
     */
    select?: MasterLokasiSelect<ExtArgs> | null
    /**
     * Filter, which MasterLokasi to fetch.
     */
    where: MasterLokasiWhereUniqueInput
  }

  /**
   * MasterLokasi findUniqueOrThrow
   */
  export type MasterLokasiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterLokasi
     */
    select?: MasterLokasiSelect<ExtArgs> | null
    /**
     * Filter, which MasterLokasi to fetch.
     */
    where: MasterLokasiWhereUniqueInput
  }

  /**
   * MasterLokasi findFirst
   */
  export type MasterLokasiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterLokasi
     */
    select?: MasterLokasiSelect<ExtArgs> | null
    /**
     * Filter, which MasterLokasi to fetch.
     */
    where?: MasterLokasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterLokasis to fetch.
     */
    orderBy?: MasterLokasiOrderByWithRelationInput | MasterLokasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterLokasis.
     */
    cursor?: MasterLokasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterLokasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterLokasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterLokasis.
     */
    distinct?: MasterLokasiScalarFieldEnum | MasterLokasiScalarFieldEnum[]
  }

  /**
   * MasterLokasi findFirstOrThrow
   */
  export type MasterLokasiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterLokasi
     */
    select?: MasterLokasiSelect<ExtArgs> | null
    /**
     * Filter, which MasterLokasi to fetch.
     */
    where?: MasterLokasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterLokasis to fetch.
     */
    orderBy?: MasterLokasiOrderByWithRelationInput | MasterLokasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterLokasis.
     */
    cursor?: MasterLokasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterLokasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterLokasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterLokasis.
     */
    distinct?: MasterLokasiScalarFieldEnum | MasterLokasiScalarFieldEnum[]
  }

  /**
   * MasterLokasi findMany
   */
  export type MasterLokasiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterLokasi
     */
    select?: MasterLokasiSelect<ExtArgs> | null
    /**
     * Filter, which MasterLokasis to fetch.
     */
    where?: MasterLokasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterLokasis to fetch.
     */
    orderBy?: MasterLokasiOrderByWithRelationInput | MasterLokasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MasterLokasis.
     */
    cursor?: MasterLokasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterLokasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterLokasis.
     */
    skip?: number
    distinct?: MasterLokasiScalarFieldEnum | MasterLokasiScalarFieldEnum[]
  }

  /**
   * MasterLokasi create
   */
  export type MasterLokasiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterLokasi
     */
    select?: MasterLokasiSelect<ExtArgs> | null
    /**
     * The data needed to create a MasterLokasi.
     */
    data: XOR<MasterLokasiCreateInput, MasterLokasiUncheckedCreateInput>
  }

  /**
   * MasterLokasi createMany
   */
  export type MasterLokasiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MasterLokasis.
     */
    data: MasterLokasiCreateManyInput | MasterLokasiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MasterLokasi update
   */
  export type MasterLokasiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterLokasi
     */
    select?: MasterLokasiSelect<ExtArgs> | null
    /**
     * The data needed to update a MasterLokasi.
     */
    data: XOR<MasterLokasiUpdateInput, MasterLokasiUncheckedUpdateInput>
    /**
     * Choose, which MasterLokasi to update.
     */
    where: MasterLokasiWhereUniqueInput
  }

  /**
   * MasterLokasi updateMany
   */
  export type MasterLokasiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MasterLokasis.
     */
    data: XOR<MasterLokasiUpdateManyMutationInput, MasterLokasiUncheckedUpdateManyInput>
    /**
     * Filter which MasterLokasis to update
     */
    where?: MasterLokasiWhereInput
  }

  /**
   * MasterLokasi upsert
   */
  export type MasterLokasiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterLokasi
     */
    select?: MasterLokasiSelect<ExtArgs> | null
    /**
     * The filter to search for the MasterLokasi to update in case it exists.
     */
    where: MasterLokasiWhereUniqueInput
    /**
     * In case the MasterLokasi found by the `where` argument doesn't exist, create a new MasterLokasi with this data.
     */
    create: XOR<MasterLokasiCreateInput, MasterLokasiUncheckedCreateInput>
    /**
     * In case the MasterLokasi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MasterLokasiUpdateInput, MasterLokasiUncheckedUpdateInput>
  }

  /**
   * MasterLokasi delete
   */
  export type MasterLokasiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterLokasi
     */
    select?: MasterLokasiSelect<ExtArgs> | null
    /**
     * Filter which MasterLokasi to delete.
     */
    where: MasterLokasiWhereUniqueInput
  }

  /**
   * MasterLokasi deleteMany
   */
  export type MasterLokasiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterLokasis to delete
     */
    where?: MasterLokasiWhereInput
  }

  /**
   * MasterLokasi without action
   */
  export type MasterLokasiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterLokasi
     */
    select?: MasterLokasiSelect<ExtArgs> | null
  }


  /**
   * Model Tugas
   */

  export type AggregateTugas = {
    _count: TugasCountAggregateOutputType | null
    _avg: TugasAvgAggregateOutputType | null
    _sum: TugasSumAggregateOutputType | null
    _min: TugasMinAggregateOutputType | null
    _max: TugasMaxAggregateOutputType | null
  }

  export type TugasAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    adminId: number | null
  }

  export type TugasSumAggregateOutputType = {
    id: number | null
    userId: number | null
    adminId: number | null
  }

  export type TugasMinAggregateOutputType = {
    id: number | null
    judul: string | null
    deskripsi: string | null
    fileLampiran: string | null
    userId: number | null
    adminId: number | null
    lokasiField: string | null
    lokasiArea: string | null
    lokasiSumur: string | null
    tanggalMulai: Date | null
    dueDate: Date | null
    dokumenPengerjaan: string | null
    dataPengerjaan: string | null
    fotoPengerjaan: string | null
    laporanSelesai: string | null
    fotoSelesai: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TugasMaxAggregateOutputType = {
    id: number | null
    judul: string | null
    deskripsi: string | null
    fileLampiran: string | null
    userId: number | null
    adminId: number | null
    lokasiField: string | null
    lokasiArea: string | null
    lokasiSumur: string | null
    tanggalMulai: Date | null
    dueDate: Date | null
    dokumenPengerjaan: string | null
    dataPengerjaan: string | null
    fotoPengerjaan: string | null
    laporanSelesai: string | null
    fotoSelesai: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TugasCountAggregateOutputType = {
    id: number
    judul: number
    deskripsi: number
    fileLampiran: number
    userId: number
    adminId: number
    lokasiField: number
    lokasiArea: number
    lokasiSumur: number
    tanggalMulai: number
    dueDate: number
    dokumenPengerjaan: number
    dataPengerjaan: number
    fotoPengerjaan: number
    laporanSelesai: number
    fotoSelesai: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TugasAvgAggregateInputType = {
    id?: true
    userId?: true
    adminId?: true
  }

  export type TugasSumAggregateInputType = {
    id?: true
    userId?: true
    adminId?: true
  }

  export type TugasMinAggregateInputType = {
    id?: true
    judul?: true
    deskripsi?: true
    fileLampiran?: true
    userId?: true
    adminId?: true
    lokasiField?: true
    lokasiArea?: true
    lokasiSumur?: true
    tanggalMulai?: true
    dueDate?: true
    dokumenPengerjaan?: true
    dataPengerjaan?: true
    fotoPengerjaan?: true
    laporanSelesai?: true
    fotoSelesai?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TugasMaxAggregateInputType = {
    id?: true
    judul?: true
    deskripsi?: true
    fileLampiran?: true
    userId?: true
    adminId?: true
    lokasiField?: true
    lokasiArea?: true
    lokasiSumur?: true
    tanggalMulai?: true
    dueDate?: true
    dokumenPengerjaan?: true
    dataPengerjaan?: true
    fotoPengerjaan?: true
    laporanSelesai?: true
    fotoSelesai?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TugasCountAggregateInputType = {
    id?: true
    judul?: true
    deskripsi?: true
    fileLampiran?: true
    userId?: true
    adminId?: true
    lokasiField?: true
    lokasiArea?: true
    lokasiSumur?: true
    tanggalMulai?: true
    dueDate?: true
    dokumenPengerjaan?: true
    dataPengerjaan?: true
    fotoPengerjaan?: true
    laporanSelesai?: true
    fotoSelesai?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TugasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tugas to aggregate.
     */
    where?: TugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tugases to fetch.
     */
    orderBy?: TugasOrderByWithRelationInput | TugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tugases
    **/
    _count?: true | TugasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TugasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TugasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TugasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TugasMaxAggregateInputType
  }

  export type GetTugasAggregateType<T extends TugasAggregateArgs> = {
        [P in keyof T & keyof AggregateTugas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTugas[P]>
      : GetScalarType<T[P], AggregateTugas[P]>
  }




  export type TugasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TugasWhereInput
    orderBy?: TugasOrderByWithAggregationInput | TugasOrderByWithAggregationInput[]
    by: TugasScalarFieldEnum[] | TugasScalarFieldEnum
    having?: TugasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TugasCountAggregateInputType | true
    _avg?: TugasAvgAggregateInputType
    _sum?: TugasSumAggregateInputType
    _min?: TugasMinAggregateInputType
    _max?: TugasMaxAggregateInputType
  }

  export type TugasGroupByOutputType = {
    id: number
    judul: string
    deskripsi: string
    fileLampiran: string | null
    userId: number
    adminId: number
    lokasiField: string | null
    lokasiArea: string | null
    lokasiSumur: string | null
    tanggalMulai: Date | null
    dueDate: Date | null
    dokumenPengerjaan: string | null
    dataPengerjaan: string | null
    fotoPengerjaan: string | null
    laporanSelesai: string | null
    fotoSelesai: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: TugasCountAggregateOutputType | null
    _avg: TugasAvgAggregateOutputType | null
    _sum: TugasSumAggregateOutputType | null
    _min: TugasMinAggregateOutputType | null
    _max: TugasMaxAggregateOutputType | null
  }

  type GetTugasGroupByPayload<T extends TugasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TugasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TugasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TugasGroupByOutputType[P]>
            : GetScalarType<T[P], TugasGroupByOutputType[P]>
        }
      >
    >


  export type TugasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    deskripsi?: boolean
    fileLampiran?: boolean
    userId?: boolean
    adminId?: boolean
    lokasiField?: boolean
    lokasiArea?: boolean
    lokasiSumur?: boolean
    tanggalMulai?: boolean
    dueDate?: boolean
    dokumenPengerjaan?: boolean
    dataPengerjaan?: boolean
    fotoPengerjaan?: boolean
    laporanSelesai?: boolean
    fotoSelesai?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tugas"]>


  export type TugasSelectScalar = {
    id?: boolean
    judul?: boolean
    deskripsi?: boolean
    fileLampiran?: boolean
    userId?: boolean
    adminId?: boolean
    lokasiField?: boolean
    lokasiArea?: boolean
    lokasiSumur?: boolean
    tanggalMulai?: boolean
    dueDate?: boolean
    dokumenPengerjaan?: boolean
    dataPengerjaan?: boolean
    fotoPengerjaan?: boolean
    laporanSelesai?: boolean
    fotoSelesai?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TugasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }

  export type $TugasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tugas"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      admin: Prisma.$AdminPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      judul: string
      deskripsi: string
      fileLampiran: string | null
      userId: number
      adminId: number
      lokasiField: string | null
      lokasiArea: string | null
      lokasiSumur: string | null
      tanggalMulai: Date | null
      dueDate: Date | null
      dokumenPengerjaan: string | null
      dataPengerjaan: string | null
      fotoPengerjaan: string | null
      laporanSelesai: string | null
      fotoSelesai: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tugas"]>
    composites: {}
  }

  type TugasGetPayload<S extends boolean | null | undefined | TugasDefaultArgs> = $Result.GetResult<Prisma.$TugasPayload, S>

  type TugasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TugasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TugasCountAggregateInputType | true
    }

  export interface TugasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tugas'], meta: { name: 'Tugas' } }
    /**
     * Find zero or one Tugas that matches the filter.
     * @param {TugasFindUniqueArgs} args - Arguments to find a Tugas
     * @example
     * // Get one Tugas
     * const tugas = await prisma.tugas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TugasFindUniqueArgs>(args: SelectSubset<T, TugasFindUniqueArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tugas that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TugasFindUniqueOrThrowArgs} args - Arguments to find a Tugas
     * @example
     * // Get one Tugas
     * const tugas = await prisma.tugas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TugasFindUniqueOrThrowArgs>(args: SelectSubset<T, TugasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tugas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasFindFirstArgs} args - Arguments to find a Tugas
     * @example
     * // Get one Tugas
     * const tugas = await prisma.tugas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TugasFindFirstArgs>(args?: SelectSubset<T, TugasFindFirstArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tugas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasFindFirstOrThrowArgs} args - Arguments to find a Tugas
     * @example
     * // Get one Tugas
     * const tugas = await prisma.tugas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TugasFindFirstOrThrowArgs>(args?: SelectSubset<T, TugasFindFirstOrThrowArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tugases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tugases
     * const tugases = await prisma.tugas.findMany()
     * 
     * // Get first 10 Tugases
     * const tugases = await prisma.tugas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tugasWithIdOnly = await prisma.tugas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TugasFindManyArgs>(args?: SelectSubset<T, TugasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tugas.
     * @param {TugasCreateArgs} args - Arguments to create a Tugas.
     * @example
     * // Create one Tugas
     * const Tugas = await prisma.tugas.create({
     *   data: {
     *     // ... data to create a Tugas
     *   }
     * })
     * 
     */
    create<T extends TugasCreateArgs>(args: SelectSubset<T, TugasCreateArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tugases.
     * @param {TugasCreateManyArgs} args - Arguments to create many Tugases.
     * @example
     * // Create many Tugases
     * const tugas = await prisma.tugas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TugasCreateManyArgs>(args?: SelectSubset<T, TugasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tugas.
     * @param {TugasDeleteArgs} args - Arguments to delete one Tugas.
     * @example
     * // Delete one Tugas
     * const Tugas = await prisma.tugas.delete({
     *   where: {
     *     // ... filter to delete one Tugas
     *   }
     * })
     * 
     */
    delete<T extends TugasDeleteArgs>(args: SelectSubset<T, TugasDeleteArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tugas.
     * @param {TugasUpdateArgs} args - Arguments to update one Tugas.
     * @example
     * // Update one Tugas
     * const tugas = await prisma.tugas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TugasUpdateArgs>(args: SelectSubset<T, TugasUpdateArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tugases.
     * @param {TugasDeleteManyArgs} args - Arguments to filter Tugases to delete.
     * @example
     * // Delete a few Tugases
     * const { count } = await prisma.tugas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TugasDeleteManyArgs>(args?: SelectSubset<T, TugasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tugases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tugases
     * const tugas = await prisma.tugas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TugasUpdateManyArgs>(args: SelectSubset<T, TugasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tugas.
     * @param {TugasUpsertArgs} args - Arguments to update or create a Tugas.
     * @example
     * // Update or create a Tugas
     * const tugas = await prisma.tugas.upsert({
     *   create: {
     *     // ... data to create a Tugas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tugas we want to update
     *   }
     * })
     */
    upsert<T extends TugasUpsertArgs>(args: SelectSubset<T, TugasUpsertArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tugases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasCountArgs} args - Arguments to filter Tugases to count.
     * @example
     * // Count the number of Tugases
     * const count = await prisma.tugas.count({
     *   where: {
     *     // ... the filter for the Tugases we want to count
     *   }
     * })
    **/
    count<T extends TugasCountArgs>(
      args?: Subset<T, TugasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TugasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tugas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TugasAggregateArgs>(args: Subset<T, TugasAggregateArgs>): Prisma.PrismaPromise<GetTugasAggregateType<T>>

    /**
     * Group by Tugas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasGroupByArgs} args - Group by arguments.
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
      T extends TugasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TugasGroupByArgs['orderBy'] }
        : { orderBy?: TugasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TugasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTugasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tugas model
   */
  readonly fields: TugasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tugas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TugasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Tugas model
   */ 
  interface TugasFieldRefs {
    readonly id: FieldRef<"Tugas", 'Int'>
    readonly judul: FieldRef<"Tugas", 'String'>
    readonly deskripsi: FieldRef<"Tugas", 'String'>
    readonly fileLampiran: FieldRef<"Tugas", 'String'>
    readonly userId: FieldRef<"Tugas", 'Int'>
    readonly adminId: FieldRef<"Tugas", 'Int'>
    readonly lokasiField: FieldRef<"Tugas", 'String'>
    readonly lokasiArea: FieldRef<"Tugas", 'String'>
    readonly lokasiSumur: FieldRef<"Tugas", 'String'>
    readonly tanggalMulai: FieldRef<"Tugas", 'DateTime'>
    readonly dueDate: FieldRef<"Tugas", 'DateTime'>
    readonly dokumenPengerjaan: FieldRef<"Tugas", 'String'>
    readonly dataPengerjaan: FieldRef<"Tugas", 'String'>
    readonly fotoPengerjaan: FieldRef<"Tugas", 'String'>
    readonly laporanSelesai: FieldRef<"Tugas", 'String'>
    readonly fotoSelesai: FieldRef<"Tugas", 'String'>
    readonly status: FieldRef<"Tugas", 'String'>
    readonly createdAt: FieldRef<"Tugas", 'DateTime'>
    readonly updatedAt: FieldRef<"Tugas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tugas findUnique
   */
  export type TugasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * Filter, which Tugas to fetch.
     */
    where: TugasWhereUniqueInput
  }

  /**
   * Tugas findUniqueOrThrow
   */
  export type TugasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * Filter, which Tugas to fetch.
     */
    where: TugasWhereUniqueInput
  }

  /**
   * Tugas findFirst
   */
  export type TugasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * Filter, which Tugas to fetch.
     */
    where?: TugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tugases to fetch.
     */
    orderBy?: TugasOrderByWithRelationInput | TugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tugases.
     */
    cursor?: TugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tugases.
     */
    distinct?: TugasScalarFieldEnum | TugasScalarFieldEnum[]
  }

  /**
   * Tugas findFirstOrThrow
   */
  export type TugasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * Filter, which Tugas to fetch.
     */
    where?: TugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tugases to fetch.
     */
    orderBy?: TugasOrderByWithRelationInput | TugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tugases.
     */
    cursor?: TugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tugases.
     */
    distinct?: TugasScalarFieldEnum | TugasScalarFieldEnum[]
  }

  /**
   * Tugas findMany
   */
  export type TugasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * Filter, which Tugases to fetch.
     */
    where?: TugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tugases to fetch.
     */
    orderBy?: TugasOrderByWithRelationInput | TugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tugases.
     */
    cursor?: TugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tugases.
     */
    skip?: number
    distinct?: TugasScalarFieldEnum | TugasScalarFieldEnum[]
  }

  /**
   * Tugas create
   */
  export type TugasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * The data needed to create a Tugas.
     */
    data: XOR<TugasCreateInput, TugasUncheckedCreateInput>
  }

  /**
   * Tugas createMany
   */
  export type TugasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tugases.
     */
    data: TugasCreateManyInput | TugasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tugas update
   */
  export type TugasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * The data needed to update a Tugas.
     */
    data: XOR<TugasUpdateInput, TugasUncheckedUpdateInput>
    /**
     * Choose, which Tugas to update.
     */
    where: TugasWhereUniqueInput
  }

  /**
   * Tugas updateMany
   */
  export type TugasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tugases.
     */
    data: XOR<TugasUpdateManyMutationInput, TugasUncheckedUpdateManyInput>
    /**
     * Filter which Tugases to update
     */
    where?: TugasWhereInput
  }

  /**
   * Tugas upsert
   */
  export type TugasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * The filter to search for the Tugas to update in case it exists.
     */
    where: TugasWhereUniqueInput
    /**
     * In case the Tugas found by the `where` argument doesn't exist, create a new Tugas with this data.
     */
    create: XOR<TugasCreateInput, TugasUncheckedCreateInput>
    /**
     * In case the Tugas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TugasUpdateInput, TugasUncheckedUpdateInput>
  }

  /**
   * Tugas delete
   */
  export type TugasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * Filter which Tugas to delete.
     */
    where: TugasWhereUniqueInput
  }

  /**
   * Tugas deleteMany
   */
  export type TugasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tugases to delete
     */
    where?: TugasWhereInput
  }

  /**
   * Tugas without action
   */
  export type TugasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TugasInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    email: 'email',
    password: 'password',
    jabatan: 'jabatan',
    lokasiSite: 'lokasiSite',
    foto: 'foto',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const LaporanInspeksiScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tanggal: 'tanggal',
    lokasi: 'lokasi',
    kategori: 'kategori',
    deskripsi: 'deskripsi',
    risiko: 'risiko',
    tindakan: 'tindakan',
    foto: 'foto',
    status: 'status',
    catatan: 'catatan',
    dueDate: 'dueDate',
    fungsi: 'fungsi',
    statusTemuan: 'statusTemuan',
    tanggalPenyelesaian: 'tanggalPenyelesaian',
    catatanPenyelesaian: 'catatanPenyelesaian',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LaporanInspeksiScalarFieldEnum = (typeof LaporanInspeksiScalarFieldEnum)[keyof typeof LaporanInspeksiScalarFieldEnum]


  export const DataInjeksiScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tanggal: 'tanggal',
    nilaiRaw: 'nilaiRaw',
    hasilPerhitungan: 'hasilPerhitungan',
    formulaUsed: 'formulaUsed',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DataInjeksiScalarFieldEnum = (typeof DataInjeksiScalarFieldEnum)[keyof typeof DataInjeksiScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    adminId: 'adminId',
    type: 'type',
    title: 'title',
    message: 'message',
    isRead: 'isRead',
    data: 'data',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const MaterialScalarFieldEnum: {
    id: 'id',
    namaMaterial: 'namaMaterial',
    kodeMaterial: 'kodeMaterial',
    spesifikasi: 'spesifikasi',
    tahunPembelian: 'tahunPembelian',
    vendor: 'vendor',
    jumlah: 'jumlah',
    unit: 'unit',
    lokasiPenyimpanan: 'lokasiPenyimpanan',
    dokumentasi: 'dokumentasi',
    typePeralatan: 'typePeralatan',
    masaBerlakuType: 'masaBerlakuType',
    kondisi: 'kondisi',
    catatan: 'catatan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MaterialScalarFieldEnum = (typeof MaterialScalarFieldEnum)[keyof typeof MaterialScalarFieldEnum]


  export const KompetensiPersonilScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    nip: 'nip',
    jabatan: 'jabatan',
    unitKerja: 'unitKerja',
    jenisKompetensi: 'jenisKompetensi',
    namaSertifikasi: 'namaSertifikasi',
    nomorSertifikasi: 'nomorSertifikasi',
    lembagaPenerbit: 'lembagaPenerbit',
    tanggalTerbit: 'tanggalTerbit',
    masaBerlakuSertifikasi: 'masaBerlakuSertifikasi',
    statusKompetensi: 'statusKompetensi',
    catatan: 'catatan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KompetensiPersonilScalarFieldEnum = (typeof KompetensiPersonilScalarFieldEnum)[keyof typeof KompetensiPersonilScalarFieldEnum]


  export const SertifikasiPeralatanScalarFieldEnum: {
    id: 'id',
    namaPeralatan: 'namaPeralatan',
    kodePeralatan: 'kodePeralatan',
    jenisPeralatan: 'jenisPeralatan',
    merk: 'merk',
    type: 'type',
    nomorSeri: 'nomorSeri',
    tahunProduksi: 'tahunProduksi',
    lokasiPemasangan: 'lokasiPemasangan',
    namaOperator: 'namaOperator',
    nomorSertifikasiOperator: 'nomorSertifikasiOperator',
    jenisSertifikasiOperator: 'jenisSertifikasiOperator',
    masaBerlakuSertifikasiOperator: 'masaBerlakuSertifikasiOperator',
    nomorSertifikatPeralatan: 'nomorSertifikatPeralatan',
    lembagaPenerbitSertifikat: 'lembagaPenerbitSertifikat',
    masaBerlakuSertifikatPeralatan: 'masaBerlakuSertifikatPeralatan',
    tanggalTerbitSertifikat: 'tanggalTerbitSertifikat',
    kondisi: 'kondisi',
    hasilInspeksiTerakhir: 'hasilInspeksiTerakhir',
    catatatan: 'catatatan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SertifikasiPeralatanScalarFieldEnum = (typeof SertifikasiPeralatanScalarFieldEnum)[keyof typeof SertifikasiPeralatanScalarFieldEnum]


  export const SystemSettingsScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    category: 'category',
    description: 'description',
    isVisible: 'isVisible',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SystemSettingsScalarFieldEnum = (typeof SystemSettingsScalarFieldEnum)[keyof typeof SystemSettingsScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    adminId: 'adminId',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    description: 'description',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const MasterLokasiScalarFieldEnum: {
    id: 'id',
    field: 'field',
    kategori: 'kategori',
    nama: 'nama',
    keterangan: 'keterangan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MasterLokasiScalarFieldEnum = (typeof MasterLokasiScalarFieldEnum)[keyof typeof MasterLokasiScalarFieldEnum]


  export const TugasScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    deskripsi: 'deskripsi',
    fileLampiran: 'fileLampiran',
    userId: 'userId',
    adminId: 'adminId',
    lokasiField: 'lokasiField',
    lokasiArea: 'lokasiArea',
    lokasiSumur: 'lokasiSumur',
    tanggalMulai: 'tanggalMulai',
    dueDate: 'dueDate',
    dokumenPengerjaan: 'dokumenPengerjaan',
    dataPengerjaan: 'dataPengerjaan',
    fotoPengerjaan: 'fotoPengerjaan',
    laporanSelesai: 'laporanSelesai',
    fotoSelesai: 'fotoSelesai',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TugasScalarFieldEnum = (typeof TugasScalarFieldEnum)[keyof typeof TugasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    nama?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    jabatan?: StringFilter<"User"> | string
    lokasiSite?: StringFilter<"User"> | string
    foto?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    laporan?: LaporanInspeksiListRelationFilter
    dataInjeksi?: DataInjeksiListRelationFilter
    notifications?: NotificationListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    tugas?: TugasListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    jabatan?: SortOrder
    lokasiSite?: SortOrder
    foto?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    laporan?: LaporanInspeksiOrderByRelationAggregateInput
    dataInjeksi?: DataInjeksiOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    activityLogs?: ActivityLogOrderByRelationAggregateInput
    tugas?: TugasOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nama?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    jabatan?: StringFilter<"User"> | string
    lokasiSite?: StringFilter<"User"> | string
    foto?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    laporan?: LaporanInspeksiListRelationFilter
    dataInjeksi?: DataInjeksiListRelationFilter
    notifications?: NotificationListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    tugas?: TugasListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    jabatan?: SortOrder
    lokasiSite?: SortOrder
    foto?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    nama?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    jabatan?: StringWithAggregatesFilter<"User"> | string
    lokasiSite?: StringWithAggregatesFilter<"User"> | string
    foto?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    nama?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    role?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    notifications?: NotificationListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    tugasDibuat?: TugasListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notifications?: NotificationOrderByRelationAggregateInput
    activityLogs?: ActivityLogOrderByRelationAggregateInput
    tugasDibuat?: TugasOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    nama?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    role?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    notifications?: NotificationListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    tugasDibuat?: TugasListRelationFilter
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    nama?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    role?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type LaporanInspeksiWhereInput = {
    AND?: LaporanInspeksiWhereInput | LaporanInspeksiWhereInput[]
    OR?: LaporanInspeksiWhereInput[]
    NOT?: LaporanInspeksiWhereInput | LaporanInspeksiWhereInput[]
    id?: IntFilter<"LaporanInspeksi"> | number
    userId?: IntFilter<"LaporanInspeksi"> | number
    tanggal?: DateTimeFilter<"LaporanInspeksi"> | Date | string
    lokasi?: StringFilter<"LaporanInspeksi"> | string
    kategori?: StringFilter<"LaporanInspeksi"> | string
    deskripsi?: StringFilter<"LaporanInspeksi"> | string
    risiko?: StringFilter<"LaporanInspeksi"> | string
    tindakan?: StringFilter<"LaporanInspeksi"> | string
    foto?: StringNullableFilter<"LaporanInspeksi"> | string | null
    status?: StringFilter<"LaporanInspeksi"> | string
    catatan?: StringNullableFilter<"LaporanInspeksi"> | string | null
    dueDate?: DateTimeNullableFilter<"LaporanInspeksi"> | Date | string | null
    fungsi?: StringNullableFilter<"LaporanInspeksi"> | string | null
    statusTemuan?: StringFilter<"LaporanInspeksi"> | string
    tanggalPenyelesaian?: DateTimeNullableFilter<"LaporanInspeksi"> | Date | string | null
    catatanPenyelesaian?: StringNullableFilter<"LaporanInspeksi"> | string | null
    createdAt?: DateTimeFilter<"LaporanInspeksi"> | Date | string
    updatedAt?: DateTimeFilter<"LaporanInspeksi"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type LaporanInspeksiOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tanggal?: SortOrder
    lokasi?: SortOrder
    kategori?: SortOrder
    deskripsi?: SortOrder
    risiko?: SortOrder
    tindakan?: SortOrder
    foto?: SortOrderInput | SortOrder
    status?: SortOrder
    catatan?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    fungsi?: SortOrderInput | SortOrder
    statusTemuan?: SortOrder
    tanggalPenyelesaian?: SortOrderInput | SortOrder
    catatanPenyelesaian?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LaporanInspeksiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LaporanInspeksiWhereInput | LaporanInspeksiWhereInput[]
    OR?: LaporanInspeksiWhereInput[]
    NOT?: LaporanInspeksiWhereInput | LaporanInspeksiWhereInput[]
    userId?: IntFilter<"LaporanInspeksi"> | number
    tanggal?: DateTimeFilter<"LaporanInspeksi"> | Date | string
    lokasi?: StringFilter<"LaporanInspeksi"> | string
    kategori?: StringFilter<"LaporanInspeksi"> | string
    deskripsi?: StringFilter<"LaporanInspeksi"> | string
    risiko?: StringFilter<"LaporanInspeksi"> | string
    tindakan?: StringFilter<"LaporanInspeksi"> | string
    foto?: StringNullableFilter<"LaporanInspeksi"> | string | null
    status?: StringFilter<"LaporanInspeksi"> | string
    catatan?: StringNullableFilter<"LaporanInspeksi"> | string | null
    dueDate?: DateTimeNullableFilter<"LaporanInspeksi"> | Date | string | null
    fungsi?: StringNullableFilter<"LaporanInspeksi"> | string | null
    statusTemuan?: StringFilter<"LaporanInspeksi"> | string
    tanggalPenyelesaian?: DateTimeNullableFilter<"LaporanInspeksi"> | Date | string | null
    catatanPenyelesaian?: StringNullableFilter<"LaporanInspeksi"> | string | null
    createdAt?: DateTimeFilter<"LaporanInspeksi"> | Date | string
    updatedAt?: DateTimeFilter<"LaporanInspeksi"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type LaporanInspeksiOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tanggal?: SortOrder
    lokasi?: SortOrder
    kategori?: SortOrder
    deskripsi?: SortOrder
    risiko?: SortOrder
    tindakan?: SortOrder
    foto?: SortOrderInput | SortOrder
    status?: SortOrder
    catatan?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    fungsi?: SortOrderInput | SortOrder
    statusTemuan?: SortOrder
    tanggalPenyelesaian?: SortOrderInput | SortOrder
    catatanPenyelesaian?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LaporanInspeksiCountOrderByAggregateInput
    _avg?: LaporanInspeksiAvgOrderByAggregateInput
    _max?: LaporanInspeksiMaxOrderByAggregateInput
    _min?: LaporanInspeksiMinOrderByAggregateInput
    _sum?: LaporanInspeksiSumOrderByAggregateInput
  }

  export type LaporanInspeksiScalarWhereWithAggregatesInput = {
    AND?: LaporanInspeksiScalarWhereWithAggregatesInput | LaporanInspeksiScalarWhereWithAggregatesInput[]
    OR?: LaporanInspeksiScalarWhereWithAggregatesInput[]
    NOT?: LaporanInspeksiScalarWhereWithAggregatesInput | LaporanInspeksiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LaporanInspeksi"> | number
    userId?: IntWithAggregatesFilter<"LaporanInspeksi"> | number
    tanggal?: DateTimeWithAggregatesFilter<"LaporanInspeksi"> | Date | string
    lokasi?: StringWithAggregatesFilter<"LaporanInspeksi"> | string
    kategori?: StringWithAggregatesFilter<"LaporanInspeksi"> | string
    deskripsi?: StringWithAggregatesFilter<"LaporanInspeksi"> | string
    risiko?: StringWithAggregatesFilter<"LaporanInspeksi"> | string
    tindakan?: StringWithAggregatesFilter<"LaporanInspeksi"> | string
    foto?: StringNullableWithAggregatesFilter<"LaporanInspeksi"> | string | null
    status?: StringWithAggregatesFilter<"LaporanInspeksi"> | string
    catatan?: StringNullableWithAggregatesFilter<"LaporanInspeksi"> | string | null
    dueDate?: DateTimeNullableWithAggregatesFilter<"LaporanInspeksi"> | Date | string | null
    fungsi?: StringNullableWithAggregatesFilter<"LaporanInspeksi"> | string | null
    statusTemuan?: StringWithAggregatesFilter<"LaporanInspeksi"> | string
    tanggalPenyelesaian?: DateTimeNullableWithAggregatesFilter<"LaporanInspeksi"> | Date | string | null
    catatanPenyelesaian?: StringNullableWithAggregatesFilter<"LaporanInspeksi"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LaporanInspeksi"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LaporanInspeksi"> | Date | string
  }

  export type DataInjeksiWhereInput = {
    AND?: DataInjeksiWhereInput | DataInjeksiWhereInput[]
    OR?: DataInjeksiWhereInput[]
    NOT?: DataInjeksiWhereInput | DataInjeksiWhereInput[]
    id?: IntFilter<"DataInjeksi"> | number
    userId?: IntFilter<"DataInjeksi"> | number
    tanggal?: DateTimeFilter<"DataInjeksi"> | Date | string
    nilaiRaw?: FloatFilter<"DataInjeksi"> | number
    hasilPerhitungan?: FloatNullableFilter<"DataInjeksi"> | number | null
    formulaUsed?: StringNullableFilter<"DataInjeksi"> | string | null
    status?: StringFilter<"DataInjeksi"> | string
    createdAt?: DateTimeFilter<"DataInjeksi"> | Date | string
    updatedAt?: DateTimeFilter<"DataInjeksi"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type DataInjeksiOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tanggal?: SortOrder
    nilaiRaw?: SortOrder
    hasilPerhitungan?: SortOrderInput | SortOrder
    formulaUsed?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DataInjeksiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DataInjeksiWhereInput | DataInjeksiWhereInput[]
    OR?: DataInjeksiWhereInput[]
    NOT?: DataInjeksiWhereInput | DataInjeksiWhereInput[]
    userId?: IntFilter<"DataInjeksi"> | number
    tanggal?: DateTimeFilter<"DataInjeksi"> | Date | string
    nilaiRaw?: FloatFilter<"DataInjeksi"> | number
    hasilPerhitungan?: FloatNullableFilter<"DataInjeksi"> | number | null
    formulaUsed?: StringNullableFilter<"DataInjeksi"> | string | null
    status?: StringFilter<"DataInjeksi"> | string
    createdAt?: DateTimeFilter<"DataInjeksi"> | Date | string
    updatedAt?: DateTimeFilter<"DataInjeksi"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type DataInjeksiOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tanggal?: SortOrder
    nilaiRaw?: SortOrder
    hasilPerhitungan?: SortOrderInput | SortOrder
    formulaUsed?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DataInjeksiCountOrderByAggregateInput
    _avg?: DataInjeksiAvgOrderByAggregateInput
    _max?: DataInjeksiMaxOrderByAggregateInput
    _min?: DataInjeksiMinOrderByAggregateInput
    _sum?: DataInjeksiSumOrderByAggregateInput
  }

  export type DataInjeksiScalarWhereWithAggregatesInput = {
    AND?: DataInjeksiScalarWhereWithAggregatesInput | DataInjeksiScalarWhereWithAggregatesInput[]
    OR?: DataInjeksiScalarWhereWithAggregatesInput[]
    NOT?: DataInjeksiScalarWhereWithAggregatesInput | DataInjeksiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DataInjeksi"> | number
    userId?: IntWithAggregatesFilter<"DataInjeksi"> | number
    tanggal?: DateTimeWithAggregatesFilter<"DataInjeksi"> | Date | string
    nilaiRaw?: FloatWithAggregatesFilter<"DataInjeksi"> | number
    hasilPerhitungan?: FloatNullableWithAggregatesFilter<"DataInjeksi"> | number | null
    formulaUsed?: StringNullableWithAggregatesFilter<"DataInjeksi"> | string | null
    status?: StringWithAggregatesFilter<"DataInjeksi"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DataInjeksi"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DataInjeksi"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntNullableFilter<"Notification"> | number | null
    adminId?: IntNullableFilter<"Notification"> | number | null
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    data?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    adminId?: SortOrderInput | SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    data?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: IntNullableFilter<"Notification"> | number | null
    adminId?: IntNullableFilter<"Notification"> | number | null
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    data?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    adminId?: SortOrderInput | SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    data?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    userId?: IntNullableWithAggregatesFilter<"Notification"> | number | null
    adminId?: IntNullableWithAggregatesFilter<"Notification"> | number | null
    type?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    data?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type MaterialWhereInput = {
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    id?: IntFilter<"Material"> | number
    namaMaterial?: StringFilter<"Material"> | string
    kodeMaterial?: StringNullableFilter<"Material"> | string | null
    spesifikasi?: StringNullableFilter<"Material"> | string | null
    tahunPembelian?: IntNullableFilter<"Material"> | number | null
    vendor?: StringNullableFilter<"Material"> | string | null
    jumlah?: IntNullableFilter<"Material"> | number | null
    unit?: StringNullableFilter<"Material"> | string | null
    lokasiPenyimpanan?: StringNullableFilter<"Material"> | string | null
    dokumentasi?: StringNullableFilter<"Material"> | string | null
    typePeralatan?: StringNullableFilter<"Material"> | string | null
    masaBerlakuType?: DateTimeNullableFilter<"Material"> | Date | string | null
    kondisi?: StringNullableFilter<"Material"> | string | null
    catatan?: StringNullableFilter<"Material"> | string | null
    createdAt?: DateTimeFilter<"Material"> | Date | string
    updatedAt?: DateTimeFilter<"Material"> | Date | string
  }

  export type MaterialOrderByWithRelationInput = {
    id?: SortOrder
    namaMaterial?: SortOrder
    kodeMaterial?: SortOrderInput | SortOrder
    spesifikasi?: SortOrderInput | SortOrder
    tahunPembelian?: SortOrderInput | SortOrder
    vendor?: SortOrderInput | SortOrder
    jumlah?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    lokasiPenyimpanan?: SortOrderInput | SortOrder
    dokumentasi?: SortOrderInput | SortOrder
    typePeralatan?: SortOrderInput | SortOrder
    masaBerlakuType?: SortOrderInput | SortOrder
    kondisi?: SortOrderInput | SortOrder
    catatan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    namaMaterial?: StringFilter<"Material"> | string
    kodeMaterial?: StringNullableFilter<"Material"> | string | null
    spesifikasi?: StringNullableFilter<"Material"> | string | null
    tahunPembelian?: IntNullableFilter<"Material"> | number | null
    vendor?: StringNullableFilter<"Material"> | string | null
    jumlah?: IntNullableFilter<"Material"> | number | null
    unit?: StringNullableFilter<"Material"> | string | null
    lokasiPenyimpanan?: StringNullableFilter<"Material"> | string | null
    dokumentasi?: StringNullableFilter<"Material"> | string | null
    typePeralatan?: StringNullableFilter<"Material"> | string | null
    masaBerlakuType?: DateTimeNullableFilter<"Material"> | Date | string | null
    kondisi?: StringNullableFilter<"Material"> | string | null
    catatan?: StringNullableFilter<"Material"> | string | null
    createdAt?: DateTimeFilter<"Material"> | Date | string
    updatedAt?: DateTimeFilter<"Material"> | Date | string
  }, "id">

  export type MaterialOrderByWithAggregationInput = {
    id?: SortOrder
    namaMaterial?: SortOrder
    kodeMaterial?: SortOrderInput | SortOrder
    spesifikasi?: SortOrderInput | SortOrder
    tahunPembelian?: SortOrderInput | SortOrder
    vendor?: SortOrderInput | SortOrder
    jumlah?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    lokasiPenyimpanan?: SortOrderInput | SortOrder
    dokumentasi?: SortOrderInput | SortOrder
    typePeralatan?: SortOrderInput | SortOrder
    masaBerlakuType?: SortOrderInput | SortOrder
    kondisi?: SortOrderInput | SortOrder
    catatan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MaterialCountOrderByAggregateInput
    _avg?: MaterialAvgOrderByAggregateInput
    _max?: MaterialMaxOrderByAggregateInput
    _min?: MaterialMinOrderByAggregateInput
    _sum?: MaterialSumOrderByAggregateInput
  }

  export type MaterialScalarWhereWithAggregatesInput = {
    AND?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    OR?: MaterialScalarWhereWithAggregatesInput[]
    NOT?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Material"> | number
    namaMaterial?: StringWithAggregatesFilter<"Material"> | string
    kodeMaterial?: StringNullableWithAggregatesFilter<"Material"> | string | null
    spesifikasi?: StringNullableWithAggregatesFilter<"Material"> | string | null
    tahunPembelian?: IntNullableWithAggregatesFilter<"Material"> | number | null
    vendor?: StringNullableWithAggregatesFilter<"Material"> | string | null
    jumlah?: IntNullableWithAggregatesFilter<"Material"> | number | null
    unit?: StringNullableWithAggregatesFilter<"Material"> | string | null
    lokasiPenyimpanan?: StringNullableWithAggregatesFilter<"Material"> | string | null
    dokumentasi?: StringNullableWithAggregatesFilter<"Material"> | string | null
    typePeralatan?: StringNullableWithAggregatesFilter<"Material"> | string | null
    masaBerlakuType?: DateTimeNullableWithAggregatesFilter<"Material"> | Date | string | null
    kondisi?: StringNullableWithAggregatesFilter<"Material"> | string | null
    catatan?: StringNullableWithAggregatesFilter<"Material"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Material"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Material"> | Date | string
  }

  export type KompetensiPersonilWhereInput = {
    AND?: KompetensiPersonilWhereInput | KompetensiPersonilWhereInput[]
    OR?: KompetensiPersonilWhereInput[]
    NOT?: KompetensiPersonilWhereInput | KompetensiPersonilWhereInput[]
    id?: IntFilter<"KompetensiPersonil"> | number
    nama?: StringFilter<"KompetensiPersonil"> | string
    nip?: StringNullableFilter<"KompetensiPersonil"> | string | null
    jabatan?: StringNullableFilter<"KompetensiPersonil"> | string | null
    unitKerja?: StringNullableFilter<"KompetensiPersonil"> | string | null
    jenisKompetensi?: StringFilter<"KompetensiPersonil"> | string
    namaSertifikasi?: StringNullableFilter<"KompetensiPersonil"> | string | null
    nomorSertifikasi?: StringNullableFilter<"KompetensiPersonil"> | string | null
    lembagaPenerbit?: StringNullableFilter<"KompetensiPersonil"> | string | null
    tanggalTerbit?: DateTimeNullableFilter<"KompetensiPersonil"> | Date | string | null
    masaBerlakuSertifikasi?: DateTimeNullableFilter<"KompetensiPersonil"> | Date | string | null
    statusKompetensi?: StringFilter<"KompetensiPersonil"> | string
    catatan?: StringNullableFilter<"KompetensiPersonil"> | string | null
    createdAt?: DateTimeFilter<"KompetensiPersonil"> | Date | string
    updatedAt?: DateTimeFilter<"KompetensiPersonil"> | Date | string
  }

  export type KompetensiPersonilOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    nip?: SortOrderInput | SortOrder
    jabatan?: SortOrderInput | SortOrder
    unitKerja?: SortOrderInput | SortOrder
    jenisKompetensi?: SortOrder
    namaSertifikasi?: SortOrderInput | SortOrder
    nomorSertifikasi?: SortOrderInput | SortOrder
    lembagaPenerbit?: SortOrderInput | SortOrder
    tanggalTerbit?: SortOrderInput | SortOrder
    masaBerlakuSertifikasi?: SortOrderInput | SortOrder
    statusKompetensi?: SortOrder
    catatan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KompetensiPersonilWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: KompetensiPersonilWhereInput | KompetensiPersonilWhereInput[]
    OR?: KompetensiPersonilWhereInput[]
    NOT?: KompetensiPersonilWhereInput | KompetensiPersonilWhereInput[]
    nama?: StringFilter<"KompetensiPersonil"> | string
    nip?: StringNullableFilter<"KompetensiPersonil"> | string | null
    jabatan?: StringNullableFilter<"KompetensiPersonil"> | string | null
    unitKerja?: StringNullableFilter<"KompetensiPersonil"> | string | null
    jenisKompetensi?: StringFilter<"KompetensiPersonil"> | string
    namaSertifikasi?: StringNullableFilter<"KompetensiPersonil"> | string | null
    nomorSertifikasi?: StringNullableFilter<"KompetensiPersonil"> | string | null
    lembagaPenerbit?: StringNullableFilter<"KompetensiPersonil"> | string | null
    tanggalTerbit?: DateTimeNullableFilter<"KompetensiPersonil"> | Date | string | null
    masaBerlakuSertifikasi?: DateTimeNullableFilter<"KompetensiPersonil"> | Date | string | null
    statusKompetensi?: StringFilter<"KompetensiPersonil"> | string
    catatan?: StringNullableFilter<"KompetensiPersonil"> | string | null
    createdAt?: DateTimeFilter<"KompetensiPersonil"> | Date | string
    updatedAt?: DateTimeFilter<"KompetensiPersonil"> | Date | string
  }, "id">

  export type KompetensiPersonilOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    nip?: SortOrderInput | SortOrder
    jabatan?: SortOrderInput | SortOrder
    unitKerja?: SortOrderInput | SortOrder
    jenisKompetensi?: SortOrder
    namaSertifikasi?: SortOrderInput | SortOrder
    nomorSertifikasi?: SortOrderInput | SortOrder
    lembagaPenerbit?: SortOrderInput | SortOrder
    tanggalTerbit?: SortOrderInput | SortOrder
    masaBerlakuSertifikasi?: SortOrderInput | SortOrder
    statusKompetensi?: SortOrder
    catatan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KompetensiPersonilCountOrderByAggregateInput
    _avg?: KompetensiPersonilAvgOrderByAggregateInput
    _max?: KompetensiPersonilMaxOrderByAggregateInput
    _min?: KompetensiPersonilMinOrderByAggregateInput
    _sum?: KompetensiPersonilSumOrderByAggregateInput
  }

  export type KompetensiPersonilScalarWhereWithAggregatesInput = {
    AND?: KompetensiPersonilScalarWhereWithAggregatesInput | KompetensiPersonilScalarWhereWithAggregatesInput[]
    OR?: KompetensiPersonilScalarWhereWithAggregatesInput[]
    NOT?: KompetensiPersonilScalarWhereWithAggregatesInput | KompetensiPersonilScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"KompetensiPersonil"> | number
    nama?: StringWithAggregatesFilter<"KompetensiPersonil"> | string
    nip?: StringNullableWithAggregatesFilter<"KompetensiPersonil"> | string | null
    jabatan?: StringNullableWithAggregatesFilter<"KompetensiPersonil"> | string | null
    unitKerja?: StringNullableWithAggregatesFilter<"KompetensiPersonil"> | string | null
    jenisKompetensi?: StringWithAggregatesFilter<"KompetensiPersonil"> | string
    namaSertifikasi?: StringNullableWithAggregatesFilter<"KompetensiPersonil"> | string | null
    nomorSertifikasi?: StringNullableWithAggregatesFilter<"KompetensiPersonil"> | string | null
    lembagaPenerbit?: StringNullableWithAggregatesFilter<"KompetensiPersonil"> | string | null
    tanggalTerbit?: DateTimeNullableWithAggregatesFilter<"KompetensiPersonil"> | Date | string | null
    masaBerlakuSertifikasi?: DateTimeNullableWithAggregatesFilter<"KompetensiPersonil"> | Date | string | null
    statusKompetensi?: StringWithAggregatesFilter<"KompetensiPersonil"> | string
    catatan?: StringNullableWithAggregatesFilter<"KompetensiPersonil"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"KompetensiPersonil"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"KompetensiPersonil"> | Date | string
  }

  export type SertifikasiPeralatanWhereInput = {
    AND?: SertifikasiPeralatanWhereInput | SertifikasiPeralatanWhereInput[]
    OR?: SertifikasiPeralatanWhereInput[]
    NOT?: SertifikasiPeralatanWhereInput | SertifikasiPeralatanWhereInput[]
    id?: IntFilter<"SertifikasiPeralatan"> | number
    namaPeralatan?: StringFilter<"SertifikasiPeralatan"> | string
    kodePeralatan?: StringNullableFilter<"SertifikasiPeralatan"> | string | null
    jenisPeralatan?: StringNullableFilter<"SertifikasiPeralatan"> | string | null
    merk?: StringNullableFilter<"SertifikasiPeralatan"> | string | null
    type?: StringNullableFilter<"SertifikasiPeralatan"> | string | null
    nomorSeri?: StringNullableFilter<"SertifikasiPeralatan"> | string | null
    tahunProduksi?: IntNullableFilter<"SertifikasiPeralatan"> | number | null
    lokasiPemasangan?: StringNullableFilter<"SertifikasiPeralatan"> | string | null
    namaOperator?: StringNullableFilter<"SertifikasiPeralatan"> | string | null
    nomorSertifikasiOperator?: StringNullableFilter<"SertifikasiPeralatan"> | string | null
    jenisSertifikasiOperator?: StringNullableFilter<"SertifikasiPeralatan"> | string | null
    masaBerlakuSertifikasiOperator?: DateTimeNullableFilter<"SertifikasiPeralatan"> | Date | string | null
    nomorSertifikatPeralatan?: StringNullableFilter<"SertifikasiPeralatan"> | string | null
    lembagaPenerbitSertifikat?: StringNullableFilter<"SertifikasiPeralatan"> | string | null
    masaBerlakuSertifikatPeralatan?: DateTimeNullableFilter<"SertifikasiPeralatan"> | Date | string | null
    tanggalTerbitSertifikat?: DateTimeNullableFilter<"SertifikasiPeralatan"> | Date | string | null
    kondisi?: StringNullableFilter<"SertifikasiPeralatan"> | string | null
    hasilInspeksiTerakhir?: DateTimeNullableFilter<"SertifikasiPeralatan"> | Date | string | null
    catatatan?: StringNullableFilter<"SertifikasiPeralatan"> | string | null
    createdAt?: DateTimeFilter<"SertifikasiPeralatan"> | Date | string
    updatedAt?: DateTimeFilter<"SertifikasiPeralatan"> | Date | string
  }

  export type SertifikasiPeralatanOrderByWithRelationInput = {
    id?: SortOrder
    namaPeralatan?: SortOrder
    kodePeralatan?: SortOrderInput | SortOrder
    jenisPeralatan?: SortOrderInput | SortOrder
    merk?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    nomorSeri?: SortOrderInput | SortOrder
    tahunProduksi?: SortOrderInput | SortOrder
    lokasiPemasangan?: SortOrderInput | SortOrder
    namaOperator?: SortOrderInput | SortOrder
    nomorSertifikasiOperator?: SortOrderInput | SortOrder
    jenisSertifikasiOperator?: SortOrderInput | SortOrder
    masaBerlakuSertifikasiOperator?: SortOrderInput | SortOrder
    nomorSertifikatPeralatan?: SortOrderInput | SortOrder
    lembagaPenerbitSertifikat?: SortOrderInput | SortOrder
    masaBerlakuSertifikatPeralatan?: SortOrderInput | SortOrder
    tanggalTerbitSertifikat?: SortOrderInput | SortOrder
    kondisi?: SortOrderInput | SortOrder
    hasilInspeksiTerakhir?: SortOrderInput | SortOrder
    catatatan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SertifikasiPeralatanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SertifikasiPeralatanWhereInput | SertifikasiPeralatanWhereInput[]
    OR?: SertifikasiPeralatanWhereInput[]
    NOT?: SertifikasiPeralatanWhereInput | SertifikasiPeralatanWhereInput[]
    namaPeralatan?: StringFilter<"SertifikasiPeralatan"> | string
    kodePeralatan?: StringNullableFilter<"SertifikasiPeralatan"> | string | null
    jenisPeralatan?: StringNullableFilter<"SertifikasiPeralatan"> | string | null
    merk?: StringNullableFilter<"SertifikasiPeralatan"> | string | null
    type?: StringNullableFilter<"SertifikasiPeralatan"> | string | null
    nomorSeri?: StringNullableFilter<"SertifikasiPeralatan"> | string | null
    tahunProduksi?: IntNullableFilter<"SertifikasiPeralatan"> | number | null
    lokasiPemasangan?: StringNullableFilter<"SertifikasiPeralatan"> | string | null
    namaOperator?: StringNullableFilter<"SertifikasiPeralatan"> | string | null
    nomorSertifikasiOperator?: StringNullableFilter<"SertifikasiPeralatan"> | string | null
    jenisSertifikasiOperator?: StringNullableFilter<"SertifikasiPeralatan"> | string | null
    masaBerlakuSertifikasiOperator?: DateTimeNullableFilter<"SertifikasiPeralatan"> | Date | string | null
    nomorSertifikatPeralatan?: StringNullableFilter<"SertifikasiPeralatan"> | string | null
    lembagaPenerbitSertifikat?: StringNullableFilter<"SertifikasiPeralatan"> | string | null
    masaBerlakuSertifikatPeralatan?: DateTimeNullableFilter<"SertifikasiPeralatan"> | Date | string | null
    tanggalTerbitSertifikat?: DateTimeNullableFilter<"SertifikasiPeralatan"> | Date | string | null
    kondisi?: StringNullableFilter<"SertifikasiPeralatan"> | string | null
    hasilInspeksiTerakhir?: DateTimeNullableFilter<"SertifikasiPeralatan"> | Date | string | null
    catatatan?: StringNullableFilter<"SertifikasiPeralatan"> | string | null
    createdAt?: DateTimeFilter<"SertifikasiPeralatan"> | Date | string
    updatedAt?: DateTimeFilter<"SertifikasiPeralatan"> | Date | string
  }, "id">

  export type SertifikasiPeralatanOrderByWithAggregationInput = {
    id?: SortOrder
    namaPeralatan?: SortOrder
    kodePeralatan?: SortOrderInput | SortOrder
    jenisPeralatan?: SortOrderInput | SortOrder
    merk?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    nomorSeri?: SortOrderInput | SortOrder
    tahunProduksi?: SortOrderInput | SortOrder
    lokasiPemasangan?: SortOrderInput | SortOrder
    namaOperator?: SortOrderInput | SortOrder
    nomorSertifikasiOperator?: SortOrderInput | SortOrder
    jenisSertifikasiOperator?: SortOrderInput | SortOrder
    masaBerlakuSertifikasiOperator?: SortOrderInput | SortOrder
    nomorSertifikatPeralatan?: SortOrderInput | SortOrder
    lembagaPenerbitSertifikat?: SortOrderInput | SortOrder
    masaBerlakuSertifikatPeralatan?: SortOrderInput | SortOrder
    tanggalTerbitSertifikat?: SortOrderInput | SortOrder
    kondisi?: SortOrderInput | SortOrder
    hasilInspeksiTerakhir?: SortOrderInput | SortOrder
    catatatan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SertifikasiPeralatanCountOrderByAggregateInput
    _avg?: SertifikasiPeralatanAvgOrderByAggregateInput
    _max?: SertifikasiPeralatanMaxOrderByAggregateInput
    _min?: SertifikasiPeralatanMinOrderByAggregateInput
    _sum?: SertifikasiPeralatanSumOrderByAggregateInput
  }

  export type SertifikasiPeralatanScalarWhereWithAggregatesInput = {
    AND?: SertifikasiPeralatanScalarWhereWithAggregatesInput | SertifikasiPeralatanScalarWhereWithAggregatesInput[]
    OR?: SertifikasiPeralatanScalarWhereWithAggregatesInput[]
    NOT?: SertifikasiPeralatanScalarWhereWithAggregatesInput | SertifikasiPeralatanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SertifikasiPeralatan"> | number
    namaPeralatan?: StringWithAggregatesFilter<"SertifikasiPeralatan"> | string
    kodePeralatan?: StringNullableWithAggregatesFilter<"SertifikasiPeralatan"> | string | null
    jenisPeralatan?: StringNullableWithAggregatesFilter<"SertifikasiPeralatan"> | string | null
    merk?: StringNullableWithAggregatesFilter<"SertifikasiPeralatan"> | string | null
    type?: StringNullableWithAggregatesFilter<"SertifikasiPeralatan"> | string | null
    nomorSeri?: StringNullableWithAggregatesFilter<"SertifikasiPeralatan"> | string | null
    tahunProduksi?: IntNullableWithAggregatesFilter<"SertifikasiPeralatan"> | number | null
    lokasiPemasangan?: StringNullableWithAggregatesFilter<"SertifikasiPeralatan"> | string | null
    namaOperator?: StringNullableWithAggregatesFilter<"SertifikasiPeralatan"> | string | null
    nomorSertifikasiOperator?: StringNullableWithAggregatesFilter<"SertifikasiPeralatan"> | string | null
    jenisSertifikasiOperator?: StringNullableWithAggregatesFilter<"SertifikasiPeralatan"> | string | null
    masaBerlakuSertifikasiOperator?: DateTimeNullableWithAggregatesFilter<"SertifikasiPeralatan"> | Date | string | null
    nomorSertifikatPeralatan?: StringNullableWithAggregatesFilter<"SertifikasiPeralatan"> | string | null
    lembagaPenerbitSertifikat?: StringNullableWithAggregatesFilter<"SertifikasiPeralatan"> | string | null
    masaBerlakuSertifikatPeralatan?: DateTimeNullableWithAggregatesFilter<"SertifikasiPeralatan"> | Date | string | null
    tanggalTerbitSertifikat?: DateTimeNullableWithAggregatesFilter<"SertifikasiPeralatan"> | Date | string | null
    kondisi?: StringNullableWithAggregatesFilter<"SertifikasiPeralatan"> | string | null
    hasilInspeksiTerakhir?: DateTimeNullableWithAggregatesFilter<"SertifikasiPeralatan"> | Date | string | null
    catatatan?: StringNullableWithAggregatesFilter<"SertifikasiPeralatan"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SertifikasiPeralatan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SertifikasiPeralatan"> | Date | string
  }

  export type SystemSettingsWhereInput = {
    AND?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    OR?: SystemSettingsWhereInput[]
    NOT?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    id?: IntFilter<"SystemSettings"> | number
    key?: StringFilter<"SystemSettings"> | string
    value?: StringFilter<"SystemSettings"> | string
    category?: StringFilter<"SystemSettings"> | string
    description?: StringNullableFilter<"SystemSettings"> | string | null
    isVisible?: BoolFilter<"SystemSettings"> | boolean
    createdAt?: DateTimeFilter<"SystemSettings"> | Date | string
    updatedAt?: DateTimeFilter<"SystemSettings"> | Date | string
  }

  export type SystemSettingsOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    key?: string
    AND?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    OR?: SystemSettingsWhereInput[]
    NOT?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    value?: StringFilter<"SystemSettings"> | string
    category?: StringFilter<"SystemSettings"> | string
    description?: StringNullableFilter<"SystemSettings"> | string | null
    isVisible?: BoolFilter<"SystemSettings"> | boolean
    createdAt?: DateTimeFilter<"SystemSettings"> | Date | string
    updatedAt?: DateTimeFilter<"SystemSettings"> | Date | string
  }, "id" | "key">

  export type SystemSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SystemSettingsCountOrderByAggregateInput
    _avg?: SystemSettingsAvgOrderByAggregateInput
    _max?: SystemSettingsMaxOrderByAggregateInput
    _min?: SystemSettingsMinOrderByAggregateInput
    _sum?: SystemSettingsSumOrderByAggregateInput
  }

  export type SystemSettingsScalarWhereWithAggregatesInput = {
    AND?: SystemSettingsScalarWhereWithAggregatesInput | SystemSettingsScalarWhereWithAggregatesInput[]
    OR?: SystemSettingsScalarWhereWithAggregatesInput[]
    NOT?: SystemSettingsScalarWhereWithAggregatesInput | SystemSettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SystemSettings"> | number
    key?: StringWithAggregatesFilter<"SystemSettings"> | string
    value?: StringWithAggregatesFilter<"SystemSettings"> | string
    category?: StringWithAggregatesFilter<"SystemSettings"> | string
    description?: StringNullableWithAggregatesFilter<"SystemSettings"> | string | null
    isVisible?: BoolWithAggregatesFilter<"SystemSettings"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SystemSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SystemSettings"> | Date | string
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: IntFilter<"ActivityLog"> | number
    userId?: IntNullableFilter<"ActivityLog"> | number | null
    adminId?: IntNullableFilter<"ActivityLog"> | number | null
    action?: StringFilter<"ActivityLog"> | string
    entityType?: StringFilter<"ActivityLog"> | string
    entityId?: IntNullableFilter<"ActivityLog"> | number | null
    description?: StringNullableFilter<"ActivityLog"> | string | null
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    userAgent?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    adminId?: SortOrderInput | SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    userId?: IntNullableFilter<"ActivityLog"> | number | null
    adminId?: IntNullableFilter<"ActivityLog"> | number | null
    action?: StringFilter<"ActivityLog"> | string
    entityType?: StringFilter<"ActivityLog"> | string
    entityId?: IntNullableFilter<"ActivityLog"> | number | null
    description?: StringNullableFilter<"ActivityLog"> | string | null
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    userAgent?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    adminId?: SortOrderInput | SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _avg?: ActivityLogAvgOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
    _sum?: ActivityLogSumOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ActivityLog"> | number
    userId?: IntNullableWithAggregatesFilter<"ActivityLog"> | number | null
    adminId?: IntNullableWithAggregatesFilter<"ActivityLog"> | number | null
    action?: StringWithAggregatesFilter<"ActivityLog"> | string
    entityType?: StringWithAggregatesFilter<"ActivityLog"> | string
    entityId?: IntNullableWithAggregatesFilter<"ActivityLog"> | number | null
    description?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type MasterLokasiWhereInput = {
    AND?: MasterLokasiWhereInput | MasterLokasiWhereInput[]
    OR?: MasterLokasiWhereInput[]
    NOT?: MasterLokasiWhereInput | MasterLokasiWhereInput[]
    id?: IntFilter<"MasterLokasi"> | number
    field?: StringNullableFilter<"MasterLokasi"> | string | null
    kategori?: StringNullableFilter<"MasterLokasi"> | string | null
    nama?: StringFilter<"MasterLokasi"> | string
    keterangan?: StringNullableFilter<"MasterLokasi"> | string | null
    createdAt?: DateTimeFilter<"MasterLokasi"> | Date | string
    updatedAt?: DateTimeFilter<"MasterLokasi"> | Date | string
  }

  export type MasterLokasiOrderByWithRelationInput = {
    id?: SortOrder
    field?: SortOrderInput | SortOrder
    kategori?: SortOrderInput | SortOrder
    nama?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MasterLokasiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MasterLokasiWhereInput | MasterLokasiWhereInput[]
    OR?: MasterLokasiWhereInput[]
    NOT?: MasterLokasiWhereInput | MasterLokasiWhereInput[]
    field?: StringNullableFilter<"MasterLokasi"> | string | null
    kategori?: StringNullableFilter<"MasterLokasi"> | string | null
    nama?: StringFilter<"MasterLokasi"> | string
    keterangan?: StringNullableFilter<"MasterLokasi"> | string | null
    createdAt?: DateTimeFilter<"MasterLokasi"> | Date | string
    updatedAt?: DateTimeFilter<"MasterLokasi"> | Date | string
  }, "id">

  export type MasterLokasiOrderByWithAggregationInput = {
    id?: SortOrder
    field?: SortOrderInput | SortOrder
    kategori?: SortOrderInput | SortOrder
    nama?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MasterLokasiCountOrderByAggregateInput
    _avg?: MasterLokasiAvgOrderByAggregateInput
    _max?: MasterLokasiMaxOrderByAggregateInput
    _min?: MasterLokasiMinOrderByAggregateInput
    _sum?: MasterLokasiSumOrderByAggregateInput
  }

  export type MasterLokasiScalarWhereWithAggregatesInput = {
    AND?: MasterLokasiScalarWhereWithAggregatesInput | MasterLokasiScalarWhereWithAggregatesInput[]
    OR?: MasterLokasiScalarWhereWithAggregatesInput[]
    NOT?: MasterLokasiScalarWhereWithAggregatesInput | MasterLokasiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MasterLokasi"> | number
    field?: StringNullableWithAggregatesFilter<"MasterLokasi"> | string | null
    kategori?: StringNullableWithAggregatesFilter<"MasterLokasi"> | string | null
    nama?: StringWithAggregatesFilter<"MasterLokasi"> | string
    keterangan?: StringNullableWithAggregatesFilter<"MasterLokasi"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MasterLokasi"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MasterLokasi"> | Date | string
  }

  export type TugasWhereInput = {
    AND?: TugasWhereInput | TugasWhereInput[]
    OR?: TugasWhereInput[]
    NOT?: TugasWhereInput | TugasWhereInput[]
    id?: IntFilter<"Tugas"> | number
    judul?: StringFilter<"Tugas"> | string
    deskripsi?: StringFilter<"Tugas"> | string
    fileLampiran?: StringNullableFilter<"Tugas"> | string | null
    userId?: IntFilter<"Tugas"> | number
    adminId?: IntFilter<"Tugas"> | number
    lokasiField?: StringNullableFilter<"Tugas"> | string | null
    lokasiArea?: StringNullableFilter<"Tugas"> | string | null
    lokasiSumur?: StringNullableFilter<"Tugas"> | string | null
    tanggalMulai?: DateTimeNullableFilter<"Tugas"> | Date | string | null
    dueDate?: DateTimeNullableFilter<"Tugas"> | Date | string | null
    dokumenPengerjaan?: StringNullableFilter<"Tugas"> | string | null
    dataPengerjaan?: StringNullableFilter<"Tugas"> | string | null
    fotoPengerjaan?: StringNullableFilter<"Tugas"> | string | null
    laporanSelesai?: StringNullableFilter<"Tugas"> | string | null
    fotoSelesai?: StringNullableFilter<"Tugas"> | string | null
    status?: StringFilter<"Tugas"> | string
    createdAt?: DateTimeFilter<"Tugas"> | Date | string
    updatedAt?: DateTimeFilter<"Tugas"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    admin?: XOR<AdminRelationFilter, AdminWhereInput>
  }

  export type TugasOrderByWithRelationInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    fileLampiran?: SortOrderInput | SortOrder
    userId?: SortOrder
    adminId?: SortOrder
    lokasiField?: SortOrderInput | SortOrder
    lokasiArea?: SortOrderInput | SortOrder
    lokasiSumur?: SortOrderInput | SortOrder
    tanggalMulai?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    dokumenPengerjaan?: SortOrderInput | SortOrder
    dataPengerjaan?: SortOrderInput | SortOrder
    fotoPengerjaan?: SortOrderInput | SortOrder
    laporanSelesai?: SortOrderInput | SortOrder
    fotoSelesai?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
  }

  export type TugasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TugasWhereInput | TugasWhereInput[]
    OR?: TugasWhereInput[]
    NOT?: TugasWhereInput | TugasWhereInput[]
    judul?: StringFilter<"Tugas"> | string
    deskripsi?: StringFilter<"Tugas"> | string
    fileLampiran?: StringNullableFilter<"Tugas"> | string | null
    userId?: IntFilter<"Tugas"> | number
    adminId?: IntFilter<"Tugas"> | number
    lokasiField?: StringNullableFilter<"Tugas"> | string | null
    lokasiArea?: StringNullableFilter<"Tugas"> | string | null
    lokasiSumur?: StringNullableFilter<"Tugas"> | string | null
    tanggalMulai?: DateTimeNullableFilter<"Tugas"> | Date | string | null
    dueDate?: DateTimeNullableFilter<"Tugas"> | Date | string | null
    dokumenPengerjaan?: StringNullableFilter<"Tugas"> | string | null
    dataPengerjaan?: StringNullableFilter<"Tugas"> | string | null
    fotoPengerjaan?: StringNullableFilter<"Tugas"> | string | null
    laporanSelesai?: StringNullableFilter<"Tugas"> | string | null
    fotoSelesai?: StringNullableFilter<"Tugas"> | string | null
    status?: StringFilter<"Tugas"> | string
    createdAt?: DateTimeFilter<"Tugas"> | Date | string
    updatedAt?: DateTimeFilter<"Tugas"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    admin?: XOR<AdminRelationFilter, AdminWhereInput>
  }, "id">

  export type TugasOrderByWithAggregationInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    fileLampiran?: SortOrderInput | SortOrder
    userId?: SortOrder
    adminId?: SortOrder
    lokasiField?: SortOrderInput | SortOrder
    lokasiArea?: SortOrderInput | SortOrder
    lokasiSumur?: SortOrderInput | SortOrder
    tanggalMulai?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    dokumenPengerjaan?: SortOrderInput | SortOrder
    dataPengerjaan?: SortOrderInput | SortOrder
    fotoPengerjaan?: SortOrderInput | SortOrder
    laporanSelesai?: SortOrderInput | SortOrder
    fotoSelesai?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TugasCountOrderByAggregateInput
    _avg?: TugasAvgOrderByAggregateInput
    _max?: TugasMaxOrderByAggregateInput
    _min?: TugasMinOrderByAggregateInput
    _sum?: TugasSumOrderByAggregateInput
  }

  export type TugasScalarWhereWithAggregatesInput = {
    AND?: TugasScalarWhereWithAggregatesInput | TugasScalarWhereWithAggregatesInput[]
    OR?: TugasScalarWhereWithAggregatesInput[]
    NOT?: TugasScalarWhereWithAggregatesInput | TugasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tugas"> | number
    judul?: StringWithAggregatesFilter<"Tugas"> | string
    deskripsi?: StringWithAggregatesFilter<"Tugas"> | string
    fileLampiran?: StringNullableWithAggregatesFilter<"Tugas"> | string | null
    userId?: IntWithAggregatesFilter<"Tugas"> | number
    adminId?: IntWithAggregatesFilter<"Tugas"> | number
    lokasiField?: StringNullableWithAggregatesFilter<"Tugas"> | string | null
    lokasiArea?: StringNullableWithAggregatesFilter<"Tugas"> | string | null
    lokasiSumur?: StringNullableWithAggregatesFilter<"Tugas"> | string | null
    tanggalMulai?: DateTimeNullableWithAggregatesFilter<"Tugas"> | Date | string | null
    dueDate?: DateTimeNullableWithAggregatesFilter<"Tugas"> | Date | string | null
    dokumenPengerjaan?: StringNullableWithAggregatesFilter<"Tugas"> | string | null
    dataPengerjaan?: StringNullableWithAggregatesFilter<"Tugas"> | string | null
    fotoPengerjaan?: StringNullableWithAggregatesFilter<"Tugas"> | string | null
    laporanSelesai?: StringNullableWithAggregatesFilter<"Tugas"> | string | null
    fotoSelesai?: StringNullableWithAggregatesFilter<"Tugas"> | string | null
    status?: StringWithAggregatesFilter<"Tugas"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tugas"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tugas"> | Date | string
  }

  export type UserCreateInput = {
    nama: string
    email: string
    password: string
    jabatan: string
    lokasiSite: string
    foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    laporan?: LaporanInspeksiCreateNestedManyWithoutUserInput
    dataInjeksi?: DataInjeksiCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    tugas?: TugasCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    nama: string
    email: string
    password: string
    jabatan: string
    lokasiSite: string
    foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    laporan?: LaporanInspeksiUncheckedCreateNestedManyWithoutUserInput
    dataInjeksi?: DataInjeksiUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    tugas?: TugasUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    lokasiSite?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laporan?: LaporanInspeksiUpdateManyWithoutUserNestedInput
    dataInjeksi?: DataInjeksiUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    tugas?: TugasUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    lokasiSite?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laporan?: LaporanInspeksiUncheckedUpdateManyWithoutUserNestedInput
    dataInjeksi?: DataInjeksiUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    tugas?: TugasUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    nama: string
    email: string
    password: string
    jabatan: string
    lokasiSite: string
    foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    lokasiSite?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    lokasiSite?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    nama: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationCreateNestedManyWithoutAdminInput
    activityLogs?: ActivityLogCreateNestedManyWithoutAdminInput
    tugasDibuat?: TugasCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    nama: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutAdminInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutAdminInput
    tugasDibuat?: TugasUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUpdateManyWithoutAdminNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutAdminNestedInput
    tugasDibuat?: TugasUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutAdminNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutAdminNestedInput
    tugasDibuat?: TugasUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id?: number
    nama: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanInspeksiCreateInput = {
    tanggal: Date | string
    lokasi: string
    kategori: string
    deskripsi: string
    risiko: string
    tindakan: string
    foto?: string | null
    status?: string
    catatan?: string | null
    dueDate?: Date | string | null
    fungsi?: string | null
    statusTemuan?: string
    tanggalPenyelesaian?: Date | string | null
    catatanPenyelesaian?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLaporanInput
  }

  export type LaporanInspeksiUncheckedCreateInput = {
    id?: number
    userId: number
    tanggal: Date | string
    lokasi: string
    kategori: string
    deskripsi: string
    risiko: string
    tindakan: string
    foto?: string | null
    status?: string
    catatan?: string | null
    dueDate?: Date | string | null
    fungsi?: string | null
    statusTemuan?: string
    tanggalPenyelesaian?: Date | string | null
    catatanPenyelesaian?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LaporanInspeksiUpdateInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    lokasi?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    risiko?: StringFieldUpdateOperationsInput | string
    tindakan?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fungsi?: NullableStringFieldUpdateOperationsInput | string | null
    statusTemuan?: StringFieldUpdateOperationsInput | string
    tanggalPenyelesaian?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatanPenyelesaian?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLaporanNestedInput
  }

  export type LaporanInspeksiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    lokasi?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    risiko?: StringFieldUpdateOperationsInput | string
    tindakan?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fungsi?: NullableStringFieldUpdateOperationsInput | string | null
    statusTemuan?: StringFieldUpdateOperationsInput | string
    tanggalPenyelesaian?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatanPenyelesaian?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanInspeksiCreateManyInput = {
    id?: number
    userId: number
    tanggal: Date | string
    lokasi: string
    kategori: string
    deskripsi: string
    risiko: string
    tindakan: string
    foto?: string | null
    status?: string
    catatan?: string | null
    dueDate?: Date | string | null
    fungsi?: string | null
    statusTemuan?: string
    tanggalPenyelesaian?: Date | string | null
    catatanPenyelesaian?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LaporanInspeksiUpdateManyMutationInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    lokasi?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    risiko?: StringFieldUpdateOperationsInput | string
    tindakan?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fungsi?: NullableStringFieldUpdateOperationsInput | string | null
    statusTemuan?: StringFieldUpdateOperationsInput | string
    tanggalPenyelesaian?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatanPenyelesaian?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanInspeksiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    lokasi?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    risiko?: StringFieldUpdateOperationsInput | string
    tindakan?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fungsi?: NullableStringFieldUpdateOperationsInput | string | null
    statusTemuan?: StringFieldUpdateOperationsInput | string
    tanggalPenyelesaian?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatanPenyelesaian?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataInjeksiCreateInput = {
    tanggal: Date | string
    nilaiRaw: number
    hasilPerhitungan?: number | null
    formulaUsed?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDataInjeksiInput
  }

  export type DataInjeksiUncheckedCreateInput = {
    id?: number
    userId: number
    tanggal: Date | string
    nilaiRaw: number
    hasilPerhitungan?: number | null
    formulaUsed?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataInjeksiUpdateInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nilaiRaw?: FloatFieldUpdateOperationsInput | number
    hasilPerhitungan?: NullableFloatFieldUpdateOperationsInput | number | null
    formulaUsed?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDataInjeksiNestedInput
  }

  export type DataInjeksiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nilaiRaw?: FloatFieldUpdateOperationsInput | number
    hasilPerhitungan?: NullableFloatFieldUpdateOperationsInput | number | null
    formulaUsed?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataInjeksiCreateManyInput = {
    id?: number
    userId: number
    tanggal: Date | string
    nilaiRaw: number
    hasilPerhitungan?: number | null
    formulaUsed?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataInjeksiUpdateManyMutationInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nilaiRaw?: FloatFieldUpdateOperationsInput | number
    hasilPerhitungan?: NullableFloatFieldUpdateOperationsInput | number | null
    formulaUsed?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataInjeksiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nilaiRaw?: FloatFieldUpdateOperationsInput | number
    hasilPerhitungan?: NullableFloatFieldUpdateOperationsInput | number | null
    formulaUsed?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    type: string
    title: string
    message: string
    isRead?: boolean
    data?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutNotificationsInput
    admin?: AdminCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    userId?: number | null
    adminId?: number | null
    type: string
    title: string
    message: string
    isRead?: boolean
    data?: string | null
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutNotificationsNestedInput
    admin?: AdminUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: number
    userId?: number | null
    adminId?: number | null
    type: string
    title: string
    message: string
    isRead?: boolean
    data?: string | null
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialCreateInput = {
    namaMaterial: string
    kodeMaterial?: string | null
    spesifikasi?: string | null
    tahunPembelian?: number | null
    vendor?: string | null
    jumlah?: number | null
    unit?: string | null
    lokasiPenyimpanan?: string | null
    dokumentasi?: string | null
    typePeralatan?: string | null
    masaBerlakuType?: Date | string | null
    kondisi?: string | null
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialUncheckedCreateInput = {
    id?: number
    namaMaterial: string
    kodeMaterial?: string | null
    spesifikasi?: string | null
    tahunPembelian?: number | null
    vendor?: string | null
    jumlah?: number | null
    unit?: string | null
    lokasiPenyimpanan?: string | null
    dokumentasi?: string | null
    typePeralatan?: string | null
    masaBerlakuType?: Date | string | null
    kondisi?: string | null
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialUpdateInput = {
    namaMaterial?: StringFieldUpdateOperationsInput | string
    kodeMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    spesifikasi?: NullableStringFieldUpdateOperationsInput | string | null
    tahunPembelian?: NullableIntFieldUpdateOperationsInput | number | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiPenyimpanan?: NullableStringFieldUpdateOperationsInput | string | null
    dokumentasi?: NullableStringFieldUpdateOperationsInput | string | null
    typePeralatan?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlakuType?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kondisi?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaMaterial?: StringFieldUpdateOperationsInput | string
    kodeMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    spesifikasi?: NullableStringFieldUpdateOperationsInput | string | null
    tahunPembelian?: NullableIntFieldUpdateOperationsInput | number | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiPenyimpanan?: NullableStringFieldUpdateOperationsInput | string | null
    dokumentasi?: NullableStringFieldUpdateOperationsInput | string | null
    typePeralatan?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlakuType?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kondisi?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialCreateManyInput = {
    id?: number
    namaMaterial: string
    kodeMaterial?: string | null
    spesifikasi?: string | null
    tahunPembelian?: number | null
    vendor?: string | null
    jumlah?: number | null
    unit?: string | null
    lokasiPenyimpanan?: string | null
    dokumentasi?: string | null
    typePeralatan?: string | null
    masaBerlakuType?: Date | string | null
    kondisi?: string | null
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialUpdateManyMutationInput = {
    namaMaterial?: StringFieldUpdateOperationsInput | string
    kodeMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    spesifikasi?: NullableStringFieldUpdateOperationsInput | string | null
    tahunPembelian?: NullableIntFieldUpdateOperationsInput | number | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiPenyimpanan?: NullableStringFieldUpdateOperationsInput | string | null
    dokumentasi?: NullableStringFieldUpdateOperationsInput | string | null
    typePeralatan?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlakuType?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kondisi?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaMaterial?: StringFieldUpdateOperationsInput | string
    kodeMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    spesifikasi?: NullableStringFieldUpdateOperationsInput | string | null
    tahunPembelian?: NullableIntFieldUpdateOperationsInput | number | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiPenyimpanan?: NullableStringFieldUpdateOperationsInput | string | null
    dokumentasi?: NullableStringFieldUpdateOperationsInput | string | null
    typePeralatan?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlakuType?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kondisi?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KompetensiPersonilCreateInput = {
    nama: string
    nip?: string | null
    jabatan?: string | null
    unitKerja?: string | null
    jenisKompetensi: string
    namaSertifikasi?: string | null
    nomorSertifikasi?: string | null
    lembagaPenerbit?: string | null
    tanggalTerbit?: Date | string | null
    masaBerlakuSertifikasi?: Date | string | null
    statusKompetensi?: string
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KompetensiPersonilUncheckedCreateInput = {
    id?: number
    nama: string
    nip?: string | null
    jabatan?: string | null
    unitKerja?: string | null
    jenisKompetensi: string
    namaSertifikasi?: string | null
    nomorSertifikasi?: string | null
    lembagaPenerbit?: string | null
    tanggalTerbit?: Date | string | null
    masaBerlakuSertifikasi?: Date | string | null
    statusKompetensi?: string
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KompetensiPersonilUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    unitKerja?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKompetensi?: StringFieldUpdateOperationsInput | string
    namaSertifikasi?: NullableStringFieldUpdateOperationsInput | string | null
    nomorSertifikasi?: NullableStringFieldUpdateOperationsInput | string | null
    lembagaPenerbit?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalTerbit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    masaBerlakuSertifikasi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusKompetensi?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KompetensiPersonilUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    unitKerja?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKompetensi?: StringFieldUpdateOperationsInput | string
    namaSertifikasi?: NullableStringFieldUpdateOperationsInput | string | null
    nomorSertifikasi?: NullableStringFieldUpdateOperationsInput | string | null
    lembagaPenerbit?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalTerbit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    masaBerlakuSertifikasi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusKompetensi?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KompetensiPersonilCreateManyInput = {
    id?: number
    nama: string
    nip?: string | null
    jabatan?: string | null
    unitKerja?: string | null
    jenisKompetensi: string
    namaSertifikasi?: string | null
    nomorSertifikasi?: string | null
    lembagaPenerbit?: string | null
    tanggalTerbit?: Date | string | null
    masaBerlakuSertifikasi?: Date | string | null
    statusKompetensi?: string
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KompetensiPersonilUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    unitKerja?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKompetensi?: StringFieldUpdateOperationsInput | string
    namaSertifikasi?: NullableStringFieldUpdateOperationsInput | string | null
    nomorSertifikasi?: NullableStringFieldUpdateOperationsInput | string | null
    lembagaPenerbit?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalTerbit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    masaBerlakuSertifikasi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusKompetensi?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KompetensiPersonilUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    unitKerja?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKompetensi?: StringFieldUpdateOperationsInput | string
    namaSertifikasi?: NullableStringFieldUpdateOperationsInput | string | null
    nomorSertifikasi?: NullableStringFieldUpdateOperationsInput | string | null
    lembagaPenerbit?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalTerbit?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    masaBerlakuSertifikasi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusKompetensi?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SertifikasiPeralatanCreateInput = {
    namaPeralatan: string
    kodePeralatan?: string | null
    jenisPeralatan?: string | null
    merk?: string | null
    type?: string | null
    nomorSeri?: string | null
    tahunProduksi?: number | null
    lokasiPemasangan?: string | null
    namaOperator?: string | null
    nomorSertifikasiOperator?: string | null
    jenisSertifikasiOperator?: string | null
    masaBerlakuSertifikasiOperator?: Date | string | null
    nomorSertifikatPeralatan?: string | null
    lembagaPenerbitSertifikat?: string | null
    masaBerlakuSertifikatPeralatan?: Date | string | null
    tanggalTerbitSertifikat?: Date | string | null
    kondisi?: string | null
    hasilInspeksiTerakhir?: Date | string | null
    catatatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SertifikasiPeralatanUncheckedCreateInput = {
    id?: number
    namaPeralatan: string
    kodePeralatan?: string | null
    jenisPeralatan?: string | null
    merk?: string | null
    type?: string | null
    nomorSeri?: string | null
    tahunProduksi?: number | null
    lokasiPemasangan?: string | null
    namaOperator?: string | null
    nomorSertifikasiOperator?: string | null
    jenisSertifikasiOperator?: string | null
    masaBerlakuSertifikasiOperator?: Date | string | null
    nomorSertifikatPeralatan?: string | null
    lembagaPenerbitSertifikat?: string | null
    masaBerlakuSertifikatPeralatan?: Date | string | null
    tanggalTerbitSertifikat?: Date | string | null
    kondisi?: string | null
    hasilInspeksiTerakhir?: Date | string | null
    catatatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SertifikasiPeralatanUpdateInput = {
    namaPeralatan?: StringFieldUpdateOperationsInput | string
    kodePeralatan?: NullableStringFieldUpdateOperationsInput | string | null
    jenisPeralatan?: NullableStringFieldUpdateOperationsInput | string | null
    merk?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    nomorSeri?: NullableStringFieldUpdateOperationsInput | string | null
    tahunProduksi?: NullableIntFieldUpdateOperationsInput | number | null
    lokasiPemasangan?: NullableStringFieldUpdateOperationsInput | string | null
    namaOperator?: NullableStringFieldUpdateOperationsInput | string | null
    nomorSertifikasiOperator?: NullableStringFieldUpdateOperationsInput | string | null
    jenisSertifikasiOperator?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlakuSertifikasiOperator?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nomorSertifikatPeralatan?: NullableStringFieldUpdateOperationsInput | string | null
    lembagaPenerbitSertifikat?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlakuSertifikatPeralatan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalTerbitSertifikat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kondisi?: NullableStringFieldUpdateOperationsInput | string | null
    hasilInspeksiTerakhir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SertifikasiPeralatanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaPeralatan?: StringFieldUpdateOperationsInput | string
    kodePeralatan?: NullableStringFieldUpdateOperationsInput | string | null
    jenisPeralatan?: NullableStringFieldUpdateOperationsInput | string | null
    merk?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    nomorSeri?: NullableStringFieldUpdateOperationsInput | string | null
    tahunProduksi?: NullableIntFieldUpdateOperationsInput | number | null
    lokasiPemasangan?: NullableStringFieldUpdateOperationsInput | string | null
    namaOperator?: NullableStringFieldUpdateOperationsInput | string | null
    nomorSertifikasiOperator?: NullableStringFieldUpdateOperationsInput | string | null
    jenisSertifikasiOperator?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlakuSertifikasiOperator?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nomorSertifikatPeralatan?: NullableStringFieldUpdateOperationsInput | string | null
    lembagaPenerbitSertifikat?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlakuSertifikatPeralatan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalTerbitSertifikat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kondisi?: NullableStringFieldUpdateOperationsInput | string | null
    hasilInspeksiTerakhir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SertifikasiPeralatanCreateManyInput = {
    id?: number
    namaPeralatan: string
    kodePeralatan?: string | null
    jenisPeralatan?: string | null
    merk?: string | null
    type?: string | null
    nomorSeri?: string | null
    tahunProduksi?: number | null
    lokasiPemasangan?: string | null
    namaOperator?: string | null
    nomorSertifikasiOperator?: string | null
    jenisSertifikasiOperator?: string | null
    masaBerlakuSertifikasiOperator?: Date | string | null
    nomorSertifikatPeralatan?: string | null
    lembagaPenerbitSertifikat?: string | null
    masaBerlakuSertifikatPeralatan?: Date | string | null
    tanggalTerbitSertifikat?: Date | string | null
    kondisi?: string | null
    hasilInspeksiTerakhir?: Date | string | null
    catatatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SertifikasiPeralatanUpdateManyMutationInput = {
    namaPeralatan?: StringFieldUpdateOperationsInput | string
    kodePeralatan?: NullableStringFieldUpdateOperationsInput | string | null
    jenisPeralatan?: NullableStringFieldUpdateOperationsInput | string | null
    merk?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    nomorSeri?: NullableStringFieldUpdateOperationsInput | string | null
    tahunProduksi?: NullableIntFieldUpdateOperationsInput | number | null
    lokasiPemasangan?: NullableStringFieldUpdateOperationsInput | string | null
    namaOperator?: NullableStringFieldUpdateOperationsInput | string | null
    nomorSertifikasiOperator?: NullableStringFieldUpdateOperationsInput | string | null
    jenisSertifikasiOperator?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlakuSertifikasiOperator?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nomorSertifikatPeralatan?: NullableStringFieldUpdateOperationsInput | string | null
    lembagaPenerbitSertifikat?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlakuSertifikatPeralatan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalTerbitSertifikat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kondisi?: NullableStringFieldUpdateOperationsInput | string | null
    hasilInspeksiTerakhir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SertifikasiPeralatanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaPeralatan?: StringFieldUpdateOperationsInput | string
    kodePeralatan?: NullableStringFieldUpdateOperationsInput | string | null
    jenisPeralatan?: NullableStringFieldUpdateOperationsInput | string | null
    merk?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    nomorSeri?: NullableStringFieldUpdateOperationsInput | string | null
    tahunProduksi?: NullableIntFieldUpdateOperationsInput | number | null
    lokasiPemasangan?: NullableStringFieldUpdateOperationsInput | string | null
    namaOperator?: NullableStringFieldUpdateOperationsInput | string | null
    nomorSertifikasiOperator?: NullableStringFieldUpdateOperationsInput | string | null
    jenisSertifikasiOperator?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlakuSertifikasiOperator?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nomorSertifikatPeralatan?: NullableStringFieldUpdateOperationsInput | string | null
    lembagaPenerbitSertifikat?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlakuSertifikatPeralatan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalTerbitSertifikat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kondisi?: NullableStringFieldUpdateOperationsInput | string | null
    hasilInspeksiTerakhir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsCreateInput = {
    key: string
    value: string
    category?: string
    description?: string | null
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemSettingsUncheckedCreateInput = {
    id?: number
    key: string
    value: string
    category?: string
    description?: string | null
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemSettingsUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsCreateManyInput = {
    id?: number
    key: string
    value: string
    category?: string
    description?: string | null
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemSettingsUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateInput = {
    action: string
    entityType: string
    entityId?: number | null
    description?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutActivityLogsInput
    admin?: AdminCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: number
    userId?: number | null
    adminId?: number | null
    action: string
    entityType: string
    entityId?: number | null
    description?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutActivityLogsNestedInput
    admin?: AdminUpdateOneWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: number
    userId?: number | null
    adminId?: number | null
    action: string
    entityType: string
    entityId?: number | null
    description?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterLokasiCreateInput = {
    field?: string | null
    kategori?: string | null
    nama: string
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MasterLokasiUncheckedCreateInput = {
    id?: number
    field?: string | null
    kategori?: string | null
    nama: string
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MasterLokasiUpdateInput = {
    field?: NullableStringFieldUpdateOperationsInput | string | null
    kategori?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterLokasiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    field?: NullableStringFieldUpdateOperationsInput | string | null
    kategori?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterLokasiCreateManyInput = {
    id?: number
    field?: string | null
    kategori?: string | null
    nama: string
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MasterLokasiUpdateManyMutationInput = {
    field?: NullableStringFieldUpdateOperationsInput | string | null
    kategori?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterLokasiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    field?: NullableStringFieldUpdateOperationsInput | string | null
    kategori?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TugasCreateInput = {
    judul: string
    deskripsi: string
    fileLampiran?: string | null
    lokasiField?: string | null
    lokasiArea?: string | null
    lokasiSumur?: string | null
    tanggalMulai?: Date | string | null
    dueDate?: Date | string | null
    dokumenPengerjaan?: string | null
    dataPengerjaan?: string | null
    fotoPengerjaan?: string | null
    laporanSelesai?: string | null
    fotoSelesai?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTugasInput
    admin: AdminCreateNestedOneWithoutTugasDibuatInput
  }

  export type TugasUncheckedCreateInput = {
    id?: number
    judul: string
    deskripsi: string
    fileLampiran?: string | null
    userId: number
    adminId: number
    lokasiField?: string | null
    lokasiArea?: string | null
    lokasiSumur?: string | null
    tanggalMulai?: Date | string | null
    dueDate?: Date | string | null
    dokumenPengerjaan?: string | null
    dataPengerjaan?: string | null
    fotoPengerjaan?: string | null
    laporanSelesai?: string | null
    fotoSelesai?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TugasUpdateInput = {
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    fileLampiran?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiField?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiArea?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiSumur?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dokumenPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    dataPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    laporanSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTugasNestedInput
    admin?: AdminUpdateOneRequiredWithoutTugasDibuatNestedInput
  }

  export type TugasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    fileLampiran?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    lokasiField?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiArea?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiSumur?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dokumenPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    dataPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    laporanSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TugasCreateManyInput = {
    id?: number
    judul: string
    deskripsi: string
    fileLampiran?: string | null
    userId: number
    adminId: number
    lokasiField?: string | null
    lokasiArea?: string | null
    lokasiSumur?: string | null
    tanggalMulai?: Date | string | null
    dueDate?: Date | string | null
    dokumenPengerjaan?: string | null
    dataPengerjaan?: string | null
    fotoPengerjaan?: string | null
    laporanSelesai?: string | null
    fotoSelesai?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TugasUpdateManyMutationInput = {
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    fileLampiran?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiField?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiArea?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiSumur?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dokumenPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    dataPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    laporanSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TugasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    fileLampiran?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    lokasiField?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiArea?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiSumur?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dokumenPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    dataPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    laporanSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type LaporanInspeksiListRelationFilter = {
    every?: LaporanInspeksiWhereInput
    some?: LaporanInspeksiWhereInput
    none?: LaporanInspeksiWhereInput
  }

  export type DataInjeksiListRelationFilter = {
    every?: DataInjeksiWhereInput
    some?: DataInjeksiWhereInput
    none?: DataInjeksiWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type TugasListRelationFilter = {
    every?: TugasWhereInput
    some?: TugasWhereInput
    none?: TugasWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LaporanInspeksiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DataInjeksiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TugasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    jabatan?: SortOrder
    lokasiSite?: SortOrder
    foto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    jabatan?: SortOrder
    lokasiSite?: SortOrder
    foto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    jabatan?: SortOrder
    lokasiSite?: SortOrder
    foto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LaporanInspeksiCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tanggal?: SortOrder
    lokasi?: SortOrder
    kategori?: SortOrder
    deskripsi?: SortOrder
    risiko?: SortOrder
    tindakan?: SortOrder
    foto?: SortOrder
    status?: SortOrder
    catatan?: SortOrder
    dueDate?: SortOrder
    fungsi?: SortOrder
    statusTemuan?: SortOrder
    tanggalPenyelesaian?: SortOrder
    catatanPenyelesaian?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LaporanInspeksiAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LaporanInspeksiMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tanggal?: SortOrder
    lokasi?: SortOrder
    kategori?: SortOrder
    deskripsi?: SortOrder
    risiko?: SortOrder
    tindakan?: SortOrder
    foto?: SortOrder
    status?: SortOrder
    catatan?: SortOrder
    dueDate?: SortOrder
    fungsi?: SortOrder
    statusTemuan?: SortOrder
    tanggalPenyelesaian?: SortOrder
    catatanPenyelesaian?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LaporanInspeksiMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tanggal?: SortOrder
    lokasi?: SortOrder
    kategori?: SortOrder
    deskripsi?: SortOrder
    risiko?: SortOrder
    tindakan?: SortOrder
    foto?: SortOrder
    status?: SortOrder
    catatan?: SortOrder
    dueDate?: SortOrder
    fungsi?: SortOrder
    statusTemuan?: SortOrder
    tanggalPenyelesaian?: SortOrder
    catatanPenyelesaian?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LaporanInspeksiSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type DataInjeksiCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tanggal?: SortOrder
    nilaiRaw?: SortOrder
    hasilPerhitungan?: SortOrder
    formulaUsed?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataInjeksiAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nilaiRaw?: SortOrder
    hasilPerhitungan?: SortOrder
  }

  export type DataInjeksiMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tanggal?: SortOrder
    nilaiRaw?: SortOrder
    hasilPerhitungan?: SortOrder
    formulaUsed?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataInjeksiMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tanggal?: SortOrder
    nilaiRaw?: SortOrder
    hasilPerhitungan?: SortOrder
    formulaUsed?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataInjeksiSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nilaiRaw?: SortOrder
    hasilPerhitungan?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AdminNullableRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    adminId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    adminId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    adminId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    adminId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    adminId?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MaterialCountOrderByAggregateInput = {
    id?: SortOrder
    namaMaterial?: SortOrder
    kodeMaterial?: SortOrder
    spesifikasi?: SortOrder
    tahunPembelian?: SortOrder
    vendor?: SortOrder
    jumlah?: SortOrder
    unit?: SortOrder
    lokasiPenyimpanan?: SortOrder
    dokumentasi?: SortOrder
    typePeralatan?: SortOrder
    masaBerlakuType?: SortOrder
    kondisi?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialAvgOrderByAggregateInput = {
    id?: SortOrder
    tahunPembelian?: SortOrder
    jumlah?: SortOrder
  }

  export type MaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    namaMaterial?: SortOrder
    kodeMaterial?: SortOrder
    spesifikasi?: SortOrder
    tahunPembelian?: SortOrder
    vendor?: SortOrder
    jumlah?: SortOrder
    unit?: SortOrder
    lokasiPenyimpanan?: SortOrder
    dokumentasi?: SortOrder
    typePeralatan?: SortOrder
    masaBerlakuType?: SortOrder
    kondisi?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialMinOrderByAggregateInput = {
    id?: SortOrder
    namaMaterial?: SortOrder
    kodeMaterial?: SortOrder
    spesifikasi?: SortOrder
    tahunPembelian?: SortOrder
    vendor?: SortOrder
    jumlah?: SortOrder
    unit?: SortOrder
    lokasiPenyimpanan?: SortOrder
    dokumentasi?: SortOrder
    typePeralatan?: SortOrder
    masaBerlakuType?: SortOrder
    kondisi?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialSumOrderByAggregateInput = {
    id?: SortOrder
    tahunPembelian?: SortOrder
    jumlah?: SortOrder
  }

  export type KompetensiPersonilCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nip?: SortOrder
    jabatan?: SortOrder
    unitKerja?: SortOrder
    jenisKompetensi?: SortOrder
    namaSertifikasi?: SortOrder
    nomorSertifikasi?: SortOrder
    lembagaPenerbit?: SortOrder
    tanggalTerbit?: SortOrder
    masaBerlakuSertifikasi?: SortOrder
    statusKompetensi?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KompetensiPersonilAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KompetensiPersonilMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nip?: SortOrder
    jabatan?: SortOrder
    unitKerja?: SortOrder
    jenisKompetensi?: SortOrder
    namaSertifikasi?: SortOrder
    nomorSertifikasi?: SortOrder
    lembagaPenerbit?: SortOrder
    tanggalTerbit?: SortOrder
    masaBerlakuSertifikasi?: SortOrder
    statusKompetensi?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KompetensiPersonilMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nip?: SortOrder
    jabatan?: SortOrder
    unitKerja?: SortOrder
    jenisKompetensi?: SortOrder
    namaSertifikasi?: SortOrder
    nomorSertifikasi?: SortOrder
    lembagaPenerbit?: SortOrder
    tanggalTerbit?: SortOrder
    masaBerlakuSertifikasi?: SortOrder
    statusKompetensi?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KompetensiPersonilSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SertifikasiPeralatanCountOrderByAggregateInput = {
    id?: SortOrder
    namaPeralatan?: SortOrder
    kodePeralatan?: SortOrder
    jenisPeralatan?: SortOrder
    merk?: SortOrder
    type?: SortOrder
    nomorSeri?: SortOrder
    tahunProduksi?: SortOrder
    lokasiPemasangan?: SortOrder
    namaOperator?: SortOrder
    nomorSertifikasiOperator?: SortOrder
    jenisSertifikasiOperator?: SortOrder
    masaBerlakuSertifikasiOperator?: SortOrder
    nomorSertifikatPeralatan?: SortOrder
    lembagaPenerbitSertifikat?: SortOrder
    masaBerlakuSertifikatPeralatan?: SortOrder
    tanggalTerbitSertifikat?: SortOrder
    kondisi?: SortOrder
    hasilInspeksiTerakhir?: SortOrder
    catatatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SertifikasiPeralatanAvgOrderByAggregateInput = {
    id?: SortOrder
    tahunProduksi?: SortOrder
  }

  export type SertifikasiPeralatanMaxOrderByAggregateInput = {
    id?: SortOrder
    namaPeralatan?: SortOrder
    kodePeralatan?: SortOrder
    jenisPeralatan?: SortOrder
    merk?: SortOrder
    type?: SortOrder
    nomorSeri?: SortOrder
    tahunProduksi?: SortOrder
    lokasiPemasangan?: SortOrder
    namaOperator?: SortOrder
    nomorSertifikasiOperator?: SortOrder
    jenisSertifikasiOperator?: SortOrder
    masaBerlakuSertifikasiOperator?: SortOrder
    nomorSertifikatPeralatan?: SortOrder
    lembagaPenerbitSertifikat?: SortOrder
    masaBerlakuSertifikatPeralatan?: SortOrder
    tanggalTerbitSertifikat?: SortOrder
    kondisi?: SortOrder
    hasilInspeksiTerakhir?: SortOrder
    catatatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SertifikasiPeralatanMinOrderByAggregateInput = {
    id?: SortOrder
    namaPeralatan?: SortOrder
    kodePeralatan?: SortOrder
    jenisPeralatan?: SortOrder
    merk?: SortOrder
    type?: SortOrder
    nomorSeri?: SortOrder
    tahunProduksi?: SortOrder
    lokasiPemasangan?: SortOrder
    namaOperator?: SortOrder
    nomorSertifikasiOperator?: SortOrder
    jenisSertifikasiOperator?: SortOrder
    masaBerlakuSertifikasiOperator?: SortOrder
    nomorSertifikatPeralatan?: SortOrder
    lembagaPenerbitSertifikat?: SortOrder
    masaBerlakuSertifikatPeralatan?: SortOrder
    tanggalTerbitSertifikat?: SortOrder
    kondisi?: SortOrder
    hasilInspeksiTerakhir?: SortOrder
    catatatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SertifikasiPeralatanSumOrderByAggregateInput = {
    id?: SortOrder
    tahunProduksi?: SortOrder
  }

  export type SystemSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    category?: SortOrder
    description?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SystemSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    category?: SortOrder
    description?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    category?: SortOrder
    description?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    adminId?: SortOrder
    entityId?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    adminId?: SortOrder
    entityId?: SortOrder
  }

  export type MasterLokasiCountOrderByAggregateInput = {
    id?: SortOrder
    field?: SortOrder
    kategori?: SortOrder
    nama?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MasterLokasiAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MasterLokasiMaxOrderByAggregateInput = {
    id?: SortOrder
    field?: SortOrder
    kategori?: SortOrder
    nama?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MasterLokasiMinOrderByAggregateInput = {
    id?: SortOrder
    field?: SortOrder
    kategori?: SortOrder
    nama?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MasterLokasiSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminRelationFilter = {
    is?: AdminWhereInput
    isNot?: AdminWhereInput
  }

  export type TugasCountOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    fileLampiran?: SortOrder
    userId?: SortOrder
    adminId?: SortOrder
    lokasiField?: SortOrder
    lokasiArea?: SortOrder
    lokasiSumur?: SortOrder
    tanggalMulai?: SortOrder
    dueDate?: SortOrder
    dokumenPengerjaan?: SortOrder
    dataPengerjaan?: SortOrder
    fotoPengerjaan?: SortOrder
    laporanSelesai?: SortOrder
    fotoSelesai?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TugasAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    adminId?: SortOrder
  }

  export type TugasMaxOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    fileLampiran?: SortOrder
    userId?: SortOrder
    adminId?: SortOrder
    lokasiField?: SortOrder
    lokasiArea?: SortOrder
    lokasiSumur?: SortOrder
    tanggalMulai?: SortOrder
    dueDate?: SortOrder
    dokumenPengerjaan?: SortOrder
    dataPengerjaan?: SortOrder
    fotoPengerjaan?: SortOrder
    laporanSelesai?: SortOrder
    fotoSelesai?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TugasMinOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    fileLampiran?: SortOrder
    userId?: SortOrder
    adminId?: SortOrder
    lokasiField?: SortOrder
    lokasiArea?: SortOrder
    lokasiSumur?: SortOrder
    tanggalMulai?: SortOrder
    dueDate?: SortOrder
    dokumenPengerjaan?: SortOrder
    dataPengerjaan?: SortOrder
    fotoPengerjaan?: SortOrder
    laporanSelesai?: SortOrder
    fotoSelesai?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TugasSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    adminId?: SortOrder
  }

  export type LaporanInspeksiCreateNestedManyWithoutUserInput = {
    create?: XOR<LaporanInspeksiCreateWithoutUserInput, LaporanInspeksiUncheckedCreateWithoutUserInput> | LaporanInspeksiCreateWithoutUserInput[] | LaporanInspeksiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LaporanInspeksiCreateOrConnectWithoutUserInput | LaporanInspeksiCreateOrConnectWithoutUserInput[]
    createMany?: LaporanInspeksiCreateManyUserInputEnvelope
    connect?: LaporanInspeksiWhereUniqueInput | LaporanInspeksiWhereUniqueInput[]
  }

  export type DataInjeksiCreateNestedManyWithoutUserInput = {
    create?: XOR<DataInjeksiCreateWithoutUserInput, DataInjeksiUncheckedCreateWithoutUserInput> | DataInjeksiCreateWithoutUserInput[] | DataInjeksiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DataInjeksiCreateOrConnectWithoutUserInput | DataInjeksiCreateOrConnectWithoutUserInput[]
    createMany?: DataInjeksiCreateManyUserInputEnvelope
    connect?: DataInjeksiWhereUniqueInput | DataInjeksiWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type TugasCreateNestedManyWithoutUserInput = {
    create?: XOR<TugasCreateWithoutUserInput, TugasUncheckedCreateWithoutUserInput> | TugasCreateWithoutUserInput[] | TugasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TugasCreateOrConnectWithoutUserInput | TugasCreateOrConnectWithoutUserInput[]
    createMany?: TugasCreateManyUserInputEnvelope
    connect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
  }

  export type LaporanInspeksiUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LaporanInspeksiCreateWithoutUserInput, LaporanInspeksiUncheckedCreateWithoutUserInput> | LaporanInspeksiCreateWithoutUserInput[] | LaporanInspeksiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LaporanInspeksiCreateOrConnectWithoutUserInput | LaporanInspeksiCreateOrConnectWithoutUserInput[]
    createMany?: LaporanInspeksiCreateManyUserInputEnvelope
    connect?: LaporanInspeksiWhereUniqueInput | LaporanInspeksiWhereUniqueInput[]
  }

  export type DataInjeksiUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DataInjeksiCreateWithoutUserInput, DataInjeksiUncheckedCreateWithoutUserInput> | DataInjeksiCreateWithoutUserInput[] | DataInjeksiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DataInjeksiCreateOrConnectWithoutUserInput | DataInjeksiCreateOrConnectWithoutUserInput[]
    createMany?: DataInjeksiCreateManyUserInputEnvelope
    connect?: DataInjeksiWhereUniqueInput | DataInjeksiWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type TugasUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TugasCreateWithoutUserInput, TugasUncheckedCreateWithoutUserInput> | TugasCreateWithoutUserInput[] | TugasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TugasCreateOrConnectWithoutUserInput | TugasCreateOrConnectWithoutUserInput[]
    createMany?: TugasCreateManyUserInputEnvelope
    connect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LaporanInspeksiUpdateManyWithoutUserNestedInput = {
    create?: XOR<LaporanInspeksiCreateWithoutUserInput, LaporanInspeksiUncheckedCreateWithoutUserInput> | LaporanInspeksiCreateWithoutUserInput[] | LaporanInspeksiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LaporanInspeksiCreateOrConnectWithoutUserInput | LaporanInspeksiCreateOrConnectWithoutUserInput[]
    upsert?: LaporanInspeksiUpsertWithWhereUniqueWithoutUserInput | LaporanInspeksiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LaporanInspeksiCreateManyUserInputEnvelope
    set?: LaporanInspeksiWhereUniqueInput | LaporanInspeksiWhereUniqueInput[]
    disconnect?: LaporanInspeksiWhereUniqueInput | LaporanInspeksiWhereUniqueInput[]
    delete?: LaporanInspeksiWhereUniqueInput | LaporanInspeksiWhereUniqueInput[]
    connect?: LaporanInspeksiWhereUniqueInput | LaporanInspeksiWhereUniqueInput[]
    update?: LaporanInspeksiUpdateWithWhereUniqueWithoutUserInput | LaporanInspeksiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LaporanInspeksiUpdateManyWithWhereWithoutUserInput | LaporanInspeksiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LaporanInspeksiScalarWhereInput | LaporanInspeksiScalarWhereInput[]
  }

  export type DataInjeksiUpdateManyWithoutUserNestedInput = {
    create?: XOR<DataInjeksiCreateWithoutUserInput, DataInjeksiUncheckedCreateWithoutUserInput> | DataInjeksiCreateWithoutUserInput[] | DataInjeksiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DataInjeksiCreateOrConnectWithoutUserInput | DataInjeksiCreateOrConnectWithoutUserInput[]
    upsert?: DataInjeksiUpsertWithWhereUniqueWithoutUserInput | DataInjeksiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DataInjeksiCreateManyUserInputEnvelope
    set?: DataInjeksiWhereUniqueInput | DataInjeksiWhereUniqueInput[]
    disconnect?: DataInjeksiWhereUniqueInput | DataInjeksiWhereUniqueInput[]
    delete?: DataInjeksiWhereUniqueInput | DataInjeksiWhereUniqueInput[]
    connect?: DataInjeksiWhereUniqueInput | DataInjeksiWhereUniqueInput[]
    update?: DataInjeksiUpdateWithWhereUniqueWithoutUserInput | DataInjeksiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DataInjeksiUpdateManyWithWhereWithoutUserInput | DataInjeksiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DataInjeksiScalarWhereInput | DataInjeksiScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type TugasUpdateManyWithoutUserNestedInput = {
    create?: XOR<TugasCreateWithoutUserInput, TugasUncheckedCreateWithoutUserInput> | TugasCreateWithoutUserInput[] | TugasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TugasCreateOrConnectWithoutUserInput | TugasCreateOrConnectWithoutUserInput[]
    upsert?: TugasUpsertWithWhereUniqueWithoutUserInput | TugasUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TugasCreateManyUserInputEnvelope
    set?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    disconnect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    delete?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    connect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    update?: TugasUpdateWithWhereUniqueWithoutUserInput | TugasUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TugasUpdateManyWithWhereWithoutUserInput | TugasUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TugasScalarWhereInput | TugasScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LaporanInspeksiUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LaporanInspeksiCreateWithoutUserInput, LaporanInspeksiUncheckedCreateWithoutUserInput> | LaporanInspeksiCreateWithoutUserInput[] | LaporanInspeksiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LaporanInspeksiCreateOrConnectWithoutUserInput | LaporanInspeksiCreateOrConnectWithoutUserInput[]
    upsert?: LaporanInspeksiUpsertWithWhereUniqueWithoutUserInput | LaporanInspeksiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LaporanInspeksiCreateManyUserInputEnvelope
    set?: LaporanInspeksiWhereUniqueInput | LaporanInspeksiWhereUniqueInput[]
    disconnect?: LaporanInspeksiWhereUniqueInput | LaporanInspeksiWhereUniqueInput[]
    delete?: LaporanInspeksiWhereUniqueInput | LaporanInspeksiWhereUniqueInput[]
    connect?: LaporanInspeksiWhereUniqueInput | LaporanInspeksiWhereUniqueInput[]
    update?: LaporanInspeksiUpdateWithWhereUniqueWithoutUserInput | LaporanInspeksiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LaporanInspeksiUpdateManyWithWhereWithoutUserInput | LaporanInspeksiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LaporanInspeksiScalarWhereInput | LaporanInspeksiScalarWhereInput[]
  }

  export type DataInjeksiUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DataInjeksiCreateWithoutUserInput, DataInjeksiUncheckedCreateWithoutUserInput> | DataInjeksiCreateWithoutUserInput[] | DataInjeksiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DataInjeksiCreateOrConnectWithoutUserInput | DataInjeksiCreateOrConnectWithoutUserInput[]
    upsert?: DataInjeksiUpsertWithWhereUniqueWithoutUserInput | DataInjeksiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DataInjeksiCreateManyUserInputEnvelope
    set?: DataInjeksiWhereUniqueInput | DataInjeksiWhereUniqueInput[]
    disconnect?: DataInjeksiWhereUniqueInput | DataInjeksiWhereUniqueInput[]
    delete?: DataInjeksiWhereUniqueInput | DataInjeksiWhereUniqueInput[]
    connect?: DataInjeksiWhereUniqueInput | DataInjeksiWhereUniqueInput[]
    update?: DataInjeksiUpdateWithWhereUniqueWithoutUserInput | DataInjeksiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DataInjeksiUpdateManyWithWhereWithoutUserInput | DataInjeksiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DataInjeksiScalarWhereInput | DataInjeksiScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type TugasUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TugasCreateWithoutUserInput, TugasUncheckedCreateWithoutUserInput> | TugasCreateWithoutUserInput[] | TugasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TugasCreateOrConnectWithoutUserInput | TugasCreateOrConnectWithoutUserInput[]
    upsert?: TugasUpsertWithWhereUniqueWithoutUserInput | TugasUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TugasCreateManyUserInputEnvelope
    set?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    disconnect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    delete?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    connect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    update?: TugasUpdateWithWhereUniqueWithoutUserInput | TugasUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TugasUpdateManyWithWhereWithoutUserInput | TugasUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TugasScalarWhereInput | TugasScalarWhereInput[]
  }

  export type NotificationCreateNestedManyWithoutAdminInput = {
    create?: XOR<NotificationCreateWithoutAdminInput, NotificationUncheckedCreateWithoutAdminInput> | NotificationCreateWithoutAdminInput[] | NotificationUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAdminInput | NotificationCreateOrConnectWithoutAdminInput[]
    createMany?: NotificationCreateManyAdminInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutAdminInput = {
    create?: XOR<ActivityLogCreateWithoutAdminInput, ActivityLogUncheckedCreateWithoutAdminInput> | ActivityLogCreateWithoutAdminInput[] | ActivityLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutAdminInput | ActivityLogCreateOrConnectWithoutAdminInput[]
    createMany?: ActivityLogCreateManyAdminInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type TugasCreateNestedManyWithoutAdminInput = {
    create?: XOR<TugasCreateWithoutAdminInput, TugasUncheckedCreateWithoutAdminInput> | TugasCreateWithoutAdminInput[] | TugasUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: TugasCreateOrConnectWithoutAdminInput | TugasCreateOrConnectWithoutAdminInput[]
    createMany?: TugasCreateManyAdminInputEnvelope
    connect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<NotificationCreateWithoutAdminInput, NotificationUncheckedCreateWithoutAdminInput> | NotificationCreateWithoutAdminInput[] | NotificationUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAdminInput | NotificationCreateOrConnectWithoutAdminInput[]
    createMany?: NotificationCreateManyAdminInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<ActivityLogCreateWithoutAdminInput, ActivityLogUncheckedCreateWithoutAdminInput> | ActivityLogCreateWithoutAdminInput[] | ActivityLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutAdminInput | ActivityLogCreateOrConnectWithoutAdminInput[]
    createMany?: ActivityLogCreateManyAdminInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type TugasUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<TugasCreateWithoutAdminInput, TugasUncheckedCreateWithoutAdminInput> | TugasCreateWithoutAdminInput[] | TugasUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: TugasCreateOrConnectWithoutAdminInput | TugasCreateOrConnectWithoutAdminInput[]
    createMany?: TugasCreateManyAdminInputEnvelope
    connect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
  }

  export type NotificationUpdateManyWithoutAdminNestedInput = {
    create?: XOR<NotificationCreateWithoutAdminInput, NotificationUncheckedCreateWithoutAdminInput> | NotificationCreateWithoutAdminInput[] | NotificationUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAdminInput | NotificationCreateOrConnectWithoutAdminInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutAdminInput | NotificationUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: NotificationCreateManyAdminInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutAdminInput | NotificationUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutAdminInput | NotificationUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ActivityLogCreateWithoutAdminInput, ActivityLogUncheckedCreateWithoutAdminInput> | ActivityLogCreateWithoutAdminInput[] | ActivityLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutAdminInput | ActivityLogCreateOrConnectWithoutAdminInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutAdminInput | ActivityLogUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ActivityLogCreateManyAdminInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutAdminInput | ActivityLogUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutAdminInput | ActivityLogUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type TugasUpdateManyWithoutAdminNestedInput = {
    create?: XOR<TugasCreateWithoutAdminInput, TugasUncheckedCreateWithoutAdminInput> | TugasCreateWithoutAdminInput[] | TugasUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: TugasCreateOrConnectWithoutAdminInput | TugasCreateOrConnectWithoutAdminInput[]
    upsert?: TugasUpsertWithWhereUniqueWithoutAdminInput | TugasUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: TugasCreateManyAdminInputEnvelope
    set?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    disconnect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    delete?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    connect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    update?: TugasUpdateWithWhereUniqueWithoutAdminInput | TugasUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: TugasUpdateManyWithWhereWithoutAdminInput | TugasUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: TugasScalarWhereInput | TugasScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<NotificationCreateWithoutAdminInput, NotificationUncheckedCreateWithoutAdminInput> | NotificationCreateWithoutAdminInput[] | NotificationUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAdminInput | NotificationCreateOrConnectWithoutAdminInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutAdminInput | NotificationUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: NotificationCreateManyAdminInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutAdminInput | NotificationUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutAdminInput | NotificationUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ActivityLogCreateWithoutAdminInput, ActivityLogUncheckedCreateWithoutAdminInput> | ActivityLogCreateWithoutAdminInput[] | ActivityLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutAdminInput | ActivityLogCreateOrConnectWithoutAdminInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutAdminInput | ActivityLogUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ActivityLogCreateManyAdminInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutAdminInput | ActivityLogUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutAdminInput | ActivityLogUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type TugasUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<TugasCreateWithoutAdminInput, TugasUncheckedCreateWithoutAdminInput> | TugasCreateWithoutAdminInput[] | TugasUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: TugasCreateOrConnectWithoutAdminInput | TugasCreateOrConnectWithoutAdminInput[]
    upsert?: TugasUpsertWithWhereUniqueWithoutAdminInput | TugasUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: TugasCreateManyAdminInputEnvelope
    set?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    disconnect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    delete?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    connect?: TugasWhereUniqueInput | TugasWhereUniqueInput[]
    update?: TugasUpdateWithWhereUniqueWithoutAdminInput | TugasUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: TugasUpdateManyWithWhereWithoutAdminInput | TugasUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: TugasScalarWhereInput | TugasScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLaporanInput = {
    create?: XOR<UserCreateWithoutLaporanInput, UserUncheckedCreateWithoutLaporanInput>
    connectOrCreate?: UserCreateOrConnectWithoutLaporanInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutLaporanNestedInput = {
    create?: XOR<UserCreateWithoutLaporanInput, UserUncheckedCreateWithoutLaporanInput>
    connectOrCreate?: UserCreateOrConnectWithoutLaporanInput
    upsert?: UserUpsertWithoutLaporanInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLaporanInput, UserUpdateWithoutLaporanInput>, UserUncheckedUpdateWithoutLaporanInput>
  }

  export type UserCreateNestedOneWithoutDataInjeksiInput = {
    create?: XOR<UserCreateWithoutDataInjeksiInput, UserUncheckedCreateWithoutDataInjeksiInput>
    connectOrCreate?: UserCreateOrConnectWithoutDataInjeksiInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutDataInjeksiNestedInput = {
    create?: XOR<UserCreateWithoutDataInjeksiInput, UserUncheckedCreateWithoutDataInjeksiInput>
    connectOrCreate?: UserCreateOrConnectWithoutDataInjeksiInput
    upsert?: UserUpsertWithoutDataInjeksiInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDataInjeksiInput, UserUpdateWithoutDataInjeksiInput>, UserUncheckedUpdateWithoutDataInjeksiInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<AdminCreateWithoutNotificationsInput, AdminUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutNotificationsInput
    connect?: AdminWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type AdminUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<AdminCreateWithoutNotificationsInput, AdminUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutNotificationsInput
    upsert?: AdminUpsertWithoutNotificationsInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutNotificationsInput, AdminUpdateWithoutNotificationsInput>, AdminUncheckedUpdateWithoutNotificationsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<AdminCreateWithoutActivityLogsInput, AdminUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutActivityLogsInput
    connect?: AdminWhereUniqueInput
  }

  export type UserUpdateOneWithoutActivityLogsNestedInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    upsert?: UserUpsertWithoutActivityLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityLogsInput, UserUpdateWithoutActivityLogsInput>, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type AdminUpdateOneWithoutActivityLogsNestedInput = {
    create?: XOR<AdminCreateWithoutActivityLogsInput, AdminUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutActivityLogsInput
    upsert?: AdminUpsertWithoutActivityLogsInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutActivityLogsInput, AdminUpdateWithoutActivityLogsInput>, AdminUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserCreateNestedOneWithoutTugasInput = {
    create?: XOR<UserCreateWithoutTugasInput, UserUncheckedCreateWithoutTugasInput>
    connectOrCreate?: UserCreateOrConnectWithoutTugasInput
    connect?: UserWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutTugasDibuatInput = {
    create?: XOR<AdminCreateWithoutTugasDibuatInput, AdminUncheckedCreateWithoutTugasDibuatInput>
    connectOrCreate?: AdminCreateOrConnectWithoutTugasDibuatInput
    connect?: AdminWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTugasNestedInput = {
    create?: XOR<UserCreateWithoutTugasInput, UserUncheckedCreateWithoutTugasInput>
    connectOrCreate?: UserCreateOrConnectWithoutTugasInput
    upsert?: UserUpsertWithoutTugasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTugasInput, UserUpdateWithoutTugasInput>, UserUncheckedUpdateWithoutTugasInput>
  }

  export type AdminUpdateOneRequiredWithoutTugasDibuatNestedInput = {
    create?: XOR<AdminCreateWithoutTugasDibuatInput, AdminUncheckedCreateWithoutTugasDibuatInput>
    connectOrCreate?: AdminCreateOrConnectWithoutTugasDibuatInput
    upsert?: AdminUpsertWithoutTugasDibuatInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutTugasDibuatInput, AdminUpdateWithoutTugasDibuatInput>, AdminUncheckedUpdateWithoutTugasDibuatInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LaporanInspeksiCreateWithoutUserInput = {
    tanggal: Date | string
    lokasi: string
    kategori: string
    deskripsi: string
    risiko: string
    tindakan: string
    foto?: string | null
    status?: string
    catatan?: string | null
    dueDate?: Date | string | null
    fungsi?: string | null
    statusTemuan?: string
    tanggalPenyelesaian?: Date | string | null
    catatanPenyelesaian?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LaporanInspeksiUncheckedCreateWithoutUserInput = {
    id?: number
    tanggal: Date | string
    lokasi: string
    kategori: string
    deskripsi: string
    risiko: string
    tindakan: string
    foto?: string | null
    status?: string
    catatan?: string | null
    dueDate?: Date | string | null
    fungsi?: string | null
    statusTemuan?: string
    tanggalPenyelesaian?: Date | string | null
    catatanPenyelesaian?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LaporanInspeksiCreateOrConnectWithoutUserInput = {
    where: LaporanInspeksiWhereUniqueInput
    create: XOR<LaporanInspeksiCreateWithoutUserInput, LaporanInspeksiUncheckedCreateWithoutUserInput>
  }

  export type LaporanInspeksiCreateManyUserInputEnvelope = {
    data: LaporanInspeksiCreateManyUserInput | LaporanInspeksiCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DataInjeksiCreateWithoutUserInput = {
    tanggal: Date | string
    nilaiRaw: number
    hasilPerhitungan?: number | null
    formulaUsed?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataInjeksiUncheckedCreateWithoutUserInput = {
    id?: number
    tanggal: Date | string
    nilaiRaw: number
    hasilPerhitungan?: number | null
    formulaUsed?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataInjeksiCreateOrConnectWithoutUserInput = {
    where: DataInjeksiWhereUniqueInput
    create: XOR<DataInjeksiCreateWithoutUserInput, DataInjeksiUncheckedCreateWithoutUserInput>
  }

  export type DataInjeksiCreateManyUserInputEnvelope = {
    data: DataInjeksiCreateManyUserInput | DataInjeksiCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    type: string
    title: string
    message: string
    isRead?: boolean
    data?: string | null
    createdAt?: Date | string
    admin?: AdminCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    adminId?: number | null
    type: string
    title: string
    message: string
    isRead?: boolean
    data?: string | null
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutUserInput = {
    action: string
    entityType: string
    entityId?: number | null
    description?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    admin?: AdminCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateWithoutUserInput = {
    id?: number
    adminId?: number | null
    action: string
    entityType: string
    entityId?: number | null
    description?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogCreateManyUserInputEnvelope = {
    data: ActivityLogCreateManyUserInput | ActivityLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TugasCreateWithoutUserInput = {
    judul: string
    deskripsi: string
    fileLampiran?: string | null
    lokasiField?: string | null
    lokasiArea?: string | null
    lokasiSumur?: string | null
    tanggalMulai?: Date | string | null
    dueDate?: Date | string | null
    dokumenPengerjaan?: string | null
    dataPengerjaan?: string | null
    fotoPengerjaan?: string | null
    laporanSelesai?: string | null
    fotoSelesai?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: AdminCreateNestedOneWithoutTugasDibuatInput
  }

  export type TugasUncheckedCreateWithoutUserInput = {
    id?: number
    judul: string
    deskripsi: string
    fileLampiran?: string | null
    adminId: number
    lokasiField?: string | null
    lokasiArea?: string | null
    lokasiSumur?: string | null
    tanggalMulai?: Date | string | null
    dueDate?: Date | string | null
    dokumenPengerjaan?: string | null
    dataPengerjaan?: string | null
    fotoPengerjaan?: string | null
    laporanSelesai?: string | null
    fotoSelesai?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TugasCreateOrConnectWithoutUserInput = {
    where: TugasWhereUniqueInput
    create: XOR<TugasCreateWithoutUserInput, TugasUncheckedCreateWithoutUserInput>
  }

  export type TugasCreateManyUserInputEnvelope = {
    data: TugasCreateManyUserInput | TugasCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LaporanInspeksiUpsertWithWhereUniqueWithoutUserInput = {
    where: LaporanInspeksiWhereUniqueInput
    update: XOR<LaporanInspeksiUpdateWithoutUserInput, LaporanInspeksiUncheckedUpdateWithoutUserInput>
    create: XOR<LaporanInspeksiCreateWithoutUserInput, LaporanInspeksiUncheckedCreateWithoutUserInput>
  }

  export type LaporanInspeksiUpdateWithWhereUniqueWithoutUserInput = {
    where: LaporanInspeksiWhereUniqueInput
    data: XOR<LaporanInspeksiUpdateWithoutUserInput, LaporanInspeksiUncheckedUpdateWithoutUserInput>
  }

  export type LaporanInspeksiUpdateManyWithWhereWithoutUserInput = {
    where: LaporanInspeksiScalarWhereInput
    data: XOR<LaporanInspeksiUpdateManyMutationInput, LaporanInspeksiUncheckedUpdateManyWithoutUserInput>
  }

  export type LaporanInspeksiScalarWhereInput = {
    AND?: LaporanInspeksiScalarWhereInput | LaporanInspeksiScalarWhereInput[]
    OR?: LaporanInspeksiScalarWhereInput[]
    NOT?: LaporanInspeksiScalarWhereInput | LaporanInspeksiScalarWhereInput[]
    id?: IntFilter<"LaporanInspeksi"> | number
    userId?: IntFilter<"LaporanInspeksi"> | number
    tanggal?: DateTimeFilter<"LaporanInspeksi"> | Date | string
    lokasi?: StringFilter<"LaporanInspeksi"> | string
    kategori?: StringFilter<"LaporanInspeksi"> | string
    deskripsi?: StringFilter<"LaporanInspeksi"> | string
    risiko?: StringFilter<"LaporanInspeksi"> | string
    tindakan?: StringFilter<"LaporanInspeksi"> | string
    foto?: StringNullableFilter<"LaporanInspeksi"> | string | null
    status?: StringFilter<"LaporanInspeksi"> | string
    catatan?: StringNullableFilter<"LaporanInspeksi"> | string | null
    dueDate?: DateTimeNullableFilter<"LaporanInspeksi"> | Date | string | null
    fungsi?: StringNullableFilter<"LaporanInspeksi"> | string | null
    statusTemuan?: StringFilter<"LaporanInspeksi"> | string
    tanggalPenyelesaian?: DateTimeNullableFilter<"LaporanInspeksi"> | Date | string | null
    catatanPenyelesaian?: StringNullableFilter<"LaporanInspeksi"> | string | null
    createdAt?: DateTimeFilter<"LaporanInspeksi"> | Date | string
    updatedAt?: DateTimeFilter<"LaporanInspeksi"> | Date | string
  }

  export type DataInjeksiUpsertWithWhereUniqueWithoutUserInput = {
    where: DataInjeksiWhereUniqueInput
    update: XOR<DataInjeksiUpdateWithoutUserInput, DataInjeksiUncheckedUpdateWithoutUserInput>
    create: XOR<DataInjeksiCreateWithoutUserInput, DataInjeksiUncheckedCreateWithoutUserInput>
  }

  export type DataInjeksiUpdateWithWhereUniqueWithoutUserInput = {
    where: DataInjeksiWhereUniqueInput
    data: XOR<DataInjeksiUpdateWithoutUserInput, DataInjeksiUncheckedUpdateWithoutUserInput>
  }

  export type DataInjeksiUpdateManyWithWhereWithoutUserInput = {
    where: DataInjeksiScalarWhereInput
    data: XOR<DataInjeksiUpdateManyMutationInput, DataInjeksiUncheckedUpdateManyWithoutUserInput>
  }

  export type DataInjeksiScalarWhereInput = {
    AND?: DataInjeksiScalarWhereInput | DataInjeksiScalarWhereInput[]
    OR?: DataInjeksiScalarWhereInput[]
    NOT?: DataInjeksiScalarWhereInput | DataInjeksiScalarWhereInput[]
    id?: IntFilter<"DataInjeksi"> | number
    userId?: IntFilter<"DataInjeksi"> | number
    tanggal?: DateTimeFilter<"DataInjeksi"> | Date | string
    nilaiRaw?: FloatFilter<"DataInjeksi"> | number
    hasilPerhitungan?: FloatNullableFilter<"DataInjeksi"> | number | null
    formulaUsed?: StringNullableFilter<"DataInjeksi"> | string | null
    status?: StringFilter<"DataInjeksi"> | string
    createdAt?: DateTimeFilter<"DataInjeksi"> | Date | string
    updatedAt?: DateTimeFilter<"DataInjeksi"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntNullableFilter<"Notification"> | number | null
    adminId?: IntNullableFilter<"Notification"> | number | null
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    data?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutUserInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: IntFilter<"ActivityLog"> | number
    userId?: IntNullableFilter<"ActivityLog"> | number | null
    adminId?: IntNullableFilter<"ActivityLog"> | number | null
    action?: StringFilter<"ActivityLog"> | string
    entityType?: StringFilter<"ActivityLog"> | string
    entityId?: IntNullableFilter<"ActivityLog"> | number | null
    description?: StringNullableFilter<"ActivityLog"> | string | null
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    userAgent?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type TugasUpsertWithWhereUniqueWithoutUserInput = {
    where: TugasWhereUniqueInput
    update: XOR<TugasUpdateWithoutUserInput, TugasUncheckedUpdateWithoutUserInput>
    create: XOR<TugasCreateWithoutUserInput, TugasUncheckedCreateWithoutUserInput>
  }

  export type TugasUpdateWithWhereUniqueWithoutUserInput = {
    where: TugasWhereUniqueInput
    data: XOR<TugasUpdateWithoutUserInput, TugasUncheckedUpdateWithoutUserInput>
  }

  export type TugasUpdateManyWithWhereWithoutUserInput = {
    where: TugasScalarWhereInput
    data: XOR<TugasUpdateManyMutationInput, TugasUncheckedUpdateManyWithoutUserInput>
  }

  export type TugasScalarWhereInput = {
    AND?: TugasScalarWhereInput | TugasScalarWhereInput[]
    OR?: TugasScalarWhereInput[]
    NOT?: TugasScalarWhereInput | TugasScalarWhereInput[]
    id?: IntFilter<"Tugas"> | number
    judul?: StringFilter<"Tugas"> | string
    deskripsi?: StringFilter<"Tugas"> | string
    fileLampiran?: StringNullableFilter<"Tugas"> | string | null
    userId?: IntFilter<"Tugas"> | number
    adminId?: IntFilter<"Tugas"> | number
    lokasiField?: StringNullableFilter<"Tugas"> | string | null
    lokasiArea?: StringNullableFilter<"Tugas"> | string | null
    lokasiSumur?: StringNullableFilter<"Tugas"> | string | null
    tanggalMulai?: DateTimeNullableFilter<"Tugas"> | Date | string | null
    dueDate?: DateTimeNullableFilter<"Tugas"> | Date | string | null
    dokumenPengerjaan?: StringNullableFilter<"Tugas"> | string | null
    dataPengerjaan?: StringNullableFilter<"Tugas"> | string | null
    fotoPengerjaan?: StringNullableFilter<"Tugas"> | string | null
    laporanSelesai?: StringNullableFilter<"Tugas"> | string | null
    fotoSelesai?: StringNullableFilter<"Tugas"> | string | null
    status?: StringFilter<"Tugas"> | string
    createdAt?: DateTimeFilter<"Tugas"> | Date | string
    updatedAt?: DateTimeFilter<"Tugas"> | Date | string
  }

  export type NotificationCreateWithoutAdminInput = {
    type: string
    title: string
    message: string
    isRead?: boolean
    data?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutAdminInput = {
    id?: number
    userId?: number | null
    type: string
    title: string
    message: string
    isRead?: boolean
    data?: string | null
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutAdminInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutAdminInput, NotificationUncheckedCreateWithoutAdminInput>
  }

  export type NotificationCreateManyAdminInputEnvelope = {
    data: NotificationCreateManyAdminInput | NotificationCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutAdminInput = {
    action: string
    entityType: string
    entityId?: number | null
    description?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateWithoutAdminInput = {
    id?: number
    userId?: number | null
    action: string
    entityType: string
    entityId?: number | null
    description?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutAdminInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutAdminInput, ActivityLogUncheckedCreateWithoutAdminInput>
  }

  export type ActivityLogCreateManyAdminInputEnvelope = {
    data: ActivityLogCreateManyAdminInput | ActivityLogCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type TugasCreateWithoutAdminInput = {
    judul: string
    deskripsi: string
    fileLampiran?: string | null
    lokasiField?: string | null
    lokasiArea?: string | null
    lokasiSumur?: string | null
    tanggalMulai?: Date | string | null
    dueDate?: Date | string | null
    dokumenPengerjaan?: string | null
    dataPengerjaan?: string | null
    fotoPengerjaan?: string | null
    laporanSelesai?: string | null
    fotoSelesai?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTugasInput
  }

  export type TugasUncheckedCreateWithoutAdminInput = {
    id?: number
    judul: string
    deskripsi: string
    fileLampiran?: string | null
    userId: number
    lokasiField?: string | null
    lokasiArea?: string | null
    lokasiSumur?: string | null
    tanggalMulai?: Date | string | null
    dueDate?: Date | string | null
    dokumenPengerjaan?: string | null
    dataPengerjaan?: string | null
    fotoPengerjaan?: string | null
    laporanSelesai?: string | null
    fotoSelesai?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TugasCreateOrConnectWithoutAdminInput = {
    where: TugasWhereUniqueInput
    create: XOR<TugasCreateWithoutAdminInput, TugasUncheckedCreateWithoutAdminInput>
  }

  export type TugasCreateManyAdminInputEnvelope = {
    data: TugasCreateManyAdminInput | TugasCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type NotificationUpsertWithWhereUniqueWithoutAdminInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutAdminInput, NotificationUncheckedUpdateWithoutAdminInput>
    create: XOR<NotificationCreateWithoutAdminInput, NotificationUncheckedCreateWithoutAdminInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutAdminInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutAdminInput, NotificationUncheckedUpdateWithoutAdminInput>
  }

  export type NotificationUpdateManyWithWhereWithoutAdminInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutAdminInput>
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutAdminInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutAdminInput, ActivityLogUncheckedUpdateWithoutAdminInput>
    create: XOR<ActivityLogCreateWithoutAdminInput, ActivityLogUncheckedCreateWithoutAdminInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutAdminInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutAdminInput, ActivityLogUncheckedUpdateWithoutAdminInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutAdminInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutAdminInput>
  }

  export type TugasUpsertWithWhereUniqueWithoutAdminInput = {
    where: TugasWhereUniqueInput
    update: XOR<TugasUpdateWithoutAdminInput, TugasUncheckedUpdateWithoutAdminInput>
    create: XOR<TugasCreateWithoutAdminInput, TugasUncheckedCreateWithoutAdminInput>
  }

  export type TugasUpdateWithWhereUniqueWithoutAdminInput = {
    where: TugasWhereUniqueInput
    data: XOR<TugasUpdateWithoutAdminInput, TugasUncheckedUpdateWithoutAdminInput>
  }

  export type TugasUpdateManyWithWhereWithoutAdminInput = {
    where: TugasScalarWhereInput
    data: XOR<TugasUpdateManyMutationInput, TugasUncheckedUpdateManyWithoutAdminInput>
  }

  export type UserCreateWithoutLaporanInput = {
    nama: string
    email: string
    password: string
    jabatan: string
    lokasiSite: string
    foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dataInjeksi?: DataInjeksiCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    tugas?: TugasCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLaporanInput = {
    id?: number
    nama: string
    email: string
    password: string
    jabatan: string
    lokasiSite: string
    foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dataInjeksi?: DataInjeksiUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    tugas?: TugasUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLaporanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLaporanInput, UserUncheckedCreateWithoutLaporanInput>
  }

  export type UserUpsertWithoutLaporanInput = {
    update: XOR<UserUpdateWithoutLaporanInput, UserUncheckedUpdateWithoutLaporanInput>
    create: XOR<UserCreateWithoutLaporanInput, UserUncheckedCreateWithoutLaporanInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLaporanInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLaporanInput, UserUncheckedUpdateWithoutLaporanInput>
  }

  export type UserUpdateWithoutLaporanInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    lokasiSite?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataInjeksi?: DataInjeksiUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    tugas?: TugasUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLaporanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    lokasiSite?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataInjeksi?: DataInjeksiUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    tugas?: TugasUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDataInjeksiInput = {
    nama: string
    email: string
    password: string
    jabatan: string
    lokasiSite: string
    foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    laporan?: LaporanInspeksiCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    tugas?: TugasCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDataInjeksiInput = {
    id?: number
    nama: string
    email: string
    password: string
    jabatan: string
    lokasiSite: string
    foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    laporan?: LaporanInspeksiUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    tugas?: TugasUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDataInjeksiInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDataInjeksiInput, UserUncheckedCreateWithoutDataInjeksiInput>
  }

  export type UserUpsertWithoutDataInjeksiInput = {
    update: XOR<UserUpdateWithoutDataInjeksiInput, UserUncheckedUpdateWithoutDataInjeksiInput>
    create: XOR<UserCreateWithoutDataInjeksiInput, UserUncheckedCreateWithoutDataInjeksiInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDataInjeksiInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDataInjeksiInput, UserUncheckedUpdateWithoutDataInjeksiInput>
  }

  export type UserUpdateWithoutDataInjeksiInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    lokasiSite?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laporan?: LaporanInspeksiUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    tugas?: TugasUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDataInjeksiInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    lokasiSite?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laporan?: LaporanInspeksiUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    tugas?: TugasUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    nama: string
    email: string
    password: string
    jabatan: string
    lokasiSite: string
    foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    laporan?: LaporanInspeksiCreateNestedManyWithoutUserInput
    dataInjeksi?: DataInjeksiCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    tugas?: TugasCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number
    nama: string
    email: string
    password: string
    jabatan: string
    lokasiSite: string
    foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    laporan?: LaporanInspeksiUncheckedCreateNestedManyWithoutUserInput
    dataInjeksi?: DataInjeksiUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    tugas?: TugasUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type AdminCreateWithoutNotificationsInput = {
    nama: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    activityLogs?: ActivityLogCreateNestedManyWithoutAdminInput
    tugasDibuat?: TugasCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutNotificationsInput = {
    id?: number
    nama: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutAdminInput
    tugasDibuat?: TugasUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutNotificationsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutNotificationsInput, AdminUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    lokasiSite?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laporan?: LaporanInspeksiUpdateManyWithoutUserNestedInput
    dataInjeksi?: DataInjeksiUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    tugas?: TugasUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    lokasiSite?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laporan?: LaporanInspeksiUncheckedUpdateManyWithoutUserNestedInput
    dataInjeksi?: DataInjeksiUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    tugas?: TugasUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AdminUpsertWithoutNotificationsInput = {
    update: XOR<AdminUpdateWithoutNotificationsInput, AdminUncheckedUpdateWithoutNotificationsInput>
    create: XOR<AdminCreateWithoutNotificationsInput, AdminUncheckedCreateWithoutNotificationsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutNotificationsInput, AdminUncheckedUpdateWithoutNotificationsInput>
  }

  export type AdminUpdateWithoutNotificationsInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityLogs?: ActivityLogUpdateManyWithoutAdminNestedInput
    tugasDibuat?: TugasUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutAdminNestedInput
    tugasDibuat?: TugasUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserCreateWithoutActivityLogsInput = {
    nama: string
    email: string
    password: string
    jabatan: string
    lokasiSite: string
    foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    laporan?: LaporanInspeksiCreateNestedManyWithoutUserInput
    dataInjeksi?: DataInjeksiCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    tugas?: TugasCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActivityLogsInput = {
    id?: number
    nama: string
    email: string
    password: string
    jabatan: string
    lokasiSite: string
    foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    laporan?: LaporanInspeksiUncheckedCreateNestedManyWithoutUserInput
    dataInjeksi?: DataInjeksiUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    tugas?: TugasUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActivityLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
  }

  export type AdminCreateWithoutActivityLogsInput = {
    nama: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationCreateNestedManyWithoutAdminInput
    tugasDibuat?: TugasCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutActivityLogsInput = {
    id?: number
    nama: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutAdminInput
    tugasDibuat?: TugasUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutActivityLogsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutActivityLogsInput, AdminUncheckedCreateWithoutActivityLogsInput>
  }

  export type UserUpsertWithoutActivityLogsInput = {
    update: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserUpdateWithoutActivityLogsInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    lokasiSite?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laporan?: LaporanInspeksiUpdateManyWithoutUserNestedInput
    dataInjeksi?: DataInjeksiUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    tugas?: TugasUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    lokasiSite?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laporan?: LaporanInspeksiUncheckedUpdateManyWithoutUserNestedInput
    dataInjeksi?: DataInjeksiUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    tugas?: TugasUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AdminUpsertWithoutActivityLogsInput = {
    update: XOR<AdminUpdateWithoutActivityLogsInput, AdminUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<AdminCreateWithoutActivityLogsInput, AdminUncheckedCreateWithoutActivityLogsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutActivityLogsInput, AdminUncheckedUpdateWithoutActivityLogsInput>
  }

  export type AdminUpdateWithoutActivityLogsInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUpdateManyWithoutAdminNestedInput
    tugasDibuat?: TugasUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutActivityLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutAdminNestedInput
    tugasDibuat?: TugasUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserCreateWithoutTugasInput = {
    nama: string
    email: string
    password: string
    jabatan: string
    lokasiSite: string
    foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    laporan?: LaporanInspeksiCreateNestedManyWithoutUserInput
    dataInjeksi?: DataInjeksiCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTugasInput = {
    id?: number
    nama: string
    email: string
    password: string
    jabatan: string
    lokasiSite: string
    foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    laporan?: LaporanInspeksiUncheckedCreateNestedManyWithoutUserInput
    dataInjeksi?: DataInjeksiUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTugasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTugasInput, UserUncheckedCreateWithoutTugasInput>
  }

  export type AdminCreateWithoutTugasDibuatInput = {
    nama: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationCreateNestedManyWithoutAdminInput
    activityLogs?: ActivityLogCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutTugasDibuatInput = {
    id?: number
    nama: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutAdminInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutTugasDibuatInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutTugasDibuatInput, AdminUncheckedCreateWithoutTugasDibuatInput>
  }

  export type UserUpsertWithoutTugasInput = {
    update: XOR<UserUpdateWithoutTugasInput, UserUncheckedUpdateWithoutTugasInput>
    create: XOR<UserCreateWithoutTugasInput, UserUncheckedCreateWithoutTugasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTugasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTugasInput, UserUncheckedUpdateWithoutTugasInput>
  }

  export type UserUpdateWithoutTugasInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    lokasiSite?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laporan?: LaporanInspeksiUpdateManyWithoutUserNestedInput
    dataInjeksi?: DataInjeksiUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTugasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jabatan?: StringFieldUpdateOperationsInput | string
    lokasiSite?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laporan?: LaporanInspeksiUncheckedUpdateManyWithoutUserNestedInput
    dataInjeksi?: DataInjeksiUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AdminUpsertWithoutTugasDibuatInput = {
    update: XOR<AdminUpdateWithoutTugasDibuatInput, AdminUncheckedUpdateWithoutTugasDibuatInput>
    create: XOR<AdminCreateWithoutTugasDibuatInput, AdminUncheckedCreateWithoutTugasDibuatInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutTugasDibuatInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutTugasDibuatInput, AdminUncheckedUpdateWithoutTugasDibuatInput>
  }

  export type AdminUpdateWithoutTugasDibuatInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUpdateManyWithoutAdminNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutTugasDibuatInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutAdminNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type LaporanInspeksiCreateManyUserInput = {
    id?: number
    tanggal: Date | string
    lokasi: string
    kategori: string
    deskripsi: string
    risiko: string
    tindakan: string
    foto?: string | null
    status?: string
    catatan?: string | null
    dueDate?: Date | string | null
    fungsi?: string | null
    statusTemuan?: string
    tanggalPenyelesaian?: Date | string | null
    catatanPenyelesaian?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataInjeksiCreateManyUserInput = {
    id?: number
    tanggal: Date | string
    nilaiRaw: number
    hasilPerhitungan?: number | null
    formulaUsed?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    adminId?: number | null
    type: string
    title: string
    message: string
    isRead?: boolean
    data?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogCreateManyUserInput = {
    id?: number
    adminId?: number | null
    action: string
    entityType: string
    entityId?: number | null
    description?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type TugasCreateManyUserInput = {
    id?: number
    judul: string
    deskripsi: string
    fileLampiran?: string | null
    adminId: number
    lokasiField?: string | null
    lokasiArea?: string | null
    lokasiSumur?: string | null
    tanggalMulai?: Date | string | null
    dueDate?: Date | string | null
    dokumenPengerjaan?: string | null
    dataPengerjaan?: string | null
    fotoPengerjaan?: string | null
    laporanSelesai?: string | null
    fotoSelesai?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LaporanInspeksiUpdateWithoutUserInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    lokasi?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    risiko?: StringFieldUpdateOperationsInput | string
    tindakan?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fungsi?: NullableStringFieldUpdateOperationsInput | string | null
    statusTemuan?: StringFieldUpdateOperationsInput | string
    tanggalPenyelesaian?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatanPenyelesaian?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanInspeksiUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    lokasi?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    risiko?: StringFieldUpdateOperationsInput | string
    tindakan?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fungsi?: NullableStringFieldUpdateOperationsInput | string | null
    statusTemuan?: StringFieldUpdateOperationsInput | string
    tanggalPenyelesaian?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatanPenyelesaian?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanInspeksiUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    lokasi?: StringFieldUpdateOperationsInput | string
    kategori?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    risiko?: StringFieldUpdateOperationsInput | string
    tindakan?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fungsi?: NullableStringFieldUpdateOperationsInput | string | null
    statusTemuan?: StringFieldUpdateOperationsInput | string
    tanggalPenyelesaian?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    catatanPenyelesaian?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataInjeksiUpdateWithoutUserInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nilaiRaw?: FloatFieldUpdateOperationsInput | number
    hasilPerhitungan?: NullableFloatFieldUpdateOperationsInput | number | null
    formulaUsed?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataInjeksiUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nilaiRaw?: FloatFieldUpdateOperationsInput | number
    hasilPerhitungan?: NullableFloatFieldUpdateOperationsInput | number | null
    formulaUsed?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataInjeksiUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    nilaiRaw?: FloatFieldUpdateOperationsInput | number
    hasilPerhitungan?: NullableFloatFieldUpdateOperationsInput | number | null
    formulaUsed?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUpdateWithoutUserInput = {
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TugasUpdateWithoutUserInput = {
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    fileLampiran?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiField?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiArea?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiSumur?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dokumenPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    dataPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    laporanSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneRequiredWithoutTugasDibuatNestedInput
  }

  export type TugasUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    fileLampiran?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: IntFieldUpdateOperationsInput | number
    lokasiField?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiArea?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiSumur?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dokumenPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    dataPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    laporanSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TugasUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    fileLampiran?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: IntFieldUpdateOperationsInput | number
    lokasiField?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiArea?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiSumur?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dokumenPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    dataPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    laporanSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyAdminInput = {
    id?: number
    userId?: number | null
    type: string
    title: string
    message: string
    isRead?: boolean
    data?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogCreateManyAdminInput = {
    id?: number
    userId?: number | null
    action: string
    entityType: string
    entityId?: number | null
    description?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type TugasCreateManyAdminInput = {
    id?: number
    judul: string
    deskripsi: string
    fileLampiran?: string | null
    userId: number
    lokasiField?: string | null
    lokasiArea?: string | null
    lokasiSumur?: string | null
    tanggalMulai?: Date | string | null
    dueDate?: Date | string | null
    dokumenPengerjaan?: string | null
    dataPengerjaan?: string | null
    fotoPengerjaan?: string | null
    laporanSelesai?: string | null
    fotoSelesai?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateWithoutAdminInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUpdateWithoutAdminInput = {
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TugasUpdateWithoutAdminInput = {
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    fileLampiran?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiField?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiArea?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiSumur?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dokumenPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    dataPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    laporanSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTugasNestedInput
  }

  export type TugasUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    fileLampiran?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    lokasiField?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiArea?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiSumur?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dokumenPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    dataPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    laporanSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TugasUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    fileLampiran?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    lokasiField?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiArea?: NullableStringFieldUpdateOperationsInput | string | null
    lokasiSumur?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dokumenPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    dataPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoPengerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    laporanSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    fotoSelesai?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminCountOutputTypeDefaultArgs instead
     */
    export type AdminCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LaporanInspeksiDefaultArgs instead
     */
    export type LaporanInspeksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LaporanInspeksiDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DataInjeksiDefaultArgs instead
     */
    export type DataInjeksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DataInjeksiDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationDefaultArgs instead
     */
    export type NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MaterialDefaultArgs instead
     */
    export type MaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MaterialDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KompetensiPersonilDefaultArgs instead
     */
    export type KompetensiPersonilArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KompetensiPersonilDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SertifikasiPeralatanDefaultArgs instead
     */
    export type SertifikasiPeralatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SertifikasiPeralatanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SystemSettingsDefaultArgs instead
     */
    export type SystemSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SystemSettingsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActivityLogDefaultArgs instead
     */
    export type ActivityLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActivityLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MasterLokasiDefaultArgs instead
     */
    export type MasterLokasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MasterLokasiDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TugasDefaultArgs instead
     */
    export type TugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TugasDefaultArgs<ExtArgs>

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