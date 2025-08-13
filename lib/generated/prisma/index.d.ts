
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
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model Sheet
 * 
 */
export type Sheet = $Result.DefaultSelection<Prisma.$SheetPayload>
/**
 * Model ComparisonDiff
 * 
 */
export type ComparisonDiff = $Result.DefaultSelection<Prisma.$ComparisonDiffPayload>
/**
 * Model SubContractor
 * 
 */
export type SubContractor = $Result.DefaultSelection<Prisma.$SubContractorPayload>
/**
 * Model Box
 * 
 */
export type Box = $Result.DefaultSelection<Prisma.$BoxPayload>
/**
 * Model Reference
 * 
 */
export type Reference = $Result.DefaultSelection<Prisma.$ReferencePayload>
/**
 * Model Distance
 * 
 */
export type Distance = $Result.DefaultSelection<Prisma.$DistancePayload>
/**
 * Model AlignmentResult
 * 
 */
export type AlignmentResult = $Result.DefaultSelection<Prisma.$AlignmentResultPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
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
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sheet`: Exposes CRUD operations for the **Sheet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sheets
    * const sheets = await prisma.sheet.findMany()
    * ```
    */
  get sheet(): Prisma.SheetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comparisonDiff`: Exposes CRUD operations for the **ComparisonDiff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ComparisonDiffs
    * const comparisonDiffs = await prisma.comparisonDiff.findMany()
    * ```
    */
  get comparisonDiff(): Prisma.ComparisonDiffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subContractor`: Exposes CRUD operations for the **SubContractor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubContractors
    * const subContractors = await prisma.subContractor.findMany()
    * ```
    */
  get subContractor(): Prisma.SubContractorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.box`: Exposes CRUD operations for the **Box** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boxes
    * const boxes = await prisma.box.findMany()
    * ```
    */
  get box(): Prisma.BoxDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reference`: Exposes CRUD operations for the **Reference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more References
    * const references = await prisma.reference.findMany()
    * ```
    */
  get reference(): Prisma.ReferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.distance`: Exposes CRUD operations for the **Distance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Distances
    * const distances = await prisma.distance.findMany()
    * ```
    */
  get distance(): Prisma.DistanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alignmentResult`: Exposes CRUD operations for the **AlignmentResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlignmentResults
    * const alignmentResults = await prisma.alignmentResult.findMany()
    * ```
    */
  get alignmentResult(): Prisma.AlignmentResultDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
    Project: 'Project',
    Document: 'Document',
    Sheet: 'Sheet',
    ComparisonDiff: 'ComparisonDiff',
    SubContractor: 'SubContractor',
    Box: 'Box',
    Reference: 'Reference',
    Distance: 'Distance',
    AlignmentResult: 'AlignmentResult'
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
      modelProps: "project" | "document" | "sheet" | "comparisonDiff" | "subContractor" | "box" | "reference" | "distance" | "alignmentResult"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      Sheet: {
        payload: Prisma.$SheetPayload<ExtArgs>
        fields: Prisma.SheetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SheetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SheetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          findFirst: {
            args: Prisma.SheetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SheetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          findMany: {
            args: Prisma.SheetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>[]
          }
          create: {
            args: Prisma.SheetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          createMany: {
            args: Prisma.SheetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SheetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>[]
          }
          delete: {
            args: Prisma.SheetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          update: {
            args: Prisma.SheetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          deleteMany: {
            args: Prisma.SheetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SheetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SheetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>[]
          }
          upsert: {
            args: Prisma.SheetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetPayload>
          }
          aggregate: {
            args: Prisma.SheetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSheet>
          }
          groupBy: {
            args: Prisma.SheetGroupByArgs<ExtArgs>
            result: $Utils.Optional<SheetGroupByOutputType>[]
          }
          count: {
            args: Prisma.SheetCountArgs<ExtArgs>
            result: $Utils.Optional<SheetCountAggregateOutputType> | number
          }
        }
      }
      ComparisonDiff: {
        payload: Prisma.$ComparisonDiffPayload<ExtArgs>
        fields: Prisma.ComparisonDiffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComparisonDiffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComparisonDiffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComparisonDiffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComparisonDiffPayload>
          }
          findFirst: {
            args: Prisma.ComparisonDiffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComparisonDiffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComparisonDiffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComparisonDiffPayload>
          }
          findMany: {
            args: Prisma.ComparisonDiffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComparisonDiffPayload>[]
          }
          create: {
            args: Prisma.ComparisonDiffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComparisonDiffPayload>
          }
          createMany: {
            args: Prisma.ComparisonDiffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComparisonDiffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComparisonDiffPayload>[]
          }
          delete: {
            args: Prisma.ComparisonDiffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComparisonDiffPayload>
          }
          update: {
            args: Prisma.ComparisonDiffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComparisonDiffPayload>
          }
          deleteMany: {
            args: Prisma.ComparisonDiffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComparisonDiffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComparisonDiffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComparisonDiffPayload>[]
          }
          upsert: {
            args: Prisma.ComparisonDiffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComparisonDiffPayload>
          }
          aggregate: {
            args: Prisma.ComparisonDiffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComparisonDiff>
          }
          groupBy: {
            args: Prisma.ComparisonDiffGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComparisonDiffGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComparisonDiffCountArgs<ExtArgs>
            result: $Utils.Optional<ComparisonDiffCountAggregateOutputType> | number
          }
        }
      }
      SubContractor: {
        payload: Prisma.$SubContractorPayload<ExtArgs>
        fields: Prisma.SubContractorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubContractorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubContractorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubContractorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubContractorPayload>
          }
          findFirst: {
            args: Prisma.SubContractorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubContractorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubContractorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubContractorPayload>
          }
          findMany: {
            args: Prisma.SubContractorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubContractorPayload>[]
          }
          create: {
            args: Prisma.SubContractorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubContractorPayload>
          }
          createMany: {
            args: Prisma.SubContractorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubContractorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubContractorPayload>[]
          }
          delete: {
            args: Prisma.SubContractorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubContractorPayload>
          }
          update: {
            args: Prisma.SubContractorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubContractorPayload>
          }
          deleteMany: {
            args: Prisma.SubContractorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubContractorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubContractorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubContractorPayload>[]
          }
          upsert: {
            args: Prisma.SubContractorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubContractorPayload>
          }
          aggregate: {
            args: Prisma.SubContractorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubContractor>
          }
          groupBy: {
            args: Prisma.SubContractorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubContractorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubContractorCountArgs<ExtArgs>
            result: $Utils.Optional<SubContractorCountAggregateOutputType> | number
          }
        }
      }
      Box: {
        payload: Prisma.$BoxPayload<ExtArgs>
        fields: Prisma.BoxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxPayload>
          }
          findFirst: {
            args: Prisma.BoxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxPayload>
          }
          findMany: {
            args: Prisma.BoxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxPayload>[]
          }
          create: {
            args: Prisma.BoxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxPayload>
          }
          createMany: {
            args: Prisma.BoxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxPayload>[]
          }
          delete: {
            args: Prisma.BoxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxPayload>
          }
          update: {
            args: Prisma.BoxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxPayload>
          }
          deleteMany: {
            args: Prisma.BoxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BoxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxPayload>[]
          }
          upsert: {
            args: Prisma.BoxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxPayload>
          }
          aggregate: {
            args: Prisma.BoxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBox>
          }
          groupBy: {
            args: Prisma.BoxGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoxGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoxCountArgs<ExtArgs>
            result: $Utils.Optional<BoxCountAggregateOutputType> | number
          }
        }
      }
      Reference: {
        payload: Prisma.$ReferencePayload<ExtArgs>
        fields: Prisma.ReferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>
          }
          findFirst: {
            args: Prisma.ReferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>
          }
          findMany: {
            args: Prisma.ReferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>[]
          }
          create: {
            args: Prisma.ReferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>
          }
          createMany: {
            args: Prisma.ReferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>[]
          }
          delete: {
            args: Prisma.ReferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>
          }
          update: {
            args: Prisma.ReferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>
          }
          deleteMany: {
            args: Prisma.ReferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>[]
          }
          upsert: {
            args: Prisma.ReferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferencePayload>
          }
          aggregate: {
            args: Prisma.ReferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReference>
          }
          groupBy: {
            args: Prisma.ReferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferenceCountArgs<ExtArgs>
            result: $Utils.Optional<ReferenceCountAggregateOutputType> | number
          }
        }
      }
      Distance: {
        payload: Prisma.$DistancePayload<ExtArgs>
        fields: Prisma.DistanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistancePayload>
          }
          findFirst: {
            args: Prisma.DistanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistancePayload>
          }
          findMany: {
            args: Prisma.DistanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistancePayload>[]
          }
          create: {
            args: Prisma.DistanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistancePayload>
          }
          createMany: {
            args: Prisma.DistanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DistanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistancePayload>[]
          }
          delete: {
            args: Prisma.DistanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistancePayload>
          }
          update: {
            args: Prisma.DistanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistancePayload>
          }
          deleteMany: {
            args: Prisma.DistanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DistanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DistanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistancePayload>[]
          }
          upsert: {
            args: Prisma.DistanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistancePayload>
          }
          aggregate: {
            args: Prisma.DistanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistance>
          }
          groupBy: {
            args: Prisma.DistanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DistanceCountArgs<ExtArgs>
            result: $Utils.Optional<DistanceCountAggregateOutputType> | number
          }
        }
      }
      AlignmentResult: {
        payload: Prisma.$AlignmentResultPayload<ExtArgs>
        fields: Prisma.AlignmentResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlignmentResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlignmentResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlignmentResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlignmentResultPayload>
          }
          findFirst: {
            args: Prisma.AlignmentResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlignmentResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlignmentResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlignmentResultPayload>
          }
          findMany: {
            args: Prisma.AlignmentResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlignmentResultPayload>[]
          }
          create: {
            args: Prisma.AlignmentResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlignmentResultPayload>
          }
          createMany: {
            args: Prisma.AlignmentResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlignmentResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlignmentResultPayload>[]
          }
          delete: {
            args: Prisma.AlignmentResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlignmentResultPayload>
          }
          update: {
            args: Prisma.AlignmentResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlignmentResultPayload>
          }
          deleteMany: {
            args: Prisma.AlignmentResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlignmentResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlignmentResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlignmentResultPayload>[]
          }
          upsert: {
            args: Prisma.AlignmentResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlignmentResultPayload>
          }
          aggregate: {
            args: Prisma.AlignmentResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlignmentResult>
          }
          groupBy: {
            args: Prisma.AlignmentResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlignmentResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlignmentResultCountArgs<ExtArgs>
            result: $Utils.Optional<AlignmentResultCountAggregateOutputType> | number
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
    project?: ProjectOmit
    document?: DocumentOmit
    sheet?: SheetOmit
    comparisonDiff?: ComparisonDiffOmit
    subContractor?: SubContractorOmit
    box?: BoxOmit
    reference?: ReferenceOmit
    distance?: DistanceOmit
    alignmentResult?: AlignmentResultOmit
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
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    documents: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | ProjectCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }


  /**
   * Count Type DocumentCountOutputType
   */

  export type DocumentCountOutputType = {
    sheets: number
  }

  export type DocumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheets?: boolean | DocumentCountOutputTypeCountSheetsArgs
  }

  // Custom InputTypes
  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCountOutputType
     */
    select?: DocumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountSheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SheetWhereInput
  }


  /**
   * Count Type SheetCountOutputType
   */

  export type SheetCountOutputType = {
    alignmentResults: number
    boxes: number
    currentDiffs: number
    originalDiffs: number
    distances: number
    references: number
  }

  export type SheetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alignmentResults?: boolean | SheetCountOutputTypeCountAlignmentResultsArgs
    boxes?: boolean | SheetCountOutputTypeCountBoxesArgs
    currentDiffs?: boolean | SheetCountOutputTypeCountCurrentDiffsArgs
    originalDiffs?: boolean | SheetCountOutputTypeCountOriginalDiffsArgs
    distances?: boolean | SheetCountOutputTypeCountDistancesArgs
    references?: boolean | SheetCountOutputTypeCountReferencesArgs
  }

  // Custom InputTypes
  /**
   * SheetCountOutputType without action
   */
  export type SheetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetCountOutputType
     */
    select?: SheetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SheetCountOutputType without action
   */
  export type SheetCountOutputTypeCountAlignmentResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlignmentResultWhereInput
  }

  /**
   * SheetCountOutputType without action
   */
  export type SheetCountOutputTypeCountBoxesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoxWhereInput
  }

  /**
   * SheetCountOutputType without action
   */
  export type SheetCountOutputTypeCountCurrentDiffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComparisonDiffWhereInput
  }

  /**
   * SheetCountOutputType without action
   */
  export type SheetCountOutputTypeCountOriginalDiffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComparisonDiffWhereInput
  }

  /**
   * SheetCountOutputType without action
   */
  export type SheetCountOutputTypeCountDistancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistanceWhereInput
  }

  /**
   * SheetCountOutputType without action
   */
  export type SheetCountOutputTypeCountReferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferenceWhereInput
  }


  /**
   * Count Type SubContractorCountOutputType
   */

  export type SubContractorCountOutputType = {
    comparisonDiffs: number
  }

  export type SubContractorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comparisonDiffs?: boolean | SubContractorCountOutputTypeCountComparisonDiffsArgs
  }

  // Custom InputTypes
  /**
   * SubContractorCountOutputType without action
   */
  export type SubContractorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubContractorCountOutputType
     */
    select?: SubContractorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubContractorCountOutputType without action
   */
  export type SubContractorCountOutputTypeCountComparisonDiffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComparisonDiffWhereInput
  }


  /**
   * Count Type BoxCountOutputType
   */

  export type BoxCountOutputType = {
    alignmentResults: number
  }

  export type BoxCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alignmentResults?: boolean | BoxCountOutputTypeCountAlignmentResultsArgs
  }

  // Custom InputTypes
  /**
   * BoxCountOutputType without action
   */
  export type BoxCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxCountOutputType
     */
    select?: BoxCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BoxCountOutputType without action
   */
  export type BoxCountOutputTypeCountAlignmentResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlignmentResultWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    date: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    date: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    date: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    date?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    date?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    date?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    name: string
    date: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    documents?: boolean | Project$documentsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    date?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "date", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | Project$documentsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      documents: Prisma.$DocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      date: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documents<T extends Project$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Project$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly name: FieldRef<"Project", 'String'>
    readonly date: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.documents
   */
  export type Project$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type DocumentSumAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: number | null
    type: string | null
    path: string | null
    projectId: number | null
    category: string | null
    subcategory: string | null
    title: string | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: number | null
    type: string | null
    path: string | null
    projectId: number | null
    category: string | null
    subcategory: string | null
    title: string | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    type: number
    path: number
    projectId: number
    category: number
    subcategory: number
    title: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type DocumentSumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    type?: true
    path?: true
    projectId?: true
    category?: true
    subcategory?: true
    title?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    type?: true
    path?: true
    projectId?: true
    category?: true
    subcategory?: true
    title?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    type?: true
    path?: true
    projectId?: true
    category?: true
    subcategory?: true
    title?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: number
    type: string | null
    path: string
    projectId: number
    category: string | null
    subcategory: string | null
    title: string | null
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    path?: boolean
    projectId?: boolean
    category?: boolean
    subcategory?: boolean
    title?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    sheets?: boolean | Document$sheetsArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    path?: boolean
    projectId?: boolean
    category?: boolean
    subcategory?: boolean
    title?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    path?: boolean
    projectId?: boolean
    category?: boolean
    subcategory?: boolean
    title?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    type?: boolean
    path?: boolean
    projectId?: boolean
    category?: boolean
    subcategory?: boolean
    title?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "path" | "projectId" | "category" | "subcategory" | "title", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    sheets?: boolean | Document$sheetsArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      sheets: Prisma.$SheetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string | null
      path: string
      projectId: number
      category: string | null
      subcategory: string | null
      title: string | null
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
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
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sheets<T extends Document$sheetsArgs<ExtArgs> = {}>(args?: Subset<T, Document$sheetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'Int'>
    readonly type: FieldRef<"Document", 'String'>
    readonly path: FieldRef<"Document", 'String'>
    readonly projectId: FieldRef<"Document", 'Int'>
    readonly category: FieldRef<"Document", 'String'>
    readonly subcategory: FieldRef<"Document", 'String'>
    readonly title: FieldRef<"Document", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document.sheets
   */
  export type Document$sheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    where?: SheetWhereInput
    orderBy?: SheetOrderByWithRelationInput | SheetOrderByWithRelationInput[]
    cursor?: SheetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SheetScalarFieldEnum | SheetScalarFieldEnum[]
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model Sheet
   */

  export type AggregateSheet = {
    _count: SheetCountAggregateOutputType | null
    _avg: SheetAvgAggregateOutputType | null
    _sum: SheetSumAggregateOutputType | null
    _min: SheetMinAggregateOutputType | null
    _max: SheetMaxAggregateOutputType | null
  }

  export type SheetAvgAggregateOutputType = {
    id: number | null
    page: number | null
    documentId: number | null
  }

  export type SheetSumAggregateOutputType = {
    id: number | null
    page: number | null
    documentId: number | null
  }

  export type SheetMinAggregateOutputType = {
    id: number | null
    code: string | null
    title: string | null
    type: string | null
    page: number | null
    status: string | null
    svgPath: string | null
    documentId: number | null
  }

  export type SheetMaxAggregateOutputType = {
    id: number | null
    code: string | null
    title: string | null
    type: string | null
    page: number | null
    status: string | null
    svgPath: string | null
    documentId: number | null
  }

  export type SheetCountAggregateOutputType = {
    id: number
    code: number
    title: number
    type: number
    page: number
    status: number
    svgPath: number
    documentId: number
    _all: number
  }


  export type SheetAvgAggregateInputType = {
    id?: true
    page?: true
    documentId?: true
  }

  export type SheetSumAggregateInputType = {
    id?: true
    page?: true
    documentId?: true
  }

  export type SheetMinAggregateInputType = {
    id?: true
    code?: true
    title?: true
    type?: true
    page?: true
    status?: true
    svgPath?: true
    documentId?: true
  }

  export type SheetMaxAggregateInputType = {
    id?: true
    code?: true
    title?: true
    type?: true
    page?: true
    status?: true
    svgPath?: true
    documentId?: true
  }

  export type SheetCountAggregateInputType = {
    id?: true
    code?: true
    title?: true
    type?: true
    page?: true
    status?: true
    svgPath?: true
    documentId?: true
    _all?: true
  }

  export type SheetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sheet to aggregate.
     */
    where?: SheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sheets to fetch.
     */
    orderBy?: SheetOrderByWithRelationInput | SheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sheets
    **/
    _count?: true | SheetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SheetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SheetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SheetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SheetMaxAggregateInputType
  }

  export type GetSheetAggregateType<T extends SheetAggregateArgs> = {
        [P in keyof T & keyof AggregateSheet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSheet[P]>
      : GetScalarType<T[P], AggregateSheet[P]>
  }




  export type SheetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SheetWhereInput
    orderBy?: SheetOrderByWithAggregationInput | SheetOrderByWithAggregationInput[]
    by: SheetScalarFieldEnum[] | SheetScalarFieldEnum
    having?: SheetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SheetCountAggregateInputType | true
    _avg?: SheetAvgAggregateInputType
    _sum?: SheetSumAggregateInputType
    _min?: SheetMinAggregateInputType
    _max?: SheetMaxAggregateInputType
  }

  export type SheetGroupByOutputType = {
    id: number
    code: string
    title: string | null
    type: string | null
    page: number | null
    status: string
    svgPath: string | null
    documentId: number
    _count: SheetCountAggregateOutputType | null
    _avg: SheetAvgAggregateOutputType | null
    _sum: SheetSumAggregateOutputType | null
    _min: SheetMinAggregateOutputType | null
    _max: SheetMaxAggregateOutputType | null
  }

  type GetSheetGroupByPayload<T extends SheetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SheetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SheetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SheetGroupByOutputType[P]>
            : GetScalarType<T[P], SheetGroupByOutputType[P]>
        }
      >
    >


  export type SheetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    type?: boolean
    page?: boolean
    status?: boolean
    svgPath?: boolean
    documentId?: boolean
    alignmentResults?: boolean | Sheet$alignmentResultsArgs<ExtArgs>
    boxes?: boolean | Sheet$boxesArgs<ExtArgs>
    currentDiffs?: boolean | Sheet$currentDiffsArgs<ExtArgs>
    originalDiffs?: boolean | Sheet$originalDiffsArgs<ExtArgs>
    distances?: boolean | Sheet$distancesArgs<ExtArgs>
    references?: boolean | Sheet$referencesArgs<ExtArgs>
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    _count?: boolean | SheetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sheet"]>

  export type SheetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    type?: boolean
    page?: boolean
    status?: boolean
    svgPath?: boolean
    documentId?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sheet"]>

  export type SheetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    type?: boolean
    page?: boolean
    status?: boolean
    svgPath?: boolean
    documentId?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sheet"]>

  export type SheetSelectScalar = {
    id?: boolean
    code?: boolean
    title?: boolean
    type?: boolean
    page?: boolean
    status?: boolean
    svgPath?: boolean
    documentId?: boolean
  }

  export type SheetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "title" | "type" | "page" | "status" | "svgPath" | "documentId", ExtArgs["result"]["sheet"]>
  export type SheetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alignmentResults?: boolean | Sheet$alignmentResultsArgs<ExtArgs>
    boxes?: boolean | Sheet$boxesArgs<ExtArgs>
    currentDiffs?: boolean | Sheet$currentDiffsArgs<ExtArgs>
    originalDiffs?: boolean | Sheet$originalDiffsArgs<ExtArgs>
    distances?: boolean | Sheet$distancesArgs<ExtArgs>
    references?: boolean | Sheet$referencesArgs<ExtArgs>
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    _count?: boolean | SheetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SheetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }
  export type SheetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }

  export type $SheetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sheet"
    objects: {
      alignmentResults: Prisma.$AlignmentResultPayload<ExtArgs>[]
      boxes: Prisma.$BoxPayload<ExtArgs>[]
      currentDiffs: Prisma.$ComparisonDiffPayload<ExtArgs>[]
      originalDiffs: Prisma.$ComparisonDiffPayload<ExtArgs>[]
      distances: Prisma.$DistancePayload<ExtArgs>[]
      references: Prisma.$ReferencePayload<ExtArgs>[]
      document: Prisma.$DocumentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      title: string | null
      type: string | null
      page: number | null
      status: string
      svgPath: string | null
      documentId: number
    }, ExtArgs["result"]["sheet"]>
    composites: {}
  }

  type SheetGetPayload<S extends boolean | null | undefined | SheetDefaultArgs> = $Result.GetResult<Prisma.$SheetPayload, S>

  type SheetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SheetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SheetCountAggregateInputType | true
    }

  export interface SheetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sheet'], meta: { name: 'Sheet' } }
    /**
     * Find zero or one Sheet that matches the filter.
     * @param {SheetFindUniqueArgs} args - Arguments to find a Sheet
     * @example
     * // Get one Sheet
     * const sheet = await prisma.sheet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SheetFindUniqueArgs>(args: SelectSubset<T, SheetFindUniqueArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sheet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SheetFindUniqueOrThrowArgs} args - Arguments to find a Sheet
     * @example
     * // Get one Sheet
     * const sheet = await prisma.sheet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SheetFindUniqueOrThrowArgs>(args: SelectSubset<T, SheetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sheet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetFindFirstArgs} args - Arguments to find a Sheet
     * @example
     * // Get one Sheet
     * const sheet = await prisma.sheet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SheetFindFirstArgs>(args?: SelectSubset<T, SheetFindFirstArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sheet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetFindFirstOrThrowArgs} args - Arguments to find a Sheet
     * @example
     * // Get one Sheet
     * const sheet = await prisma.sheet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SheetFindFirstOrThrowArgs>(args?: SelectSubset<T, SheetFindFirstOrThrowArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sheets
     * const sheets = await prisma.sheet.findMany()
     * 
     * // Get first 10 Sheets
     * const sheets = await prisma.sheet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sheetWithIdOnly = await prisma.sheet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SheetFindManyArgs>(args?: SelectSubset<T, SheetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sheet.
     * @param {SheetCreateArgs} args - Arguments to create a Sheet.
     * @example
     * // Create one Sheet
     * const Sheet = await prisma.sheet.create({
     *   data: {
     *     // ... data to create a Sheet
     *   }
     * })
     * 
     */
    create<T extends SheetCreateArgs>(args: SelectSubset<T, SheetCreateArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sheets.
     * @param {SheetCreateManyArgs} args - Arguments to create many Sheets.
     * @example
     * // Create many Sheets
     * const sheet = await prisma.sheet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SheetCreateManyArgs>(args?: SelectSubset<T, SheetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sheets and returns the data saved in the database.
     * @param {SheetCreateManyAndReturnArgs} args - Arguments to create many Sheets.
     * @example
     * // Create many Sheets
     * const sheet = await prisma.sheet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sheets and only return the `id`
     * const sheetWithIdOnly = await prisma.sheet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SheetCreateManyAndReturnArgs>(args?: SelectSubset<T, SheetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sheet.
     * @param {SheetDeleteArgs} args - Arguments to delete one Sheet.
     * @example
     * // Delete one Sheet
     * const Sheet = await prisma.sheet.delete({
     *   where: {
     *     // ... filter to delete one Sheet
     *   }
     * })
     * 
     */
    delete<T extends SheetDeleteArgs>(args: SelectSubset<T, SheetDeleteArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sheet.
     * @param {SheetUpdateArgs} args - Arguments to update one Sheet.
     * @example
     * // Update one Sheet
     * const sheet = await prisma.sheet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SheetUpdateArgs>(args: SelectSubset<T, SheetUpdateArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sheets.
     * @param {SheetDeleteManyArgs} args - Arguments to filter Sheets to delete.
     * @example
     * // Delete a few Sheets
     * const { count } = await prisma.sheet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SheetDeleteManyArgs>(args?: SelectSubset<T, SheetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sheets
     * const sheet = await prisma.sheet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SheetUpdateManyArgs>(args: SelectSubset<T, SheetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sheets and returns the data updated in the database.
     * @param {SheetUpdateManyAndReturnArgs} args - Arguments to update many Sheets.
     * @example
     * // Update many Sheets
     * const sheet = await prisma.sheet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sheets and only return the `id`
     * const sheetWithIdOnly = await prisma.sheet.updateManyAndReturn({
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
    updateManyAndReturn<T extends SheetUpdateManyAndReturnArgs>(args: SelectSubset<T, SheetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sheet.
     * @param {SheetUpsertArgs} args - Arguments to update or create a Sheet.
     * @example
     * // Update or create a Sheet
     * const sheet = await prisma.sheet.upsert({
     *   create: {
     *     // ... data to create a Sheet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sheet we want to update
     *   }
     * })
     */
    upsert<T extends SheetUpsertArgs>(args: SelectSubset<T, SheetUpsertArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetCountArgs} args - Arguments to filter Sheets to count.
     * @example
     * // Count the number of Sheets
     * const count = await prisma.sheet.count({
     *   where: {
     *     // ... the filter for the Sheets we want to count
     *   }
     * })
    **/
    count<T extends SheetCountArgs>(
      args?: Subset<T, SheetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SheetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SheetAggregateArgs>(args: Subset<T, SheetAggregateArgs>): Prisma.PrismaPromise<GetSheetAggregateType<T>>

    /**
     * Group by Sheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetGroupByArgs} args - Group by arguments.
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
      T extends SheetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SheetGroupByArgs['orderBy'] }
        : { orderBy?: SheetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SheetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSheetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sheet model
   */
  readonly fields: SheetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sheet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SheetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alignmentResults<T extends Sheet$alignmentResultsArgs<ExtArgs> = {}>(args?: Subset<T, Sheet$alignmentResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlignmentResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    boxes<T extends Sheet$boxesArgs<ExtArgs> = {}>(args?: Subset<T, Sheet$boxesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    currentDiffs<T extends Sheet$currentDiffsArgs<ExtArgs> = {}>(args?: Subset<T, Sheet$currentDiffsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComparisonDiffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    originalDiffs<T extends Sheet$originalDiffsArgs<ExtArgs> = {}>(args?: Subset<T, Sheet$originalDiffsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComparisonDiffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    distances<T extends Sheet$distancesArgs<ExtArgs> = {}>(args?: Subset<T, Sheet$distancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    references<T extends Sheet$referencesArgs<ExtArgs> = {}>(args?: Subset<T, Sheet$referencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Sheet model
   */
  interface SheetFieldRefs {
    readonly id: FieldRef<"Sheet", 'Int'>
    readonly code: FieldRef<"Sheet", 'String'>
    readonly title: FieldRef<"Sheet", 'String'>
    readonly type: FieldRef<"Sheet", 'String'>
    readonly page: FieldRef<"Sheet", 'Int'>
    readonly status: FieldRef<"Sheet", 'String'>
    readonly svgPath: FieldRef<"Sheet", 'String'>
    readonly documentId: FieldRef<"Sheet", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Sheet findUnique
   */
  export type SheetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter, which Sheet to fetch.
     */
    where: SheetWhereUniqueInput
  }

  /**
   * Sheet findUniqueOrThrow
   */
  export type SheetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter, which Sheet to fetch.
     */
    where: SheetWhereUniqueInput
  }

  /**
   * Sheet findFirst
   */
  export type SheetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter, which Sheet to fetch.
     */
    where?: SheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sheets to fetch.
     */
    orderBy?: SheetOrderByWithRelationInput | SheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sheets.
     */
    cursor?: SheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sheets.
     */
    distinct?: SheetScalarFieldEnum | SheetScalarFieldEnum[]
  }

  /**
   * Sheet findFirstOrThrow
   */
  export type SheetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter, which Sheet to fetch.
     */
    where?: SheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sheets to fetch.
     */
    orderBy?: SheetOrderByWithRelationInput | SheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sheets.
     */
    cursor?: SheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sheets.
     */
    distinct?: SheetScalarFieldEnum | SheetScalarFieldEnum[]
  }

  /**
   * Sheet findMany
   */
  export type SheetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter, which Sheets to fetch.
     */
    where?: SheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sheets to fetch.
     */
    orderBy?: SheetOrderByWithRelationInput | SheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sheets.
     */
    cursor?: SheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sheets.
     */
    skip?: number
    distinct?: SheetScalarFieldEnum | SheetScalarFieldEnum[]
  }

  /**
   * Sheet create
   */
  export type SheetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * The data needed to create a Sheet.
     */
    data: XOR<SheetCreateInput, SheetUncheckedCreateInput>
  }

  /**
   * Sheet createMany
   */
  export type SheetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sheets.
     */
    data: SheetCreateManyInput | SheetCreateManyInput[]
  }

  /**
   * Sheet createManyAndReturn
   */
  export type SheetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * The data used to create many Sheets.
     */
    data: SheetCreateManyInput | SheetCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sheet update
   */
  export type SheetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * The data needed to update a Sheet.
     */
    data: XOR<SheetUpdateInput, SheetUncheckedUpdateInput>
    /**
     * Choose, which Sheet to update.
     */
    where: SheetWhereUniqueInput
  }

  /**
   * Sheet updateMany
   */
  export type SheetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sheets.
     */
    data: XOR<SheetUpdateManyMutationInput, SheetUncheckedUpdateManyInput>
    /**
     * Filter which Sheets to update
     */
    where?: SheetWhereInput
    /**
     * Limit how many Sheets to update.
     */
    limit?: number
  }

  /**
   * Sheet updateManyAndReturn
   */
  export type SheetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * The data used to update Sheets.
     */
    data: XOR<SheetUpdateManyMutationInput, SheetUncheckedUpdateManyInput>
    /**
     * Filter which Sheets to update
     */
    where?: SheetWhereInput
    /**
     * Limit how many Sheets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sheet upsert
   */
  export type SheetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * The filter to search for the Sheet to update in case it exists.
     */
    where: SheetWhereUniqueInput
    /**
     * In case the Sheet found by the `where` argument doesn't exist, create a new Sheet with this data.
     */
    create: XOR<SheetCreateInput, SheetUncheckedCreateInput>
    /**
     * In case the Sheet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SheetUpdateInput, SheetUncheckedUpdateInput>
  }

  /**
   * Sheet delete
   */
  export type SheetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
    /**
     * Filter which Sheet to delete.
     */
    where: SheetWhereUniqueInput
  }

  /**
   * Sheet deleteMany
   */
  export type SheetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sheets to delete
     */
    where?: SheetWhereInput
    /**
     * Limit how many Sheets to delete.
     */
    limit?: number
  }

  /**
   * Sheet.alignmentResults
   */
  export type Sheet$alignmentResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlignmentResult
     */
    select?: AlignmentResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlignmentResult
     */
    omit?: AlignmentResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlignmentResultInclude<ExtArgs> | null
    where?: AlignmentResultWhereInput
    orderBy?: AlignmentResultOrderByWithRelationInput | AlignmentResultOrderByWithRelationInput[]
    cursor?: AlignmentResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlignmentResultScalarFieldEnum | AlignmentResultScalarFieldEnum[]
  }

  /**
   * Sheet.boxes
   */
  export type Sheet$boxesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxInclude<ExtArgs> | null
    where?: BoxWhereInput
    orderBy?: BoxOrderByWithRelationInput | BoxOrderByWithRelationInput[]
    cursor?: BoxWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoxScalarFieldEnum | BoxScalarFieldEnum[]
  }

  /**
   * Sheet.currentDiffs
   */
  export type Sheet$currentDiffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComparisonDiff
     */
    select?: ComparisonDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComparisonDiff
     */
    omit?: ComparisonDiffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonDiffInclude<ExtArgs> | null
    where?: ComparisonDiffWhereInput
    orderBy?: ComparisonDiffOrderByWithRelationInput | ComparisonDiffOrderByWithRelationInput[]
    cursor?: ComparisonDiffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComparisonDiffScalarFieldEnum | ComparisonDiffScalarFieldEnum[]
  }

  /**
   * Sheet.originalDiffs
   */
  export type Sheet$originalDiffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComparisonDiff
     */
    select?: ComparisonDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComparisonDiff
     */
    omit?: ComparisonDiffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonDiffInclude<ExtArgs> | null
    where?: ComparisonDiffWhereInput
    orderBy?: ComparisonDiffOrderByWithRelationInput | ComparisonDiffOrderByWithRelationInput[]
    cursor?: ComparisonDiffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComparisonDiffScalarFieldEnum | ComparisonDiffScalarFieldEnum[]
  }

  /**
   * Sheet.distances
   */
  export type Sheet$distancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distance
     */
    select?: DistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distance
     */
    omit?: DistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistanceInclude<ExtArgs> | null
    where?: DistanceWhereInput
    orderBy?: DistanceOrderByWithRelationInput | DistanceOrderByWithRelationInput[]
    cursor?: DistanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DistanceScalarFieldEnum | DistanceScalarFieldEnum[]
  }

  /**
   * Sheet.references
   */
  export type Sheet$referencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    where?: ReferenceWhereInput
    orderBy?: ReferenceOrderByWithRelationInput | ReferenceOrderByWithRelationInput[]
    cursor?: ReferenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferenceScalarFieldEnum | ReferenceScalarFieldEnum[]
  }

  /**
   * Sheet without action
   */
  export type SheetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet
     */
    select?: SheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sheet
     */
    omit?: SheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetInclude<ExtArgs> | null
  }


  /**
   * Model ComparisonDiff
   */

  export type AggregateComparisonDiff = {
    _count: ComparisonDiffCountAggregateOutputType | null
    _avg: ComparisonDiffAvgAggregateOutputType | null
    _sum: ComparisonDiffSumAggregateOutputType | null
    _min: ComparisonDiffMinAggregateOutputType | null
    _max: ComparisonDiffMaxAggregateOutputType | null
  }

  export type ComparisonDiffAvgAggregateOutputType = {
    id: number | null
    originalSheetId: number | null
    currentSheetId: number | null
    subContractorId: number | null
  }

  export type ComparisonDiffSumAggregateOutputType = {
    id: number | null
    originalSheetId: number | null
    currentSheetId: number | null
    subContractorId: number | null
  }

  export type ComparisonDiffMinAggregateOutputType = {
    id: number | null
    originalSheetId: number | null
    currentSheetId: number | null
    hasAdditions: boolean | null
    hasDeletions: boolean | null
    originalBbox: string | null
    currentBbox: string | null
    title: string | null
    description: string | null
    subContractorId: number | null
    status: string | null
  }

  export type ComparisonDiffMaxAggregateOutputType = {
    id: number | null
    originalSheetId: number | null
    currentSheetId: number | null
    hasAdditions: boolean | null
    hasDeletions: boolean | null
    originalBbox: string | null
    currentBbox: string | null
    title: string | null
    description: string | null
    subContractorId: number | null
    status: string | null
  }

  export type ComparisonDiffCountAggregateOutputType = {
    id: number
    originalSheetId: number
    currentSheetId: number
    hasAdditions: number
    hasDeletions: number
    originalBbox: number
    currentBbox: number
    title: number
    description: number
    subContractorId: number
    status: number
    _all: number
  }


  export type ComparisonDiffAvgAggregateInputType = {
    id?: true
    originalSheetId?: true
    currentSheetId?: true
    subContractorId?: true
  }

  export type ComparisonDiffSumAggregateInputType = {
    id?: true
    originalSheetId?: true
    currentSheetId?: true
    subContractorId?: true
  }

  export type ComparisonDiffMinAggregateInputType = {
    id?: true
    originalSheetId?: true
    currentSheetId?: true
    hasAdditions?: true
    hasDeletions?: true
    originalBbox?: true
    currentBbox?: true
    title?: true
    description?: true
    subContractorId?: true
    status?: true
  }

  export type ComparisonDiffMaxAggregateInputType = {
    id?: true
    originalSheetId?: true
    currentSheetId?: true
    hasAdditions?: true
    hasDeletions?: true
    originalBbox?: true
    currentBbox?: true
    title?: true
    description?: true
    subContractorId?: true
    status?: true
  }

  export type ComparisonDiffCountAggregateInputType = {
    id?: true
    originalSheetId?: true
    currentSheetId?: true
    hasAdditions?: true
    hasDeletions?: true
    originalBbox?: true
    currentBbox?: true
    title?: true
    description?: true
    subContractorId?: true
    status?: true
    _all?: true
  }

  export type ComparisonDiffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComparisonDiff to aggregate.
     */
    where?: ComparisonDiffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComparisonDiffs to fetch.
     */
    orderBy?: ComparisonDiffOrderByWithRelationInput | ComparisonDiffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComparisonDiffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComparisonDiffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComparisonDiffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ComparisonDiffs
    **/
    _count?: true | ComparisonDiffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComparisonDiffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComparisonDiffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComparisonDiffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComparisonDiffMaxAggregateInputType
  }

  export type GetComparisonDiffAggregateType<T extends ComparisonDiffAggregateArgs> = {
        [P in keyof T & keyof AggregateComparisonDiff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComparisonDiff[P]>
      : GetScalarType<T[P], AggregateComparisonDiff[P]>
  }




  export type ComparisonDiffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComparisonDiffWhereInput
    orderBy?: ComparisonDiffOrderByWithAggregationInput | ComparisonDiffOrderByWithAggregationInput[]
    by: ComparisonDiffScalarFieldEnum[] | ComparisonDiffScalarFieldEnum
    having?: ComparisonDiffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComparisonDiffCountAggregateInputType | true
    _avg?: ComparisonDiffAvgAggregateInputType
    _sum?: ComparisonDiffSumAggregateInputType
    _min?: ComparisonDiffMinAggregateInputType
    _max?: ComparisonDiffMaxAggregateInputType
  }

  export type ComparisonDiffGroupByOutputType = {
    id: number
    originalSheetId: number
    currentSheetId: number
    hasAdditions: boolean
    hasDeletions: boolean
    originalBbox: string | null
    currentBbox: string | null
    title: string | null
    description: string | null
    subContractorId: number | null
    status: string
    _count: ComparisonDiffCountAggregateOutputType | null
    _avg: ComparisonDiffAvgAggregateOutputType | null
    _sum: ComparisonDiffSumAggregateOutputType | null
    _min: ComparisonDiffMinAggregateOutputType | null
    _max: ComparisonDiffMaxAggregateOutputType | null
  }

  type GetComparisonDiffGroupByPayload<T extends ComparisonDiffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComparisonDiffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComparisonDiffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComparisonDiffGroupByOutputType[P]>
            : GetScalarType<T[P], ComparisonDiffGroupByOutputType[P]>
        }
      >
    >


  export type ComparisonDiffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalSheetId?: boolean
    currentSheetId?: boolean
    hasAdditions?: boolean
    hasDeletions?: boolean
    originalBbox?: boolean
    currentBbox?: boolean
    title?: boolean
    description?: boolean
    subContractorId?: boolean
    status?: boolean
    subContractor?: boolean | ComparisonDiff$subContractorArgs<ExtArgs>
    currentSheet?: boolean | SheetDefaultArgs<ExtArgs>
    originalSheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comparisonDiff"]>

  export type ComparisonDiffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalSheetId?: boolean
    currentSheetId?: boolean
    hasAdditions?: boolean
    hasDeletions?: boolean
    originalBbox?: boolean
    currentBbox?: boolean
    title?: boolean
    description?: boolean
    subContractorId?: boolean
    status?: boolean
    subContractor?: boolean | ComparisonDiff$subContractorArgs<ExtArgs>
    currentSheet?: boolean | SheetDefaultArgs<ExtArgs>
    originalSheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comparisonDiff"]>

  export type ComparisonDiffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalSheetId?: boolean
    currentSheetId?: boolean
    hasAdditions?: boolean
    hasDeletions?: boolean
    originalBbox?: boolean
    currentBbox?: boolean
    title?: boolean
    description?: boolean
    subContractorId?: boolean
    status?: boolean
    subContractor?: boolean | ComparisonDiff$subContractorArgs<ExtArgs>
    currentSheet?: boolean | SheetDefaultArgs<ExtArgs>
    originalSheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comparisonDiff"]>

  export type ComparisonDiffSelectScalar = {
    id?: boolean
    originalSheetId?: boolean
    currentSheetId?: boolean
    hasAdditions?: boolean
    hasDeletions?: boolean
    originalBbox?: boolean
    currentBbox?: boolean
    title?: boolean
    description?: boolean
    subContractorId?: boolean
    status?: boolean
  }

  export type ComparisonDiffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "originalSheetId" | "currentSheetId" | "hasAdditions" | "hasDeletions" | "originalBbox" | "currentBbox" | "title" | "description" | "subContractorId" | "status", ExtArgs["result"]["comparisonDiff"]>
  export type ComparisonDiffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subContractor?: boolean | ComparisonDiff$subContractorArgs<ExtArgs>
    currentSheet?: boolean | SheetDefaultArgs<ExtArgs>
    originalSheet?: boolean | SheetDefaultArgs<ExtArgs>
  }
  export type ComparisonDiffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subContractor?: boolean | ComparisonDiff$subContractorArgs<ExtArgs>
    currentSheet?: boolean | SheetDefaultArgs<ExtArgs>
    originalSheet?: boolean | SheetDefaultArgs<ExtArgs>
  }
  export type ComparisonDiffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subContractor?: boolean | ComparisonDiff$subContractorArgs<ExtArgs>
    currentSheet?: boolean | SheetDefaultArgs<ExtArgs>
    originalSheet?: boolean | SheetDefaultArgs<ExtArgs>
  }

  export type $ComparisonDiffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ComparisonDiff"
    objects: {
      subContractor: Prisma.$SubContractorPayload<ExtArgs> | null
      currentSheet: Prisma.$SheetPayload<ExtArgs>
      originalSheet: Prisma.$SheetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      originalSheetId: number
      currentSheetId: number
      hasAdditions: boolean
      hasDeletions: boolean
      originalBbox: string | null
      currentBbox: string | null
      title: string | null
      description: string | null
      subContractorId: number | null
      status: string
    }, ExtArgs["result"]["comparisonDiff"]>
    composites: {}
  }

  type ComparisonDiffGetPayload<S extends boolean | null | undefined | ComparisonDiffDefaultArgs> = $Result.GetResult<Prisma.$ComparisonDiffPayload, S>

  type ComparisonDiffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComparisonDiffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComparisonDiffCountAggregateInputType | true
    }

  export interface ComparisonDiffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ComparisonDiff'], meta: { name: 'ComparisonDiff' } }
    /**
     * Find zero or one ComparisonDiff that matches the filter.
     * @param {ComparisonDiffFindUniqueArgs} args - Arguments to find a ComparisonDiff
     * @example
     * // Get one ComparisonDiff
     * const comparisonDiff = await prisma.comparisonDiff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComparisonDiffFindUniqueArgs>(args: SelectSubset<T, ComparisonDiffFindUniqueArgs<ExtArgs>>): Prisma__ComparisonDiffClient<$Result.GetResult<Prisma.$ComparisonDiffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ComparisonDiff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComparisonDiffFindUniqueOrThrowArgs} args - Arguments to find a ComparisonDiff
     * @example
     * // Get one ComparisonDiff
     * const comparisonDiff = await prisma.comparisonDiff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComparisonDiffFindUniqueOrThrowArgs>(args: SelectSubset<T, ComparisonDiffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComparisonDiffClient<$Result.GetResult<Prisma.$ComparisonDiffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComparisonDiff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComparisonDiffFindFirstArgs} args - Arguments to find a ComparisonDiff
     * @example
     * // Get one ComparisonDiff
     * const comparisonDiff = await prisma.comparisonDiff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComparisonDiffFindFirstArgs>(args?: SelectSubset<T, ComparisonDiffFindFirstArgs<ExtArgs>>): Prisma__ComparisonDiffClient<$Result.GetResult<Prisma.$ComparisonDiffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComparisonDiff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComparisonDiffFindFirstOrThrowArgs} args - Arguments to find a ComparisonDiff
     * @example
     * // Get one ComparisonDiff
     * const comparisonDiff = await prisma.comparisonDiff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComparisonDiffFindFirstOrThrowArgs>(args?: SelectSubset<T, ComparisonDiffFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComparisonDiffClient<$Result.GetResult<Prisma.$ComparisonDiffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ComparisonDiffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComparisonDiffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ComparisonDiffs
     * const comparisonDiffs = await prisma.comparisonDiff.findMany()
     * 
     * // Get first 10 ComparisonDiffs
     * const comparisonDiffs = await prisma.comparisonDiff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comparisonDiffWithIdOnly = await prisma.comparisonDiff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComparisonDiffFindManyArgs>(args?: SelectSubset<T, ComparisonDiffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComparisonDiffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ComparisonDiff.
     * @param {ComparisonDiffCreateArgs} args - Arguments to create a ComparisonDiff.
     * @example
     * // Create one ComparisonDiff
     * const ComparisonDiff = await prisma.comparisonDiff.create({
     *   data: {
     *     // ... data to create a ComparisonDiff
     *   }
     * })
     * 
     */
    create<T extends ComparisonDiffCreateArgs>(args: SelectSubset<T, ComparisonDiffCreateArgs<ExtArgs>>): Prisma__ComparisonDiffClient<$Result.GetResult<Prisma.$ComparisonDiffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ComparisonDiffs.
     * @param {ComparisonDiffCreateManyArgs} args - Arguments to create many ComparisonDiffs.
     * @example
     * // Create many ComparisonDiffs
     * const comparisonDiff = await prisma.comparisonDiff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComparisonDiffCreateManyArgs>(args?: SelectSubset<T, ComparisonDiffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ComparisonDiffs and returns the data saved in the database.
     * @param {ComparisonDiffCreateManyAndReturnArgs} args - Arguments to create many ComparisonDiffs.
     * @example
     * // Create many ComparisonDiffs
     * const comparisonDiff = await prisma.comparisonDiff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ComparisonDiffs and only return the `id`
     * const comparisonDiffWithIdOnly = await prisma.comparisonDiff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComparisonDiffCreateManyAndReturnArgs>(args?: SelectSubset<T, ComparisonDiffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComparisonDiffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ComparisonDiff.
     * @param {ComparisonDiffDeleteArgs} args - Arguments to delete one ComparisonDiff.
     * @example
     * // Delete one ComparisonDiff
     * const ComparisonDiff = await prisma.comparisonDiff.delete({
     *   where: {
     *     // ... filter to delete one ComparisonDiff
     *   }
     * })
     * 
     */
    delete<T extends ComparisonDiffDeleteArgs>(args: SelectSubset<T, ComparisonDiffDeleteArgs<ExtArgs>>): Prisma__ComparisonDiffClient<$Result.GetResult<Prisma.$ComparisonDiffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ComparisonDiff.
     * @param {ComparisonDiffUpdateArgs} args - Arguments to update one ComparisonDiff.
     * @example
     * // Update one ComparisonDiff
     * const comparisonDiff = await prisma.comparisonDiff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComparisonDiffUpdateArgs>(args: SelectSubset<T, ComparisonDiffUpdateArgs<ExtArgs>>): Prisma__ComparisonDiffClient<$Result.GetResult<Prisma.$ComparisonDiffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ComparisonDiffs.
     * @param {ComparisonDiffDeleteManyArgs} args - Arguments to filter ComparisonDiffs to delete.
     * @example
     * // Delete a few ComparisonDiffs
     * const { count } = await prisma.comparisonDiff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComparisonDiffDeleteManyArgs>(args?: SelectSubset<T, ComparisonDiffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComparisonDiffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComparisonDiffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ComparisonDiffs
     * const comparisonDiff = await prisma.comparisonDiff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComparisonDiffUpdateManyArgs>(args: SelectSubset<T, ComparisonDiffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComparisonDiffs and returns the data updated in the database.
     * @param {ComparisonDiffUpdateManyAndReturnArgs} args - Arguments to update many ComparisonDiffs.
     * @example
     * // Update many ComparisonDiffs
     * const comparisonDiff = await prisma.comparisonDiff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ComparisonDiffs and only return the `id`
     * const comparisonDiffWithIdOnly = await prisma.comparisonDiff.updateManyAndReturn({
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
    updateManyAndReturn<T extends ComparisonDiffUpdateManyAndReturnArgs>(args: SelectSubset<T, ComparisonDiffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComparisonDiffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ComparisonDiff.
     * @param {ComparisonDiffUpsertArgs} args - Arguments to update or create a ComparisonDiff.
     * @example
     * // Update or create a ComparisonDiff
     * const comparisonDiff = await prisma.comparisonDiff.upsert({
     *   create: {
     *     // ... data to create a ComparisonDiff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ComparisonDiff we want to update
     *   }
     * })
     */
    upsert<T extends ComparisonDiffUpsertArgs>(args: SelectSubset<T, ComparisonDiffUpsertArgs<ExtArgs>>): Prisma__ComparisonDiffClient<$Result.GetResult<Prisma.$ComparisonDiffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ComparisonDiffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComparisonDiffCountArgs} args - Arguments to filter ComparisonDiffs to count.
     * @example
     * // Count the number of ComparisonDiffs
     * const count = await prisma.comparisonDiff.count({
     *   where: {
     *     // ... the filter for the ComparisonDiffs we want to count
     *   }
     * })
    **/
    count<T extends ComparisonDiffCountArgs>(
      args?: Subset<T, ComparisonDiffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComparisonDiffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ComparisonDiff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComparisonDiffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComparisonDiffAggregateArgs>(args: Subset<T, ComparisonDiffAggregateArgs>): Prisma.PrismaPromise<GetComparisonDiffAggregateType<T>>

    /**
     * Group by ComparisonDiff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComparisonDiffGroupByArgs} args - Group by arguments.
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
      T extends ComparisonDiffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComparisonDiffGroupByArgs['orderBy'] }
        : { orderBy?: ComparisonDiffGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComparisonDiffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComparisonDiffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ComparisonDiff model
   */
  readonly fields: ComparisonDiffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ComparisonDiff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComparisonDiffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subContractor<T extends ComparisonDiff$subContractorArgs<ExtArgs> = {}>(args?: Subset<T, ComparisonDiff$subContractorArgs<ExtArgs>>): Prisma__SubContractorClient<$Result.GetResult<Prisma.$SubContractorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    currentSheet<T extends SheetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SheetDefaultArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    originalSheet<T extends SheetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SheetDefaultArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ComparisonDiff model
   */
  interface ComparisonDiffFieldRefs {
    readonly id: FieldRef<"ComparisonDiff", 'Int'>
    readonly originalSheetId: FieldRef<"ComparisonDiff", 'Int'>
    readonly currentSheetId: FieldRef<"ComparisonDiff", 'Int'>
    readonly hasAdditions: FieldRef<"ComparisonDiff", 'Boolean'>
    readonly hasDeletions: FieldRef<"ComparisonDiff", 'Boolean'>
    readonly originalBbox: FieldRef<"ComparisonDiff", 'String'>
    readonly currentBbox: FieldRef<"ComparisonDiff", 'String'>
    readonly title: FieldRef<"ComparisonDiff", 'String'>
    readonly description: FieldRef<"ComparisonDiff", 'String'>
    readonly subContractorId: FieldRef<"ComparisonDiff", 'Int'>
    readonly status: FieldRef<"ComparisonDiff", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ComparisonDiff findUnique
   */
  export type ComparisonDiffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComparisonDiff
     */
    select?: ComparisonDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComparisonDiff
     */
    omit?: ComparisonDiffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonDiffInclude<ExtArgs> | null
    /**
     * Filter, which ComparisonDiff to fetch.
     */
    where: ComparisonDiffWhereUniqueInput
  }

  /**
   * ComparisonDiff findUniqueOrThrow
   */
  export type ComparisonDiffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComparisonDiff
     */
    select?: ComparisonDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComparisonDiff
     */
    omit?: ComparisonDiffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonDiffInclude<ExtArgs> | null
    /**
     * Filter, which ComparisonDiff to fetch.
     */
    where: ComparisonDiffWhereUniqueInput
  }

  /**
   * ComparisonDiff findFirst
   */
  export type ComparisonDiffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComparisonDiff
     */
    select?: ComparisonDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComparisonDiff
     */
    omit?: ComparisonDiffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonDiffInclude<ExtArgs> | null
    /**
     * Filter, which ComparisonDiff to fetch.
     */
    where?: ComparisonDiffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComparisonDiffs to fetch.
     */
    orderBy?: ComparisonDiffOrderByWithRelationInput | ComparisonDiffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComparisonDiffs.
     */
    cursor?: ComparisonDiffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComparisonDiffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComparisonDiffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComparisonDiffs.
     */
    distinct?: ComparisonDiffScalarFieldEnum | ComparisonDiffScalarFieldEnum[]
  }

  /**
   * ComparisonDiff findFirstOrThrow
   */
  export type ComparisonDiffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComparisonDiff
     */
    select?: ComparisonDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComparisonDiff
     */
    omit?: ComparisonDiffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonDiffInclude<ExtArgs> | null
    /**
     * Filter, which ComparisonDiff to fetch.
     */
    where?: ComparisonDiffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComparisonDiffs to fetch.
     */
    orderBy?: ComparisonDiffOrderByWithRelationInput | ComparisonDiffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComparisonDiffs.
     */
    cursor?: ComparisonDiffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComparisonDiffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComparisonDiffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComparisonDiffs.
     */
    distinct?: ComparisonDiffScalarFieldEnum | ComparisonDiffScalarFieldEnum[]
  }

  /**
   * ComparisonDiff findMany
   */
  export type ComparisonDiffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComparisonDiff
     */
    select?: ComparisonDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComparisonDiff
     */
    omit?: ComparisonDiffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonDiffInclude<ExtArgs> | null
    /**
     * Filter, which ComparisonDiffs to fetch.
     */
    where?: ComparisonDiffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComparisonDiffs to fetch.
     */
    orderBy?: ComparisonDiffOrderByWithRelationInput | ComparisonDiffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ComparisonDiffs.
     */
    cursor?: ComparisonDiffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComparisonDiffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComparisonDiffs.
     */
    skip?: number
    distinct?: ComparisonDiffScalarFieldEnum | ComparisonDiffScalarFieldEnum[]
  }

  /**
   * ComparisonDiff create
   */
  export type ComparisonDiffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComparisonDiff
     */
    select?: ComparisonDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComparisonDiff
     */
    omit?: ComparisonDiffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonDiffInclude<ExtArgs> | null
    /**
     * The data needed to create a ComparisonDiff.
     */
    data: XOR<ComparisonDiffCreateInput, ComparisonDiffUncheckedCreateInput>
  }

  /**
   * ComparisonDiff createMany
   */
  export type ComparisonDiffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ComparisonDiffs.
     */
    data: ComparisonDiffCreateManyInput | ComparisonDiffCreateManyInput[]
  }

  /**
   * ComparisonDiff createManyAndReturn
   */
  export type ComparisonDiffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComparisonDiff
     */
    select?: ComparisonDiffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ComparisonDiff
     */
    omit?: ComparisonDiffOmit<ExtArgs> | null
    /**
     * The data used to create many ComparisonDiffs.
     */
    data: ComparisonDiffCreateManyInput | ComparisonDiffCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonDiffIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ComparisonDiff update
   */
  export type ComparisonDiffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComparisonDiff
     */
    select?: ComparisonDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComparisonDiff
     */
    omit?: ComparisonDiffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonDiffInclude<ExtArgs> | null
    /**
     * The data needed to update a ComparisonDiff.
     */
    data: XOR<ComparisonDiffUpdateInput, ComparisonDiffUncheckedUpdateInput>
    /**
     * Choose, which ComparisonDiff to update.
     */
    where: ComparisonDiffWhereUniqueInput
  }

  /**
   * ComparisonDiff updateMany
   */
  export type ComparisonDiffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ComparisonDiffs.
     */
    data: XOR<ComparisonDiffUpdateManyMutationInput, ComparisonDiffUncheckedUpdateManyInput>
    /**
     * Filter which ComparisonDiffs to update
     */
    where?: ComparisonDiffWhereInput
    /**
     * Limit how many ComparisonDiffs to update.
     */
    limit?: number
  }

  /**
   * ComparisonDiff updateManyAndReturn
   */
  export type ComparisonDiffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComparisonDiff
     */
    select?: ComparisonDiffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ComparisonDiff
     */
    omit?: ComparisonDiffOmit<ExtArgs> | null
    /**
     * The data used to update ComparisonDiffs.
     */
    data: XOR<ComparisonDiffUpdateManyMutationInput, ComparisonDiffUncheckedUpdateManyInput>
    /**
     * Filter which ComparisonDiffs to update
     */
    where?: ComparisonDiffWhereInput
    /**
     * Limit how many ComparisonDiffs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonDiffIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ComparisonDiff upsert
   */
  export type ComparisonDiffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComparisonDiff
     */
    select?: ComparisonDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComparisonDiff
     */
    omit?: ComparisonDiffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonDiffInclude<ExtArgs> | null
    /**
     * The filter to search for the ComparisonDiff to update in case it exists.
     */
    where: ComparisonDiffWhereUniqueInput
    /**
     * In case the ComparisonDiff found by the `where` argument doesn't exist, create a new ComparisonDiff with this data.
     */
    create: XOR<ComparisonDiffCreateInput, ComparisonDiffUncheckedCreateInput>
    /**
     * In case the ComparisonDiff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComparisonDiffUpdateInput, ComparisonDiffUncheckedUpdateInput>
  }

  /**
   * ComparisonDiff delete
   */
  export type ComparisonDiffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComparisonDiff
     */
    select?: ComparisonDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComparisonDiff
     */
    omit?: ComparisonDiffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonDiffInclude<ExtArgs> | null
    /**
     * Filter which ComparisonDiff to delete.
     */
    where: ComparisonDiffWhereUniqueInput
  }

  /**
   * ComparisonDiff deleteMany
   */
  export type ComparisonDiffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComparisonDiffs to delete
     */
    where?: ComparisonDiffWhereInput
    /**
     * Limit how many ComparisonDiffs to delete.
     */
    limit?: number
  }

  /**
   * ComparisonDiff.subContractor
   */
  export type ComparisonDiff$subContractorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubContractor
     */
    select?: SubContractorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubContractor
     */
    omit?: SubContractorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubContractorInclude<ExtArgs> | null
    where?: SubContractorWhereInput
  }

  /**
   * ComparisonDiff without action
   */
  export type ComparisonDiffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComparisonDiff
     */
    select?: ComparisonDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComparisonDiff
     */
    omit?: ComparisonDiffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonDiffInclude<ExtArgs> | null
  }


  /**
   * Model SubContractor
   */

  export type AggregateSubContractor = {
    _count: SubContractorCountAggregateOutputType | null
    _avg: SubContractorAvgAggregateOutputType | null
    _sum: SubContractorSumAggregateOutputType | null
    _min: SubContractorMinAggregateOutputType | null
    _max: SubContractorMaxAggregateOutputType | null
  }

  export type SubContractorAvgAggregateOutputType = {
    id: number | null
  }

  export type SubContractorSumAggregateOutputType = {
    id: number | null
  }

  export type SubContractorMinAggregateOutputType = {
    id: number | null
    name: string | null
    tradeName: string | null
  }

  export type SubContractorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    tradeName: string | null
  }

  export type SubContractorCountAggregateOutputType = {
    id: number
    name: number
    tradeName: number
    _all: number
  }


  export type SubContractorAvgAggregateInputType = {
    id?: true
  }

  export type SubContractorSumAggregateInputType = {
    id?: true
  }

  export type SubContractorMinAggregateInputType = {
    id?: true
    name?: true
    tradeName?: true
  }

  export type SubContractorMaxAggregateInputType = {
    id?: true
    name?: true
    tradeName?: true
  }

  export type SubContractorCountAggregateInputType = {
    id?: true
    name?: true
    tradeName?: true
    _all?: true
  }

  export type SubContractorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubContractor to aggregate.
     */
    where?: SubContractorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubContractors to fetch.
     */
    orderBy?: SubContractorOrderByWithRelationInput | SubContractorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubContractorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubContractors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubContractors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubContractors
    **/
    _count?: true | SubContractorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubContractorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubContractorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubContractorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubContractorMaxAggregateInputType
  }

  export type GetSubContractorAggregateType<T extends SubContractorAggregateArgs> = {
        [P in keyof T & keyof AggregateSubContractor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubContractor[P]>
      : GetScalarType<T[P], AggregateSubContractor[P]>
  }




  export type SubContractorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubContractorWhereInput
    orderBy?: SubContractorOrderByWithAggregationInput | SubContractorOrderByWithAggregationInput[]
    by: SubContractorScalarFieldEnum[] | SubContractorScalarFieldEnum
    having?: SubContractorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubContractorCountAggregateInputType | true
    _avg?: SubContractorAvgAggregateInputType
    _sum?: SubContractorSumAggregateInputType
    _min?: SubContractorMinAggregateInputType
    _max?: SubContractorMaxAggregateInputType
  }

  export type SubContractorGroupByOutputType = {
    id: number
    name: string
    tradeName: string
    _count: SubContractorCountAggregateOutputType | null
    _avg: SubContractorAvgAggregateOutputType | null
    _sum: SubContractorSumAggregateOutputType | null
    _min: SubContractorMinAggregateOutputType | null
    _max: SubContractorMaxAggregateOutputType | null
  }

  type GetSubContractorGroupByPayload<T extends SubContractorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubContractorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubContractorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubContractorGroupByOutputType[P]>
            : GetScalarType<T[P], SubContractorGroupByOutputType[P]>
        }
      >
    >


  export type SubContractorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tradeName?: boolean
    comparisonDiffs?: boolean | SubContractor$comparisonDiffsArgs<ExtArgs>
    _count?: boolean | SubContractorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subContractor"]>

  export type SubContractorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tradeName?: boolean
  }, ExtArgs["result"]["subContractor"]>

  export type SubContractorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tradeName?: boolean
  }, ExtArgs["result"]["subContractor"]>

  export type SubContractorSelectScalar = {
    id?: boolean
    name?: boolean
    tradeName?: boolean
  }

  export type SubContractorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "tradeName", ExtArgs["result"]["subContractor"]>
  export type SubContractorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comparisonDiffs?: boolean | SubContractor$comparisonDiffsArgs<ExtArgs>
    _count?: boolean | SubContractorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubContractorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubContractorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubContractorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubContractor"
    objects: {
      comparisonDiffs: Prisma.$ComparisonDiffPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      tradeName: string
    }, ExtArgs["result"]["subContractor"]>
    composites: {}
  }

  type SubContractorGetPayload<S extends boolean | null | undefined | SubContractorDefaultArgs> = $Result.GetResult<Prisma.$SubContractorPayload, S>

  type SubContractorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubContractorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubContractorCountAggregateInputType | true
    }

  export interface SubContractorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubContractor'], meta: { name: 'SubContractor' } }
    /**
     * Find zero or one SubContractor that matches the filter.
     * @param {SubContractorFindUniqueArgs} args - Arguments to find a SubContractor
     * @example
     * // Get one SubContractor
     * const subContractor = await prisma.subContractor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubContractorFindUniqueArgs>(args: SelectSubset<T, SubContractorFindUniqueArgs<ExtArgs>>): Prisma__SubContractorClient<$Result.GetResult<Prisma.$SubContractorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubContractor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubContractorFindUniqueOrThrowArgs} args - Arguments to find a SubContractor
     * @example
     * // Get one SubContractor
     * const subContractor = await prisma.subContractor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubContractorFindUniqueOrThrowArgs>(args: SelectSubset<T, SubContractorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubContractorClient<$Result.GetResult<Prisma.$SubContractorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubContractor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubContractorFindFirstArgs} args - Arguments to find a SubContractor
     * @example
     * // Get one SubContractor
     * const subContractor = await prisma.subContractor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubContractorFindFirstArgs>(args?: SelectSubset<T, SubContractorFindFirstArgs<ExtArgs>>): Prisma__SubContractorClient<$Result.GetResult<Prisma.$SubContractorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubContractor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubContractorFindFirstOrThrowArgs} args - Arguments to find a SubContractor
     * @example
     * // Get one SubContractor
     * const subContractor = await prisma.subContractor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubContractorFindFirstOrThrowArgs>(args?: SelectSubset<T, SubContractorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubContractorClient<$Result.GetResult<Prisma.$SubContractorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubContractors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubContractorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubContractors
     * const subContractors = await prisma.subContractor.findMany()
     * 
     * // Get first 10 SubContractors
     * const subContractors = await prisma.subContractor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subContractorWithIdOnly = await prisma.subContractor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubContractorFindManyArgs>(args?: SelectSubset<T, SubContractorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubContractorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubContractor.
     * @param {SubContractorCreateArgs} args - Arguments to create a SubContractor.
     * @example
     * // Create one SubContractor
     * const SubContractor = await prisma.subContractor.create({
     *   data: {
     *     // ... data to create a SubContractor
     *   }
     * })
     * 
     */
    create<T extends SubContractorCreateArgs>(args: SelectSubset<T, SubContractorCreateArgs<ExtArgs>>): Prisma__SubContractorClient<$Result.GetResult<Prisma.$SubContractorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubContractors.
     * @param {SubContractorCreateManyArgs} args - Arguments to create many SubContractors.
     * @example
     * // Create many SubContractors
     * const subContractor = await prisma.subContractor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubContractorCreateManyArgs>(args?: SelectSubset<T, SubContractorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubContractors and returns the data saved in the database.
     * @param {SubContractorCreateManyAndReturnArgs} args - Arguments to create many SubContractors.
     * @example
     * // Create many SubContractors
     * const subContractor = await prisma.subContractor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubContractors and only return the `id`
     * const subContractorWithIdOnly = await prisma.subContractor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubContractorCreateManyAndReturnArgs>(args?: SelectSubset<T, SubContractorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubContractorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubContractor.
     * @param {SubContractorDeleteArgs} args - Arguments to delete one SubContractor.
     * @example
     * // Delete one SubContractor
     * const SubContractor = await prisma.subContractor.delete({
     *   where: {
     *     // ... filter to delete one SubContractor
     *   }
     * })
     * 
     */
    delete<T extends SubContractorDeleteArgs>(args: SelectSubset<T, SubContractorDeleteArgs<ExtArgs>>): Prisma__SubContractorClient<$Result.GetResult<Prisma.$SubContractorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubContractor.
     * @param {SubContractorUpdateArgs} args - Arguments to update one SubContractor.
     * @example
     * // Update one SubContractor
     * const subContractor = await prisma.subContractor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubContractorUpdateArgs>(args: SelectSubset<T, SubContractorUpdateArgs<ExtArgs>>): Prisma__SubContractorClient<$Result.GetResult<Prisma.$SubContractorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubContractors.
     * @param {SubContractorDeleteManyArgs} args - Arguments to filter SubContractors to delete.
     * @example
     * // Delete a few SubContractors
     * const { count } = await prisma.subContractor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubContractorDeleteManyArgs>(args?: SelectSubset<T, SubContractorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubContractors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubContractorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubContractors
     * const subContractor = await prisma.subContractor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubContractorUpdateManyArgs>(args: SelectSubset<T, SubContractorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubContractors and returns the data updated in the database.
     * @param {SubContractorUpdateManyAndReturnArgs} args - Arguments to update many SubContractors.
     * @example
     * // Update many SubContractors
     * const subContractor = await prisma.subContractor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubContractors and only return the `id`
     * const subContractorWithIdOnly = await prisma.subContractor.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubContractorUpdateManyAndReturnArgs>(args: SelectSubset<T, SubContractorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubContractorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubContractor.
     * @param {SubContractorUpsertArgs} args - Arguments to update or create a SubContractor.
     * @example
     * // Update or create a SubContractor
     * const subContractor = await prisma.subContractor.upsert({
     *   create: {
     *     // ... data to create a SubContractor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubContractor we want to update
     *   }
     * })
     */
    upsert<T extends SubContractorUpsertArgs>(args: SelectSubset<T, SubContractorUpsertArgs<ExtArgs>>): Prisma__SubContractorClient<$Result.GetResult<Prisma.$SubContractorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubContractors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubContractorCountArgs} args - Arguments to filter SubContractors to count.
     * @example
     * // Count the number of SubContractors
     * const count = await prisma.subContractor.count({
     *   where: {
     *     // ... the filter for the SubContractors we want to count
     *   }
     * })
    **/
    count<T extends SubContractorCountArgs>(
      args?: Subset<T, SubContractorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubContractorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubContractor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubContractorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubContractorAggregateArgs>(args: Subset<T, SubContractorAggregateArgs>): Prisma.PrismaPromise<GetSubContractorAggregateType<T>>

    /**
     * Group by SubContractor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubContractorGroupByArgs} args - Group by arguments.
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
      T extends SubContractorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubContractorGroupByArgs['orderBy'] }
        : { orderBy?: SubContractorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubContractorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubContractorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubContractor model
   */
  readonly fields: SubContractorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubContractor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubContractorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comparisonDiffs<T extends SubContractor$comparisonDiffsArgs<ExtArgs> = {}>(args?: Subset<T, SubContractor$comparisonDiffsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComparisonDiffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SubContractor model
   */
  interface SubContractorFieldRefs {
    readonly id: FieldRef<"SubContractor", 'Int'>
    readonly name: FieldRef<"SubContractor", 'String'>
    readonly tradeName: FieldRef<"SubContractor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SubContractor findUnique
   */
  export type SubContractorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubContractor
     */
    select?: SubContractorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubContractor
     */
    omit?: SubContractorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubContractorInclude<ExtArgs> | null
    /**
     * Filter, which SubContractor to fetch.
     */
    where: SubContractorWhereUniqueInput
  }

  /**
   * SubContractor findUniqueOrThrow
   */
  export type SubContractorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubContractor
     */
    select?: SubContractorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubContractor
     */
    omit?: SubContractorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubContractorInclude<ExtArgs> | null
    /**
     * Filter, which SubContractor to fetch.
     */
    where: SubContractorWhereUniqueInput
  }

  /**
   * SubContractor findFirst
   */
  export type SubContractorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubContractor
     */
    select?: SubContractorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubContractor
     */
    omit?: SubContractorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubContractorInclude<ExtArgs> | null
    /**
     * Filter, which SubContractor to fetch.
     */
    where?: SubContractorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubContractors to fetch.
     */
    orderBy?: SubContractorOrderByWithRelationInput | SubContractorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubContractors.
     */
    cursor?: SubContractorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubContractors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubContractors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubContractors.
     */
    distinct?: SubContractorScalarFieldEnum | SubContractorScalarFieldEnum[]
  }

  /**
   * SubContractor findFirstOrThrow
   */
  export type SubContractorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubContractor
     */
    select?: SubContractorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubContractor
     */
    omit?: SubContractorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubContractorInclude<ExtArgs> | null
    /**
     * Filter, which SubContractor to fetch.
     */
    where?: SubContractorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubContractors to fetch.
     */
    orderBy?: SubContractorOrderByWithRelationInput | SubContractorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubContractors.
     */
    cursor?: SubContractorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubContractors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubContractors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubContractors.
     */
    distinct?: SubContractorScalarFieldEnum | SubContractorScalarFieldEnum[]
  }

  /**
   * SubContractor findMany
   */
  export type SubContractorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubContractor
     */
    select?: SubContractorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubContractor
     */
    omit?: SubContractorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubContractorInclude<ExtArgs> | null
    /**
     * Filter, which SubContractors to fetch.
     */
    where?: SubContractorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubContractors to fetch.
     */
    orderBy?: SubContractorOrderByWithRelationInput | SubContractorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubContractors.
     */
    cursor?: SubContractorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubContractors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubContractors.
     */
    skip?: number
    distinct?: SubContractorScalarFieldEnum | SubContractorScalarFieldEnum[]
  }

  /**
   * SubContractor create
   */
  export type SubContractorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubContractor
     */
    select?: SubContractorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubContractor
     */
    omit?: SubContractorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubContractorInclude<ExtArgs> | null
    /**
     * The data needed to create a SubContractor.
     */
    data: XOR<SubContractorCreateInput, SubContractorUncheckedCreateInput>
  }

  /**
   * SubContractor createMany
   */
  export type SubContractorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubContractors.
     */
    data: SubContractorCreateManyInput | SubContractorCreateManyInput[]
  }

  /**
   * SubContractor createManyAndReturn
   */
  export type SubContractorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubContractor
     */
    select?: SubContractorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubContractor
     */
    omit?: SubContractorOmit<ExtArgs> | null
    /**
     * The data used to create many SubContractors.
     */
    data: SubContractorCreateManyInput | SubContractorCreateManyInput[]
  }

  /**
   * SubContractor update
   */
  export type SubContractorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubContractor
     */
    select?: SubContractorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubContractor
     */
    omit?: SubContractorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubContractorInclude<ExtArgs> | null
    /**
     * The data needed to update a SubContractor.
     */
    data: XOR<SubContractorUpdateInput, SubContractorUncheckedUpdateInput>
    /**
     * Choose, which SubContractor to update.
     */
    where: SubContractorWhereUniqueInput
  }

  /**
   * SubContractor updateMany
   */
  export type SubContractorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubContractors.
     */
    data: XOR<SubContractorUpdateManyMutationInput, SubContractorUncheckedUpdateManyInput>
    /**
     * Filter which SubContractors to update
     */
    where?: SubContractorWhereInput
    /**
     * Limit how many SubContractors to update.
     */
    limit?: number
  }

  /**
   * SubContractor updateManyAndReturn
   */
  export type SubContractorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubContractor
     */
    select?: SubContractorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubContractor
     */
    omit?: SubContractorOmit<ExtArgs> | null
    /**
     * The data used to update SubContractors.
     */
    data: XOR<SubContractorUpdateManyMutationInput, SubContractorUncheckedUpdateManyInput>
    /**
     * Filter which SubContractors to update
     */
    where?: SubContractorWhereInput
    /**
     * Limit how many SubContractors to update.
     */
    limit?: number
  }

  /**
   * SubContractor upsert
   */
  export type SubContractorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubContractor
     */
    select?: SubContractorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubContractor
     */
    omit?: SubContractorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubContractorInclude<ExtArgs> | null
    /**
     * The filter to search for the SubContractor to update in case it exists.
     */
    where: SubContractorWhereUniqueInput
    /**
     * In case the SubContractor found by the `where` argument doesn't exist, create a new SubContractor with this data.
     */
    create: XOR<SubContractorCreateInput, SubContractorUncheckedCreateInput>
    /**
     * In case the SubContractor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubContractorUpdateInput, SubContractorUncheckedUpdateInput>
  }

  /**
   * SubContractor delete
   */
  export type SubContractorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubContractor
     */
    select?: SubContractorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubContractor
     */
    omit?: SubContractorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubContractorInclude<ExtArgs> | null
    /**
     * Filter which SubContractor to delete.
     */
    where: SubContractorWhereUniqueInput
  }

  /**
   * SubContractor deleteMany
   */
  export type SubContractorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubContractors to delete
     */
    where?: SubContractorWhereInput
    /**
     * Limit how many SubContractors to delete.
     */
    limit?: number
  }

  /**
   * SubContractor.comparisonDiffs
   */
  export type SubContractor$comparisonDiffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComparisonDiff
     */
    select?: ComparisonDiffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComparisonDiff
     */
    omit?: ComparisonDiffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonDiffInclude<ExtArgs> | null
    where?: ComparisonDiffWhereInput
    orderBy?: ComparisonDiffOrderByWithRelationInput | ComparisonDiffOrderByWithRelationInput[]
    cursor?: ComparisonDiffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComparisonDiffScalarFieldEnum | ComparisonDiffScalarFieldEnum[]
  }

  /**
   * SubContractor without action
   */
  export type SubContractorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubContractor
     */
    select?: SubContractorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubContractor
     */
    omit?: SubContractorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubContractorInclude<ExtArgs> | null
  }


  /**
   * Model Box
   */

  export type AggregateBox = {
    _count: BoxCountAggregateOutputType | null
    _avg: BoxAvgAggregateOutputType | null
    _sum: BoxSumAggregateOutputType | null
    _min: BoxMinAggregateOutputType | null
    _max: BoxMaxAggregateOutputType | null
  }

  export type BoxAvgAggregateOutputType = {
    id: number | null
    pageWidth: number | null
    pageHeight: number | null
    sheetId: number | null
  }

  export type BoxSumAggregateOutputType = {
    id: number | null
    pageWidth: number | null
    pageHeight: number | null
    sheetId: number | null
  }

  export type BoxMinAggregateOutputType = {
    id: number | null
    code: string | null
    title: string | null
    scale: string | null
    content: string | null
    coordinates: string | null
    type: string | null
    shape: string | null
    color: string | null
    pageWidth: number | null
    pageHeight: number | null
    userModified: boolean | null
    sheetId: number | null
  }

  export type BoxMaxAggregateOutputType = {
    id: number | null
    code: string | null
    title: string | null
    scale: string | null
    content: string | null
    coordinates: string | null
    type: string | null
    shape: string | null
    color: string | null
    pageWidth: number | null
    pageHeight: number | null
    userModified: boolean | null
    sheetId: number | null
  }

  export type BoxCountAggregateOutputType = {
    id: number
    code: number
    title: number
    scale: number
    content: number
    coordinates: number
    type: number
    shape: number
    color: number
    pageWidth: number
    pageHeight: number
    userModified: number
    sheetId: number
    _all: number
  }


  export type BoxAvgAggregateInputType = {
    id?: true
    pageWidth?: true
    pageHeight?: true
    sheetId?: true
  }

  export type BoxSumAggregateInputType = {
    id?: true
    pageWidth?: true
    pageHeight?: true
    sheetId?: true
  }

  export type BoxMinAggregateInputType = {
    id?: true
    code?: true
    title?: true
    scale?: true
    content?: true
    coordinates?: true
    type?: true
    shape?: true
    color?: true
    pageWidth?: true
    pageHeight?: true
    userModified?: true
    sheetId?: true
  }

  export type BoxMaxAggregateInputType = {
    id?: true
    code?: true
    title?: true
    scale?: true
    content?: true
    coordinates?: true
    type?: true
    shape?: true
    color?: true
    pageWidth?: true
    pageHeight?: true
    userModified?: true
    sheetId?: true
  }

  export type BoxCountAggregateInputType = {
    id?: true
    code?: true
    title?: true
    scale?: true
    content?: true
    coordinates?: true
    type?: true
    shape?: true
    color?: true
    pageWidth?: true
    pageHeight?: true
    userModified?: true
    sheetId?: true
    _all?: true
  }

  export type BoxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Box to aggregate.
     */
    where?: BoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boxes to fetch.
     */
    orderBy?: BoxOrderByWithRelationInput | BoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boxes
    **/
    _count?: true | BoxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoxAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoxSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoxMaxAggregateInputType
  }

  export type GetBoxAggregateType<T extends BoxAggregateArgs> = {
        [P in keyof T & keyof AggregateBox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBox[P]>
      : GetScalarType<T[P], AggregateBox[P]>
  }




  export type BoxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoxWhereInput
    orderBy?: BoxOrderByWithAggregationInput | BoxOrderByWithAggregationInput[]
    by: BoxScalarFieldEnum[] | BoxScalarFieldEnum
    having?: BoxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoxCountAggregateInputType | true
    _avg?: BoxAvgAggregateInputType
    _sum?: BoxSumAggregateInputType
    _min?: BoxMinAggregateInputType
    _max?: BoxMaxAggregateInputType
  }

  export type BoxGroupByOutputType = {
    id: number
    code: string
    title: string | null
    scale: string | null
    content: string | null
    coordinates: string
    type: string
    shape: string
    color: string
    pageWidth: number | null
    pageHeight: number | null
    userModified: boolean
    sheetId: number
    _count: BoxCountAggregateOutputType | null
    _avg: BoxAvgAggregateOutputType | null
    _sum: BoxSumAggregateOutputType | null
    _min: BoxMinAggregateOutputType | null
    _max: BoxMaxAggregateOutputType | null
  }

  type GetBoxGroupByPayload<T extends BoxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoxGroupByOutputType[P]>
            : GetScalarType<T[P], BoxGroupByOutputType[P]>
        }
      >
    >


  export type BoxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    scale?: boolean
    content?: boolean
    coordinates?: boolean
    type?: boolean
    shape?: boolean
    color?: boolean
    pageWidth?: boolean
    pageHeight?: boolean
    userModified?: boolean
    sheetId?: boolean
    alignmentResults?: boolean | Box$alignmentResultsArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
    _count?: boolean | BoxCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["box"]>

  export type BoxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    scale?: boolean
    content?: boolean
    coordinates?: boolean
    type?: boolean
    shape?: boolean
    color?: boolean
    pageWidth?: boolean
    pageHeight?: boolean
    userModified?: boolean
    sheetId?: boolean
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["box"]>

  export type BoxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    scale?: boolean
    content?: boolean
    coordinates?: boolean
    type?: boolean
    shape?: boolean
    color?: boolean
    pageWidth?: boolean
    pageHeight?: boolean
    userModified?: boolean
    sheetId?: boolean
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["box"]>

  export type BoxSelectScalar = {
    id?: boolean
    code?: boolean
    title?: boolean
    scale?: boolean
    content?: boolean
    coordinates?: boolean
    type?: boolean
    shape?: boolean
    color?: boolean
    pageWidth?: boolean
    pageHeight?: boolean
    userModified?: boolean
    sheetId?: boolean
  }

  export type BoxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "title" | "scale" | "content" | "coordinates" | "type" | "shape" | "color" | "pageWidth" | "pageHeight" | "userModified" | "sheetId", ExtArgs["result"]["box"]>
  export type BoxInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alignmentResults?: boolean | Box$alignmentResultsArgs<ExtArgs>
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
    _count?: boolean | BoxCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BoxIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }
  export type BoxIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }

  export type $BoxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Box"
    objects: {
      alignmentResults: Prisma.$AlignmentResultPayload<ExtArgs>[]
      sheet: Prisma.$SheetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      title: string | null
      scale: string | null
      content: string | null
      coordinates: string
      type: string
      shape: string
      color: string
      pageWidth: number | null
      pageHeight: number | null
      userModified: boolean
      sheetId: number
    }, ExtArgs["result"]["box"]>
    composites: {}
  }

  type BoxGetPayload<S extends boolean | null | undefined | BoxDefaultArgs> = $Result.GetResult<Prisma.$BoxPayload, S>

  type BoxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoxCountAggregateInputType | true
    }

  export interface BoxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Box'], meta: { name: 'Box' } }
    /**
     * Find zero or one Box that matches the filter.
     * @param {BoxFindUniqueArgs} args - Arguments to find a Box
     * @example
     * // Get one Box
     * const box = await prisma.box.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoxFindUniqueArgs>(args: SelectSubset<T, BoxFindUniqueArgs<ExtArgs>>): Prisma__BoxClient<$Result.GetResult<Prisma.$BoxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Box that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoxFindUniqueOrThrowArgs} args - Arguments to find a Box
     * @example
     * // Get one Box
     * const box = await prisma.box.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoxFindUniqueOrThrowArgs>(args: SelectSubset<T, BoxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoxClient<$Result.GetResult<Prisma.$BoxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Box that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxFindFirstArgs} args - Arguments to find a Box
     * @example
     * // Get one Box
     * const box = await prisma.box.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoxFindFirstArgs>(args?: SelectSubset<T, BoxFindFirstArgs<ExtArgs>>): Prisma__BoxClient<$Result.GetResult<Prisma.$BoxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Box that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxFindFirstOrThrowArgs} args - Arguments to find a Box
     * @example
     * // Get one Box
     * const box = await prisma.box.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoxFindFirstOrThrowArgs>(args?: SelectSubset<T, BoxFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoxClient<$Result.GetResult<Prisma.$BoxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Boxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boxes
     * const boxes = await prisma.box.findMany()
     * 
     * // Get first 10 Boxes
     * const boxes = await prisma.box.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boxWithIdOnly = await prisma.box.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoxFindManyArgs>(args?: SelectSubset<T, BoxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Box.
     * @param {BoxCreateArgs} args - Arguments to create a Box.
     * @example
     * // Create one Box
     * const Box = await prisma.box.create({
     *   data: {
     *     // ... data to create a Box
     *   }
     * })
     * 
     */
    create<T extends BoxCreateArgs>(args: SelectSubset<T, BoxCreateArgs<ExtArgs>>): Prisma__BoxClient<$Result.GetResult<Prisma.$BoxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Boxes.
     * @param {BoxCreateManyArgs} args - Arguments to create many Boxes.
     * @example
     * // Create many Boxes
     * const box = await prisma.box.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoxCreateManyArgs>(args?: SelectSubset<T, BoxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Boxes and returns the data saved in the database.
     * @param {BoxCreateManyAndReturnArgs} args - Arguments to create many Boxes.
     * @example
     * // Create many Boxes
     * const box = await prisma.box.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Boxes and only return the `id`
     * const boxWithIdOnly = await prisma.box.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoxCreateManyAndReturnArgs>(args?: SelectSubset<T, BoxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Box.
     * @param {BoxDeleteArgs} args - Arguments to delete one Box.
     * @example
     * // Delete one Box
     * const Box = await prisma.box.delete({
     *   where: {
     *     // ... filter to delete one Box
     *   }
     * })
     * 
     */
    delete<T extends BoxDeleteArgs>(args: SelectSubset<T, BoxDeleteArgs<ExtArgs>>): Prisma__BoxClient<$Result.GetResult<Prisma.$BoxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Box.
     * @param {BoxUpdateArgs} args - Arguments to update one Box.
     * @example
     * // Update one Box
     * const box = await prisma.box.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoxUpdateArgs>(args: SelectSubset<T, BoxUpdateArgs<ExtArgs>>): Prisma__BoxClient<$Result.GetResult<Prisma.$BoxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Boxes.
     * @param {BoxDeleteManyArgs} args - Arguments to filter Boxes to delete.
     * @example
     * // Delete a few Boxes
     * const { count } = await prisma.box.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoxDeleteManyArgs>(args?: SelectSubset<T, BoxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boxes
     * const box = await prisma.box.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoxUpdateManyArgs>(args: SelectSubset<T, BoxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boxes and returns the data updated in the database.
     * @param {BoxUpdateManyAndReturnArgs} args - Arguments to update many Boxes.
     * @example
     * // Update many Boxes
     * const box = await prisma.box.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Boxes and only return the `id`
     * const boxWithIdOnly = await prisma.box.updateManyAndReturn({
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
    updateManyAndReturn<T extends BoxUpdateManyAndReturnArgs>(args: SelectSubset<T, BoxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Box.
     * @param {BoxUpsertArgs} args - Arguments to update or create a Box.
     * @example
     * // Update or create a Box
     * const box = await prisma.box.upsert({
     *   create: {
     *     // ... data to create a Box
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Box we want to update
     *   }
     * })
     */
    upsert<T extends BoxUpsertArgs>(args: SelectSubset<T, BoxUpsertArgs<ExtArgs>>): Prisma__BoxClient<$Result.GetResult<Prisma.$BoxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Boxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxCountArgs} args - Arguments to filter Boxes to count.
     * @example
     * // Count the number of Boxes
     * const count = await prisma.box.count({
     *   where: {
     *     // ... the filter for the Boxes we want to count
     *   }
     * })
    **/
    count<T extends BoxCountArgs>(
      args?: Subset<T, BoxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Box.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoxAggregateArgs>(args: Subset<T, BoxAggregateArgs>): Prisma.PrismaPromise<GetBoxAggregateType<T>>

    /**
     * Group by Box.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxGroupByArgs} args - Group by arguments.
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
      T extends BoxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoxGroupByArgs['orderBy'] }
        : { orderBy?: BoxGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BoxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Box model
   */
  readonly fields: BoxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Box.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alignmentResults<T extends Box$alignmentResultsArgs<ExtArgs> = {}>(args?: Subset<T, Box$alignmentResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlignmentResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sheet<T extends SheetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SheetDefaultArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Box model
   */
  interface BoxFieldRefs {
    readonly id: FieldRef<"Box", 'Int'>
    readonly code: FieldRef<"Box", 'String'>
    readonly title: FieldRef<"Box", 'String'>
    readonly scale: FieldRef<"Box", 'String'>
    readonly content: FieldRef<"Box", 'String'>
    readonly coordinates: FieldRef<"Box", 'String'>
    readonly type: FieldRef<"Box", 'String'>
    readonly shape: FieldRef<"Box", 'String'>
    readonly color: FieldRef<"Box", 'String'>
    readonly pageWidth: FieldRef<"Box", 'Int'>
    readonly pageHeight: FieldRef<"Box", 'Int'>
    readonly userModified: FieldRef<"Box", 'Boolean'>
    readonly sheetId: FieldRef<"Box", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Box findUnique
   */
  export type BoxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxInclude<ExtArgs> | null
    /**
     * Filter, which Box to fetch.
     */
    where: BoxWhereUniqueInput
  }

  /**
   * Box findUniqueOrThrow
   */
  export type BoxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxInclude<ExtArgs> | null
    /**
     * Filter, which Box to fetch.
     */
    where: BoxWhereUniqueInput
  }

  /**
   * Box findFirst
   */
  export type BoxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxInclude<ExtArgs> | null
    /**
     * Filter, which Box to fetch.
     */
    where?: BoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boxes to fetch.
     */
    orderBy?: BoxOrderByWithRelationInput | BoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boxes.
     */
    cursor?: BoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boxes.
     */
    distinct?: BoxScalarFieldEnum | BoxScalarFieldEnum[]
  }

  /**
   * Box findFirstOrThrow
   */
  export type BoxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxInclude<ExtArgs> | null
    /**
     * Filter, which Box to fetch.
     */
    where?: BoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boxes to fetch.
     */
    orderBy?: BoxOrderByWithRelationInput | BoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boxes.
     */
    cursor?: BoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boxes.
     */
    distinct?: BoxScalarFieldEnum | BoxScalarFieldEnum[]
  }

  /**
   * Box findMany
   */
  export type BoxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxInclude<ExtArgs> | null
    /**
     * Filter, which Boxes to fetch.
     */
    where?: BoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boxes to fetch.
     */
    orderBy?: BoxOrderByWithRelationInput | BoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boxes.
     */
    cursor?: BoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boxes.
     */
    skip?: number
    distinct?: BoxScalarFieldEnum | BoxScalarFieldEnum[]
  }

  /**
   * Box create
   */
  export type BoxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxInclude<ExtArgs> | null
    /**
     * The data needed to create a Box.
     */
    data: XOR<BoxCreateInput, BoxUncheckedCreateInput>
  }

  /**
   * Box createMany
   */
  export type BoxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Boxes.
     */
    data: BoxCreateManyInput | BoxCreateManyInput[]
  }

  /**
   * Box createManyAndReturn
   */
  export type BoxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * The data used to create many Boxes.
     */
    data: BoxCreateManyInput | BoxCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Box update
   */
  export type BoxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxInclude<ExtArgs> | null
    /**
     * The data needed to update a Box.
     */
    data: XOR<BoxUpdateInput, BoxUncheckedUpdateInput>
    /**
     * Choose, which Box to update.
     */
    where: BoxWhereUniqueInput
  }

  /**
   * Box updateMany
   */
  export type BoxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Boxes.
     */
    data: XOR<BoxUpdateManyMutationInput, BoxUncheckedUpdateManyInput>
    /**
     * Filter which Boxes to update
     */
    where?: BoxWhereInput
    /**
     * Limit how many Boxes to update.
     */
    limit?: number
  }

  /**
   * Box updateManyAndReturn
   */
  export type BoxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * The data used to update Boxes.
     */
    data: XOR<BoxUpdateManyMutationInput, BoxUncheckedUpdateManyInput>
    /**
     * Filter which Boxes to update
     */
    where?: BoxWhereInput
    /**
     * Limit how many Boxes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Box upsert
   */
  export type BoxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxInclude<ExtArgs> | null
    /**
     * The filter to search for the Box to update in case it exists.
     */
    where: BoxWhereUniqueInput
    /**
     * In case the Box found by the `where` argument doesn't exist, create a new Box with this data.
     */
    create: XOR<BoxCreateInput, BoxUncheckedCreateInput>
    /**
     * In case the Box was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoxUpdateInput, BoxUncheckedUpdateInput>
  }

  /**
   * Box delete
   */
  export type BoxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxInclude<ExtArgs> | null
    /**
     * Filter which Box to delete.
     */
    where: BoxWhereUniqueInput
  }

  /**
   * Box deleteMany
   */
  export type BoxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boxes to delete
     */
    where?: BoxWhereInput
    /**
     * Limit how many Boxes to delete.
     */
    limit?: number
  }

  /**
   * Box.alignmentResults
   */
  export type Box$alignmentResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlignmentResult
     */
    select?: AlignmentResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlignmentResult
     */
    omit?: AlignmentResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlignmentResultInclude<ExtArgs> | null
    where?: AlignmentResultWhereInput
    orderBy?: AlignmentResultOrderByWithRelationInput | AlignmentResultOrderByWithRelationInput[]
    cursor?: AlignmentResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlignmentResultScalarFieldEnum | AlignmentResultScalarFieldEnum[]
  }

  /**
   * Box without action
   */
  export type BoxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxInclude<ExtArgs> | null
  }


  /**
   * Model Reference
   */

  export type AggregateReference = {
    _count: ReferenceCountAggregateOutputType | null
    _avg: ReferenceAvgAggregateOutputType | null
    _sum: ReferenceSumAggregateOutputType | null
    _min: ReferenceMinAggregateOutputType | null
    _max: ReferenceMaxAggregateOutputType | null
  }

  export type ReferenceAvgAggregateOutputType = {
    id: number | null
    sheetId: number | null
  }

  export type ReferenceSumAggregateOutputType = {
    id: number | null
    sheetId: number | null
  }

  export type ReferenceMinAggregateOutputType = {
    id: number | null
    coordinates: string | null
    code: string | null
    sheetCode: string | null
    sheetId: number | null
  }

  export type ReferenceMaxAggregateOutputType = {
    id: number | null
    coordinates: string | null
    code: string | null
    sheetCode: string | null
    sheetId: number | null
  }

  export type ReferenceCountAggregateOutputType = {
    id: number
    coordinates: number
    code: number
    sheetCode: number
    sheetId: number
    _all: number
  }


  export type ReferenceAvgAggregateInputType = {
    id?: true
    sheetId?: true
  }

  export type ReferenceSumAggregateInputType = {
    id?: true
    sheetId?: true
  }

  export type ReferenceMinAggregateInputType = {
    id?: true
    coordinates?: true
    code?: true
    sheetCode?: true
    sheetId?: true
  }

  export type ReferenceMaxAggregateInputType = {
    id?: true
    coordinates?: true
    code?: true
    sheetCode?: true
    sheetId?: true
  }

  export type ReferenceCountAggregateInputType = {
    id?: true
    coordinates?: true
    code?: true
    sheetCode?: true
    sheetId?: true
    _all?: true
  }

  export type ReferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reference to aggregate.
     */
    where?: ReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of References to fetch.
     */
    orderBy?: ReferenceOrderByWithRelationInput | ReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` References from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` References.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned References
    **/
    _count?: true | ReferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReferenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReferenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferenceMaxAggregateInputType
  }

  export type GetReferenceAggregateType<T extends ReferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateReference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReference[P]>
      : GetScalarType<T[P], AggregateReference[P]>
  }




  export type ReferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferenceWhereInput
    orderBy?: ReferenceOrderByWithAggregationInput | ReferenceOrderByWithAggregationInput[]
    by: ReferenceScalarFieldEnum[] | ReferenceScalarFieldEnum
    having?: ReferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferenceCountAggregateInputType | true
    _avg?: ReferenceAvgAggregateInputType
    _sum?: ReferenceSumAggregateInputType
    _min?: ReferenceMinAggregateInputType
    _max?: ReferenceMaxAggregateInputType
  }

  export type ReferenceGroupByOutputType = {
    id: number
    coordinates: string
    code: string
    sheetCode: string
    sheetId: number
    _count: ReferenceCountAggregateOutputType | null
    _avg: ReferenceAvgAggregateOutputType | null
    _sum: ReferenceSumAggregateOutputType | null
    _min: ReferenceMinAggregateOutputType | null
    _max: ReferenceMaxAggregateOutputType | null
  }

  type GetReferenceGroupByPayload<T extends ReferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferenceGroupByOutputType[P]>
            : GetScalarType<T[P], ReferenceGroupByOutputType[P]>
        }
      >
    >


  export type ReferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coordinates?: boolean
    code?: boolean
    sheetCode?: boolean
    sheetId?: boolean
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reference"]>

  export type ReferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coordinates?: boolean
    code?: boolean
    sheetCode?: boolean
    sheetId?: boolean
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reference"]>

  export type ReferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coordinates?: boolean
    code?: boolean
    sheetCode?: boolean
    sheetId?: boolean
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reference"]>

  export type ReferenceSelectScalar = {
    id?: boolean
    coordinates?: boolean
    code?: boolean
    sheetCode?: boolean
    sheetId?: boolean
  }

  export type ReferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "coordinates" | "code" | "sheetCode" | "sheetId", ExtArgs["result"]["reference"]>
  export type ReferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }
  export type ReferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }
  export type ReferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }

  export type $ReferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reference"
    objects: {
      sheet: Prisma.$SheetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      coordinates: string
      code: string
      sheetCode: string
      sheetId: number
    }, ExtArgs["result"]["reference"]>
    composites: {}
  }

  type ReferenceGetPayload<S extends boolean | null | undefined | ReferenceDefaultArgs> = $Result.GetResult<Prisma.$ReferencePayload, S>

  type ReferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReferenceCountAggregateInputType | true
    }

  export interface ReferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reference'], meta: { name: 'Reference' } }
    /**
     * Find zero or one Reference that matches the filter.
     * @param {ReferenceFindUniqueArgs} args - Arguments to find a Reference
     * @example
     * // Get one Reference
     * const reference = await prisma.reference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferenceFindUniqueArgs>(args: SelectSubset<T, ReferenceFindUniqueArgs<ExtArgs>>): Prisma__ReferenceClient<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReferenceFindUniqueOrThrowArgs} args - Arguments to find a Reference
     * @example
     * // Get one Reference
     * const reference = await prisma.reference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferenceClient<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceFindFirstArgs} args - Arguments to find a Reference
     * @example
     * // Get one Reference
     * const reference = await prisma.reference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferenceFindFirstArgs>(args?: SelectSubset<T, ReferenceFindFirstArgs<ExtArgs>>): Prisma__ReferenceClient<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceFindFirstOrThrowArgs} args - Arguments to find a Reference
     * @example
     * // Get one Reference
     * const reference = await prisma.reference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferenceClient<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more References that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all References
     * const references = await prisma.reference.findMany()
     * 
     * // Get first 10 References
     * const references = await prisma.reference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referenceWithIdOnly = await prisma.reference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReferenceFindManyArgs>(args?: SelectSubset<T, ReferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reference.
     * @param {ReferenceCreateArgs} args - Arguments to create a Reference.
     * @example
     * // Create one Reference
     * const Reference = await prisma.reference.create({
     *   data: {
     *     // ... data to create a Reference
     *   }
     * })
     * 
     */
    create<T extends ReferenceCreateArgs>(args: SelectSubset<T, ReferenceCreateArgs<ExtArgs>>): Prisma__ReferenceClient<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many References.
     * @param {ReferenceCreateManyArgs} args - Arguments to create many References.
     * @example
     * // Create many References
     * const reference = await prisma.reference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferenceCreateManyArgs>(args?: SelectSubset<T, ReferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many References and returns the data saved in the database.
     * @param {ReferenceCreateManyAndReturnArgs} args - Arguments to create many References.
     * @example
     * // Create many References
     * const reference = await prisma.reference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many References and only return the `id`
     * const referenceWithIdOnly = await prisma.reference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, ReferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reference.
     * @param {ReferenceDeleteArgs} args - Arguments to delete one Reference.
     * @example
     * // Delete one Reference
     * const Reference = await prisma.reference.delete({
     *   where: {
     *     // ... filter to delete one Reference
     *   }
     * })
     * 
     */
    delete<T extends ReferenceDeleteArgs>(args: SelectSubset<T, ReferenceDeleteArgs<ExtArgs>>): Prisma__ReferenceClient<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reference.
     * @param {ReferenceUpdateArgs} args - Arguments to update one Reference.
     * @example
     * // Update one Reference
     * const reference = await prisma.reference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferenceUpdateArgs>(args: SelectSubset<T, ReferenceUpdateArgs<ExtArgs>>): Prisma__ReferenceClient<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more References.
     * @param {ReferenceDeleteManyArgs} args - Arguments to filter References to delete.
     * @example
     * // Delete a few References
     * const { count } = await prisma.reference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferenceDeleteManyArgs>(args?: SelectSubset<T, ReferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more References.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many References
     * const reference = await prisma.reference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferenceUpdateManyArgs>(args: SelectSubset<T, ReferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more References and returns the data updated in the database.
     * @param {ReferenceUpdateManyAndReturnArgs} args - Arguments to update many References.
     * @example
     * // Update many References
     * const reference = await prisma.reference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more References and only return the `id`
     * const referenceWithIdOnly = await prisma.reference.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, ReferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reference.
     * @param {ReferenceUpsertArgs} args - Arguments to update or create a Reference.
     * @example
     * // Update or create a Reference
     * const reference = await prisma.reference.upsert({
     *   create: {
     *     // ... data to create a Reference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reference we want to update
     *   }
     * })
     */
    upsert<T extends ReferenceUpsertArgs>(args: SelectSubset<T, ReferenceUpsertArgs<ExtArgs>>): Prisma__ReferenceClient<$Result.GetResult<Prisma.$ReferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of References.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceCountArgs} args - Arguments to filter References to count.
     * @example
     * // Count the number of References
     * const count = await prisma.reference.count({
     *   where: {
     *     // ... the filter for the References we want to count
     *   }
     * })
    **/
    count<T extends ReferenceCountArgs>(
      args?: Subset<T, ReferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReferenceAggregateArgs>(args: Subset<T, ReferenceAggregateArgs>): Prisma.PrismaPromise<GetReferenceAggregateType<T>>

    /**
     * Group by Reference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceGroupByArgs} args - Group by arguments.
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
      T extends ReferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferenceGroupByArgs['orderBy'] }
        : { orderBy?: ReferenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reference model
   */
  readonly fields: ReferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sheet<T extends SheetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SheetDefaultArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reference model
   */
  interface ReferenceFieldRefs {
    readonly id: FieldRef<"Reference", 'Int'>
    readonly coordinates: FieldRef<"Reference", 'String'>
    readonly code: FieldRef<"Reference", 'String'>
    readonly sheetCode: FieldRef<"Reference", 'String'>
    readonly sheetId: FieldRef<"Reference", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Reference findUnique
   */
  export type ReferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * Filter, which Reference to fetch.
     */
    where: ReferenceWhereUniqueInput
  }

  /**
   * Reference findUniqueOrThrow
   */
  export type ReferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * Filter, which Reference to fetch.
     */
    where: ReferenceWhereUniqueInput
  }

  /**
   * Reference findFirst
   */
  export type ReferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * Filter, which Reference to fetch.
     */
    where?: ReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of References to fetch.
     */
    orderBy?: ReferenceOrderByWithRelationInput | ReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for References.
     */
    cursor?: ReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` References from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` References.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of References.
     */
    distinct?: ReferenceScalarFieldEnum | ReferenceScalarFieldEnum[]
  }

  /**
   * Reference findFirstOrThrow
   */
  export type ReferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * Filter, which Reference to fetch.
     */
    where?: ReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of References to fetch.
     */
    orderBy?: ReferenceOrderByWithRelationInput | ReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for References.
     */
    cursor?: ReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` References from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` References.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of References.
     */
    distinct?: ReferenceScalarFieldEnum | ReferenceScalarFieldEnum[]
  }

  /**
   * Reference findMany
   */
  export type ReferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * Filter, which References to fetch.
     */
    where?: ReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of References to fetch.
     */
    orderBy?: ReferenceOrderByWithRelationInput | ReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing References.
     */
    cursor?: ReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` References from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` References.
     */
    skip?: number
    distinct?: ReferenceScalarFieldEnum | ReferenceScalarFieldEnum[]
  }

  /**
   * Reference create
   */
  export type ReferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a Reference.
     */
    data: XOR<ReferenceCreateInput, ReferenceUncheckedCreateInput>
  }

  /**
   * Reference createMany
   */
  export type ReferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many References.
     */
    data: ReferenceCreateManyInput | ReferenceCreateManyInput[]
  }

  /**
   * Reference createManyAndReturn
   */
  export type ReferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * The data used to create many References.
     */
    data: ReferenceCreateManyInput | ReferenceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reference update
   */
  export type ReferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a Reference.
     */
    data: XOR<ReferenceUpdateInput, ReferenceUncheckedUpdateInput>
    /**
     * Choose, which Reference to update.
     */
    where: ReferenceWhereUniqueInput
  }

  /**
   * Reference updateMany
   */
  export type ReferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update References.
     */
    data: XOR<ReferenceUpdateManyMutationInput, ReferenceUncheckedUpdateManyInput>
    /**
     * Filter which References to update
     */
    where?: ReferenceWhereInput
    /**
     * Limit how many References to update.
     */
    limit?: number
  }

  /**
   * Reference updateManyAndReturn
   */
  export type ReferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * The data used to update References.
     */
    data: XOR<ReferenceUpdateManyMutationInput, ReferenceUncheckedUpdateManyInput>
    /**
     * Filter which References to update
     */
    where?: ReferenceWhereInput
    /**
     * Limit how many References to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reference upsert
   */
  export type ReferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the Reference to update in case it exists.
     */
    where: ReferenceWhereUniqueInput
    /**
     * In case the Reference found by the `where` argument doesn't exist, create a new Reference with this data.
     */
    create: XOR<ReferenceCreateInput, ReferenceUncheckedCreateInput>
    /**
     * In case the Reference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferenceUpdateInput, ReferenceUncheckedUpdateInput>
  }

  /**
   * Reference delete
   */
  export type ReferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
    /**
     * Filter which Reference to delete.
     */
    where: ReferenceWhereUniqueInput
  }

  /**
   * Reference deleteMany
   */
  export type ReferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which References to delete
     */
    where?: ReferenceWhereInput
    /**
     * Limit how many References to delete.
     */
    limit?: number
  }

  /**
   * Reference without action
   */
  export type ReferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reference
     */
    select?: ReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reference
     */
    omit?: ReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferenceInclude<ExtArgs> | null
  }


  /**
   * Model Distance
   */

  export type AggregateDistance = {
    _count: DistanceCountAggregateOutputType | null
    _avg: DistanceAvgAggregateOutputType | null
    _sum: DistanceSumAggregateOutputType | null
    _min: DistanceMinAggregateOutputType | null
    _max: DistanceMaxAggregateOutputType | null
  }

  export type DistanceAvgAggregateOutputType = {
    id: number | null
    length: number | null
    pixel_distance: number | null
    sheetId: number | null
  }

  export type DistanceSumAggregateOutputType = {
    id: number | null
    length: number | null
    pixel_distance: number | null
    sheetId: number | null
  }

  export type DistanceMinAggregateOutputType = {
    id: number | null
    pointA: string | null
    pointB: string | null
    length: number | null
    pixel_distance: number | null
    sheetId: number | null
  }

  export type DistanceMaxAggregateOutputType = {
    id: number | null
    pointA: string | null
    pointB: string | null
    length: number | null
    pixel_distance: number | null
    sheetId: number | null
  }

  export type DistanceCountAggregateOutputType = {
    id: number
    pointA: number
    pointB: number
    length: number
    pixel_distance: number
    sheetId: number
    _all: number
  }


  export type DistanceAvgAggregateInputType = {
    id?: true
    length?: true
    pixel_distance?: true
    sheetId?: true
  }

  export type DistanceSumAggregateInputType = {
    id?: true
    length?: true
    pixel_distance?: true
    sheetId?: true
  }

  export type DistanceMinAggregateInputType = {
    id?: true
    pointA?: true
    pointB?: true
    length?: true
    pixel_distance?: true
    sheetId?: true
  }

  export type DistanceMaxAggregateInputType = {
    id?: true
    pointA?: true
    pointB?: true
    length?: true
    pixel_distance?: true
    sheetId?: true
  }

  export type DistanceCountAggregateInputType = {
    id?: true
    pointA?: true
    pointB?: true
    length?: true
    pixel_distance?: true
    sheetId?: true
    _all?: true
  }

  export type DistanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Distance to aggregate.
     */
    where?: DistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distances to fetch.
     */
    orderBy?: DistanceOrderByWithRelationInput | DistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Distances
    **/
    _count?: true | DistanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DistanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DistanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistanceMaxAggregateInputType
  }

  export type GetDistanceAggregateType<T extends DistanceAggregateArgs> = {
        [P in keyof T & keyof AggregateDistance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistance[P]>
      : GetScalarType<T[P], AggregateDistance[P]>
  }




  export type DistanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistanceWhereInput
    orderBy?: DistanceOrderByWithAggregationInput | DistanceOrderByWithAggregationInput[]
    by: DistanceScalarFieldEnum[] | DistanceScalarFieldEnum
    having?: DistanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistanceCountAggregateInputType | true
    _avg?: DistanceAvgAggregateInputType
    _sum?: DistanceSumAggregateInputType
    _min?: DistanceMinAggregateInputType
    _max?: DistanceMaxAggregateInputType
  }

  export type DistanceGroupByOutputType = {
    id: number
    pointA: string
    pointB: string
    length: number
    pixel_distance: number
    sheetId: number
    _count: DistanceCountAggregateOutputType | null
    _avg: DistanceAvgAggregateOutputType | null
    _sum: DistanceSumAggregateOutputType | null
    _min: DistanceMinAggregateOutputType | null
    _max: DistanceMaxAggregateOutputType | null
  }

  type GetDistanceGroupByPayload<T extends DistanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistanceGroupByOutputType[P]>
            : GetScalarType<T[P], DistanceGroupByOutputType[P]>
        }
      >
    >


  export type DistanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pointA?: boolean
    pointB?: boolean
    length?: boolean
    pixel_distance?: boolean
    sheetId?: boolean
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distance"]>

  export type DistanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pointA?: boolean
    pointB?: boolean
    length?: boolean
    pixel_distance?: boolean
    sheetId?: boolean
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distance"]>

  export type DistanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pointA?: boolean
    pointB?: boolean
    length?: boolean
    pixel_distance?: boolean
    sheetId?: boolean
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distance"]>

  export type DistanceSelectScalar = {
    id?: boolean
    pointA?: boolean
    pointB?: boolean
    length?: boolean
    pixel_distance?: boolean
    sheetId?: boolean
  }

  export type DistanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pointA" | "pointB" | "length" | "pixel_distance" | "sheetId", ExtArgs["result"]["distance"]>
  export type DistanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }
  export type DistanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }
  export type DistanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheet?: boolean | SheetDefaultArgs<ExtArgs>
  }

  export type $DistancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Distance"
    objects: {
      sheet: Prisma.$SheetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pointA: string
      pointB: string
      length: number
      pixel_distance: number
      sheetId: number
    }, ExtArgs["result"]["distance"]>
    composites: {}
  }

  type DistanceGetPayload<S extends boolean | null | undefined | DistanceDefaultArgs> = $Result.GetResult<Prisma.$DistancePayload, S>

  type DistanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DistanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DistanceCountAggregateInputType | true
    }

  export interface DistanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Distance'], meta: { name: 'Distance' } }
    /**
     * Find zero or one Distance that matches the filter.
     * @param {DistanceFindUniqueArgs} args - Arguments to find a Distance
     * @example
     * // Get one Distance
     * const distance = await prisma.distance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DistanceFindUniqueArgs>(args: SelectSubset<T, DistanceFindUniqueArgs<ExtArgs>>): Prisma__DistanceClient<$Result.GetResult<Prisma.$DistancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Distance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DistanceFindUniqueOrThrowArgs} args - Arguments to find a Distance
     * @example
     * // Get one Distance
     * const distance = await prisma.distance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DistanceFindUniqueOrThrowArgs>(args: SelectSubset<T, DistanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DistanceClient<$Result.GetResult<Prisma.$DistancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Distance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistanceFindFirstArgs} args - Arguments to find a Distance
     * @example
     * // Get one Distance
     * const distance = await prisma.distance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DistanceFindFirstArgs>(args?: SelectSubset<T, DistanceFindFirstArgs<ExtArgs>>): Prisma__DistanceClient<$Result.GetResult<Prisma.$DistancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Distance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistanceFindFirstOrThrowArgs} args - Arguments to find a Distance
     * @example
     * // Get one Distance
     * const distance = await prisma.distance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DistanceFindFirstOrThrowArgs>(args?: SelectSubset<T, DistanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DistanceClient<$Result.GetResult<Prisma.$DistancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Distances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Distances
     * const distances = await prisma.distance.findMany()
     * 
     * // Get first 10 Distances
     * const distances = await prisma.distance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const distanceWithIdOnly = await prisma.distance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DistanceFindManyArgs>(args?: SelectSubset<T, DistanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Distance.
     * @param {DistanceCreateArgs} args - Arguments to create a Distance.
     * @example
     * // Create one Distance
     * const Distance = await prisma.distance.create({
     *   data: {
     *     // ... data to create a Distance
     *   }
     * })
     * 
     */
    create<T extends DistanceCreateArgs>(args: SelectSubset<T, DistanceCreateArgs<ExtArgs>>): Prisma__DistanceClient<$Result.GetResult<Prisma.$DistancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Distances.
     * @param {DistanceCreateManyArgs} args - Arguments to create many Distances.
     * @example
     * // Create many Distances
     * const distance = await prisma.distance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DistanceCreateManyArgs>(args?: SelectSubset<T, DistanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Distances and returns the data saved in the database.
     * @param {DistanceCreateManyAndReturnArgs} args - Arguments to create many Distances.
     * @example
     * // Create many Distances
     * const distance = await prisma.distance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Distances and only return the `id`
     * const distanceWithIdOnly = await prisma.distance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DistanceCreateManyAndReturnArgs>(args?: SelectSubset<T, DistanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Distance.
     * @param {DistanceDeleteArgs} args - Arguments to delete one Distance.
     * @example
     * // Delete one Distance
     * const Distance = await prisma.distance.delete({
     *   where: {
     *     // ... filter to delete one Distance
     *   }
     * })
     * 
     */
    delete<T extends DistanceDeleteArgs>(args: SelectSubset<T, DistanceDeleteArgs<ExtArgs>>): Prisma__DistanceClient<$Result.GetResult<Prisma.$DistancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Distance.
     * @param {DistanceUpdateArgs} args - Arguments to update one Distance.
     * @example
     * // Update one Distance
     * const distance = await prisma.distance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DistanceUpdateArgs>(args: SelectSubset<T, DistanceUpdateArgs<ExtArgs>>): Prisma__DistanceClient<$Result.GetResult<Prisma.$DistancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Distances.
     * @param {DistanceDeleteManyArgs} args - Arguments to filter Distances to delete.
     * @example
     * // Delete a few Distances
     * const { count } = await prisma.distance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DistanceDeleteManyArgs>(args?: SelectSubset<T, DistanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Distances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Distances
     * const distance = await prisma.distance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DistanceUpdateManyArgs>(args: SelectSubset<T, DistanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Distances and returns the data updated in the database.
     * @param {DistanceUpdateManyAndReturnArgs} args - Arguments to update many Distances.
     * @example
     * // Update many Distances
     * const distance = await prisma.distance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Distances and only return the `id`
     * const distanceWithIdOnly = await prisma.distance.updateManyAndReturn({
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
    updateManyAndReturn<T extends DistanceUpdateManyAndReturnArgs>(args: SelectSubset<T, DistanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Distance.
     * @param {DistanceUpsertArgs} args - Arguments to update or create a Distance.
     * @example
     * // Update or create a Distance
     * const distance = await prisma.distance.upsert({
     *   create: {
     *     // ... data to create a Distance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Distance we want to update
     *   }
     * })
     */
    upsert<T extends DistanceUpsertArgs>(args: SelectSubset<T, DistanceUpsertArgs<ExtArgs>>): Prisma__DistanceClient<$Result.GetResult<Prisma.$DistancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Distances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistanceCountArgs} args - Arguments to filter Distances to count.
     * @example
     * // Count the number of Distances
     * const count = await prisma.distance.count({
     *   where: {
     *     // ... the filter for the Distances we want to count
     *   }
     * })
    **/
    count<T extends DistanceCountArgs>(
      args?: Subset<T, DistanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Distance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DistanceAggregateArgs>(args: Subset<T, DistanceAggregateArgs>): Prisma.PrismaPromise<GetDistanceAggregateType<T>>

    /**
     * Group by Distance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistanceGroupByArgs} args - Group by arguments.
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
      T extends DistanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistanceGroupByArgs['orderBy'] }
        : { orderBy?: DistanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DistanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Distance model
   */
  readonly fields: DistanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Distance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sheet<T extends SheetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SheetDefaultArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Distance model
   */
  interface DistanceFieldRefs {
    readonly id: FieldRef<"Distance", 'Int'>
    readonly pointA: FieldRef<"Distance", 'String'>
    readonly pointB: FieldRef<"Distance", 'String'>
    readonly length: FieldRef<"Distance", 'Float'>
    readonly pixel_distance: FieldRef<"Distance", 'Float'>
    readonly sheetId: FieldRef<"Distance", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Distance findUnique
   */
  export type DistanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distance
     */
    select?: DistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distance
     */
    omit?: DistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistanceInclude<ExtArgs> | null
    /**
     * Filter, which Distance to fetch.
     */
    where: DistanceWhereUniqueInput
  }

  /**
   * Distance findUniqueOrThrow
   */
  export type DistanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distance
     */
    select?: DistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distance
     */
    omit?: DistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistanceInclude<ExtArgs> | null
    /**
     * Filter, which Distance to fetch.
     */
    where: DistanceWhereUniqueInput
  }

  /**
   * Distance findFirst
   */
  export type DistanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distance
     */
    select?: DistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distance
     */
    omit?: DistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistanceInclude<ExtArgs> | null
    /**
     * Filter, which Distance to fetch.
     */
    where?: DistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distances to fetch.
     */
    orderBy?: DistanceOrderByWithRelationInput | DistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Distances.
     */
    cursor?: DistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Distances.
     */
    distinct?: DistanceScalarFieldEnum | DistanceScalarFieldEnum[]
  }

  /**
   * Distance findFirstOrThrow
   */
  export type DistanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distance
     */
    select?: DistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distance
     */
    omit?: DistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistanceInclude<ExtArgs> | null
    /**
     * Filter, which Distance to fetch.
     */
    where?: DistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distances to fetch.
     */
    orderBy?: DistanceOrderByWithRelationInput | DistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Distances.
     */
    cursor?: DistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Distances.
     */
    distinct?: DistanceScalarFieldEnum | DistanceScalarFieldEnum[]
  }

  /**
   * Distance findMany
   */
  export type DistanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distance
     */
    select?: DistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distance
     */
    omit?: DistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistanceInclude<ExtArgs> | null
    /**
     * Filter, which Distances to fetch.
     */
    where?: DistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distances to fetch.
     */
    orderBy?: DistanceOrderByWithRelationInput | DistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Distances.
     */
    cursor?: DistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distances.
     */
    skip?: number
    distinct?: DistanceScalarFieldEnum | DistanceScalarFieldEnum[]
  }

  /**
   * Distance create
   */
  export type DistanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distance
     */
    select?: DistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distance
     */
    omit?: DistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Distance.
     */
    data: XOR<DistanceCreateInput, DistanceUncheckedCreateInput>
  }

  /**
   * Distance createMany
   */
  export type DistanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Distances.
     */
    data: DistanceCreateManyInput | DistanceCreateManyInput[]
  }

  /**
   * Distance createManyAndReturn
   */
  export type DistanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distance
     */
    select?: DistanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Distance
     */
    omit?: DistanceOmit<ExtArgs> | null
    /**
     * The data used to create many Distances.
     */
    data: DistanceCreateManyInput | DistanceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Distance update
   */
  export type DistanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distance
     */
    select?: DistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distance
     */
    omit?: DistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Distance.
     */
    data: XOR<DistanceUpdateInput, DistanceUncheckedUpdateInput>
    /**
     * Choose, which Distance to update.
     */
    where: DistanceWhereUniqueInput
  }

  /**
   * Distance updateMany
   */
  export type DistanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Distances.
     */
    data: XOR<DistanceUpdateManyMutationInput, DistanceUncheckedUpdateManyInput>
    /**
     * Filter which Distances to update
     */
    where?: DistanceWhereInput
    /**
     * Limit how many Distances to update.
     */
    limit?: number
  }

  /**
   * Distance updateManyAndReturn
   */
  export type DistanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distance
     */
    select?: DistanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Distance
     */
    omit?: DistanceOmit<ExtArgs> | null
    /**
     * The data used to update Distances.
     */
    data: XOR<DistanceUpdateManyMutationInput, DistanceUncheckedUpdateManyInput>
    /**
     * Filter which Distances to update
     */
    where?: DistanceWhereInput
    /**
     * Limit how many Distances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Distance upsert
   */
  export type DistanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distance
     */
    select?: DistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distance
     */
    omit?: DistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Distance to update in case it exists.
     */
    where: DistanceWhereUniqueInput
    /**
     * In case the Distance found by the `where` argument doesn't exist, create a new Distance with this data.
     */
    create: XOR<DistanceCreateInput, DistanceUncheckedCreateInput>
    /**
     * In case the Distance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistanceUpdateInput, DistanceUncheckedUpdateInput>
  }

  /**
   * Distance delete
   */
  export type DistanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distance
     */
    select?: DistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distance
     */
    omit?: DistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistanceInclude<ExtArgs> | null
    /**
     * Filter which Distance to delete.
     */
    where: DistanceWhereUniqueInput
  }

  /**
   * Distance deleteMany
   */
  export type DistanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Distances to delete
     */
    where?: DistanceWhereInput
    /**
     * Limit how many Distances to delete.
     */
    limit?: number
  }

  /**
   * Distance without action
   */
  export type DistanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distance
     */
    select?: DistanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distance
     */
    omit?: DistanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistanceInclude<ExtArgs> | null
  }


  /**
   * Model AlignmentResult
   */

  export type AggregateAlignmentResult = {
    _count: AlignmentResultCountAggregateOutputType | null
    _avg: AlignmentResultAvgAggregateOutputType | null
    _sum: AlignmentResultSumAggregateOutputType | null
    _min: AlignmentResultMinAggregateOutputType | null
    _max: AlignmentResultMaxAggregateOutputType | null
  }

  export type AlignmentResultAvgAggregateOutputType = {
    id: number | null
    sourceBoxId: number | null
    targetSheetId: number | null
    translationX: number | null
    translationY: number | null
    scale: number | null
  }

  export type AlignmentResultSumAggregateOutputType = {
    id: number | null
    sourceBoxId: number | null
    targetSheetId: number | null
    translationX: number | null
    translationY: number | null
    scale: number | null
  }

  export type AlignmentResultMinAggregateOutputType = {
    id: number | null
    sourceBoxId: number | null
    targetSheetId: number | null
    translationX: number | null
    translationY: number | null
    scale: number | null
    createdAt: Date | null
  }

  export type AlignmentResultMaxAggregateOutputType = {
    id: number | null
    sourceBoxId: number | null
    targetSheetId: number | null
    translationX: number | null
    translationY: number | null
    scale: number | null
    createdAt: Date | null
  }

  export type AlignmentResultCountAggregateOutputType = {
    id: number
    sourceBoxId: number
    targetSheetId: number
    translationX: number
    translationY: number
    scale: number
    createdAt: number
    _all: number
  }


  export type AlignmentResultAvgAggregateInputType = {
    id?: true
    sourceBoxId?: true
    targetSheetId?: true
    translationX?: true
    translationY?: true
    scale?: true
  }

  export type AlignmentResultSumAggregateInputType = {
    id?: true
    sourceBoxId?: true
    targetSheetId?: true
    translationX?: true
    translationY?: true
    scale?: true
  }

  export type AlignmentResultMinAggregateInputType = {
    id?: true
    sourceBoxId?: true
    targetSheetId?: true
    translationX?: true
    translationY?: true
    scale?: true
    createdAt?: true
  }

  export type AlignmentResultMaxAggregateInputType = {
    id?: true
    sourceBoxId?: true
    targetSheetId?: true
    translationX?: true
    translationY?: true
    scale?: true
    createdAt?: true
  }

  export type AlignmentResultCountAggregateInputType = {
    id?: true
    sourceBoxId?: true
    targetSheetId?: true
    translationX?: true
    translationY?: true
    scale?: true
    createdAt?: true
    _all?: true
  }

  export type AlignmentResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlignmentResult to aggregate.
     */
    where?: AlignmentResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlignmentResults to fetch.
     */
    orderBy?: AlignmentResultOrderByWithRelationInput | AlignmentResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlignmentResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlignmentResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlignmentResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlignmentResults
    **/
    _count?: true | AlignmentResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlignmentResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlignmentResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlignmentResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlignmentResultMaxAggregateInputType
  }

  export type GetAlignmentResultAggregateType<T extends AlignmentResultAggregateArgs> = {
        [P in keyof T & keyof AggregateAlignmentResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlignmentResult[P]>
      : GetScalarType<T[P], AggregateAlignmentResult[P]>
  }




  export type AlignmentResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlignmentResultWhereInput
    orderBy?: AlignmentResultOrderByWithAggregationInput | AlignmentResultOrderByWithAggregationInput[]
    by: AlignmentResultScalarFieldEnum[] | AlignmentResultScalarFieldEnum
    having?: AlignmentResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlignmentResultCountAggregateInputType | true
    _avg?: AlignmentResultAvgAggregateInputType
    _sum?: AlignmentResultSumAggregateInputType
    _min?: AlignmentResultMinAggregateInputType
    _max?: AlignmentResultMaxAggregateInputType
  }

  export type AlignmentResultGroupByOutputType = {
    id: number
    sourceBoxId: number
    targetSheetId: number
    translationX: number
    translationY: number
    scale: number
    createdAt: Date
    _count: AlignmentResultCountAggregateOutputType | null
    _avg: AlignmentResultAvgAggregateOutputType | null
    _sum: AlignmentResultSumAggregateOutputType | null
    _min: AlignmentResultMinAggregateOutputType | null
    _max: AlignmentResultMaxAggregateOutputType | null
  }

  type GetAlignmentResultGroupByPayload<T extends AlignmentResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlignmentResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlignmentResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlignmentResultGroupByOutputType[P]>
            : GetScalarType<T[P], AlignmentResultGroupByOutputType[P]>
        }
      >
    >


  export type AlignmentResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceBoxId?: boolean
    targetSheetId?: boolean
    translationX?: boolean
    translationY?: boolean
    scale?: boolean
    createdAt?: boolean
    sourceBox?: boolean | BoxDefaultArgs<ExtArgs>
    targetSheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alignmentResult"]>

  export type AlignmentResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceBoxId?: boolean
    targetSheetId?: boolean
    translationX?: boolean
    translationY?: boolean
    scale?: boolean
    createdAt?: boolean
    sourceBox?: boolean | BoxDefaultArgs<ExtArgs>
    targetSheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alignmentResult"]>

  export type AlignmentResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceBoxId?: boolean
    targetSheetId?: boolean
    translationX?: boolean
    translationY?: boolean
    scale?: boolean
    createdAt?: boolean
    sourceBox?: boolean | BoxDefaultArgs<ExtArgs>
    targetSheet?: boolean | SheetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alignmentResult"]>

  export type AlignmentResultSelectScalar = {
    id?: boolean
    sourceBoxId?: boolean
    targetSheetId?: boolean
    translationX?: boolean
    translationY?: boolean
    scale?: boolean
    createdAt?: boolean
  }

  export type AlignmentResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sourceBoxId" | "targetSheetId" | "translationX" | "translationY" | "scale" | "createdAt", ExtArgs["result"]["alignmentResult"]>
  export type AlignmentResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceBox?: boolean | BoxDefaultArgs<ExtArgs>
    targetSheet?: boolean | SheetDefaultArgs<ExtArgs>
  }
  export type AlignmentResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceBox?: boolean | BoxDefaultArgs<ExtArgs>
    targetSheet?: boolean | SheetDefaultArgs<ExtArgs>
  }
  export type AlignmentResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceBox?: boolean | BoxDefaultArgs<ExtArgs>
    targetSheet?: boolean | SheetDefaultArgs<ExtArgs>
  }

  export type $AlignmentResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlignmentResult"
    objects: {
      sourceBox: Prisma.$BoxPayload<ExtArgs>
      targetSheet: Prisma.$SheetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sourceBoxId: number
      targetSheetId: number
      translationX: number
      translationY: number
      scale: number
      createdAt: Date
    }, ExtArgs["result"]["alignmentResult"]>
    composites: {}
  }

  type AlignmentResultGetPayload<S extends boolean | null | undefined | AlignmentResultDefaultArgs> = $Result.GetResult<Prisma.$AlignmentResultPayload, S>

  type AlignmentResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlignmentResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlignmentResultCountAggregateInputType | true
    }

  export interface AlignmentResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlignmentResult'], meta: { name: 'AlignmentResult' } }
    /**
     * Find zero or one AlignmentResult that matches the filter.
     * @param {AlignmentResultFindUniqueArgs} args - Arguments to find a AlignmentResult
     * @example
     * // Get one AlignmentResult
     * const alignmentResult = await prisma.alignmentResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlignmentResultFindUniqueArgs>(args: SelectSubset<T, AlignmentResultFindUniqueArgs<ExtArgs>>): Prisma__AlignmentResultClient<$Result.GetResult<Prisma.$AlignmentResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlignmentResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlignmentResultFindUniqueOrThrowArgs} args - Arguments to find a AlignmentResult
     * @example
     * // Get one AlignmentResult
     * const alignmentResult = await prisma.alignmentResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlignmentResultFindUniqueOrThrowArgs>(args: SelectSubset<T, AlignmentResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlignmentResultClient<$Result.GetResult<Prisma.$AlignmentResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlignmentResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlignmentResultFindFirstArgs} args - Arguments to find a AlignmentResult
     * @example
     * // Get one AlignmentResult
     * const alignmentResult = await prisma.alignmentResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlignmentResultFindFirstArgs>(args?: SelectSubset<T, AlignmentResultFindFirstArgs<ExtArgs>>): Prisma__AlignmentResultClient<$Result.GetResult<Prisma.$AlignmentResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlignmentResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlignmentResultFindFirstOrThrowArgs} args - Arguments to find a AlignmentResult
     * @example
     * // Get one AlignmentResult
     * const alignmentResult = await prisma.alignmentResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlignmentResultFindFirstOrThrowArgs>(args?: SelectSubset<T, AlignmentResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlignmentResultClient<$Result.GetResult<Prisma.$AlignmentResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlignmentResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlignmentResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlignmentResults
     * const alignmentResults = await prisma.alignmentResult.findMany()
     * 
     * // Get first 10 AlignmentResults
     * const alignmentResults = await prisma.alignmentResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alignmentResultWithIdOnly = await prisma.alignmentResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlignmentResultFindManyArgs>(args?: SelectSubset<T, AlignmentResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlignmentResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlignmentResult.
     * @param {AlignmentResultCreateArgs} args - Arguments to create a AlignmentResult.
     * @example
     * // Create one AlignmentResult
     * const AlignmentResult = await prisma.alignmentResult.create({
     *   data: {
     *     // ... data to create a AlignmentResult
     *   }
     * })
     * 
     */
    create<T extends AlignmentResultCreateArgs>(args: SelectSubset<T, AlignmentResultCreateArgs<ExtArgs>>): Prisma__AlignmentResultClient<$Result.GetResult<Prisma.$AlignmentResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlignmentResults.
     * @param {AlignmentResultCreateManyArgs} args - Arguments to create many AlignmentResults.
     * @example
     * // Create many AlignmentResults
     * const alignmentResult = await prisma.alignmentResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlignmentResultCreateManyArgs>(args?: SelectSubset<T, AlignmentResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlignmentResults and returns the data saved in the database.
     * @param {AlignmentResultCreateManyAndReturnArgs} args - Arguments to create many AlignmentResults.
     * @example
     * // Create many AlignmentResults
     * const alignmentResult = await prisma.alignmentResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlignmentResults and only return the `id`
     * const alignmentResultWithIdOnly = await prisma.alignmentResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlignmentResultCreateManyAndReturnArgs>(args?: SelectSubset<T, AlignmentResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlignmentResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AlignmentResult.
     * @param {AlignmentResultDeleteArgs} args - Arguments to delete one AlignmentResult.
     * @example
     * // Delete one AlignmentResult
     * const AlignmentResult = await prisma.alignmentResult.delete({
     *   where: {
     *     // ... filter to delete one AlignmentResult
     *   }
     * })
     * 
     */
    delete<T extends AlignmentResultDeleteArgs>(args: SelectSubset<T, AlignmentResultDeleteArgs<ExtArgs>>): Prisma__AlignmentResultClient<$Result.GetResult<Prisma.$AlignmentResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlignmentResult.
     * @param {AlignmentResultUpdateArgs} args - Arguments to update one AlignmentResult.
     * @example
     * // Update one AlignmentResult
     * const alignmentResult = await prisma.alignmentResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlignmentResultUpdateArgs>(args: SelectSubset<T, AlignmentResultUpdateArgs<ExtArgs>>): Prisma__AlignmentResultClient<$Result.GetResult<Prisma.$AlignmentResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlignmentResults.
     * @param {AlignmentResultDeleteManyArgs} args - Arguments to filter AlignmentResults to delete.
     * @example
     * // Delete a few AlignmentResults
     * const { count } = await prisma.alignmentResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlignmentResultDeleteManyArgs>(args?: SelectSubset<T, AlignmentResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlignmentResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlignmentResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlignmentResults
     * const alignmentResult = await prisma.alignmentResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlignmentResultUpdateManyArgs>(args: SelectSubset<T, AlignmentResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlignmentResults and returns the data updated in the database.
     * @param {AlignmentResultUpdateManyAndReturnArgs} args - Arguments to update many AlignmentResults.
     * @example
     * // Update many AlignmentResults
     * const alignmentResult = await prisma.alignmentResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AlignmentResults and only return the `id`
     * const alignmentResultWithIdOnly = await prisma.alignmentResult.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlignmentResultUpdateManyAndReturnArgs>(args: SelectSubset<T, AlignmentResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlignmentResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AlignmentResult.
     * @param {AlignmentResultUpsertArgs} args - Arguments to update or create a AlignmentResult.
     * @example
     * // Update or create a AlignmentResult
     * const alignmentResult = await prisma.alignmentResult.upsert({
     *   create: {
     *     // ... data to create a AlignmentResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlignmentResult we want to update
     *   }
     * })
     */
    upsert<T extends AlignmentResultUpsertArgs>(args: SelectSubset<T, AlignmentResultUpsertArgs<ExtArgs>>): Prisma__AlignmentResultClient<$Result.GetResult<Prisma.$AlignmentResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlignmentResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlignmentResultCountArgs} args - Arguments to filter AlignmentResults to count.
     * @example
     * // Count the number of AlignmentResults
     * const count = await prisma.alignmentResult.count({
     *   where: {
     *     // ... the filter for the AlignmentResults we want to count
     *   }
     * })
    **/
    count<T extends AlignmentResultCountArgs>(
      args?: Subset<T, AlignmentResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlignmentResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlignmentResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlignmentResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlignmentResultAggregateArgs>(args: Subset<T, AlignmentResultAggregateArgs>): Prisma.PrismaPromise<GetAlignmentResultAggregateType<T>>

    /**
     * Group by AlignmentResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlignmentResultGroupByArgs} args - Group by arguments.
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
      T extends AlignmentResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlignmentResultGroupByArgs['orderBy'] }
        : { orderBy?: AlignmentResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlignmentResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlignmentResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlignmentResult model
   */
  readonly fields: AlignmentResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlignmentResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlignmentResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sourceBox<T extends BoxDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoxDefaultArgs<ExtArgs>>): Prisma__BoxClient<$Result.GetResult<Prisma.$BoxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    targetSheet<T extends SheetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SheetDefaultArgs<ExtArgs>>): Prisma__SheetClient<$Result.GetResult<Prisma.$SheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AlignmentResult model
   */
  interface AlignmentResultFieldRefs {
    readonly id: FieldRef<"AlignmentResult", 'Int'>
    readonly sourceBoxId: FieldRef<"AlignmentResult", 'Int'>
    readonly targetSheetId: FieldRef<"AlignmentResult", 'Int'>
    readonly translationX: FieldRef<"AlignmentResult", 'Float'>
    readonly translationY: FieldRef<"AlignmentResult", 'Float'>
    readonly scale: FieldRef<"AlignmentResult", 'Float'>
    readonly createdAt: FieldRef<"AlignmentResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AlignmentResult findUnique
   */
  export type AlignmentResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlignmentResult
     */
    select?: AlignmentResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlignmentResult
     */
    omit?: AlignmentResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlignmentResultInclude<ExtArgs> | null
    /**
     * Filter, which AlignmentResult to fetch.
     */
    where: AlignmentResultWhereUniqueInput
  }

  /**
   * AlignmentResult findUniqueOrThrow
   */
  export type AlignmentResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlignmentResult
     */
    select?: AlignmentResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlignmentResult
     */
    omit?: AlignmentResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlignmentResultInclude<ExtArgs> | null
    /**
     * Filter, which AlignmentResult to fetch.
     */
    where: AlignmentResultWhereUniqueInput
  }

  /**
   * AlignmentResult findFirst
   */
  export type AlignmentResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlignmentResult
     */
    select?: AlignmentResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlignmentResult
     */
    omit?: AlignmentResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlignmentResultInclude<ExtArgs> | null
    /**
     * Filter, which AlignmentResult to fetch.
     */
    where?: AlignmentResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlignmentResults to fetch.
     */
    orderBy?: AlignmentResultOrderByWithRelationInput | AlignmentResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlignmentResults.
     */
    cursor?: AlignmentResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlignmentResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlignmentResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlignmentResults.
     */
    distinct?: AlignmentResultScalarFieldEnum | AlignmentResultScalarFieldEnum[]
  }

  /**
   * AlignmentResult findFirstOrThrow
   */
  export type AlignmentResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlignmentResult
     */
    select?: AlignmentResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlignmentResult
     */
    omit?: AlignmentResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlignmentResultInclude<ExtArgs> | null
    /**
     * Filter, which AlignmentResult to fetch.
     */
    where?: AlignmentResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlignmentResults to fetch.
     */
    orderBy?: AlignmentResultOrderByWithRelationInput | AlignmentResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlignmentResults.
     */
    cursor?: AlignmentResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlignmentResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlignmentResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlignmentResults.
     */
    distinct?: AlignmentResultScalarFieldEnum | AlignmentResultScalarFieldEnum[]
  }

  /**
   * AlignmentResult findMany
   */
  export type AlignmentResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlignmentResult
     */
    select?: AlignmentResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlignmentResult
     */
    omit?: AlignmentResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlignmentResultInclude<ExtArgs> | null
    /**
     * Filter, which AlignmentResults to fetch.
     */
    where?: AlignmentResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlignmentResults to fetch.
     */
    orderBy?: AlignmentResultOrderByWithRelationInput | AlignmentResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlignmentResults.
     */
    cursor?: AlignmentResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlignmentResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlignmentResults.
     */
    skip?: number
    distinct?: AlignmentResultScalarFieldEnum | AlignmentResultScalarFieldEnum[]
  }

  /**
   * AlignmentResult create
   */
  export type AlignmentResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlignmentResult
     */
    select?: AlignmentResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlignmentResult
     */
    omit?: AlignmentResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlignmentResultInclude<ExtArgs> | null
    /**
     * The data needed to create a AlignmentResult.
     */
    data: XOR<AlignmentResultCreateInput, AlignmentResultUncheckedCreateInput>
  }

  /**
   * AlignmentResult createMany
   */
  export type AlignmentResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlignmentResults.
     */
    data: AlignmentResultCreateManyInput | AlignmentResultCreateManyInput[]
  }

  /**
   * AlignmentResult createManyAndReturn
   */
  export type AlignmentResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlignmentResult
     */
    select?: AlignmentResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlignmentResult
     */
    omit?: AlignmentResultOmit<ExtArgs> | null
    /**
     * The data used to create many AlignmentResults.
     */
    data: AlignmentResultCreateManyInput | AlignmentResultCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlignmentResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlignmentResult update
   */
  export type AlignmentResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlignmentResult
     */
    select?: AlignmentResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlignmentResult
     */
    omit?: AlignmentResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlignmentResultInclude<ExtArgs> | null
    /**
     * The data needed to update a AlignmentResult.
     */
    data: XOR<AlignmentResultUpdateInput, AlignmentResultUncheckedUpdateInput>
    /**
     * Choose, which AlignmentResult to update.
     */
    where: AlignmentResultWhereUniqueInput
  }

  /**
   * AlignmentResult updateMany
   */
  export type AlignmentResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlignmentResults.
     */
    data: XOR<AlignmentResultUpdateManyMutationInput, AlignmentResultUncheckedUpdateManyInput>
    /**
     * Filter which AlignmentResults to update
     */
    where?: AlignmentResultWhereInput
    /**
     * Limit how many AlignmentResults to update.
     */
    limit?: number
  }

  /**
   * AlignmentResult updateManyAndReturn
   */
  export type AlignmentResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlignmentResult
     */
    select?: AlignmentResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlignmentResult
     */
    omit?: AlignmentResultOmit<ExtArgs> | null
    /**
     * The data used to update AlignmentResults.
     */
    data: XOR<AlignmentResultUpdateManyMutationInput, AlignmentResultUncheckedUpdateManyInput>
    /**
     * Filter which AlignmentResults to update
     */
    where?: AlignmentResultWhereInput
    /**
     * Limit how many AlignmentResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlignmentResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlignmentResult upsert
   */
  export type AlignmentResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlignmentResult
     */
    select?: AlignmentResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlignmentResult
     */
    omit?: AlignmentResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlignmentResultInclude<ExtArgs> | null
    /**
     * The filter to search for the AlignmentResult to update in case it exists.
     */
    where: AlignmentResultWhereUniqueInput
    /**
     * In case the AlignmentResult found by the `where` argument doesn't exist, create a new AlignmentResult with this data.
     */
    create: XOR<AlignmentResultCreateInput, AlignmentResultUncheckedCreateInput>
    /**
     * In case the AlignmentResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlignmentResultUpdateInput, AlignmentResultUncheckedUpdateInput>
  }

  /**
   * AlignmentResult delete
   */
  export type AlignmentResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlignmentResult
     */
    select?: AlignmentResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlignmentResult
     */
    omit?: AlignmentResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlignmentResultInclude<ExtArgs> | null
    /**
     * Filter which AlignmentResult to delete.
     */
    where: AlignmentResultWhereUniqueInput
  }

  /**
   * AlignmentResult deleteMany
   */
  export type AlignmentResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlignmentResults to delete
     */
    where?: AlignmentResultWhereInput
    /**
     * Limit how many AlignmentResults to delete.
     */
    limit?: number
  }

  /**
   * AlignmentResult without action
   */
  export type AlignmentResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlignmentResult
     */
    select?: AlignmentResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlignmentResult
     */
    omit?: AlignmentResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlignmentResultInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    date: 'date'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    type: 'type',
    path: 'path',
    projectId: 'projectId',
    category: 'category',
    subcategory: 'subcategory',
    title: 'title'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const SheetScalarFieldEnum: {
    id: 'id',
    code: 'code',
    title: 'title',
    type: 'type',
    page: 'page',
    status: 'status',
    svgPath: 'svgPath',
    documentId: 'documentId'
  };

  export type SheetScalarFieldEnum = (typeof SheetScalarFieldEnum)[keyof typeof SheetScalarFieldEnum]


  export const ComparisonDiffScalarFieldEnum: {
    id: 'id',
    originalSheetId: 'originalSheetId',
    currentSheetId: 'currentSheetId',
    hasAdditions: 'hasAdditions',
    hasDeletions: 'hasDeletions',
    originalBbox: 'originalBbox',
    currentBbox: 'currentBbox',
    title: 'title',
    description: 'description',
    subContractorId: 'subContractorId',
    status: 'status'
  };

  export type ComparisonDiffScalarFieldEnum = (typeof ComparisonDiffScalarFieldEnum)[keyof typeof ComparisonDiffScalarFieldEnum]


  export const SubContractorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    tradeName: 'tradeName'
  };

  export type SubContractorScalarFieldEnum = (typeof SubContractorScalarFieldEnum)[keyof typeof SubContractorScalarFieldEnum]


  export const BoxScalarFieldEnum: {
    id: 'id',
    code: 'code',
    title: 'title',
    scale: 'scale',
    content: 'content',
    coordinates: 'coordinates',
    type: 'type',
    shape: 'shape',
    color: 'color',
    pageWidth: 'pageWidth',
    pageHeight: 'pageHeight',
    userModified: 'userModified',
    sheetId: 'sheetId'
  };

  export type BoxScalarFieldEnum = (typeof BoxScalarFieldEnum)[keyof typeof BoxScalarFieldEnum]


  export const ReferenceScalarFieldEnum: {
    id: 'id',
    coordinates: 'coordinates',
    code: 'code',
    sheetCode: 'sheetCode',
    sheetId: 'sheetId'
  };

  export type ReferenceScalarFieldEnum = (typeof ReferenceScalarFieldEnum)[keyof typeof ReferenceScalarFieldEnum]


  export const DistanceScalarFieldEnum: {
    id: 'id',
    pointA: 'pointA',
    pointB: 'pointB',
    length: 'length',
    pixel_distance: 'pixel_distance',
    sheetId: 'sheetId'
  };

  export type DistanceScalarFieldEnum = (typeof DistanceScalarFieldEnum)[keyof typeof DistanceScalarFieldEnum]


  export const AlignmentResultScalarFieldEnum: {
    id: 'id',
    sourceBoxId: 'sourceBoxId',
    targetSheetId: 'targetSheetId',
    translationX: 'translationX',
    translationY: 'translationY',
    scale: 'scale',
    createdAt: 'createdAt'
  };

  export type AlignmentResultScalarFieldEnum = (typeof AlignmentResultScalarFieldEnum)[keyof typeof AlignmentResultScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    date?: DateTimeFilter<"Project"> | Date | string
    documents?: DocumentListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    documents?: DocumentOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    date?: DateTimeFilter<"Project"> | Date | string
    documents?: DocumentListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    name?: StringWithAggregatesFilter<"Project"> | string
    date?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: IntFilter<"Document"> | number
    type?: StringNullableFilter<"Document"> | string | null
    path?: StringFilter<"Document"> | string
    projectId?: IntFilter<"Document"> | number
    category?: StringNullableFilter<"Document"> | string | null
    subcategory?: StringNullableFilter<"Document"> | string | null
    title?: StringNullableFilter<"Document"> | string | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    sheets?: SheetListRelationFilter
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    path?: SortOrder
    projectId?: SortOrder
    category?: SortOrderInput | SortOrder
    subcategory?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    project?: ProjectOrderByWithRelationInput
    sheets?: SheetOrderByRelationAggregateInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    type?: StringNullableFilter<"Document"> | string | null
    path?: StringFilter<"Document"> | string
    projectId?: IntFilter<"Document"> | number
    category?: StringNullableFilter<"Document"> | string | null
    subcategory?: StringNullableFilter<"Document"> | string | null
    title?: StringNullableFilter<"Document"> | string | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    sheets?: SheetListRelationFilter
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    path?: SortOrder
    projectId?: SortOrder
    category?: SortOrderInput | SortOrder
    subcategory?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Document"> | number
    type?: StringNullableWithAggregatesFilter<"Document"> | string | null
    path?: StringWithAggregatesFilter<"Document"> | string
    projectId?: IntWithAggregatesFilter<"Document"> | number
    category?: StringNullableWithAggregatesFilter<"Document"> | string | null
    subcategory?: StringNullableWithAggregatesFilter<"Document"> | string | null
    title?: StringNullableWithAggregatesFilter<"Document"> | string | null
  }

  export type SheetWhereInput = {
    AND?: SheetWhereInput | SheetWhereInput[]
    OR?: SheetWhereInput[]
    NOT?: SheetWhereInput | SheetWhereInput[]
    id?: IntFilter<"Sheet"> | number
    code?: StringFilter<"Sheet"> | string
    title?: StringNullableFilter<"Sheet"> | string | null
    type?: StringNullableFilter<"Sheet"> | string | null
    page?: IntNullableFilter<"Sheet"> | number | null
    status?: StringFilter<"Sheet"> | string
    svgPath?: StringNullableFilter<"Sheet"> | string | null
    documentId?: IntFilter<"Sheet"> | number
    alignmentResults?: AlignmentResultListRelationFilter
    boxes?: BoxListRelationFilter
    currentDiffs?: ComparisonDiffListRelationFilter
    originalDiffs?: ComparisonDiffListRelationFilter
    distances?: DistanceListRelationFilter
    references?: ReferenceListRelationFilter
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
  }

  export type SheetOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    page?: SortOrderInput | SortOrder
    status?: SortOrder
    svgPath?: SortOrderInput | SortOrder
    documentId?: SortOrder
    alignmentResults?: AlignmentResultOrderByRelationAggregateInput
    boxes?: BoxOrderByRelationAggregateInput
    currentDiffs?: ComparisonDiffOrderByRelationAggregateInput
    originalDiffs?: ComparisonDiffOrderByRelationAggregateInput
    distances?: DistanceOrderByRelationAggregateInput
    references?: ReferenceOrderByRelationAggregateInput
    document?: DocumentOrderByWithRelationInput
  }

  export type SheetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SheetWhereInput | SheetWhereInput[]
    OR?: SheetWhereInput[]
    NOT?: SheetWhereInput | SheetWhereInput[]
    code?: StringFilter<"Sheet"> | string
    title?: StringNullableFilter<"Sheet"> | string | null
    type?: StringNullableFilter<"Sheet"> | string | null
    page?: IntNullableFilter<"Sheet"> | number | null
    status?: StringFilter<"Sheet"> | string
    svgPath?: StringNullableFilter<"Sheet"> | string | null
    documentId?: IntFilter<"Sheet"> | number
    alignmentResults?: AlignmentResultListRelationFilter
    boxes?: BoxListRelationFilter
    currentDiffs?: ComparisonDiffListRelationFilter
    originalDiffs?: ComparisonDiffListRelationFilter
    distances?: DistanceListRelationFilter
    references?: ReferenceListRelationFilter
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
  }, "id">

  export type SheetOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    page?: SortOrderInput | SortOrder
    status?: SortOrder
    svgPath?: SortOrderInput | SortOrder
    documentId?: SortOrder
    _count?: SheetCountOrderByAggregateInput
    _avg?: SheetAvgOrderByAggregateInput
    _max?: SheetMaxOrderByAggregateInput
    _min?: SheetMinOrderByAggregateInput
    _sum?: SheetSumOrderByAggregateInput
  }

  export type SheetScalarWhereWithAggregatesInput = {
    AND?: SheetScalarWhereWithAggregatesInput | SheetScalarWhereWithAggregatesInput[]
    OR?: SheetScalarWhereWithAggregatesInput[]
    NOT?: SheetScalarWhereWithAggregatesInput | SheetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sheet"> | number
    code?: StringWithAggregatesFilter<"Sheet"> | string
    title?: StringNullableWithAggregatesFilter<"Sheet"> | string | null
    type?: StringNullableWithAggregatesFilter<"Sheet"> | string | null
    page?: IntNullableWithAggregatesFilter<"Sheet"> | number | null
    status?: StringWithAggregatesFilter<"Sheet"> | string
    svgPath?: StringNullableWithAggregatesFilter<"Sheet"> | string | null
    documentId?: IntWithAggregatesFilter<"Sheet"> | number
  }

  export type ComparisonDiffWhereInput = {
    AND?: ComparisonDiffWhereInput | ComparisonDiffWhereInput[]
    OR?: ComparisonDiffWhereInput[]
    NOT?: ComparisonDiffWhereInput | ComparisonDiffWhereInput[]
    id?: IntFilter<"ComparisonDiff"> | number
    originalSheetId?: IntFilter<"ComparisonDiff"> | number
    currentSheetId?: IntFilter<"ComparisonDiff"> | number
    hasAdditions?: BoolFilter<"ComparisonDiff"> | boolean
    hasDeletions?: BoolFilter<"ComparisonDiff"> | boolean
    originalBbox?: StringNullableFilter<"ComparisonDiff"> | string | null
    currentBbox?: StringNullableFilter<"ComparisonDiff"> | string | null
    title?: StringNullableFilter<"ComparisonDiff"> | string | null
    description?: StringNullableFilter<"ComparisonDiff"> | string | null
    subContractorId?: IntNullableFilter<"ComparisonDiff"> | number | null
    status?: StringFilter<"ComparisonDiff"> | string
    subContractor?: XOR<SubContractorNullableScalarRelationFilter, SubContractorWhereInput> | null
    currentSheet?: XOR<SheetScalarRelationFilter, SheetWhereInput>
    originalSheet?: XOR<SheetScalarRelationFilter, SheetWhereInput>
  }

  export type ComparisonDiffOrderByWithRelationInput = {
    id?: SortOrder
    originalSheetId?: SortOrder
    currentSheetId?: SortOrder
    hasAdditions?: SortOrder
    hasDeletions?: SortOrder
    originalBbox?: SortOrderInput | SortOrder
    currentBbox?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    subContractorId?: SortOrderInput | SortOrder
    status?: SortOrder
    subContractor?: SubContractorOrderByWithRelationInput
    currentSheet?: SheetOrderByWithRelationInput
    originalSheet?: SheetOrderByWithRelationInput
  }

  export type ComparisonDiffWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    originalSheetId_currentSheetId?: ComparisonDiffOriginalSheetIdCurrentSheetIdCompoundUniqueInput
    AND?: ComparisonDiffWhereInput | ComparisonDiffWhereInput[]
    OR?: ComparisonDiffWhereInput[]
    NOT?: ComparisonDiffWhereInput | ComparisonDiffWhereInput[]
    originalSheetId?: IntFilter<"ComparisonDiff"> | number
    currentSheetId?: IntFilter<"ComparisonDiff"> | number
    hasAdditions?: BoolFilter<"ComparisonDiff"> | boolean
    hasDeletions?: BoolFilter<"ComparisonDiff"> | boolean
    originalBbox?: StringNullableFilter<"ComparisonDiff"> | string | null
    currentBbox?: StringNullableFilter<"ComparisonDiff"> | string | null
    title?: StringNullableFilter<"ComparisonDiff"> | string | null
    description?: StringNullableFilter<"ComparisonDiff"> | string | null
    subContractorId?: IntNullableFilter<"ComparisonDiff"> | number | null
    status?: StringFilter<"ComparisonDiff"> | string
    subContractor?: XOR<SubContractorNullableScalarRelationFilter, SubContractorWhereInput> | null
    currentSheet?: XOR<SheetScalarRelationFilter, SheetWhereInput>
    originalSheet?: XOR<SheetScalarRelationFilter, SheetWhereInput>
  }, "id" | "originalSheetId_currentSheetId">

  export type ComparisonDiffOrderByWithAggregationInput = {
    id?: SortOrder
    originalSheetId?: SortOrder
    currentSheetId?: SortOrder
    hasAdditions?: SortOrder
    hasDeletions?: SortOrder
    originalBbox?: SortOrderInput | SortOrder
    currentBbox?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    subContractorId?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: ComparisonDiffCountOrderByAggregateInput
    _avg?: ComparisonDiffAvgOrderByAggregateInput
    _max?: ComparisonDiffMaxOrderByAggregateInput
    _min?: ComparisonDiffMinOrderByAggregateInput
    _sum?: ComparisonDiffSumOrderByAggregateInput
  }

  export type ComparisonDiffScalarWhereWithAggregatesInput = {
    AND?: ComparisonDiffScalarWhereWithAggregatesInput | ComparisonDiffScalarWhereWithAggregatesInput[]
    OR?: ComparisonDiffScalarWhereWithAggregatesInput[]
    NOT?: ComparisonDiffScalarWhereWithAggregatesInput | ComparisonDiffScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ComparisonDiff"> | number
    originalSheetId?: IntWithAggregatesFilter<"ComparisonDiff"> | number
    currentSheetId?: IntWithAggregatesFilter<"ComparisonDiff"> | number
    hasAdditions?: BoolWithAggregatesFilter<"ComparisonDiff"> | boolean
    hasDeletions?: BoolWithAggregatesFilter<"ComparisonDiff"> | boolean
    originalBbox?: StringNullableWithAggregatesFilter<"ComparisonDiff"> | string | null
    currentBbox?: StringNullableWithAggregatesFilter<"ComparisonDiff"> | string | null
    title?: StringNullableWithAggregatesFilter<"ComparisonDiff"> | string | null
    description?: StringNullableWithAggregatesFilter<"ComparisonDiff"> | string | null
    subContractorId?: IntNullableWithAggregatesFilter<"ComparisonDiff"> | number | null
    status?: StringWithAggregatesFilter<"ComparisonDiff"> | string
  }

  export type SubContractorWhereInput = {
    AND?: SubContractorWhereInput | SubContractorWhereInput[]
    OR?: SubContractorWhereInput[]
    NOT?: SubContractorWhereInput | SubContractorWhereInput[]
    id?: IntFilter<"SubContractor"> | number
    name?: StringFilter<"SubContractor"> | string
    tradeName?: StringFilter<"SubContractor"> | string
    comparisonDiffs?: ComparisonDiffListRelationFilter
  }

  export type SubContractorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tradeName?: SortOrder
    comparisonDiffs?: ComparisonDiffOrderByRelationAggregateInput
  }

  export type SubContractorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubContractorWhereInput | SubContractorWhereInput[]
    OR?: SubContractorWhereInput[]
    NOT?: SubContractorWhereInput | SubContractorWhereInput[]
    name?: StringFilter<"SubContractor"> | string
    tradeName?: StringFilter<"SubContractor"> | string
    comparisonDiffs?: ComparisonDiffListRelationFilter
  }, "id">

  export type SubContractorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    tradeName?: SortOrder
    _count?: SubContractorCountOrderByAggregateInput
    _avg?: SubContractorAvgOrderByAggregateInput
    _max?: SubContractorMaxOrderByAggregateInput
    _min?: SubContractorMinOrderByAggregateInput
    _sum?: SubContractorSumOrderByAggregateInput
  }

  export type SubContractorScalarWhereWithAggregatesInput = {
    AND?: SubContractorScalarWhereWithAggregatesInput | SubContractorScalarWhereWithAggregatesInput[]
    OR?: SubContractorScalarWhereWithAggregatesInput[]
    NOT?: SubContractorScalarWhereWithAggregatesInput | SubContractorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubContractor"> | number
    name?: StringWithAggregatesFilter<"SubContractor"> | string
    tradeName?: StringWithAggregatesFilter<"SubContractor"> | string
  }

  export type BoxWhereInput = {
    AND?: BoxWhereInput | BoxWhereInput[]
    OR?: BoxWhereInput[]
    NOT?: BoxWhereInput | BoxWhereInput[]
    id?: IntFilter<"Box"> | number
    code?: StringFilter<"Box"> | string
    title?: StringNullableFilter<"Box"> | string | null
    scale?: StringNullableFilter<"Box"> | string | null
    content?: StringNullableFilter<"Box"> | string | null
    coordinates?: StringFilter<"Box"> | string
    type?: StringFilter<"Box"> | string
    shape?: StringFilter<"Box"> | string
    color?: StringFilter<"Box"> | string
    pageWidth?: IntNullableFilter<"Box"> | number | null
    pageHeight?: IntNullableFilter<"Box"> | number | null
    userModified?: BoolFilter<"Box"> | boolean
    sheetId?: IntFilter<"Box"> | number
    alignmentResults?: AlignmentResultListRelationFilter
    sheet?: XOR<SheetScalarRelationFilter, SheetWhereInput>
  }

  export type BoxOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrderInput | SortOrder
    scale?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    coordinates?: SortOrder
    type?: SortOrder
    shape?: SortOrder
    color?: SortOrder
    pageWidth?: SortOrderInput | SortOrder
    pageHeight?: SortOrderInput | SortOrder
    userModified?: SortOrder
    sheetId?: SortOrder
    alignmentResults?: AlignmentResultOrderByRelationAggregateInput
    sheet?: SheetOrderByWithRelationInput
  }

  export type BoxWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BoxWhereInput | BoxWhereInput[]
    OR?: BoxWhereInput[]
    NOT?: BoxWhereInput | BoxWhereInput[]
    code?: StringFilter<"Box"> | string
    title?: StringNullableFilter<"Box"> | string | null
    scale?: StringNullableFilter<"Box"> | string | null
    content?: StringNullableFilter<"Box"> | string | null
    coordinates?: StringFilter<"Box"> | string
    type?: StringFilter<"Box"> | string
    shape?: StringFilter<"Box"> | string
    color?: StringFilter<"Box"> | string
    pageWidth?: IntNullableFilter<"Box"> | number | null
    pageHeight?: IntNullableFilter<"Box"> | number | null
    userModified?: BoolFilter<"Box"> | boolean
    sheetId?: IntFilter<"Box"> | number
    alignmentResults?: AlignmentResultListRelationFilter
    sheet?: XOR<SheetScalarRelationFilter, SheetWhereInput>
  }, "id">

  export type BoxOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrderInput | SortOrder
    scale?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    coordinates?: SortOrder
    type?: SortOrder
    shape?: SortOrder
    color?: SortOrder
    pageWidth?: SortOrderInput | SortOrder
    pageHeight?: SortOrderInput | SortOrder
    userModified?: SortOrder
    sheetId?: SortOrder
    _count?: BoxCountOrderByAggregateInput
    _avg?: BoxAvgOrderByAggregateInput
    _max?: BoxMaxOrderByAggregateInput
    _min?: BoxMinOrderByAggregateInput
    _sum?: BoxSumOrderByAggregateInput
  }

  export type BoxScalarWhereWithAggregatesInput = {
    AND?: BoxScalarWhereWithAggregatesInput | BoxScalarWhereWithAggregatesInput[]
    OR?: BoxScalarWhereWithAggregatesInput[]
    NOT?: BoxScalarWhereWithAggregatesInput | BoxScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Box"> | number
    code?: StringWithAggregatesFilter<"Box"> | string
    title?: StringNullableWithAggregatesFilter<"Box"> | string | null
    scale?: StringNullableWithAggregatesFilter<"Box"> | string | null
    content?: StringNullableWithAggregatesFilter<"Box"> | string | null
    coordinates?: StringWithAggregatesFilter<"Box"> | string
    type?: StringWithAggregatesFilter<"Box"> | string
    shape?: StringWithAggregatesFilter<"Box"> | string
    color?: StringWithAggregatesFilter<"Box"> | string
    pageWidth?: IntNullableWithAggregatesFilter<"Box"> | number | null
    pageHeight?: IntNullableWithAggregatesFilter<"Box"> | number | null
    userModified?: BoolWithAggregatesFilter<"Box"> | boolean
    sheetId?: IntWithAggregatesFilter<"Box"> | number
  }

  export type ReferenceWhereInput = {
    AND?: ReferenceWhereInput | ReferenceWhereInput[]
    OR?: ReferenceWhereInput[]
    NOT?: ReferenceWhereInput | ReferenceWhereInput[]
    id?: IntFilter<"Reference"> | number
    coordinates?: StringFilter<"Reference"> | string
    code?: StringFilter<"Reference"> | string
    sheetCode?: StringFilter<"Reference"> | string
    sheetId?: IntFilter<"Reference"> | number
    sheet?: XOR<SheetScalarRelationFilter, SheetWhereInput>
  }

  export type ReferenceOrderByWithRelationInput = {
    id?: SortOrder
    coordinates?: SortOrder
    code?: SortOrder
    sheetCode?: SortOrder
    sheetId?: SortOrder
    sheet?: SheetOrderByWithRelationInput
  }

  export type ReferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReferenceWhereInput | ReferenceWhereInput[]
    OR?: ReferenceWhereInput[]
    NOT?: ReferenceWhereInput | ReferenceWhereInput[]
    coordinates?: StringFilter<"Reference"> | string
    code?: StringFilter<"Reference"> | string
    sheetCode?: StringFilter<"Reference"> | string
    sheetId?: IntFilter<"Reference"> | number
    sheet?: XOR<SheetScalarRelationFilter, SheetWhereInput>
  }, "id">

  export type ReferenceOrderByWithAggregationInput = {
    id?: SortOrder
    coordinates?: SortOrder
    code?: SortOrder
    sheetCode?: SortOrder
    sheetId?: SortOrder
    _count?: ReferenceCountOrderByAggregateInput
    _avg?: ReferenceAvgOrderByAggregateInput
    _max?: ReferenceMaxOrderByAggregateInput
    _min?: ReferenceMinOrderByAggregateInput
    _sum?: ReferenceSumOrderByAggregateInput
  }

  export type ReferenceScalarWhereWithAggregatesInput = {
    AND?: ReferenceScalarWhereWithAggregatesInput | ReferenceScalarWhereWithAggregatesInput[]
    OR?: ReferenceScalarWhereWithAggregatesInput[]
    NOT?: ReferenceScalarWhereWithAggregatesInput | ReferenceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reference"> | number
    coordinates?: StringWithAggregatesFilter<"Reference"> | string
    code?: StringWithAggregatesFilter<"Reference"> | string
    sheetCode?: StringWithAggregatesFilter<"Reference"> | string
    sheetId?: IntWithAggregatesFilter<"Reference"> | number
  }

  export type DistanceWhereInput = {
    AND?: DistanceWhereInput | DistanceWhereInput[]
    OR?: DistanceWhereInput[]
    NOT?: DistanceWhereInput | DistanceWhereInput[]
    id?: IntFilter<"Distance"> | number
    pointA?: StringFilter<"Distance"> | string
    pointB?: StringFilter<"Distance"> | string
    length?: FloatFilter<"Distance"> | number
    pixel_distance?: FloatFilter<"Distance"> | number
    sheetId?: IntFilter<"Distance"> | number
    sheet?: XOR<SheetScalarRelationFilter, SheetWhereInput>
  }

  export type DistanceOrderByWithRelationInput = {
    id?: SortOrder
    pointA?: SortOrder
    pointB?: SortOrder
    length?: SortOrder
    pixel_distance?: SortOrder
    sheetId?: SortOrder
    sheet?: SheetOrderByWithRelationInput
  }

  export type DistanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DistanceWhereInput | DistanceWhereInput[]
    OR?: DistanceWhereInput[]
    NOT?: DistanceWhereInput | DistanceWhereInput[]
    pointA?: StringFilter<"Distance"> | string
    pointB?: StringFilter<"Distance"> | string
    length?: FloatFilter<"Distance"> | number
    pixel_distance?: FloatFilter<"Distance"> | number
    sheetId?: IntFilter<"Distance"> | number
    sheet?: XOR<SheetScalarRelationFilter, SheetWhereInput>
  }, "id">

  export type DistanceOrderByWithAggregationInput = {
    id?: SortOrder
    pointA?: SortOrder
    pointB?: SortOrder
    length?: SortOrder
    pixel_distance?: SortOrder
    sheetId?: SortOrder
    _count?: DistanceCountOrderByAggregateInput
    _avg?: DistanceAvgOrderByAggregateInput
    _max?: DistanceMaxOrderByAggregateInput
    _min?: DistanceMinOrderByAggregateInput
    _sum?: DistanceSumOrderByAggregateInput
  }

  export type DistanceScalarWhereWithAggregatesInput = {
    AND?: DistanceScalarWhereWithAggregatesInput | DistanceScalarWhereWithAggregatesInput[]
    OR?: DistanceScalarWhereWithAggregatesInput[]
    NOT?: DistanceScalarWhereWithAggregatesInput | DistanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Distance"> | number
    pointA?: StringWithAggregatesFilter<"Distance"> | string
    pointB?: StringWithAggregatesFilter<"Distance"> | string
    length?: FloatWithAggregatesFilter<"Distance"> | number
    pixel_distance?: FloatWithAggregatesFilter<"Distance"> | number
    sheetId?: IntWithAggregatesFilter<"Distance"> | number
  }

  export type AlignmentResultWhereInput = {
    AND?: AlignmentResultWhereInput | AlignmentResultWhereInput[]
    OR?: AlignmentResultWhereInput[]
    NOT?: AlignmentResultWhereInput | AlignmentResultWhereInput[]
    id?: IntFilter<"AlignmentResult"> | number
    sourceBoxId?: IntFilter<"AlignmentResult"> | number
    targetSheetId?: IntFilter<"AlignmentResult"> | number
    translationX?: FloatFilter<"AlignmentResult"> | number
    translationY?: FloatFilter<"AlignmentResult"> | number
    scale?: FloatFilter<"AlignmentResult"> | number
    createdAt?: DateTimeFilter<"AlignmentResult"> | Date | string
    sourceBox?: XOR<BoxScalarRelationFilter, BoxWhereInput>
    targetSheet?: XOR<SheetScalarRelationFilter, SheetWhereInput>
  }

  export type AlignmentResultOrderByWithRelationInput = {
    id?: SortOrder
    sourceBoxId?: SortOrder
    targetSheetId?: SortOrder
    translationX?: SortOrder
    translationY?: SortOrder
    scale?: SortOrder
    createdAt?: SortOrder
    sourceBox?: BoxOrderByWithRelationInput
    targetSheet?: SheetOrderByWithRelationInput
  }

  export type AlignmentResultWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sourceBoxId_targetSheetId?: AlignmentResultSourceBoxIdTargetSheetIdCompoundUniqueInput
    AND?: AlignmentResultWhereInput | AlignmentResultWhereInput[]
    OR?: AlignmentResultWhereInput[]
    NOT?: AlignmentResultWhereInput | AlignmentResultWhereInput[]
    sourceBoxId?: IntFilter<"AlignmentResult"> | number
    targetSheetId?: IntFilter<"AlignmentResult"> | number
    translationX?: FloatFilter<"AlignmentResult"> | number
    translationY?: FloatFilter<"AlignmentResult"> | number
    scale?: FloatFilter<"AlignmentResult"> | number
    createdAt?: DateTimeFilter<"AlignmentResult"> | Date | string
    sourceBox?: XOR<BoxScalarRelationFilter, BoxWhereInput>
    targetSheet?: XOR<SheetScalarRelationFilter, SheetWhereInput>
  }, "id" | "sourceBoxId_targetSheetId">

  export type AlignmentResultOrderByWithAggregationInput = {
    id?: SortOrder
    sourceBoxId?: SortOrder
    targetSheetId?: SortOrder
    translationX?: SortOrder
    translationY?: SortOrder
    scale?: SortOrder
    createdAt?: SortOrder
    _count?: AlignmentResultCountOrderByAggregateInput
    _avg?: AlignmentResultAvgOrderByAggregateInput
    _max?: AlignmentResultMaxOrderByAggregateInput
    _min?: AlignmentResultMinOrderByAggregateInput
    _sum?: AlignmentResultSumOrderByAggregateInput
  }

  export type AlignmentResultScalarWhereWithAggregatesInput = {
    AND?: AlignmentResultScalarWhereWithAggregatesInput | AlignmentResultScalarWhereWithAggregatesInput[]
    OR?: AlignmentResultScalarWhereWithAggregatesInput[]
    NOT?: AlignmentResultScalarWhereWithAggregatesInput | AlignmentResultScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AlignmentResult"> | number
    sourceBoxId?: IntWithAggregatesFilter<"AlignmentResult"> | number
    targetSheetId?: IntWithAggregatesFilter<"AlignmentResult"> | number
    translationX?: FloatWithAggregatesFilter<"AlignmentResult"> | number
    translationY?: FloatWithAggregatesFilter<"AlignmentResult"> | number
    scale?: FloatWithAggregatesFilter<"AlignmentResult"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AlignmentResult"> | Date | string
  }

  export type ProjectCreateInput = {
    name: string
    date?: Date | string
    documents?: DocumentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    name: string
    date?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    name: string
    date?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    type?: string | null
    path: string
    category?: string | null
    subcategory?: string | null
    title?: string | null
    project: ProjectCreateNestedOneWithoutDocumentsInput
    sheets?: SheetCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: number
    type?: string | null
    path: string
    projectId: number
    category?: string | null
    subcategory?: string | null
    title?: string | null
    sheets?: SheetUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUpdateInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneRequiredWithoutDocumentsNestedInput
    sheets?: SheetUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sheets?: SheetUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentCreateManyInput = {
    id?: number
    type?: string | null
    path: string
    projectId: number
    category?: string | null
    subcategory?: string | null
    title?: string | null
  }

  export type DocumentUpdateManyMutationInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SheetCreateInput = {
    code: string
    title?: string | null
    type?: string | null
    page?: number | null
    status?: string
    svgPath?: string | null
    alignmentResults?: AlignmentResultCreateNestedManyWithoutTargetSheetInput
    boxes?: BoxCreateNestedManyWithoutSheetInput
    currentDiffs?: ComparisonDiffCreateNestedManyWithoutCurrentSheetInput
    originalDiffs?: ComparisonDiffCreateNestedManyWithoutOriginalSheetInput
    distances?: DistanceCreateNestedManyWithoutSheetInput
    references?: ReferenceCreateNestedManyWithoutSheetInput
    document: DocumentCreateNestedOneWithoutSheetsInput
  }

  export type SheetUncheckedCreateInput = {
    id?: number
    code: string
    title?: string | null
    type?: string | null
    page?: number | null
    status?: string
    svgPath?: string | null
    documentId: number
    alignmentResults?: AlignmentResultUncheckedCreateNestedManyWithoutTargetSheetInput
    boxes?: BoxUncheckedCreateNestedManyWithoutSheetInput
    currentDiffs?: ComparisonDiffUncheckedCreateNestedManyWithoutCurrentSheetInput
    originalDiffs?: ComparisonDiffUncheckedCreateNestedManyWithoutOriginalSheetInput
    distances?: DistanceUncheckedCreateNestedManyWithoutSheetInput
    references?: ReferenceUncheckedCreateNestedManyWithoutSheetInput
  }

  export type SheetUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    svgPath?: NullableStringFieldUpdateOperationsInput | string | null
    alignmentResults?: AlignmentResultUpdateManyWithoutTargetSheetNestedInput
    boxes?: BoxUpdateManyWithoutSheetNestedInput
    currentDiffs?: ComparisonDiffUpdateManyWithoutCurrentSheetNestedInput
    originalDiffs?: ComparisonDiffUpdateManyWithoutOriginalSheetNestedInput
    distances?: DistanceUpdateManyWithoutSheetNestedInput
    references?: ReferenceUpdateManyWithoutSheetNestedInput
    document?: DocumentUpdateOneRequiredWithoutSheetsNestedInput
  }

  export type SheetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    svgPath?: NullableStringFieldUpdateOperationsInput | string | null
    documentId?: IntFieldUpdateOperationsInput | number
    alignmentResults?: AlignmentResultUncheckedUpdateManyWithoutTargetSheetNestedInput
    boxes?: BoxUncheckedUpdateManyWithoutSheetNestedInput
    currentDiffs?: ComparisonDiffUncheckedUpdateManyWithoutCurrentSheetNestedInput
    originalDiffs?: ComparisonDiffUncheckedUpdateManyWithoutOriginalSheetNestedInput
    distances?: DistanceUncheckedUpdateManyWithoutSheetNestedInput
    references?: ReferenceUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type SheetCreateManyInput = {
    id?: number
    code: string
    title?: string | null
    type?: string | null
    page?: number | null
    status?: string
    svgPath?: string | null
    documentId: number
  }

  export type SheetUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    svgPath?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SheetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    svgPath?: NullableStringFieldUpdateOperationsInput | string | null
    documentId?: IntFieldUpdateOperationsInput | number
  }

  export type ComparisonDiffCreateInput = {
    hasAdditions?: boolean
    hasDeletions?: boolean
    originalBbox?: string | null
    currentBbox?: string | null
    title?: string | null
    description?: string | null
    status?: string
    subContractor?: SubContractorCreateNestedOneWithoutComparisonDiffsInput
    currentSheet: SheetCreateNestedOneWithoutCurrentDiffsInput
    originalSheet: SheetCreateNestedOneWithoutOriginalDiffsInput
  }

  export type ComparisonDiffUncheckedCreateInput = {
    id?: number
    originalSheetId: number
    currentSheetId: number
    hasAdditions?: boolean
    hasDeletions?: boolean
    originalBbox?: string | null
    currentBbox?: string | null
    title?: string | null
    description?: string | null
    subContractorId?: number | null
    status?: string
  }

  export type ComparisonDiffUpdateInput = {
    hasAdditions?: BoolFieldUpdateOperationsInput | boolean
    hasDeletions?: BoolFieldUpdateOperationsInput | boolean
    originalBbox?: NullableStringFieldUpdateOperationsInput | string | null
    currentBbox?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    subContractor?: SubContractorUpdateOneWithoutComparisonDiffsNestedInput
    currentSheet?: SheetUpdateOneRequiredWithoutCurrentDiffsNestedInput
    originalSheet?: SheetUpdateOneRequiredWithoutOriginalDiffsNestedInput
  }

  export type ComparisonDiffUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    originalSheetId?: IntFieldUpdateOperationsInput | number
    currentSheetId?: IntFieldUpdateOperationsInput | number
    hasAdditions?: BoolFieldUpdateOperationsInput | boolean
    hasDeletions?: BoolFieldUpdateOperationsInput | boolean
    originalBbox?: NullableStringFieldUpdateOperationsInput | string | null
    currentBbox?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subContractorId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ComparisonDiffCreateManyInput = {
    id?: number
    originalSheetId: number
    currentSheetId: number
    hasAdditions?: boolean
    hasDeletions?: boolean
    originalBbox?: string | null
    currentBbox?: string | null
    title?: string | null
    description?: string | null
    subContractorId?: number | null
    status?: string
  }

  export type ComparisonDiffUpdateManyMutationInput = {
    hasAdditions?: BoolFieldUpdateOperationsInput | boolean
    hasDeletions?: BoolFieldUpdateOperationsInput | boolean
    originalBbox?: NullableStringFieldUpdateOperationsInput | string | null
    currentBbox?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ComparisonDiffUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    originalSheetId?: IntFieldUpdateOperationsInput | number
    currentSheetId?: IntFieldUpdateOperationsInput | number
    hasAdditions?: BoolFieldUpdateOperationsInput | boolean
    hasDeletions?: BoolFieldUpdateOperationsInput | boolean
    originalBbox?: NullableStringFieldUpdateOperationsInput | string | null
    currentBbox?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subContractorId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SubContractorCreateInput = {
    name: string
    tradeName: string
    comparisonDiffs?: ComparisonDiffCreateNestedManyWithoutSubContractorInput
  }

  export type SubContractorUncheckedCreateInput = {
    id?: number
    name: string
    tradeName: string
    comparisonDiffs?: ComparisonDiffUncheckedCreateNestedManyWithoutSubContractorInput
  }

  export type SubContractorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    comparisonDiffs?: ComparisonDiffUpdateManyWithoutSubContractorNestedInput
  }

  export type SubContractorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    comparisonDiffs?: ComparisonDiffUncheckedUpdateManyWithoutSubContractorNestedInput
  }

  export type SubContractorCreateManyInput = {
    id?: number
    name: string
    tradeName: string
  }

  export type SubContractorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
  }

  export type SubContractorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
  }

  export type BoxCreateInput = {
    code: string
    title?: string | null
    scale?: string | null
    content?: string | null
    coordinates: string
    type?: string
    shape?: string
    color?: string
    pageWidth?: number | null
    pageHeight?: number | null
    userModified?: boolean
    alignmentResults?: AlignmentResultCreateNestedManyWithoutSourceBoxInput
    sheet: SheetCreateNestedOneWithoutBoxesInput
  }

  export type BoxUncheckedCreateInput = {
    id?: number
    code: string
    title?: string | null
    scale?: string | null
    content?: string | null
    coordinates: string
    type?: string
    shape?: string
    color?: string
    pageWidth?: number | null
    pageHeight?: number | null
    userModified?: boolean
    sheetId: number
    alignmentResults?: AlignmentResultUncheckedCreateNestedManyWithoutSourceBoxInput
  }

  export type BoxUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    scale?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    shape?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    pageWidth?: NullableIntFieldUpdateOperationsInput | number | null
    pageHeight?: NullableIntFieldUpdateOperationsInput | number | null
    userModified?: BoolFieldUpdateOperationsInput | boolean
    alignmentResults?: AlignmentResultUpdateManyWithoutSourceBoxNestedInput
    sheet?: SheetUpdateOneRequiredWithoutBoxesNestedInput
  }

  export type BoxUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    scale?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    shape?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    pageWidth?: NullableIntFieldUpdateOperationsInput | number | null
    pageHeight?: NullableIntFieldUpdateOperationsInput | number | null
    userModified?: BoolFieldUpdateOperationsInput | boolean
    sheetId?: IntFieldUpdateOperationsInput | number
    alignmentResults?: AlignmentResultUncheckedUpdateManyWithoutSourceBoxNestedInput
  }

  export type BoxCreateManyInput = {
    id?: number
    code: string
    title?: string | null
    scale?: string | null
    content?: string | null
    coordinates: string
    type?: string
    shape?: string
    color?: string
    pageWidth?: number | null
    pageHeight?: number | null
    userModified?: boolean
    sheetId: number
  }

  export type BoxUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    scale?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    shape?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    pageWidth?: NullableIntFieldUpdateOperationsInput | number | null
    pageHeight?: NullableIntFieldUpdateOperationsInput | number | null
    userModified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BoxUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    scale?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    shape?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    pageWidth?: NullableIntFieldUpdateOperationsInput | number | null
    pageHeight?: NullableIntFieldUpdateOperationsInput | number | null
    userModified?: BoolFieldUpdateOperationsInput | boolean
    sheetId?: IntFieldUpdateOperationsInput | number
  }

  export type ReferenceCreateInput = {
    coordinates: string
    code: string
    sheetCode: string
    sheet: SheetCreateNestedOneWithoutReferencesInput
  }

  export type ReferenceUncheckedCreateInput = {
    id?: number
    coordinates: string
    code: string
    sheetCode: string
    sheetId: number
  }

  export type ReferenceUpdateInput = {
    coordinates?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    sheetCode?: StringFieldUpdateOperationsInput | string
    sheet?: SheetUpdateOneRequiredWithoutReferencesNestedInput
  }

  export type ReferenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    coordinates?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    sheetCode?: StringFieldUpdateOperationsInput | string
    sheetId?: IntFieldUpdateOperationsInput | number
  }

  export type ReferenceCreateManyInput = {
    id?: number
    coordinates: string
    code: string
    sheetCode: string
    sheetId: number
  }

  export type ReferenceUpdateManyMutationInput = {
    coordinates?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    sheetCode?: StringFieldUpdateOperationsInput | string
  }

  export type ReferenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    coordinates?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    sheetCode?: StringFieldUpdateOperationsInput | string
    sheetId?: IntFieldUpdateOperationsInput | number
  }

  export type DistanceCreateInput = {
    pointA: string
    pointB: string
    length: number
    pixel_distance: number
    sheet: SheetCreateNestedOneWithoutDistancesInput
  }

  export type DistanceUncheckedCreateInput = {
    id?: number
    pointA: string
    pointB: string
    length: number
    pixel_distance: number
    sheetId: number
  }

  export type DistanceUpdateInput = {
    pointA?: StringFieldUpdateOperationsInput | string
    pointB?: StringFieldUpdateOperationsInput | string
    length?: FloatFieldUpdateOperationsInput | number
    pixel_distance?: FloatFieldUpdateOperationsInput | number
    sheet?: SheetUpdateOneRequiredWithoutDistancesNestedInput
  }

  export type DistanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pointA?: StringFieldUpdateOperationsInput | string
    pointB?: StringFieldUpdateOperationsInput | string
    length?: FloatFieldUpdateOperationsInput | number
    pixel_distance?: FloatFieldUpdateOperationsInput | number
    sheetId?: IntFieldUpdateOperationsInput | number
  }

  export type DistanceCreateManyInput = {
    id?: number
    pointA: string
    pointB: string
    length: number
    pixel_distance: number
    sheetId: number
  }

  export type DistanceUpdateManyMutationInput = {
    pointA?: StringFieldUpdateOperationsInput | string
    pointB?: StringFieldUpdateOperationsInput | string
    length?: FloatFieldUpdateOperationsInput | number
    pixel_distance?: FloatFieldUpdateOperationsInput | number
  }

  export type DistanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pointA?: StringFieldUpdateOperationsInput | string
    pointB?: StringFieldUpdateOperationsInput | string
    length?: FloatFieldUpdateOperationsInput | number
    pixel_distance?: FloatFieldUpdateOperationsInput | number
    sheetId?: IntFieldUpdateOperationsInput | number
  }

  export type AlignmentResultCreateInput = {
    translationX: number
    translationY: number
    scale: number
    createdAt?: Date | string
    sourceBox: BoxCreateNestedOneWithoutAlignmentResultsInput
    targetSheet: SheetCreateNestedOneWithoutAlignmentResultsInput
  }

  export type AlignmentResultUncheckedCreateInput = {
    id?: number
    sourceBoxId: number
    targetSheetId: number
    translationX: number
    translationY: number
    scale: number
    createdAt?: Date | string
  }

  export type AlignmentResultUpdateInput = {
    translationX?: FloatFieldUpdateOperationsInput | number
    translationY?: FloatFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceBox?: BoxUpdateOneRequiredWithoutAlignmentResultsNestedInput
    targetSheet?: SheetUpdateOneRequiredWithoutAlignmentResultsNestedInput
  }

  export type AlignmentResultUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceBoxId?: IntFieldUpdateOperationsInput | number
    targetSheetId?: IntFieldUpdateOperationsInput | number
    translationX?: FloatFieldUpdateOperationsInput | number
    translationY?: FloatFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlignmentResultCreateManyInput = {
    id?: number
    sourceBoxId: number
    targetSheetId: number
    translationX: number
    translationY: number
    scale: number
    createdAt?: Date | string
  }

  export type AlignmentResultUpdateManyMutationInput = {
    translationX?: FloatFieldUpdateOperationsInput | number
    translationY?: FloatFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlignmentResultUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceBoxId?: IntFieldUpdateOperationsInput | number
    targetSheetId?: IntFieldUpdateOperationsInput | number
    translationX?: FloatFieldUpdateOperationsInput | number
    translationY?: FloatFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
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

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type SheetListRelationFilter = {
    every?: SheetWhereInput
    some?: SheetWhereInput
    none?: SheetWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SheetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    path?: SortOrder
    projectId?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    title?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    path?: SortOrder
    projectId?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    title?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    path?: SortOrder
    projectId?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    title?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
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

  export type AlignmentResultListRelationFilter = {
    every?: AlignmentResultWhereInput
    some?: AlignmentResultWhereInput
    none?: AlignmentResultWhereInput
  }

  export type BoxListRelationFilter = {
    every?: BoxWhereInput
    some?: BoxWhereInput
    none?: BoxWhereInput
  }

  export type ComparisonDiffListRelationFilter = {
    every?: ComparisonDiffWhereInput
    some?: ComparisonDiffWhereInput
    none?: ComparisonDiffWhereInput
  }

  export type DistanceListRelationFilter = {
    every?: DistanceWhereInput
    some?: DistanceWhereInput
    none?: DistanceWhereInput
  }

  export type ReferenceListRelationFilter = {
    every?: ReferenceWhereInput
    some?: ReferenceWhereInput
    none?: ReferenceWhereInput
  }

  export type DocumentScalarRelationFilter = {
    is?: DocumentWhereInput
    isNot?: DocumentWhereInput
  }

  export type AlignmentResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoxOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComparisonDiffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DistanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReferenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SheetCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    type?: SortOrder
    page?: SortOrder
    status?: SortOrder
    svgPath?: SortOrder
    documentId?: SortOrder
  }

  export type SheetAvgOrderByAggregateInput = {
    id?: SortOrder
    page?: SortOrder
    documentId?: SortOrder
  }

  export type SheetMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    type?: SortOrder
    page?: SortOrder
    status?: SortOrder
    svgPath?: SortOrder
    documentId?: SortOrder
  }

  export type SheetMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    type?: SortOrder
    page?: SortOrder
    status?: SortOrder
    svgPath?: SortOrder
    documentId?: SortOrder
  }

  export type SheetSumOrderByAggregateInput = {
    id?: SortOrder
    page?: SortOrder
    documentId?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SubContractorNullableScalarRelationFilter = {
    is?: SubContractorWhereInput | null
    isNot?: SubContractorWhereInput | null
  }

  export type SheetScalarRelationFilter = {
    is?: SheetWhereInput
    isNot?: SheetWhereInput
  }

  export type ComparisonDiffOriginalSheetIdCurrentSheetIdCompoundUniqueInput = {
    originalSheetId: number
    currentSheetId: number
  }

  export type ComparisonDiffCountOrderByAggregateInput = {
    id?: SortOrder
    originalSheetId?: SortOrder
    currentSheetId?: SortOrder
    hasAdditions?: SortOrder
    hasDeletions?: SortOrder
    originalBbox?: SortOrder
    currentBbox?: SortOrder
    title?: SortOrder
    description?: SortOrder
    subContractorId?: SortOrder
    status?: SortOrder
  }

  export type ComparisonDiffAvgOrderByAggregateInput = {
    id?: SortOrder
    originalSheetId?: SortOrder
    currentSheetId?: SortOrder
    subContractorId?: SortOrder
  }

  export type ComparisonDiffMaxOrderByAggregateInput = {
    id?: SortOrder
    originalSheetId?: SortOrder
    currentSheetId?: SortOrder
    hasAdditions?: SortOrder
    hasDeletions?: SortOrder
    originalBbox?: SortOrder
    currentBbox?: SortOrder
    title?: SortOrder
    description?: SortOrder
    subContractorId?: SortOrder
    status?: SortOrder
  }

  export type ComparisonDiffMinOrderByAggregateInput = {
    id?: SortOrder
    originalSheetId?: SortOrder
    currentSheetId?: SortOrder
    hasAdditions?: SortOrder
    hasDeletions?: SortOrder
    originalBbox?: SortOrder
    currentBbox?: SortOrder
    title?: SortOrder
    description?: SortOrder
    subContractorId?: SortOrder
    status?: SortOrder
  }

  export type ComparisonDiffSumOrderByAggregateInput = {
    id?: SortOrder
    originalSheetId?: SortOrder
    currentSheetId?: SortOrder
    subContractorId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SubContractorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tradeName?: SortOrder
  }

  export type SubContractorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubContractorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tradeName?: SortOrder
  }

  export type SubContractorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tradeName?: SortOrder
  }

  export type SubContractorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoxCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    scale?: SortOrder
    content?: SortOrder
    coordinates?: SortOrder
    type?: SortOrder
    shape?: SortOrder
    color?: SortOrder
    pageWidth?: SortOrder
    pageHeight?: SortOrder
    userModified?: SortOrder
    sheetId?: SortOrder
  }

  export type BoxAvgOrderByAggregateInput = {
    id?: SortOrder
    pageWidth?: SortOrder
    pageHeight?: SortOrder
    sheetId?: SortOrder
  }

  export type BoxMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    scale?: SortOrder
    content?: SortOrder
    coordinates?: SortOrder
    type?: SortOrder
    shape?: SortOrder
    color?: SortOrder
    pageWidth?: SortOrder
    pageHeight?: SortOrder
    userModified?: SortOrder
    sheetId?: SortOrder
  }

  export type BoxMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    scale?: SortOrder
    content?: SortOrder
    coordinates?: SortOrder
    type?: SortOrder
    shape?: SortOrder
    color?: SortOrder
    pageWidth?: SortOrder
    pageHeight?: SortOrder
    userModified?: SortOrder
    sheetId?: SortOrder
  }

  export type BoxSumOrderByAggregateInput = {
    id?: SortOrder
    pageWidth?: SortOrder
    pageHeight?: SortOrder
    sheetId?: SortOrder
  }

  export type ReferenceCountOrderByAggregateInput = {
    id?: SortOrder
    coordinates?: SortOrder
    code?: SortOrder
    sheetCode?: SortOrder
    sheetId?: SortOrder
  }

  export type ReferenceAvgOrderByAggregateInput = {
    id?: SortOrder
    sheetId?: SortOrder
  }

  export type ReferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    coordinates?: SortOrder
    code?: SortOrder
    sheetCode?: SortOrder
    sheetId?: SortOrder
  }

  export type ReferenceMinOrderByAggregateInput = {
    id?: SortOrder
    coordinates?: SortOrder
    code?: SortOrder
    sheetCode?: SortOrder
    sheetId?: SortOrder
  }

  export type ReferenceSumOrderByAggregateInput = {
    id?: SortOrder
    sheetId?: SortOrder
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

  export type DistanceCountOrderByAggregateInput = {
    id?: SortOrder
    pointA?: SortOrder
    pointB?: SortOrder
    length?: SortOrder
    pixel_distance?: SortOrder
    sheetId?: SortOrder
  }

  export type DistanceAvgOrderByAggregateInput = {
    id?: SortOrder
    length?: SortOrder
    pixel_distance?: SortOrder
    sheetId?: SortOrder
  }

  export type DistanceMaxOrderByAggregateInput = {
    id?: SortOrder
    pointA?: SortOrder
    pointB?: SortOrder
    length?: SortOrder
    pixel_distance?: SortOrder
    sheetId?: SortOrder
  }

  export type DistanceMinOrderByAggregateInput = {
    id?: SortOrder
    pointA?: SortOrder
    pointB?: SortOrder
    length?: SortOrder
    pixel_distance?: SortOrder
    sheetId?: SortOrder
  }

  export type DistanceSumOrderByAggregateInput = {
    id?: SortOrder
    length?: SortOrder
    pixel_distance?: SortOrder
    sheetId?: SortOrder
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

  export type BoxScalarRelationFilter = {
    is?: BoxWhereInput
    isNot?: BoxWhereInput
  }

  export type AlignmentResultSourceBoxIdTargetSheetIdCompoundUniqueInput = {
    sourceBoxId: number
    targetSheetId: number
  }

  export type AlignmentResultCountOrderByAggregateInput = {
    id?: SortOrder
    sourceBoxId?: SortOrder
    targetSheetId?: SortOrder
    translationX?: SortOrder
    translationY?: SortOrder
    scale?: SortOrder
    createdAt?: SortOrder
  }

  export type AlignmentResultAvgOrderByAggregateInput = {
    id?: SortOrder
    sourceBoxId?: SortOrder
    targetSheetId?: SortOrder
    translationX?: SortOrder
    translationY?: SortOrder
    scale?: SortOrder
  }

  export type AlignmentResultMaxOrderByAggregateInput = {
    id?: SortOrder
    sourceBoxId?: SortOrder
    targetSheetId?: SortOrder
    translationX?: SortOrder
    translationY?: SortOrder
    scale?: SortOrder
    createdAt?: SortOrder
  }

  export type AlignmentResultMinOrderByAggregateInput = {
    id?: SortOrder
    sourceBoxId?: SortOrder
    targetSheetId?: SortOrder
    translationX?: SortOrder
    translationY?: SortOrder
    scale?: SortOrder
    createdAt?: SortOrder
  }

  export type AlignmentResultSumOrderByAggregateInput = {
    id?: SortOrder
    sourceBoxId?: SortOrder
    targetSheetId?: SortOrder
    translationX?: SortOrder
    translationY?: SortOrder
    scale?: SortOrder
  }

  export type DocumentCreateNestedManyWithoutProjectInput = {
    create?: XOR<DocumentCreateWithoutProjectInput, DocumentUncheckedCreateWithoutProjectInput> | DocumentCreateWithoutProjectInput[] | DocumentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutProjectInput | DocumentCreateOrConnectWithoutProjectInput[]
    createMany?: DocumentCreateManyProjectInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<DocumentCreateWithoutProjectInput, DocumentUncheckedCreateWithoutProjectInput> | DocumentCreateWithoutProjectInput[] | DocumentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutProjectInput | DocumentCreateOrConnectWithoutProjectInput[]
    createMany?: DocumentCreateManyProjectInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DocumentUpdateManyWithoutProjectNestedInput = {
    create?: XOR<DocumentCreateWithoutProjectInput, DocumentUncheckedCreateWithoutProjectInput> | DocumentCreateWithoutProjectInput[] | DocumentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutProjectInput | DocumentCreateOrConnectWithoutProjectInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutProjectInput | DocumentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: DocumentCreateManyProjectInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutProjectInput | DocumentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutProjectInput | DocumentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DocumentUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<DocumentCreateWithoutProjectInput, DocumentUncheckedCreateWithoutProjectInput> | DocumentCreateWithoutProjectInput[] | DocumentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutProjectInput | DocumentCreateOrConnectWithoutProjectInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutProjectInput | DocumentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: DocumentCreateManyProjectInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutProjectInput | DocumentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutProjectInput | DocumentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<ProjectCreateWithoutDocumentsInput, ProjectUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDocumentsInput
    connect?: ProjectWhereUniqueInput
  }

  export type SheetCreateNestedManyWithoutDocumentInput = {
    create?: XOR<SheetCreateWithoutDocumentInput, SheetUncheckedCreateWithoutDocumentInput> | SheetCreateWithoutDocumentInput[] | SheetUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: SheetCreateOrConnectWithoutDocumentInput | SheetCreateOrConnectWithoutDocumentInput[]
    createMany?: SheetCreateManyDocumentInputEnvelope
    connect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
  }

  export type SheetUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<SheetCreateWithoutDocumentInput, SheetUncheckedCreateWithoutDocumentInput> | SheetCreateWithoutDocumentInput[] | SheetUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: SheetCreateOrConnectWithoutDocumentInput | SheetCreateOrConnectWithoutDocumentInput[]
    createMany?: SheetCreateManyDocumentInputEnvelope
    connect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProjectUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<ProjectCreateWithoutDocumentsInput, ProjectUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDocumentsInput
    upsert?: ProjectUpsertWithoutDocumentsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutDocumentsInput, ProjectUpdateWithoutDocumentsInput>, ProjectUncheckedUpdateWithoutDocumentsInput>
  }

  export type SheetUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<SheetCreateWithoutDocumentInput, SheetUncheckedCreateWithoutDocumentInput> | SheetCreateWithoutDocumentInput[] | SheetUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: SheetCreateOrConnectWithoutDocumentInput | SheetCreateOrConnectWithoutDocumentInput[]
    upsert?: SheetUpsertWithWhereUniqueWithoutDocumentInput | SheetUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: SheetCreateManyDocumentInputEnvelope
    set?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    disconnect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    delete?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    connect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    update?: SheetUpdateWithWhereUniqueWithoutDocumentInput | SheetUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: SheetUpdateManyWithWhereWithoutDocumentInput | SheetUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: SheetScalarWhereInput | SheetScalarWhereInput[]
  }

  export type SheetUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<SheetCreateWithoutDocumentInput, SheetUncheckedCreateWithoutDocumentInput> | SheetCreateWithoutDocumentInput[] | SheetUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: SheetCreateOrConnectWithoutDocumentInput | SheetCreateOrConnectWithoutDocumentInput[]
    upsert?: SheetUpsertWithWhereUniqueWithoutDocumentInput | SheetUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: SheetCreateManyDocumentInputEnvelope
    set?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    disconnect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    delete?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    connect?: SheetWhereUniqueInput | SheetWhereUniqueInput[]
    update?: SheetUpdateWithWhereUniqueWithoutDocumentInput | SheetUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: SheetUpdateManyWithWhereWithoutDocumentInput | SheetUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: SheetScalarWhereInput | SheetScalarWhereInput[]
  }

  export type AlignmentResultCreateNestedManyWithoutTargetSheetInput = {
    create?: XOR<AlignmentResultCreateWithoutTargetSheetInput, AlignmentResultUncheckedCreateWithoutTargetSheetInput> | AlignmentResultCreateWithoutTargetSheetInput[] | AlignmentResultUncheckedCreateWithoutTargetSheetInput[]
    connectOrCreate?: AlignmentResultCreateOrConnectWithoutTargetSheetInput | AlignmentResultCreateOrConnectWithoutTargetSheetInput[]
    createMany?: AlignmentResultCreateManyTargetSheetInputEnvelope
    connect?: AlignmentResultWhereUniqueInput | AlignmentResultWhereUniqueInput[]
  }

  export type BoxCreateNestedManyWithoutSheetInput = {
    create?: XOR<BoxCreateWithoutSheetInput, BoxUncheckedCreateWithoutSheetInput> | BoxCreateWithoutSheetInput[] | BoxUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: BoxCreateOrConnectWithoutSheetInput | BoxCreateOrConnectWithoutSheetInput[]
    createMany?: BoxCreateManySheetInputEnvelope
    connect?: BoxWhereUniqueInput | BoxWhereUniqueInput[]
  }

  export type ComparisonDiffCreateNestedManyWithoutCurrentSheetInput = {
    create?: XOR<ComparisonDiffCreateWithoutCurrentSheetInput, ComparisonDiffUncheckedCreateWithoutCurrentSheetInput> | ComparisonDiffCreateWithoutCurrentSheetInput[] | ComparisonDiffUncheckedCreateWithoutCurrentSheetInput[]
    connectOrCreate?: ComparisonDiffCreateOrConnectWithoutCurrentSheetInput | ComparisonDiffCreateOrConnectWithoutCurrentSheetInput[]
    createMany?: ComparisonDiffCreateManyCurrentSheetInputEnvelope
    connect?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
  }

  export type ComparisonDiffCreateNestedManyWithoutOriginalSheetInput = {
    create?: XOR<ComparisonDiffCreateWithoutOriginalSheetInput, ComparisonDiffUncheckedCreateWithoutOriginalSheetInput> | ComparisonDiffCreateWithoutOriginalSheetInput[] | ComparisonDiffUncheckedCreateWithoutOriginalSheetInput[]
    connectOrCreate?: ComparisonDiffCreateOrConnectWithoutOriginalSheetInput | ComparisonDiffCreateOrConnectWithoutOriginalSheetInput[]
    createMany?: ComparisonDiffCreateManyOriginalSheetInputEnvelope
    connect?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
  }

  export type DistanceCreateNestedManyWithoutSheetInput = {
    create?: XOR<DistanceCreateWithoutSheetInput, DistanceUncheckedCreateWithoutSheetInput> | DistanceCreateWithoutSheetInput[] | DistanceUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: DistanceCreateOrConnectWithoutSheetInput | DistanceCreateOrConnectWithoutSheetInput[]
    createMany?: DistanceCreateManySheetInputEnvelope
    connect?: DistanceWhereUniqueInput | DistanceWhereUniqueInput[]
  }

  export type ReferenceCreateNestedManyWithoutSheetInput = {
    create?: XOR<ReferenceCreateWithoutSheetInput, ReferenceUncheckedCreateWithoutSheetInput> | ReferenceCreateWithoutSheetInput[] | ReferenceUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: ReferenceCreateOrConnectWithoutSheetInput | ReferenceCreateOrConnectWithoutSheetInput[]
    createMany?: ReferenceCreateManySheetInputEnvelope
    connect?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
  }

  export type DocumentCreateNestedOneWithoutSheetsInput = {
    create?: XOR<DocumentCreateWithoutSheetsInput, DocumentUncheckedCreateWithoutSheetsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutSheetsInput
    connect?: DocumentWhereUniqueInput
  }

  export type AlignmentResultUncheckedCreateNestedManyWithoutTargetSheetInput = {
    create?: XOR<AlignmentResultCreateWithoutTargetSheetInput, AlignmentResultUncheckedCreateWithoutTargetSheetInput> | AlignmentResultCreateWithoutTargetSheetInput[] | AlignmentResultUncheckedCreateWithoutTargetSheetInput[]
    connectOrCreate?: AlignmentResultCreateOrConnectWithoutTargetSheetInput | AlignmentResultCreateOrConnectWithoutTargetSheetInput[]
    createMany?: AlignmentResultCreateManyTargetSheetInputEnvelope
    connect?: AlignmentResultWhereUniqueInput | AlignmentResultWhereUniqueInput[]
  }

  export type BoxUncheckedCreateNestedManyWithoutSheetInput = {
    create?: XOR<BoxCreateWithoutSheetInput, BoxUncheckedCreateWithoutSheetInput> | BoxCreateWithoutSheetInput[] | BoxUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: BoxCreateOrConnectWithoutSheetInput | BoxCreateOrConnectWithoutSheetInput[]
    createMany?: BoxCreateManySheetInputEnvelope
    connect?: BoxWhereUniqueInput | BoxWhereUniqueInput[]
  }

  export type ComparisonDiffUncheckedCreateNestedManyWithoutCurrentSheetInput = {
    create?: XOR<ComparisonDiffCreateWithoutCurrentSheetInput, ComparisonDiffUncheckedCreateWithoutCurrentSheetInput> | ComparisonDiffCreateWithoutCurrentSheetInput[] | ComparisonDiffUncheckedCreateWithoutCurrentSheetInput[]
    connectOrCreate?: ComparisonDiffCreateOrConnectWithoutCurrentSheetInput | ComparisonDiffCreateOrConnectWithoutCurrentSheetInput[]
    createMany?: ComparisonDiffCreateManyCurrentSheetInputEnvelope
    connect?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
  }

  export type ComparisonDiffUncheckedCreateNestedManyWithoutOriginalSheetInput = {
    create?: XOR<ComparisonDiffCreateWithoutOriginalSheetInput, ComparisonDiffUncheckedCreateWithoutOriginalSheetInput> | ComparisonDiffCreateWithoutOriginalSheetInput[] | ComparisonDiffUncheckedCreateWithoutOriginalSheetInput[]
    connectOrCreate?: ComparisonDiffCreateOrConnectWithoutOriginalSheetInput | ComparisonDiffCreateOrConnectWithoutOriginalSheetInput[]
    createMany?: ComparisonDiffCreateManyOriginalSheetInputEnvelope
    connect?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
  }

  export type DistanceUncheckedCreateNestedManyWithoutSheetInput = {
    create?: XOR<DistanceCreateWithoutSheetInput, DistanceUncheckedCreateWithoutSheetInput> | DistanceCreateWithoutSheetInput[] | DistanceUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: DistanceCreateOrConnectWithoutSheetInput | DistanceCreateOrConnectWithoutSheetInput[]
    createMany?: DistanceCreateManySheetInputEnvelope
    connect?: DistanceWhereUniqueInput | DistanceWhereUniqueInput[]
  }

  export type ReferenceUncheckedCreateNestedManyWithoutSheetInput = {
    create?: XOR<ReferenceCreateWithoutSheetInput, ReferenceUncheckedCreateWithoutSheetInput> | ReferenceCreateWithoutSheetInput[] | ReferenceUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: ReferenceCreateOrConnectWithoutSheetInput | ReferenceCreateOrConnectWithoutSheetInput[]
    createMany?: ReferenceCreateManySheetInputEnvelope
    connect?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AlignmentResultUpdateManyWithoutTargetSheetNestedInput = {
    create?: XOR<AlignmentResultCreateWithoutTargetSheetInput, AlignmentResultUncheckedCreateWithoutTargetSheetInput> | AlignmentResultCreateWithoutTargetSheetInput[] | AlignmentResultUncheckedCreateWithoutTargetSheetInput[]
    connectOrCreate?: AlignmentResultCreateOrConnectWithoutTargetSheetInput | AlignmentResultCreateOrConnectWithoutTargetSheetInput[]
    upsert?: AlignmentResultUpsertWithWhereUniqueWithoutTargetSheetInput | AlignmentResultUpsertWithWhereUniqueWithoutTargetSheetInput[]
    createMany?: AlignmentResultCreateManyTargetSheetInputEnvelope
    set?: AlignmentResultWhereUniqueInput | AlignmentResultWhereUniqueInput[]
    disconnect?: AlignmentResultWhereUniqueInput | AlignmentResultWhereUniqueInput[]
    delete?: AlignmentResultWhereUniqueInput | AlignmentResultWhereUniqueInput[]
    connect?: AlignmentResultWhereUniqueInput | AlignmentResultWhereUniqueInput[]
    update?: AlignmentResultUpdateWithWhereUniqueWithoutTargetSheetInput | AlignmentResultUpdateWithWhereUniqueWithoutTargetSheetInput[]
    updateMany?: AlignmentResultUpdateManyWithWhereWithoutTargetSheetInput | AlignmentResultUpdateManyWithWhereWithoutTargetSheetInput[]
    deleteMany?: AlignmentResultScalarWhereInput | AlignmentResultScalarWhereInput[]
  }

  export type BoxUpdateManyWithoutSheetNestedInput = {
    create?: XOR<BoxCreateWithoutSheetInput, BoxUncheckedCreateWithoutSheetInput> | BoxCreateWithoutSheetInput[] | BoxUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: BoxCreateOrConnectWithoutSheetInput | BoxCreateOrConnectWithoutSheetInput[]
    upsert?: BoxUpsertWithWhereUniqueWithoutSheetInput | BoxUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: BoxCreateManySheetInputEnvelope
    set?: BoxWhereUniqueInput | BoxWhereUniqueInput[]
    disconnect?: BoxWhereUniqueInput | BoxWhereUniqueInput[]
    delete?: BoxWhereUniqueInput | BoxWhereUniqueInput[]
    connect?: BoxWhereUniqueInput | BoxWhereUniqueInput[]
    update?: BoxUpdateWithWhereUniqueWithoutSheetInput | BoxUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: BoxUpdateManyWithWhereWithoutSheetInput | BoxUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: BoxScalarWhereInput | BoxScalarWhereInput[]
  }

  export type ComparisonDiffUpdateManyWithoutCurrentSheetNestedInput = {
    create?: XOR<ComparisonDiffCreateWithoutCurrentSheetInput, ComparisonDiffUncheckedCreateWithoutCurrentSheetInput> | ComparisonDiffCreateWithoutCurrentSheetInput[] | ComparisonDiffUncheckedCreateWithoutCurrentSheetInput[]
    connectOrCreate?: ComparisonDiffCreateOrConnectWithoutCurrentSheetInput | ComparisonDiffCreateOrConnectWithoutCurrentSheetInput[]
    upsert?: ComparisonDiffUpsertWithWhereUniqueWithoutCurrentSheetInput | ComparisonDiffUpsertWithWhereUniqueWithoutCurrentSheetInput[]
    createMany?: ComparisonDiffCreateManyCurrentSheetInputEnvelope
    set?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
    disconnect?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
    delete?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
    connect?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
    update?: ComparisonDiffUpdateWithWhereUniqueWithoutCurrentSheetInput | ComparisonDiffUpdateWithWhereUniqueWithoutCurrentSheetInput[]
    updateMany?: ComparisonDiffUpdateManyWithWhereWithoutCurrentSheetInput | ComparisonDiffUpdateManyWithWhereWithoutCurrentSheetInput[]
    deleteMany?: ComparisonDiffScalarWhereInput | ComparisonDiffScalarWhereInput[]
  }

  export type ComparisonDiffUpdateManyWithoutOriginalSheetNestedInput = {
    create?: XOR<ComparisonDiffCreateWithoutOriginalSheetInput, ComparisonDiffUncheckedCreateWithoutOriginalSheetInput> | ComparisonDiffCreateWithoutOriginalSheetInput[] | ComparisonDiffUncheckedCreateWithoutOriginalSheetInput[]
    connectOrCreate?: ComparisonDiffCreateOrConnectWithoutOriginalSheetInput | ComparisonDiffCreateOrConnectWithoutOriginalSheetInput[]
    upsert?: ComparisonDiffUpsertWithWhereUniqueWithoutOriginalSheetInput | ComparisonDiffUpsertWithWhereUniqueWithoutOriginalSheetInput[]
    createMany?: ComparisonDiffCreateManyOriginalSheetInputEnvelope
    set?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
    disconnect?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
    delete?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
    connect?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
    update?: ComparisonDiffUpdateWithWhereUniqueWithoutOriginalSheetInput | ComparisonDiffUpdateWithWhereUniqueWithoutOriginalSheetInput[]
    updateMany?: ComparisonDiffUpdateManyWithWhereWithoutOriginalSheetInput | ComparisonDiffUpdateManyWithWhereWithoutOriginalSheetInput[]
    deleteMany?: ComparisonDiffScalarWhereInput | ComparisonDiffScalarWhereInput[]
  }

  export type DistanceUpdateManyWithoutSheetNestedInput = {
    create?: XOR<DistanceCreateWithoutSheetInput, DistanceUncheckedCreateWithoutSheetInput> | DistanceCreateWithoutSheetInput[] | DistanceUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: DistanceCreateOrConnectWithoutSheetInput | DistanceCreateOrConnectWithoutSheetInput[]
    upsert?: DistanceUpsertWithWhereUniqueWithoutSheetInput | DistanceUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: DistanceCreateManySheetInputEnvelope
    set?: DistanceWhereUniqueInput | DistanceWhereUniqueInput[]
    disconnect?: DistanceWhereUniqueInput | DistanceWhereUniqueInput[]
    delete?: DistanceWhereUniqueInput | DistanceWhereUniqueInput[]
    connect?: DistanceWhereUniqueInput | DistanceWhereUniqueInput[]
    update?: DistanceUpdateWithWhereUniqueWithoutSheetInput | DistanceUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: DistanceUpdateManyWithWhereWithoutSheetInput | DistanceUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: DistanceScalarWhereInput | DistanceScalarWhereInput[]
  }

  export type ReferenceUpdateManyWithoutSheetNestedInput = {
    create?: XOR<ReferenceCreateWithoutSheetInput, ReferenceUncheckedCreateWithoutSheetInput> | ReferenceCreateWithoutSheetInput[] | ReferenceUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: ReferenceCreateOrConnectWithoutSheetInput | ReferenceCreateOrConnectWithoutSheetInput[]
    upsert?: ReferenceUpsertWithWhereUniqueWithoutSheetInput | ReferenceUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: ReferenceCreateManySheetInputEnvelope
    set?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
    disconnect?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
    delete?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
    connect?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
    update?: ReferenceUpdateWithWhereUniqueWithoutSheetInput | ReferenceUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: ReferenceUpdateManyWithWhereWithoutSheetInput | ReferenceUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: ReferenceScalarWhereInput | ReferenceScalarWhereInput[]
  }

  export type DocumentUpdateOneRequiredWithoutSheetsNestedInput = {
    create?: XOR<DocumentCreateWithoutSheetsInput, DocumentUncheckedCreateWithoutSheetsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutSheetsInput
    upsert?: DocumentUpsertWithoutSheetsInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutSheetsInput, DocumentUpdateWithoutSheetsInput>, DocumentUncheckedUpdateWithoutSheetsInput>
  }

  export type AlignmentResultUncheckedUpdateManyWithoutTargetSheetNestedInput = {
    create?: XOR<AlignmentResultCreateWithoutTargetSheetInput, AlignmentResultUncheckedCreateWithoutTargetSheetInput> | AlignmentResultCreateWithoutTargetSheetInput[] | AlignmentResultUncheckedCreateWithoutTargetSheetInput[]
    connectOrCreate?: AlignmentResultCreateOrConnectWithoutTargetSheetInput | AlignmentResultCreateOrConnectWithoutTargetSheetInput[]
    upsert?: AlignmentResultUpsertWithWhereUniqueWithoutTargetSheetInput | AlignmentResultUpsertWithWhereUniqueWithoutTargetSheetInput[]
    createMany?: AlignmentResultCreateManyTargetSheetInputEnvelope
    set?: AlignmentResultWhereUniqueInput | AlignmentResultWhereUniqueInput[]
    disconnect?: AlignmentResultWhereUniqueInput | AlignmentResultWhereUniqueInput[]
    delete?: AlignmentResultWhereUniqueInput | AlignmentResultWhereUniqueInput[]
    connect?: AlignmentResultWhereUniqueInput | AlignmentResultWhereUniqueInput[]
    update?: AlignmentResultUpdateWithWhereUniqueWithoutTargetSheetInput | AlignmentResultUpdateWithWhereUniqueWithoutTargetSheetInput[]
    updateMany?: AlignmentResultUpdateManyWithWhereWithoutTargetSheetInput | AlignmentResultUpdateManyWithWhereWithoutTargetSheetInput[]
    deleteMany?: AlignmentResultScalarWhereInput | AlignmentResultScalarWhereInput[]
  }

  export type BoxUncheckedUpdateManyWithoutSheetNestedInput = {
    create?: XOR<BoxCreateWithoutSheetInput, BoxUncheckedCreateWithoutSheetInput> | BoxCreateWithoutSheetInput[] | BoxUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: BoxCreateOrConnectWithoutSheetInput | BoxCreateOrConnectWithoutSheetInput[]
    upsert?: BoxUpsertWithWhereUniqueWithoutSheetInput | BoxUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: BoxCreateManySheetInputEnvelope
    set?: BoxWhereUniqueInput | BoxWhereUniqueInput[]
    disconnect?: BoxWhereUniqueInput | BoxWhereUniqueInput[]
    delete?: BoxWhereUniqueInput | BoxWhereUniqueInput[]
    connect?: BoxWhereUniqueInput | BoxWhereUniqueInput[]
    update?: BoxUpdateWithWhereUniqueWithoutSheetInput | BoxUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: BoxUpdateManyWithWhereWithoutSheetInput | BoxUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: BoxScalarWhereInput | BoxScalarWhereInput[]
  }

  export type ComparisonDiffUncheckedUpdateManyWithoutCurrentSheetNestedInput = {
    create?: XOR<ComparisonDiffCreateWithoutCurrentSheetInput, ComparisonDiffUncheckedCreateWithoutCurrentSheetInput> | ComparisonDiffCreateWithoutCurrentSheetInput[] | ComparisonDiffUncheckedCreateWithoutCurrentSheetInput[]
    connectOrCreate?: ComparisonDiffCreateOrConnectWithoutCurrentSheetInput | ComparisonDiffCreateOrConnectWithoutCurrentSheetInput[]
    upsert?: ComparisonDiffUpsertWithWhereUniqueWithoutCurrentSheetInput | ComparisonDiffUpsertWithWhereUniqueWithoutCurrentSheetInput[]
    createMany?: ComparisonDiffCreateManyCurrentSheetInputEnvelope
    set?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
    disconnect?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
    delete?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
    connect?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
    update?: ComparisonDiffUpdateWithWhereUniqueWithoutCurrentSheetInput | ComparisonDiffUpdateWithWhereUniqueWithoutCurrentSheetInput[]
    updateMany?: ComparisonDiffUpdateManyWithWhereWithoutCurrentSheetInput | ComparisonDiffUpdateManyWithWhereWithoutCurrentSheetInput[]
    deleteMany?: ComparisonDiffScalarWhereInput | ComparisonDiffScalarWhereInput[]
  }

  export type ComparisonDiffUncheckedUpdateManyWithoutOriginalSheetNestedInput = {
    create?: XOR<ComparisonDiffCreateWithoutOriginalSheetInput, ComparisonDiffUncheckedCreateWithoutOriginalSheetInput> | ComparisonDiffCreateWithoutOriginalSheetInput[] | ComparisonDiffUncheckedCreateWithoutOriginalSheetInput[]
    connectOrCreate?: ComparisonDiffCreateOrConnectWithoutOriginalSheetInput | ComparisonDiffCreateOrConnectWithoutOriginalSheetInput[]
    upsert?: ComparisonDiffUpsertWithWhereUniqueWithoutOriginalSheetInput | ComparisonDiffUpsertWithWhereUniqueWithoutOriginalSheetInput[]
    createMany?: ComparisonDiffCreateManyOriginalSheetInputEnvelope
    set?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
    disconnect?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
    delete?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
    connect?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
    update?: ComparisonDiffUpdateWithWhereUniqueWithoutOriginalSheetInput | ComparisonDiffUpdateWithWhereUniqueWithoutOriginalSheetInput[]
    updateMany?: ComparisonDiffUpdateManyWithWhereWithoutOriginalSheetInput | ComparisonDiffUpdateManyWithWhereWithoutOriginalSheetInput[]
    deleteMany?: ComparisonDiffScalarWhereInput | ComparisonDiffScalarWhereInput[]
  }

  export type DistanceUncheckedUpdateManyWithoutSheetNestedInput = {
    create?: XOR<DistanceCreateWithoutSheetInput, DistanceUncheckedCreateWithoutSheetInput> | DistanceCreateWithoutSheetInput[] | DistanceUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: DistanceCreateOrConnectWithoutSheetInput | DistanceCreateOrConnectWithoutSheetInput[]
    upsert?: DistanceUpsertWithWhereUniqueWithoutSheetInput | DistanceUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: DistanceCreateManySheetInputEnvelope
    set?: DistanceWhereUniqueInput | DistanceWhereUniqueInput[]
    disconnect?: DistanceWhereUniqueInput | DistanceWhereUniqueInput[]
    delete?: DistanceWhereUniqueInput | DistanceWhereUniqueInput[]
    connect?: DistanceWhereUniqueInput | DistanceWhereUniqueInput[]
    update?: DistanceUpdateWithWhereUniqueWithoutSheetInput | DistanceUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: DistanceUpdateManyWithWhereWithoutSheetInput | DistanceUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: DistanceScalarWhereInput | DistanceScalarWhereInput[]
  }

  export type ReferenceUncheckedUpdateManyWithoutSheetNestedInput = {
    create?: XOR<ReferenceCreateWithoutSheetInput, ReferenceUncheckedCreateWithoutSheetInput> | ReferenceCreateWithoutSheetInput[] | ReferenceUncheckedCreateWithoutSheetInput[]
    connectOrCreate?: ReferenceCreateOrConnectWithoutSheetInput | ReferenceCreateOrConnectWithoutSheetInput[]
    upsert?: ReferenceUpsertWithWhereUniqueWithoutSheetInput | ReferenceUpsertWithWhereUniqueWithoutSheetInput[]
    createMany?: ReferenceCreateManySheetInputEnvelope
    set?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
    disconnect?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
    delete?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
    connect?: ReferenceWhereUniqueInput | ReferenceWhereUniqueInput[]
    update?: ReferenceUpdateWithWhereUniqueWithoutSheetInput | ReferenceUpdateWithWhereUniqueWithoutSheetInput[]
    updateMany?: ReferenceUpdateManyWithWhereWithoutSheetInput | ReferenceUpdateManyWithWhereWithoutSheetInput[]
    deleteMany?: ReferenceScalarWhereInput | ReferenceScalarWhereInput[]
  }

  export type SubContractorCreateNestedOneWithoutComparisonDiffsInput = {
    create?: XOR<SubContractorCreateWithoutComparisonDiffsInput, SubContractorUncheckedCreateWithoutComparisonDiffsInput>
    connectOrCreate?: SubContractorCreateOrConnectWithoutComparisonDiffsInput
    connect?: SubContractorWhereUniqueInput
  }

  export type SheetCreateNestedOneWithoutCurrentDiffsInput = {
    create?: XOR<SheetCreateWithoutCurrentDiffsInput, SheetUncheckedCreateWithoutCurrentDiffsInput>
    connectOrCreate?: SheetCreateOrConnectWithoutCurrentDiffsInput
    connect?: SheetWhereUniqueInput
  }

  export type SheetCreateNestedOneWithoutOriginalDiffsInput = {
    create?: XOR<SheetCreateWithoutOriginalDiffsInput, SheetUncheckedCreateWithoutOriginalDiffsInput>
    connectOrCreate?: SheetCreateOrConnectWithoutOriginalDiffsInput
    connect?: SheetWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SubContractorUpdateOneWithoutComparisonDiffsNestedInput = {
    create?: XOR<SubContractorCreateWithoutComparisonDiffsInput, SubContractorUncheckedCreateWithoutComparisonDiffsInput>
    connectOrCreate?: SubContractorCreateOrConnectWithoutComparisonDiffsInput
    upsert?: SubContractorUpsertWithoutComparisonDiffsInput
    disconnect?: SubContractorWhereInput | boolean
    delete?: SubContractorWhereInput | boolean
    connect?: SubContractorWhereUniqueInput
    update?: XOR<XOR<SubContractorUpdateToOneWithWhereWithoutComparisonDiffsInput, SubContractorUpdateWithoutComparisonDiffsInput>, SubContractorUncheckedUpdateWithoutComparisonDiffsInput>
  }

  export type SheetUpdateOneRequiredWithoutCurrentDiffsNestedInput = {
    create?: XOR<SheetCreateWithoutCurrentDiffsInput, SheetUncheckedCreateWithoutCurrentDiffsInput>
    connectOrCreate?: SheetCreateOrConnectWithoutCurrentDiffsInput
    upsert?: SheetUpsertWithoutCurrentDiffsInput
    connect?: SheetWhereUniqueInput
    update?: XOR<XOR<SheetUpdateToOneWithWhereWithoutCurrentDiffsInput, SheetUpdateWithoutCurrentDiffsInput>, SheetUncheckedUpdateWithoutCurrentDiffsInput>
  }

  export type SheetUpdateOneRequiredWithoutOriginalDiffsNestedInput = {
    create?: XOR<SheetCreateWithoutOriginalDiffsInput, SheetUncheckedCreateWithoutOriginalDiffsInput>
    connectOrCreate?: SheetCreateOrConnectWithoutOriginalDiffsInput
    upsert?: SheetUpsertWithoutOriginalDiffsInput
    connect?: SheetWhereUniqueInput
    update?: XOR<XOR<SheetUpdateToOneWithWhereWithoutOriginalDiffsInput, SheetUpdateWithoutOriginalDiffsInput>, SheetUncheckedUpdateWithoutOriginalDiffsInput>
  }

  export type ComparisonDiffCreateNestedManyWithoutSubContractorInput = {
    create?: XOR<ComparisonDiffCreateWithoutSubContractorInput, ComparisonDiffUncheckedCreateWithoutSubContractorInput> | ComparisonDiffCreateWithoutSubContractorInput[] | ComparisonDiffUncheckedCreateWithoutSubContractorInput[]
    connectOrCreate?: ComparisonDiffCreateOrConnectWithoutSubContractorInput | ComparisonDiffCreateOrConnectWithoutSubContractorInput[]
    createMany?: ComparisonDiffCreateManySubContractorInputEnvelope
    connect?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
  }

  export type ComparisonDiffUncheckedCreateNestedManyWithoutSubContractorInput = {
    create?: XOR<ComparisonDiffCreateWithoutSubContractorInput, ComparisonDiffUncheckedCreateWithoutSubContractorInput> | ComparisonDiffCreateWithoutSubContractorInput[] | ComparisonDiffUncheckedCreateWithoutSubContractorInput[]
    connectOrCreate?: ComparisonDiffCreateOrConnectWithoutSubContractorInput | ComparisonDiffCreateOrConnectWithoutSubContractorInput[]
    createMany?: ComparisonDiffCreateManySubContractorInputEnvelope
    connect?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
  }

  export type ComparisonDiffUpdateManyWithoutSubContractorNestedInput = {
    create?: XOR<ComparisonDiffCreateWithoutSubContractorInput, ComparisonDiffUncheckedCreateWithoutSubContractorInput> | ComparisonDiffCreateWithoutSubContractorInput[] | ComparisonDiffUncheckedCreateWithoutSubContractorInput[]
    connectOrCreate?: ComparisonDiffCreateOrConnectWithoutSubContractorInput | ComparisonDiffCreateOrConnectWithoutSubContractorInput[]
    upsert?: ComparisonDiffUpsertWithWhereUniqueWithoutSubContractorInput | ComparisonDiffUpsertWithWhereUniqueWithoutSubContractorInput[]
    createMany?: ComparisonDiffCreateManySubContractorInputEnvelope
    set?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
    disconnect?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
    delete?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
    connect?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
    update?: ComparisonDiffUpdateWithWhereUniqueWithoutSubContractorInput | ComparisonDiffUpdateWithWhereUniqueWithoutSubContractorInput[]
    updateMany?: ComparisonDiffUpdateManyWithWhereWithoutSubContractorInput | ComparisonDiffUpdateManyWithWhereWithoutSubContractorInput[]
    deleteMany?: ComparisonDiffScalarWhereInput | ComparisonDiffScalarWhereInput[]
  }

  export type ComparisonDiffUncheckedUpdateManyWithoutSubContractorNestedInput = {
    create?: XOR<ComparisonDiffCreateWithoutSubContractorInput, ComparisonDiffUncheckedCreateWithoutSubContractorInput> | ComparisonDiffCreateWithoutSubContractorInput[] | ComparisonDiffUncheckedCreateWithoutSubContractorInput[]
    connectOrCreate?: ComparisonDiffCreateOrConnectWithoutSubContractorInput | ComparisonDiffCreateOrConnectWithoutSubContractorInput[]
    upsert?: ComparisonDiffUpsertWithWhereUniqueWithoutSubContractorInput | ComparisonDiffUpsertWithWhereUniqueWithoutSubContractorInput[]
    createMany?: ComparisonDiffCreateManySubContractorInputEnvelope
    set?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
    disconnect?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
    delete?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
    connect?: ComparisonDiffWhereUniqueInput | ComparisonDiffWhereUniqueInput[]
    update?: ComparisonDiffUpdateWithWhereUniqueWithoutSubContractorInput | ComparisonDiffUpdateWithWhereUniqueWithoutSubContractorInput[]
    updateMany?: ComparisonDiffUpdateManyWithWhereWithoutSubContractorInput | ComparisonDiffUpdateManyWithWhereWithoutSubContractorInput[]
    deleteMany?: ComparisonDiffScalarWhereInput | ComparisonDiffScalarWhereInput[]
  }

  export type AlignmentResultCreateNestedManyWithoutSourceBoxInput = {
    create?: XOR<AlignmentResultCreateWithoutSourceBoxInput, AlignmentResultUncheckedCreateWithoutSourceBoxInput> | AlignmentResultCreateWithoutSourceBoxInput[] | AlignmentResultUncheckedCreateWithoutSourceBoxInput[]
    connectOrCreate?: AlignmentResultCreateOrConnectWithoutSourceBoxInput | AlignmentResultCreateOrConnectWithoutSourceBoxInput[]
    createMany?: AlignmentResultCreateManySourceBoxInputEnvelope
    connect?: AlignmentResultWhereUniqueInput | AlignmentResultWhereUniqueInput[]
  }

  export type SheetCreateNestedOneWithoutBoxesInput = {
    create?: XOR<SheetCreateWithoutBoxesInput, SheetUncheckedCreateWithoutBoxesInput>
    connectOrCreate?: SheetCreateOrConnectWithoutBoxesInput
    connect?: SheetWhereUniqueInput
  }

  export type AlignmentResultUncheckedCreateNestedManyWithoutSourceBoxInput = {
    create?: XOR<AlignmentResultCreateWithoutSourceBoxInput, AlignmentResultUncheckedCreateWithoutSourceBoxInput> | AlignmentResultCreateWithoutSourceBoxInput[] | AlignmentResultUncheckedCreateWithoutSourceBoxInput[]
    connectOrCreate?: AlignmentResultCreateOrConnectWithoutSourceBoxInput | AlignmentResultCreateOrConnectWithoutSourceBoxInput[]
    createMany?: AlignmentResultCreateManySourceBoxInputEnvelope
    connect?: AlignmentResultWhereUniqueInput | AlignmentResultWhereUniqueInput[]
  }

  export type AlignmentResultUpdateManyWithoutSourceBoxNestedInput = {
    create?: XOR<AlignmentResultCreateWithoutSourceBoxInput, AlignmentResultUncheckedCreateWithoutSourceBoxInput> | AlignmentResultCreateWithoutSourceBoxInput[] | AlignmentResultUncheckedCreateWithoutSourceBoxInput[]
    connectOrCreate?: AlignmentResultCreateOrConnectWithoutSourceBoxInput | AlignmentResultCreateOrConnectWithoutSourceBoxInput[]
    upsert?: AlignmentResultUpsertWithWhereUniqueWithoutSourceBoxInput | AlignmentResultUpsertWithWhereUniqueWithoutSourceBoxInput[]
    createMany?: AlignmentResultCreateManySourceBoxInputEnvelope
    set?: AlignmentResultWhereUniqueInput | AlignmentResultWhereUniqueInput[]
    disconnect?: AlignmentResultWhereUniqueInput | AlignmentResultWhereUniqueInput[]
    delete?: AlignmentResultWhereUniqueInput | AlignmentResultWhereUniqueInput[]
    connect?: AlignmentResultWhereUniqueInput | AlignmentResultWhereUniqueInput[]
    update?: AlignmentResultUpdateWithWhereUniqueWithoutSourceBoxInput | AlignmentResultUpdateWithWhereUniqueWithoutSourceBoxInput[]
    updateMany?: AlignmentResultUpdateManyWithWhereWithoutSourceBoxInput | AlignmentResultUpdateManyWithWhereWithoutSourceBoxInput[]
    deleteMany?: AlignmentResultScalarWhereInput | AlignmentResultScalarWhereInput[]
  }

  export type SheetUpdateOneRequiredWithoutBoxesNestedInput = {
    create?: XOR<SheetCreateWithoutBoxesInput, SheetUncheckedCreateWithoutBoxesInput>
    connectOrCreate?: SheetCreateOrConnectWithoutBoxesInput
    upsert?: SheetUpsertWithoutBoxesInput
    connect?: SheetWhereUniqueInput
    update?: XOR<XOR<SheetUpdateToOneWithWhereWithoutBoxesInput, SheetUpdateWithoutBoxesInput>, SheetUncheckedUpdateWithoutBoxesInput>
  }

  export type AlignmentResultUncheckedUpdateManyWithoutSourceBoxNestedInput = {
    create?: XOR<AlignmentResultCreateWithoutSourceBoxInput, AlignmentResultUncheckedCreateWithoutSourceBoxInput> | AlignmentResultCreateWithoutSourceBoxInput[] | AlignmentResultUncheckedCreateWithoutSourceBoxInput[]
    connectOrCreate?: AlignmentResultCreateOrConnectWithoutSourceBoxInput | AlignmentResultCreateOrConnectWithoutSourceBoxInput[]
    upsert?: AlignmentResultUpsertWithWhereUniqueWithoutSourceBoxInput | AlignmentResultUpsertWithWhereUniqueWithoutSourceBoxInput[]
    createMany?: AlignmentResultCreateManySourceBoxInputEnvelope
    set?: AlignmentResultWhereUniqueInput | AlignmentResultWhereUniqueInput[]
    disconnect?: AlignmentResultWhereUniqueInput | AlignmentResultWhereUniqueInput[]
    delete?: AlignmentResultWhereUniqueInput | AlignmentResultWhereUniqueInput[]
    connect?: AlignmentResultWhereUniqueInput | AlignmentResultWhereUniqueInput[]
    update?: AlignmentResultUpdateWithWhereUniqueWithoutSourceBoxInput | AlignmentResultUpdateWithWhereUniqueWithoutSourceBoxInput[]
    updateMany?: AlignmentResultUpdateManyWithWhereWithoutSourceBoxInput | AlignmentResultUpdateManyWithWhereWithoutSourceBoxInput[]
    deleteMany?: AlignmentResultScalarWhereInput | AlignmentResultScalarWhereInput[]
  }

  export type SheetCreateNestedOneWithoutReferencesInput = {
    create?: XOR<SheetCreateWithoutReferencesInput, SheetUncheckedCreateWithoutReferencesInput>
    connectOrCreate?: SheetCreateOrConnectWithoutReferencesInput
    connect?: SheetWhereUniqueInput
  }

  export type SheetUpdateOneRequiredWithoutReferencesNestedInput = {
    create?: XOR<SheetCreateWithoutReferencesInput, SheetUncheckedCreateWithoutReferencesInput>
    connectOrCreate?: SheetCreateOrConnectWithoutReferencesInput
    upsert?: SheetUpsertWithoutReferencesInput
    connect?: SheetWhereUniqueInput
    update?: XOR<XOR<SheetUpdateToOneWithWhereWithoutReferencesInput, SheetUpdateWithoutReferencesInput>, SheetUncheckedUpdateWithoutReferencesInput>
  }

  export type SheetCreateNestedOneWithoutDistancesInput = {
    create?: XOR<SheetCreateWithoutDistancesInput, SheetUncheckedCreateWithoutDistancesInput>
    connectOrCreate?: SheetCreateOrConnectWithoutDistancesInput
    connect?: SheetWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SheetUpdateOneRequiredWithoutDistancesNestedInput = {
    create?: XOR<SheetCreateWithoutDistancesInput, SheetUncheckedCreateWithoutDistancesInput>
    connectOrCreate?: SheetCreateOrConnectWithoutDistancesInput
    upsert?: SheetUpsertWithoutDistancesInput
    connect?: SheetWhereUniqueInput
    update?: XOR<XOR<SheetUpdateToOneWithWhereWithoutDistancesInput, SheetUpdateWithoutDistancesInput>, SheetUncheckedUpdateWithoutDistancesInput>
  }

  export type BoxCreateNestedOneWithoutAlignmentResultsInput = {
    create?: XOR<BoxCreateWithoutAlignmentResultsInput, BoxUncheckedCreateWithoutAlignmentResultsInput>
    connectOrCreate?: BoxCreateOrConnectWithoutAlignmentResultsInput
    connect?: BoxWhereUniqueInput
  }

  export type SheetCreateNestedOneWithoutAlignmentResultsInput = {
    create?: XOR<SheetCreateWithoutAlignmentResultsInput, SheetUncheckedCreateWithoutAlignmentResultsInput>
    connectOrCreate?: SheetCreateOrConnectWithoutAlignmentResultsInput
    connect?: SheetWhereUniqueInput
  }

  export type BoxUpdateOneRequiredWithoutAlignmentResultsNestedInput = {
    create?: XOR<BoxCreateWithoutAlignmentResultsInput, BoxUncheckedCreateWithoutAlignmentResultsInput>
    connectOrCreate?: BoxCreateOrConnectWithoutAlignmentResultsInput
    upsert?: BoxUpsertWithoutAlignmentResultsInput
    connect?: BoxWhereUniqueInput
    update?: XOR<XOR<BoxUpdateToOneWithWhereWithoutAlignmentResultsInput, BoxUpdateWithoutAlignmentResultsInput>, BoxUncheckedUpdateWithoutAlignmentResultsInput>
  }

  export type SheetUpdateOneRequiredWithoutAlignmentResultsNestedInput = {
    create?: XOR<SheetCreateWithoutAlignmentResultsInput, SheetUncheckedCreateWithoutAlignmentResultsInput>
    connectOrCreate?: SheetCreateOrConnectWithoutAlignmentResultsInput
    upsert?: SheetUpsertWithoutAlignmentResultsInput
    connect?: SheetWhereUniqueInput
    update?: XOR<XOR<SheetUpdateToOneWithWhereWithoutAlignmentResultsInput, SheetUpdateWithoutAlignmentResultsInput>, SheetUncheckedUpdateWithoutAlignmentResultsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DocumentCreateWithoutProjectInput = {
    type?: string | null
    path: string
    category?: string | null
    subcategory?: string | null
    title?: string | null
    sheets?: SheetCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutProjectInput = {
    id?: number
    type?: string | null
    path: string
    category?: string | null
    subcategory?: string | null
    title?: string | null
    sheets?: SheetUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutProjectInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutProjectInput, DocumentUncheckedCreateWithoutProjectInput>
  }

  export type DocumentCreateManyProjectInputEnvelope = {
    data: DocumentCreateManyProjectInput | DocumentCreateManyProjectInput[]
  }

  export type DocumentUpsertWithWhereUniqueWithoutProjectInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutProjectInput, DocumentUncheckedUpdateWithoutProjectInput>
    create: XOR<DocumentCreateWithoutProjectInput, DocumentUncheckedCreateWithoutProjectInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutProjectInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutProjectInput, DocumentUncheckedUpdateWithoutProjectInput>
  }

  export type DocumentUpdateManyWithWhereWithoutProjectInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutProjectInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: IntFilter<"Document"> | number
    type?: StringNullableFilter<"Document"> | string | null
    path?: StringFilter<"Document"> | string
    projectId?: IntFilter<"Document"> | number
    category?: StringNullableFilter<"Document"> | string | null
    subcategory?: StringNullableFilter<"Document"> | string | null
    title?: StringNullableFilter<"Document"> | string | null
  }

  export type ProjectCreateWithoutDocumentsInput = {
    name: string
    date?: Date | string
  }

  export type ProjectUncheckedCreateWithoutDocumentsInput = {
    id?: number
    name: string
    date?: Date | string
  }

  export type ProjectCreateOrConnectWithoutDocumentsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutDocumentsInput, ProjectUncheckedCreateWithoutDocumentsInput>
  }

  export type SheetCreateWithoutDocumentInput = {
    code: string
    title?: string | null
    type?: string | null
    page?: number | null
    status?: string
    svgPath?: string | null
    alignmentResults?: AlignmentResultCreateNestedManyWithoutTargetSheetInput
    boxes?: BoxCreateNestedManyWithoutSheetInput
    currentDiffs?: ComparisonDiffCreateNestedManyWithoutCurrentSheetInput
    originalDiffs?: ComparisonDiffCreateNestedManyWithoutOriginalSheetInput
    distances?: DistanceCreateNestedManyWithoutSheetInput
    references?: ReferenceCreateNestedManyWithoutSheetInput
  }

  export type SheetUncheckedCreateWithoutDocumentInput = {
    id?: number
    code: string
    title?: string | null
    type?: string | null
    page?: number | null
    status?: string
    svgPath?: string | null
    alignmentResults?: AlignmentResultUncheckedCreateNestedManyWithoutTargetSheetInput
    boxes?: BoxUncheckedCreateNestedManyWithoutSheetInput
    currentDiffs?: ComparisonDiffUncheckedCreateNestedManyWithoutCurrentSheetInput
    originalDiffs?: ComparisonDiffUncheckedCreateNestedManyWithoutOriginalSheetInput
    distances?: DistanceUncheckedCreateNestedManyWithoutSheetInput
    references?: ReferenceUncheckedCreateNestedManyWithoutSheetInput
  }

  export type SheetCreateOrConnectWithoutDocumentInput = {
    where: SheetWhereUniqueInput
    create: XOR<SheetCreateWithoutDocumentInput, SheetUncheckedCreateWithoutDocumentInput>
  }

  export type SheetCreateManyDocumentInputEnvelope = {
    data: SheetCreateManyDocumentInput | SheetCreateManyDocumentInput[]
  }

  export type ProjectUpsertWithoutDocumentsInput = {
    update: XOR<ProjectUpdateWithoutDocumentsInput, ProjectUncheckedUpdateWithoutDocumentsInput>
    create: XOR<ProjectCreateWithoutDocumentsInput, ProjectUncheckedCreateWithoutDocumentsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutDocumentsInput, ProjectUncheckedUpdateWithoutDocumentsInput>
  }

  export type ProjectUpdateWithoutDocumentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SheetUpsertWithWhereUniqueWithoutDocumentInput = {
    where: SheetWhereUniqueInput
    update: XOR<SheetUpdateWithoutDocumentInput, SheetUncheckedUpdateWithoutDocumentInput>
    create: XOR<SheetCreateWithoutDocumentInput, SheetUncheckedCreateWithoutDocumentInput>
  }

  export type SheetUpdateWithWhereUniqueWithoutDocumentInput = {
    where: SheetWhereUniqueInput
    data: XOR<SheetUpdateWithoutDocumentInput, SheetUncheckedUpdateWithoutDocumentInput>
  }

  export type SheetUpdateManyWithWhereWithoutDocumentInput = {
    where: SheetScalarWhereInput
    data: XOR<SheetUpdateManyMutationInput, SheetUncheckedUpdateManyWithoutDocumentInput>
  }

  export type SheetScalarWhereInput = {
    AND?: SheetScalarWhereInput | SheetScalarWhereInput[]
    OR?: SheetScalarWhereInput[]
    NOT?: SheetScalarWhereInput | SheetScalarWhereInput[]
    id?: IntFilter<"Sheet"> | number
    code?: StringFilter<"Sheet"> | string
    title?: StringNullableFilter<"Sheet"> | string | null
    type?: StringNullableFilter<"Sheet"> | string | null
    page?: IntNullableFilter<"Sheet"> | number | null
    status?: StringFilter<"Sheet"> | string
    svgPath?: StringNullableFilter<"Sheet"> | string | null
    documentId?: IntFilter<"Sheet"> | number
  }

  export type AlignmentResultCreateWithoutTargetSheetInput = {
    translationX: number
    translationY: number
    scale: number
    createdAt?: Date | string
    sourceBox: BoxCreateNestedOneWithoutAlignmentResultsInput
  }

  export type AlignmentResultUncheckedCreateWithoutTargetSheetInput = {
    id?: number
    sourceBoxId: number
    translationX: number
    translationY: number
    scale: number
    createdAt?: Date | string
  }

  export type AlignmentResultCreateOrConnectWithoutTargetSheetInput = {
    where: AlignmentResultWhereUniqueInput
    create: XOR<AlignmentResultCreateWithoutTargetSheetInput, AlignmentResultUncheckedCreateWithoutTargetSheetInput>
  }

  export type AlignmentResultCreateManyTargetSheetInputEnvelope = {
    data: AlignmentResultCreateManyTargetSheetInput | AlignmentResultCreateManyTargetSheetInput[]
  }

  export type BoxCreateWithoutSheetInput = {
    code: string
    title?: string | null
    scale?: string | null
    content?: string | null
    coordinates: string
    type?: string
    shape?: string
    color?: string
    pageWidth?: number | null
    pageHeight?: number | null
    userModified?: boolean
    alignmentResults?: AlignmentResultCreateNestedManyWithoutSourceBoxInput
  }

  export type BoxUncheckedCreateWithoutSheetInput = {
    id?: number
    code: string
    title?: string | null
    scale?: string | null
    content?: string | null
    coordinates: string
    type?: string
    shape?: string
    color?: string
    pageWidth?: number | null
    pageHeight?: number | null
    userModified?: boolean
    alignmentResults?: AlignmentResultUncheckedCreateNestedManyWithoutSourceBoxInput
  }

  export type BoxCreateOrConnectWithoutSheetInput = {
    where: BoxWhereUniqueInput
    create: XOR<BoxCreateWithoutSheetInput, BoxUncheckedCreateWithoutSheetInput>
  }

  export type BoxCreateManySheetInputEnvelope = {
    data: BoxCreateManySheetInput | BoxCreateManySheetInput[]
  }

  export type ComparisonDiffCreateWithoutCurrentSheetInput = {
    hasAdditions?: boolean
    hasDeletions?: boolean
    originalBbox?: string | null
    currentBbox?: string | null
    title?: string | null
    description?: string | null
    status?: string
    subContractor?: SubContractorCreateNestedOneWithoutComparisonDiffsInput
    originalSheet: SheetCreateNestedOneWithoutOriginalDiffsInput
  }

  export type ComparisonDiffUncheckedCreateWithoutCurrentSheetInput = {
    id?: number
    originalSheetId: number
    hasAdditions?: boolean
    hasDeletions?: boolean
    originalBbox?: string | null
    currentBbox?: string | null
    title?: string | null
    description?: string | null
    subContractorId?: number | null
    status?: string
  }

  export type ComparisonDiffCreateOrConnectWithoutCurrentSheetInput = {
    where: ComparisonDiffWhereUniqueInput
    create: XOR<ComparisonDiffCreateWithoutCurrentSheetInput, ComparisonDiffUncheckedCreateWithoutCurrentSheetInput>
  }

  export type ComparisonDiffCreateManyCurrentSheetInputEnvelope = {
    data: ComparisonDiffCreateManyCurrentSheetInput | ComparisonDiffCreateManyCurrentSheetInput[]
  }

  export type ComparisonDiffCreateWithoutOriginalSheetInput = {
    hasAdditions?: boolean
    hasDeletions?: boolean
    originalBbox?: string | null
    currentBbox?: string | null
    title?: string | null
    description?: string | null
    status?: string
    subContractor?: SubContractorCreateNestedOneWithoutComparisonDiffsInput
    currentSheet: SheetCreateNestedOneWithoutCurrentDiffsInput
  }

  export type ComparisonDiffUncheckedCreateWithoutOriginalSheetInput = {
    id?: number
    currentSheetId: number
    hasAdditions?: boolean
    hasDeletions?: boolean
    originalBbox?: string | null
    currentBbox?: string | null
    title?: string | null
    description?: string | null
    subContractorId?: number | null
    status?: string
  }

  export type ComparisonDiffCreateOrConnectWithoutOriginalSheetInput = {
    where: ComparisonDiffWhereUniqueInput
    create: XOR<ComparisonDiffCreateWithoutOriginalSheetInput, ComparisonDiffUncheckedCreateWithoutOriginalSheetInput>
  }

  export type ComparisonDiffCreateManyOriginalSheetInputEnvelope = {
    data: ComparisonDiffCreateManyOriginalSheetInput | ComparisonDiffCreateManyOriginalSheetInput[]
  }

  export type DistanceCreateWithoutSheetInput = {
    pointA: string
    pointB: string
    length: number
    pixel_distance: number
  }

  export type DistanceUncheckedCreateWithoutSheetInput = {
    id?: number
    pointA: string
    pointB: string
    length: number
    pixel_distance: number
  }

  export type DistanceCreateOrConnectWithoutSheetInput = {
    where: DistanceWhereUniqueInput
    create: XOR<DistanceCreateWithoutSheetInput, DistanceUncheckedCreateWithoutSheetInput>
  }

  export type DistanceCreateManySheetInputEnvelope = {
    data: DistanceCreateManySheetInput | DistanceCreateManySheetInput[]
  }

  export type ReferenceCreateWithoutSheetInput = {
    coordinates: string
    code: string
    sheetCode: string
  }

  export type ReferenceUncheckedCreateWithoutSheetInput = {
    id?: number
    coordinates: string
    code: string
    sheetCode: string
  }

  export type ReferenceCreateOrConnectWithoutSheetInput = {
    where: ReferenceWhereUniqueInput
    create: XOR<ReferenceCreateWithoutSheetInput, ReferenceUncheckedCreateWithoutSheetInput>
  }

  export type ReferenceCreateManySheetInputEnvelope = {
    data: ReferenceCreateManySheetInput | ReferenceCreateManySheetInput[]
  }

  export type DocumentCreateWithoutSheetsInput = {
    type?: string | null
    path: string
    category?: string | null
    subcategory?: string | null
    title?: string | null
    project: ProjectCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateWithoutSheetsInput = {
    id?: number
    type?: string | null
    path: string
    projectId: number
    category?: string | null
    subcategory?: string | null
    title?: string | null
  }

  export type DocumentCreateOrConnectWithoutSheetsInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutSheetsInput, DocumentUncheckedCreateWithoutSheetsInput>
  }

  export type AlignmentResultUpsertWithWhereUniqueWithoutTargetSheetInput = {
    where: AlignmentResultWhereUniqueInput
    update: XOR<AlignmentResultUpdateWithoutTargetSheetInput, AlignmentResultUncheckedUpdateWithoutTargetSheetInput>
    create: XOR<AlignmentResultCreateWithoutTargetSheetInput, AlignmentResultUncheckedCreateWithoutTargetSheetInput>
  }

  export type AlignmentResultUpdateWithWhereUniqueWithoutTargetSheetInput = {
    where: AlignmentResultWhereUniqueInput
    data: XOR<AlignmentResultUpdateWithoutTargetSheetInput, AlignmentResultUncheckedUpdateWithoutTargetSheetInput>
  }

  export type AlignmentResultUpdateManyWithWhereWithoutTargetSheetInput = {
    where: AlignmentResultScalarWhereInput
    data: XOR<AlignmentResultUpdateManyMutationInput, AlignmentResultUncheckedUpdateManyWithoutTargetSheetInput>
  }

  export type AlignmentResultScalarWhereInput = {
    AND?: AlignmentResultScalarWhereInput | AlignmentResultScalarWhereInput[]
    OR?: AlignmentResultScalarWhereInput[]
    NOT?: AlignmentResultScalarWhereInput | AlignmentResultScalarWhereInput[]
    id?: IntFilter<"AlignmentResult"> | number
    sourceBoxId?: IntFilter<"AlignmentResult"> | number
    targetSheetId?: IntFilter<"AlignmentResult"> | number
    translationX?: FloatFilter<"AlignmentResult"> | number
    translationY?: FloatFilter<"AlignmentResult"> | number
    scale?: FloatFilter<"AlignmentResult"> | number
    createdAt?: DateTimeFilter<"AlignmentResult"> | Date | string
  }

  export type BoxUpsertWithWhereUniqueWithoutSheetInput = {
    where: BoxWhereUniqueInput
    update: XOR<BoxUpdateWithoutSheetInput, BoxUncheckedUpdateWithoutSheetInput>
    create: XOR<BoxCreateWithoutSheetInput, BoxUncheckedCreateWithoutSheetInput>
  }

  export type BoxUpdateWithWhereUniqueWithoutSheetInput = {
    where: BoxWhereUniqueInput
    data: XOR<BoxUpdateWithoutSheetInput, BoxUncheckedUpdateWithoutSheetInput>
  }

  export type BoxUpdateManyWithWhereWithoutSheetInput = {
    where: BoxScalarWhereInput
    data: XOR<BoxUpdateManyMutationInput, BoxUncheckedUpdateManyWithoutSheetInput>
  }

  export type BoxScalarWhereInput = {
    AND?: BoxScalarWhereInput | BoxScalarWhereInput[]
    OR?: BoxScalarWhereInput[]
    NOT?: BoxScalarWhereInput | BoxScalarWhereInput[]
    id?: IntFilter<"Box"> | number
    code?: StringFilter<"Box"> | string
    title?: StringNullableFilter<"Box"> | string | null
    scale?: StringNullableFilter<"Box"> | string | null
    content?: StringNullableFilter<"Box"> | string | null
    coordinates?: StringFilter<"Box"> | string
    type?: StringFilter<"Box"> | string
    shape?: StringFilter<"Box"> | string
    color?: StringFilter<"Box"> | string
    pageWidth?: IntNullableFilter<"Box"> | number | null
    pageHeight?: IntNullableFilter<"Box"> | number | null
    userModified?: BoolFilter<"Box"> | boolean
    sheetId?: IntFilter<"Box"> | number
  }

  export type ComparisonDiffUpsertWithWhereUniqueWithoutCurrentSheetInput = {
    where: ComparisonDiffWhereUniqueInput
    update: XOR<ComparisonDiffUpdateWithoutCurrentSheetInput, ComparisonDiffUncheckedUpdateWithoutCurrentSheetInput>
    create: XOR<ComparisonDiffCreateWithoutCurrentSheetInput, ComparisonDiffUncheckedCreateWithoutCurrentSheetInput>
  }

  export type ComparisonDiffUpdateWithWhereUniqueWithoutCurrentSheetInput = {
    where: ComparisonDiffWhereUniqueInput
    data: XOR<ComparisonDiffUpdateWithoutCurrentSheetInput, ComparisonDiffUncheckedUpdateWithoutCurrentSheetInput>
  }

  export type ComparisonDiffUpdateManyWithWhereWithoutCurrentSheetInput = {
    where: ComparisonDiffScalarWhereInput
    data: XOR<ComparisonDiffUpdateManyMutationInput, ComparisonDiffUncheckedUpdateManyWithoutCurrentSheetInput>
  }

  export type ComparisonDiffScalarWhereInput = {
    AND?: ComparisonDiffScalarWhereInput | ComparisonDiffScalarWhereInput[]
    OR?: ComparisonDiffScalarWhereInput[]
    NOT?: ComparisonDiffScalarWhereInput | ComparisonDiffScalarWhereInput[]
    id?: IntFilter<"ComparisonDiff"> | number
    originalSheetId?: IntFilter<"ComparisonDiff"> | number
    currentSheetId?: IntFilter<"ComparisonDiff"> | number
    hasAdditions?: BoolFilter<"ComparisonDiff"> | boolean
    hasDeletions?: BoolFilter<"ComparisonDiff"> | boolean
    originalBbox?: StringNullableFilter<"ComparisonDiff"> | string | null
    currentBbox?: StringNullableFilter<"ComparisonDiff"> | string | null
    title?: StringNullableFilter<"ComparisonDiff"> | string | null
    description?: StringNullableFilter<"ComparisonDiff"> | string | null
    subContractorId?: IntNullableFilter<"ComparisonDiff"> | number | null
    status?: StringFilter<"ComparisonDiff"> | string
  }

  export type ComparisonDiffUpsertWithWhereUniqueWithoutOriginalSheetInput = {
    where: ComparisonDiffWhereUniqueInput
    update: XOR<ComparisonDiffUpdateWithoutOriginalSheetInput, ComparisonDiffUncheckedUpdateWithoutOriginalSheetInput>
    create: XOR<ComparisonDiffCreateWithoutOriginalSheetInput, ComparisonDiffUncheckedCreateWithoutOriginalSheetInput>
  }

  export type ComparisonDiffUpdateWithWhereUniqueWithoutOriginalSheetInput = {
    where: ComparisonDiffWhereUniqueInput
    data: XOR<ComparisonDiffUpdateWithoutOriginalSheetInput, ComparisonDiffUncheckedUpdateWithoutOriginalSheetInput>
  }

  export type ComparisonDiffUpdateManyWithWhereWithoutOriginalSheetInput = {
    where: ComparisonDiffScalarWhereInput
    data: XOR<ComparisonDiffUpdateManyMutationInput, ComparisonDiffUncheckedUpdateManyWithoutOriginalSheetInput>
  }

  export type DistanceUpsertWithWhereUniqueWithoutSheetInput = {
    where: DistanceWhereUniqueInput
    update: XOR<DistanceUpdateWithoutSheetInput, DistanceUncheckedUpdateWithoutSheetInput>
    create: XOR<DistanceCreateWithoutSheetInput, DistanceUncheckedCreateWithoutSheetInput>
  }

  export type DistanceUpdateWithWhereUniqueWithoutSheetInput = {
    where: DistanceWhereUniqueInput
    data: XOR<DistanceUpdateWithoutSheetInput, DistanceUncheckedUpdateWithoutSheetInput>
  }

  export type DistanceUpdateManyWithWhereWithoutSheetInput = {
    where: DistanceScalarWhereInput
    data: XOR<DistanceUpdateManyMutationInput, DistanceUncheckedUpdateManyWithoutSheetInput>
  }

  export type DistanceScalarWhereInput = {
    AND?: DistanceScalarWhereInput | DistanceScalarWhereInput[]
    OR?: DistanceScalarWhereInput[]
    NOT?: DistanceScalarWhereInput | DistanceScalarWhereInput[]
    id?: IntFilter<"Distance"> | number
    pointA?: StringFilter<"Distance"> | string
    pointB?: StringFilter<"Distance"> | string
    length?: FloatFilter<"Distance"> | number
    pixel_distance?: FloatFilter<"Distance"> | number
    sheetId?: IntFilter<"Distance"> | number
  }

  export type ReferenceUpsertWithWhereUniqueWithoutSheetInput = {
    where: ReferenceWhereUniqueInput
    update: XOR<ReferenceUpdateWithoutSheetInput, ReferenceUncheckedUpdateWithoutSheetInput>
    create: XOR<ReferenceCreateWithoutSheetInput, ReferenceUncheckedCreateWithoutSheetInput>
  }

  export type ReferenceUpdateWithWhereUniqueWithoutSheetInput = {
    where: ReferenceWhereUniqueInput
    data: XOR<ReferenceUpdateWithoutSheetInput, ReferenceUncheckedUpdateWithoutSheetInput>
  }

  export type ReferenceUpdateManyWithWhereWithoutSheetInput = {
    where: ReferenceScalarWhereInput
    data: XOR<ReferenceUpdateManyMutationInput, ReferenceUncheckedUpdateManyWithoutSheetInput>
  }

  export type ReferenceScalarWhereInput = {
    AND?: ReferenceScalarWhereInput | ReferenceScalarWhereInput[]
    OR?: ReferenceScalarWhereInput[]
    NOT?: ReferenceScalarWhereInput | ReferenceScalarWhereInput[]
    id?: IntFilter<"Reference"> | number
    coordinates?: StringFilter<"Reference"> | string
    code?: StringFilter<"Reference"> | string
    sheetCode?: StringFilter<"Reference"> | string
    sheetId?: IntFilter<"Reference"> | number
  }

  export type DocumentUpsertWithoutSheetsInput = {
    update: XOR<DocumentUpdateWithoutSheetsInput, DocumentUncheckedUpdateWithoutSheetsInput>
    create: XOR<DocumentCreateWithoutSheetsInput, DocumentUncheckedCreateWithoutSheetsInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutSheetsInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutSheetsInput, DocumentUncheckedUpdateWithoutSheetsInput>
  }

  export type DocumentUpdateWithoutSheetsInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutSheetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubContractorCreateWithoutComparisonDiffsInput = {
    name: string
    tradeName: string
  }

  export type SubContractorUncheckedCreateWithoutComparisonDiffsInput = {
    id?: number
    name: string
    tradeName: string
  }

  export type SubContractorCreateOrConnectWithoutComparisonDiffsInput = {
    where: SubContractorWhereUniqueInput
    create: XOR<SubContractorCreateWithoutComparisonDiffsInput, SubContractorUncheckedCreateWithoutComparisonDiffsInput>
  }

  export type SheetCreateWithoutCurrentDiffsInput = {
    code: string
    title?: string | null
    type?: string | null
    page?: number | null
    status?: string
    svgPath?: string | null
    alignmentResults?: AlignmentResultCreateNestedManyWithoutTargetSheetInput
    boxes?: BoxCreateNestedManyWithoutSheetInput
    originalDiffs?: ComparisonDiffCreateNestedManyWithoutOriginalSheetInput
    distances?: DistanceCreateNestedManyWithoutSheetInput
    references?: ReferenceCreateNestedManyWithoutSheetInput
    document: DocumentCreateNestedOneWithoutSheetsInput
  }

  export type SheetUncheckedCreateWithoutCurrentDiffsInput = {
    id?: number
    code: string
    title?: string | null
    type?: string | null
    page?: number | null
    status?: string
    svgPath?: string | null
    documentId: number
    alignmentResults?: AlignmentResultUncheckedCreateNestedManyWithoutTargetSheetInput
    boxes?: BoxUncheckedCreateNestedManyWithoutSheetInput
    originalDiffs?: ComparisonDiffUncheckedCreateNestedManyWithoutOriginalSheetInput
    distances?: DistanceUncheckedCreateNestedManyWithoutSheetInput
    references?: ReferenceUncheckedCreateNestedManyWithoutSheetInput
  }

  export type SheetCreateOrConnectWithoutCurrentDiffsInput = {
    where: SheetWhereUniqueInput
    create: XOR<SheetCreateWithoutCurrentDiffsInput, SheetUncheckedCreateWithoutCurrentDiffsInput>
  }

  export type SheetCreateWithoutOriginalDiffsInput = {
    code: string
    title?: string | null
    type?: string | null
    page?: number | null
    status?: string
    svgPath?: string | null
    alignmentResults?: AlignmentResultCreateNestedManyWithoutTargetSheetInput
    boxes?: BoxCreateNestedManyWithoutSheetInput
    currentDiffs?: ComparisonDiffCreateNestedManyWithoutCurrentSheetInput
    distances?: DistanceCreateNestedManyWithoutSheetInput
    references?: ReferenceCreateNestedManyWithoutSheetInput
    document: DocumentCreateNestedOneWithoutSheetsInput
  }

  export type SheetUncheckedCreateWithoutOriginalDiffsInput = {
    id?: number
    code: string
    title?: string | null
    type?: string | null
    page?: number | null
    status?: string
    svgPath?: string | null
    documentId: number
    alignmentResults?: AlignmentResultUncheckedCreateNestedManyWithoutTargetSheetInput
    boxes?: BoxUncheckedCreateNestedManyWithoutSheetInput
    currentDiffs?: ComparisonDiffUncheckedCreateNestedManyWithoutCurrentSheetInput
    distances?: DistanceUncheckedCreateNestedManyWithoutSheetInput
    references?: ReferenceUncheckedCreateNestedManyWithoutSheetInput
  }

  export type SheetCreateOrConnectWithoutOriginalDiffsInput = {
    where: SheetWhereUniqueInput
    create: XOR<SheetCreateWithoutOriginalDiffsInput, SheetUncheckedCreateWithoutOriginalDiffsInput>
  }

  export type SubContractorUpsertWithoutComparisonDiffsInput = {
    update: XOR<SubContractorUpdateWithoutComparisonDiffsInput, SubContractorUncheckedUpdateWithoutComparisonDiffsInput>
    create: XOR<SubContractorCreateWithoutComparisonDiffsInput, SubContractorUncheckedCreateWithoutComparisonDiffsInput>
    where?: SubContractorWhereInput
  }

  export type SubContractorUpdateToOneWithWhereWithoutComparisonDiffsInput = {
    where?: SubContractorWhereInput
    data: XOR<SubContractorUpdateWithoutComparisonDiffsInput, SubContractorUncheckedUpdateWithoutComparisonDiffsInput>
  }

  export type SubContractorUpdateWithoutComparisonDiffsInput = {
    name?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
  }

  export type SubContractorUncheckedUpdateWithoutComparisonDiffsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
  }

  export type SheetUpsertWithoutCurrentDiffsInput = {
    update: XOR<SheetUpdateWithoutCurrentDiffsInput, SheetUncheckedUpdateWithoutCurrentDiffsInput>
    create: XOR<SheetCreateWithoutCurrentDiffsInput, SheetUncheckedCreateWithoutCurrentDiffsInput>
    where?: SheetWhereInput
  }

  export type SheetUpdateToOneWithWhereWithoutCurrentDiffsInput = {
    where?: SheetWhereInput
    data: XOR<SheetUpdateWithoutCurrentDiffsInput, SheetUncheckedUpdateWithoutCurrentDiffsInput>
  }

  export type SheetUpdateWithoutCurrentDiffsInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    svgPath?: NullableStringFieldUpdateOperationsInput | string | null
    alignmentResults?: AlignmentResultUpdateManyWithoutTargetSheetNestedInput
    boxes?: BoxUpdateManyWithoutSheetNestedInput
    originalDiffs?: ComparisonDiffUpdateManyWithoutOriginalSheetNestedInput
    distances?: DistanceUpdateManyWithoutSheetNestedInput
    references?: ReferenceUpdateManyWithoutSheetNestedInput
    document?: DocumentUpdateOneRequiredWithoutSheetsNestedInput
  }

  export type SheetUncheckedUpdateWithoutCurrentDiffsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    svgPath?: NullableStringFieldUpdateOperationsInput | string | null
    documentId?: IntFieldUpdateOperationsInput | number
    alignmentResults?: AlignmentResultUncheckedUpdateManyWithoutTargetSheetNestedInput
    boxes?: BoxUncheckedUpdateManyWithoutSheetNestedInput
    originalDiffs?: ComparisonDiffUncheckedUpdateManyWithoutOriginalSheetNestedInput
    distances?: DistanceUncheckedUpdateManyWithoutSheetNestedInput
    references?: ReferenceUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type SheetUpsertWithoutOriginalDiffsInput = {
    update: XOR<SheetUpdateWithoutOriginalDiffsInput, SheetUncheckedUpdateWithoutOriginalDiffsInput>
    create: XOR<SheetCreateWithoutOriginalDiffsInput, SheetUncheckedCreateWithoutOriginalDiffsInput>
    where?: SheetWhereInput
  }

  export type SheetUpdateToOneWithWhereWithoutOriginalDiffsInput = {
    where?: SheetWhereInput
    data: XOR<SheetUpdateWithoutOriginalDiffsInput, SheetUncheckedUpdateWithoutOriginalDiffsInput>
  }

  export type SheetUpdateWithoutOriginalDiffsInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    svgPath?: NullableStringFieldUpdateOperationsInput | string | null
    alignmentResults?: AlignmentResultUpdateManyWithoutTargetSheetNestedInput
    boxes?: BoxUpdateManyWithoutSheetNestedInput
    currentDiffs?: ComparisonDiffUpdateManyWithoutCurrentSheetNestedInput
    distances?: DistanceUpdateManyWithoutSheetNestedInput
    references?: ReferenceUpdateManyWithoutSheetNestedInput
    document?: DocumentUpdateOneRequiredWithoutSheetsNestedInput
  }

  export type SheetUncheckedUpdateWithoutOriginalDiffsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    svgPath?: NullableStringFieldUpdateOperationsInput | string | null
    documentId?: IntFieldUpdateOperationsInput | number
    alignmentResults?: AlignmentResultUncheckedUpdateManyWithoutTargetSheetNestedInput
    boxes?: BoxUncheckedUpdateManyWithoutSheetNestedInput
    currentDiffs?: ComparisonDiffUncheckedUpdateManyWithoutCurrentSheetNestedInput
    distances?: DistanceUncheckedUpdateManyWithoutSheetNestedInput
    references?: ReferenceUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type ComparisonDiffCreateWithoutSubContractorInput = {
    hasAdditions?: boolean
    hasDeletions?: boolean
    originalBbox?: string | null
    currentBbox?: string | null
    title?: string | null
    description?: string | null
    status?: string
    currentSheet: SheetCreateNestedOneWithoutCurrentDiffsInput
    originalSheet: SheetCreateNestedOneWithoutOriginalDiffsInput
  }

  export type ComparisonDiffUncheckedCreateWithoutSubContractorInput = {
    id?: number
    originalSheetId: number
    currentSheetId: number
    hasAdditions?: boolean
    hasDeletions?: boolean
    originalBbox?: string | null
    currentBbox?: string | null
    title?: string | null
    description?: string | null
    status?: string
  }

  export type ComparisonDiffCreateOrConnectWithoutSubContractorInput = {
    where: ComparisonDiffWhereUniqueInput
    create: XOR<ComparisonDiffCreateWithoutSubContractorInput, ComparisonDiffUncheckedCreateWithoutSubContractorInput>
  }

  export type ComparisonDiffCreateManySubContractorInputEnvelope = {
    data: ComparisonDiffCreateManySubContractorInput | ComparisonDiffCreateManySubContractorInput[]
  }

  export type ComparisonDiffUpsertWithWhereUniqueWithoutSubContractorInput = {
    where: ComparisonDiffWhereUniqueInput
    update: XOR<ComparisonDiffUpdateWithoutSubContractorInput, ComparisonDiffUncheckedUpdateWithoutSubContractorInput>
    create: XOR<ComparisonDiffCreateWithoutSubContractorInput, ComparisonDiffUncheckedCreateWithoutSubContractorInput>
  }

  export type ComparisonDiffUpdateWithWhereUniqueWithoutSubContractorInput = {
    where: ComparisonDiffWhereUniqueInput
    data: XOR<ComparisonDiffUpdateWithoutSubContractorInput, ComparisonDiffUncheckedUpdateWithoutSubContractorInput>
  }

  export type ComparisonDiffUpdateManyWithWhereWithoutSubContractorInput = {
    where: ComparisonDiffScalarWhereInput
    data: XOR<ComparisonDiffUpdateManyMutationInput, ComparisonDiffUncheckedUpdateManyWithoutSubContractorInput>
  }

  export type AlignmentResultCreateWithoutSourceBoxInput = {
    translationX: number
    translationY: number
    scale: number
    createdAt?: Date | string
    targetSheet: SheetCreateNestedOneWithoutAlignmentResultsInput
  }

  export type AlignmentResultUncheckedCreateWithoutSourceBoxInput = {
    id?: number
    targetSheetId: number
    translationX: number
    translationY: number
    scale: number
    createdAt?: Date | string
  }

  export type AlignmentResultCreateOrConnectWithoutSourceBoxInput = {
    where: AlignmentResultWhereUniqueInput
    create: XOR<AlignmentResultCreateWithoutSourceBoxInput, AlignmentResultUncheckedCreateWithoutSourceBoxInput>
  }

  export type AlignmentResultCreateManySourceBoxInputEnvelope = {
    data: AlignmentResultCreateManySourceBoxInput | AlignmentResultCreateManySourceBoxInput[]
  }

  export type SheetCreateWithoutBoxesInput = {
    code: string
    title?: string | null
    type?: string | null
    page?: number | null
    status?: string
    svgPath?: string | null
    alignmentResults?: AlignmentResultCreateNestedManyWithoutTargetSheetInput
    currentDiffs?: ComparisonDiffCreateNestedManyWithoutCurrentSheetInput
    originalDiffs?: ComparisonDiffCreateNestedManyWithoutOriginalSheetInput
    distances?: DistanceCreateNestedManyWithoutSheetInput
    references?: ReferenceCreateNestedManyWithoutSheetInput
    document: DocumentCreateNestedOneWithoutSheetsInput
  }

  export type SheetUncheckedCreateWithoutBoxesInput = {
    id?: number
    code: string
    title?: string | null
    type?: string | null
    page?: number | null
    status?: string
    svgPath?: string | null
    documentId: number
    alignmentResults?: AlignmentResultUncheckedCreateNestedManyWithoutTargetSheetInput
    currentDiffs?: ComparisonDiffUncheckedCreateNestedManyWithoutCurrentSheetInput
    originalDiffs?: ComparisonDiffUncheckedCreateNestedManyWithoutOriginalSheetInput
    distances?: DistanceUncheckedCreateNestedManyWithoutSheetInput
    references?: ReferenceUncheckedCreateNestedManyWithoutSheetInput
  }

  export type SheetCreateOrConnectWithoutBoxesInput = {
    where: SheetWhereUniqueInput
    create: XOR<SheetCreateWithoutBoxesInput, SheetUncheckedCreateWithoutBoxesInput>
  }

  export type AlignmentResultUpsertWithWhereUniqueWithoutSourceBoxInput = {
    where: AlignmentResultWhereUniqueInput
    update: XOR<AlignmentResultUpdateWithoutSourceBoxInput, AlignmentResultUncheckedUpdateWithoutSourceBoxInput>
    create: XOR<AlignmentResultCreateWithoutSourceBoxInput, AlignmentResultUncheckedCreateWithoutSourceBoxInput>
  }

  export type AlignmentResultUpdateWithWhereUniqueWithoutSourceBoxInput = {
    where: AlignmentResultWhereUniqueInput
    data: XOR<AlignmentResultUpdateWithoutSourceBoxInput, AlignmentResultUncheckedUpdateWithoutSourceBoxInput>
  }

  export type AlignmentResultUpdateManyWithWhereWithoutSourceBoxInput = {
    where: AlignmentResultScalarWhereInput
    data: XOR<AlignmentResultUpdateManyMutationInput, AlignmentResultUncheckedUpdateManyWithoutSourceBoxInput>
  }

  export type SheetUpsertWithoutBoxesInput = {
    update: XOR<SheetUpdateWithoutBoxesInput, SheetUncheckedUpdateWithoutBoxesInput>
    create: XOR<SheetCreateWithoutBoxesInput, SheetUncheckedCreateWithoutBoxesInput>
    where?: SheetWhereInput
  }

  export type SheetUpdateToOneWithWhereWithoutBoxesInput = {
    where?: SheetWhereInput
    data: XOR<SheetUpdateWithoutBoxesInput, SheetUncheckedUpdateWithoutBoxesInput>
  }

  export type SheetUpdateWithoutBoxesInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    svgPath?: NullableStringFieldUpdateOperationsInput | string | null
    alignmentResults?: AlignmentResultUpdateManyWithoutTargetSheetNestedInput
    currentDiffs?: ComparisonDiffUpdateManyWithoutCurrentSheetNestedInput
    originalDiffs?: ComparisonDiffUpdateManyWithoutOriginalSheetNestedInput
    distances?: DistanceUpdateManyWithoutSheetNestedInput
    references?: ReferenceUpdateManyWithoutSheetNestedInput
    document?: DocumentUpdateOneRequiredWithoutSheetsNestedInput
  }

  export type SheetUncheckedUpdateWithoutBoxesInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    svgPath?: NullableStringFieldUpdateOperationsInput | string | null
    documentId?: IntFieldUpdateOperationsInput | number
    alignmentResults?: AlignmentResultUncheckedUpdateManyWithoutTargetSheetNestedInput
    currentDiffs?: ComparisonDiffUncheckedUpdateManyWithoutCurrentSheetNestedInput
    originalDiffs?: ComparisonDiffUncheckedUpdateManyWithoutOriginalSheetNestedInput
    distances?: DistanceUncheckedUpdateManyWithoutSheetNestedInput
    references?: ReferenceUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type SheetCreateWithoutReferencesInput = {
    code: string
    title?: string | null
    type?: string | null
    page?: number | null
    status?: string
    svgPath?: string | null
    alignmentResults?: AlignmentResultCreateNestedManyWithoutTargetSheetInput
    boxes?: BoxCreateNestedManyWithoutSheetInput
    currentDiffs?: ComparisonDiffCreateNestedManyWithoutCurrentSheetInput
    originalDiffs?: ComparisonDiffCreateNestedManyWithoutOriginalSheetInput
    distances?: DistanceCreateNestedManyWithoutSheetInput
    document: DocumentCreateNestedOneWithoutSheetsInput
  }

  export type SheetUncheckedCreateWithoutReferencesInput = {
    id?: number
    code: string
    title?: string | null
    type?: string | null
    page?: number | null
    status?: string
    svgPath?: string | null
    documentId: number
    alignmentResults?: AlignmentResultUncheckedCreateNestedManyWithoutTargetSheetInput
    boxes?: BoxUncheckedCreateNestedManyWithoutSheetInput
    currentDiffs?: ComparisonDiffUncheckedCreateNestedManyWithoutCurrentSheetInput
    originalDiffs?: ComparisonDiffUncheckedCreateNestedManyWithoutOriginalSheetInput
    distances?: DistanceUncheckedCreateNestedManyWithoutSheetInput
  }

  export type SheetCreateOrConnectWithoutReferencesInput = {
    where: SheetWhereUniqueInput
    create: XOR<SheetCreateWithoutReferencesInput, SheetUncheckedCreateWithoutReferencesInput>
  }

  export type SheetUpsertWithoutReferencesInput = {
    update: XOR<SheetUpdateWithoutReferencesInput, SheetUncheckedUpdateWithoutReferencesInput>
    create: XOR<SheetCreateWithoutReferencesInput, SheetUncheckedCreateWithoutReferencesInput>
    where?: SheetWhereInput
  }

  export type SheetUpdateToOneWithWhereWithoutReferencesInput = {
    where?: SheetWhereInput
    data: XOR<SheetUpdateWithoutReferencesInput, SheetUncheckedUpdateWithoutReferencesInput>
  }

  export type SheetUpdateWithoutReferencesInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    svgPath?: NullableStringFieldUpdateOperationsInput | string | null
    alignmentResults?: AlignmentResultUpdateManyWithoutTargetSheetNestedInput
    boxes?: BoxUpdateManyWithoutSheetNestedInput
    currentDiffs?: ComparisonDiffUpdateManyWithoutCurrentSheetNestedInput
    originalDiffs?: ComparisonDiffUpdateManyWithoutOriginalSheetNestedInput
    distances?: DistanceUpdateManyWithoutSheetNestedInput
    document?: DocumentUpdateOneRequiredWithoutSheetsNestedInput
  }

  export type SheetUncheckedUpdateWithoutReferencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    svgPath?: NullableStringFieldUpdateOperationsInput | string | null
    documentId?: IntFieldUpdateOperationsInput | number
    alignmentResults?: AlignmentResultUncheckedUpdateManyWithoutTargetSheetNestedInput
    boxes?: BoxUncheckedUpdateManyWithoutSheetNestedInput
    currentDiffs?: ComparisonDiffUncheckedUpdateManyWithoutCurrentSheetNestedInput
    originalDiffs?: ComparisonDiffUncheckedUpdateManyWithoutOriginalSheetNestedInput
    distances?: DistanceUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type SheetCreateWithoutDistancesInput = {
    code: string
    title?: string | null
    type?: string | null
    page?: number | null
    status?: string
    svgPath?: string | null
    alignmentResults?: AlignmentResultCreateNestedManyWithoutTargetSheetInput
    boxes?: BoxCreateNestedManyWithoutSheetInput
    currentDiffs?: ComparisonDiffCreateNestedManyWithoutCurrentSheetInput
    originalDiffs?: ComparisonDiffCreateNestedManyWithoutOriginalSheetInput
    references?: ReferenceCreateNestedManyWithoutSheetInput
    document: DocumentCreateNestedOneWithoutSheetsInput
  }

  export type SheetUncheckedCreateWithoutDistancesInput = {
    id?: number
    code: string
    title?: string | null
    type?: string | null
    page?: number | null
    status?: string
    svgPath?: string | null
    documentId: number
    alignmentResults?: AlignmentResultUncheckedCreateNestedManyWithoutTargetSheetInput
    boxes?: BoxUncheckedCreateNestedManyWithoutSheetInput
    currentDiffs?: ComparisonDiffUncheckedCreateNestedManyWithoutCurrentSheetInput
    originalDiffs?: ComparisonDiffUncheckedCreateNestedManyWithoutOriginalSheetInput
    references?: ReferenceUncheckedCreateNestedManyWithoutSheetInput
  }

  export type SheetCreateOrConnectWithoutDistancesInput = {
    where: SheetWhereUniqueInput
    create: XOR<SheetCreateWithoutDistancesInput, SheetUncheckedCreateWithoutDistancesInput>
  }

  export type SheetUpsertWithoutDistancesInput = {
    update: XOR<SheetUpdateWithoutDistancesInput, SheetUncheckedUpdateWithoutDistancesInput>
    create: XOR<SheetCreateWithoutDistancesInput, SheetUncheckedCreateWithoutDistancesInput>
    where?: SheetWhereInput
  }

  export type SheetUpdateToOneWithWhereWithoutDistancesInput = {
    where?: SheetWhereInput
    data: XOR<SheetUpdateWithoutDistancesInput, SheetUncheckedUpdateWithoutDistancesInput>
  }

  export type SheetUpdateWithoutDistancesInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    svgPath?: NullableStringFieldUpdateOperationsInput | string | null
    alignmentResults?: AlignmentResultUpdateManyWithoutTargetSheetNestedInput
    boxes?: BoxUpdateManyWithoutSheetNestedInput
    currentDiffs?: ComparisonDiffUpdateManyWithoutCurrentSheetNestedInput
    originalDiffs?: ComparisonDiffUpdateManyWithoutOriginalSheetNestedInput
    references?: ReferenceUpdateManyWithoutSheetNestedInput
    document?: DocumentUpdateOneRequiredWithoutSheetsNestedInput
  }

  export type SheetUncheckedUpdateWithoutDistancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    svgPath?: NullableStringFieldUpdateOperationsInput | string | null
    documentId?: IntFieldUpdateOperationsInput | number
    alignmentResults?: AlignmentResultUncheckedUpdateManyWithoutTargetSheetNestedInput
    boxes?: BoxUncheckedUpdateManyWithoutSheetNestedInput
    currentDiffs?: ComparisonDiffUncheckedUpdateManyWithoutCurrentSheetNestedInput
    originalDiffs?: ComparisonDiffUncheckedUpdateManyWithoutOriginalSheetNestedInput
    references?: ReferenceUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type BoxCreateWithoutAlignmentResultsInput = {
    code: string
    title?: string | null
    scale?: string | null
    content?: string | null
    coordinates: string
    type?: string
    shape?: string
    color?: string
    pageWidth?: number | null
    pageHeight?: number | null
    userModified?: boolean
    sheet: SheetCreateNestedOneWithoutBoxesInput
  }

  export type BoxUncheckedCreateWithoutAlignmentResultsInput = {
    id?: number
    code: string
    title?: string | null
    scale?: string | null
    content?: string | null
    coordinates: string
    type?: string
    shape?: string
    color?: string
    pageWidth?: number | null
    pageHeight?: number | null
    userModified?: boolean
    sheetId: number
  }

  export type BoxCreateOrConnectWithoutAlignmentResultsInput = {
    where: BoxWhereUniqueInput
    create: XOR<BoxCreateWithoutAlignmentResultsInput, BoxUncheckedCreateWithoutAlignmentResultsInput>
  }

  export type SheetCreateWithoutAlignmentResultsInput = {
    code: string
    title?: string | null
    type?: string | null
    page?: number | null
    status?: string
    svgPath?: string | null
    boxes?: BoxCreateNestedManyWithoutSheetInput
    currentDiffs?: ComparisonDiffCreateNestedManyWithoutCurrentSheetInput
    originalDiffs?: ComparisonDiffCreateNestedManyWithoutOriginalSheetInput
    distances?: DistanceCreateNestedManyWithoutSheetInput
    references?: ReferenceCreateNestedManyWithoutSheetInput
    document: DocumentCreateNestedOneWithoutSheetsInput
  }

  export type SheetUncheckedCreateWithoutAlignmentResultsInput = {
    id?: number
    code: string
    title?: string | null
    type?: string | null
    page?: number | null
    status?: string
    svgPath?: string | null
    documentId: number
    boxes?: BoxUncheckedCreateNestedManyWithoutSheetInput
    currentDiffs?: ComparisonDiffUncheckedCreateNestedManyWithoutCurrentSheetInput
    originalDiffs?: ComparisonDiffUncheckedCreateNestedManyWithoutOriginalSheetInput
    distances?: DistanceUncheckedCreateNestedManyWithoutSheetInput
    references?: ReferenceUncheckedCreateNestedManyWithoutSheetInput
  }

  export type SheetCreateOrConnectWithoutAlignmentResultsInput = {
    where: SheetWhereUniqueInput
    create: XOR<SheetCreateWithoutAlignmentResultsInput, SheetUncheckedCreateWithoutAlignmentResultsInput>
  }

  export type BoxUpsertWithoutAlignmentResultsInput = {
    update: XOR<BoxUpdateWithoutAlignmentResultsInput, BoxUncheckedUpdateWithoutAlignmentResultsInput>
    create: XOR<BoxCreateWithoutAlignmentResultsInput, BoxUncheckedCreateWithoutAlignmentResultsInput>
    where?: BoxWhereInput
  }

  export type BoxUpdateToOneWithWhereWithoutAlignmentResultsInput = {
    where?: BoxWhereInput
    data: XOR<BoxUpdateWithoutAlignmentResultsInput, BoxUncheckedUpdateWithoutAlignmentResultsInput>
  }

  export type BoxUpdateWithoutAlignmentResultsInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    scale?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    shape?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    pageWidth?: NullableIntFieldUpdateOperationsInput | number | null
    pageHeight?: NullableIntFieldUpdateOperationsInput | number | null
    userModified?: BoolFieldUpdateOperationsInput | boolean
    sheet?: SheetUpdateOneRequiredWithoutBoxesNestedInput
  }

  export type BoxUncheckedUpdateWithoutAlignmentResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    scale?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    shape?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    pageWidth?: NullableIntFieldUpdateOperationsInput | number | null
    pageHeight?: NullableIntFieldUpdateOperationsInput | number | null
    userModified?: BoolFieldUpdateOperationsInput | boolean
    sheetId?: IntFieldUpdateOperationsInput | number
  }

  export type SheetUpsertWithoutAlignmentResultsInput = {
    update: XOR<SheetUpdateWithoutAlignmentResultsInput, SheetUncheckedUpdateWithoutAlignmentResultsInput>
    create: XOR<SheetCreateWithoutAlignmentResultsInput, SheetUncheckedCreateWithoutAlignmentResultsInput>
    where?: SheetWhereInput
  }

  export type SheetUpdateToOneWithWhereWithoutAlignmentResultsInput = {
    where?: SheetWhereInput
    data: XOR<SheetUpdateWithoutAlignmentResultsInput, SheetUncheckedUpdateWithoutAlignmentResultsInput>
  }

  export type SheetUpdateWithoutAlignmentResultsInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    svgPath?: NullableStringFieldUpdateOperationsInput | string | null
    boxes?: BoxUpdateManyWithoutSheetNestedInput
    currentDiffs?: ComparisonDiffUpdateManyWithoutCurrentSheetNestedInput
    originalDiffs?: ComparisonDiffUpdateManyWithoutOriginalSheetNestedInput
    distances?: DistanceUpdateManyWithoutSheetNestedInput
    references?: ReferenceUpdateManyWithoutSheetNestedInput
    document?: DocumentUpdateOneRequiredWithoutSheetsNestedInput
  }

  export type SheetUncheckedUpdateWithoutAlignmentResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    svgPath?: NullableStringFieldUpdateOperationsInput | string | null
    documentId?: IntFieldUpdateOperationsInput | number
    boxes?: BoxUncheckedUpdateManyWithoutSheetNestedInput
    currentDiffs?: ComparisonDiffUncheckedUpdateManyWithoutCurrentSheetNestedInput
    originalDiffs?: ComparisonDiffUncheckedUpdateManyWithoutOriginalSheetNestedInput
    distances?: DistanceUncheckedUpdateManyWithoutSheetNestedInput
    references?: ReferenceUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type DocumentCreateManyProjectInput = {
    id?: number
    type?: string | null
    path: string
    category?: string | null
    subcategory?: string | null
    title?: string | null
  }

  export type DocumentUpdateWithoutProjectInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sheets?: SheetUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sheets?: SheetUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SheetCreateManyDocumentInput = {
    id?: number
    code: string
    title?: string | null
    type?: string | null
    page?: number | null
    status?: string
    svgPath?: string | null
  }

  export type SheetUpdateWithoutDocumentInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    svgPath?: NullableStringFieldUpdateOperationsInput | string | null
    alignmentResults?: AlignmentResultUpdateManyWithoutTargetSheetNestedInput
    boxes?: BoxUpdateManyWithoutSheetNestedInput
    currentDiffs?: ComparisonDiffUpdateManyWithoutCurrentSheetNestedInput
    originalDiffs?: ComparisonDiffUpdateManyWithoutOriginalSheetNestedInput
    distances?: DistanceUpdateManyWithoutSheetNestedInput
    references?: ReferenceUpdateManyWithoutSheetNestedInput
  }

  export type SheetUncheckedUpdateWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    svgPath?: NullableStringFieldUpdateOperationsInput | string | null
    alignmentResults?: AlignmentResultUncheckedUpdateManyWithoutTargetSheetNestedInput
    boxes?: BoxUncheckedUpdateManyWithoutSheetNestedInput
    currentDiffs?: ComparisonDiffUncheckedUpdateManyWithoutCurrentSheetNestedInput
    originalDiffs?: ComparisonDiffUncheckedUpdateManyWithoutOriginalSheetNestedInput
    distances?: DistanceUncheckedUpdateManyWithoutSheetNestedInput
    references?: ReferenceUncheckedUpdateManyWithoutSheetNestedInput
  }

  export type SheetUncheckedUpdateManyWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    page?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    svgPath?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlignmentResultCreateManyTargetSheetInput = {
    id?: number
    sourceBoxId: number
    translationX: number
    translationY: number
    scale: number
    createdAt?: Date | string
  }

  export type BoxCreateManySheetInput = {
    id?: number
    code: string
    title?: string | null
    scale?: string | null
    content?: string | null
    coordinates: string
    type?: string
    shape?: string
    color?: string
    pageWidth?: number | null
    pageHeight?: number | null
    userModified?: boolean
  }

  export type ComparisonDiffCreateManyCurrentSheetInput = {
    id?: number
    originalSheetId: number
    hasAdditions?: boolean
    hasDeletions?: boolean
    originalBbox?: string | null
    currentBbox?: string | null
    title?: string | null
    description?: string | null
    subContractorId?: number | null
    status?: string
  }

  export type ComparisonDiffCreateManyOriginalSheetInput = {
    id?: number
    currentSheetId: number
    hasAdditions?: boolean
    hasDeletions?: boolean
    originalBbox?: string | null
    currentBbox?: string | null
    title?: string | null
    description?: string | null
    subContractorId?: number | null
    status?: string
  }

  export type DistanceCreateManySheetInput = {
    id?: number
    pointA: string
    pointB: string
    length: number
    pixel_distance: number
  }

  export type ReferenceCreateManySheetInput = {
    id?: number
    coordinates: string
    code: string
    sheetCode: string
  }

  export type AlignmentResultUpdateWithoutTargetSheetInput = {
    translationX?: FloatFieldUpdateOperationsInput | number
    translationY?: FloatFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceBox?: BoxUpdateOneRequiredWithoutAlignmentResultsNestedInput
  }

  export type AlignmentResultUncheckedUpdateWithoutTargetSheetInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceBoxId?: IntFieldUpdateOperationsInput | number
    translationX?: FloatFieldUpdateOperationsInput | number
    translationY?: FloatFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlignmentResultUncheckedUpdateManyWithoutTargetSheetInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceBoxId?: IntFieldUpdateOperationsInput | number
    translationX?: FloatFieldUpdateOperationsInput | number
    translationY?: FloatFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoxUpdateWithoutSheetInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    scale?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    shape?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    pageWidth?: NullableIntFieldUpdateOperationsInput | number | null
    pageHeight?: NullableIntFieldUpdateOperationsInput | number | null
    userModified?: BoolFieldUpdateOperationsInput | boolean
    alignmentResults?: AlignmentResultUpdateManyWithoutSourceBoxNestedInput
  }

  export type BoxUncheckedUpdateWithoutSheetInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    scale?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    shape?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    pageWidth?: NullableIntFieldUpdateOperationsInput | number | null
    pageHeight?: NullableIntFieldUpdateOperationsInput | number | null
    userModified?: BoolFieldUpdateOperationsInput | boolean
    alignmentResults?: AlignmentResultUncheckedUpdateManyWithoutSourceBoxNestedInput
  }

  export type BoxUncheckedUpdateManyWithoutSheetInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    scale?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    shape?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    pageWidth?: NullableIntFieldUpdateOperationsInput | number | null
    pageHeight?: NullableIntFieldUpdateOperationsInput | number | null
    userModified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ComparisonDiffUpdateWithoutCurrentSheetInput = {
    hasAdditions?: BoolFieldUpdateOperationsInput | boolean
    hasDeletions?: BoolFieldUpdateOperationsInput | boolean
    originalBbox?: NullableStringFieldUpdateOperationsInput | string | null
    currentBbox?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    subContractor?: SubContractorUpdateOneWithoutComparisonDiffsNestedInput
    originalSheet?: SheetUpdateOneRequiredWithoutOriginalDiffsNestedInput
  }

  export type ComparisonDiffUncheckedUpdateWithoutCurrentSheetInput = {
    id?: IntFieldUpdateOperationsInput | number
    originalSheetId?: IntFieldUpdateOperationsInput | number
    hasAdditions?: BoolFieldUpdateOperationsInput | boolean
    hasDeletions?: BoolFieldUpdateOperationsInput | boolean
    originalBbox?: NullableStringFieldUpdateOperationsInput | string | null
    currentBbox?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subContractorId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ComparisonDiffUncheckedUpdateManyWithoutCurrentSheetInput = {
    id?: IntFieldUpdateOperationsInput | number
    originalSheetId?: IntFieldUpdateOperationsInput | number
    hasAdditions?: BoolFieldUpdateOperationsInput | boolean
    hasDeletions?: BoolFieldUpdateOperationsInput | boolean
    originalBbox?: NullableStringFieldUpdateOperationsInput | string | null
    currentBbox?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subContractorId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ComparisonDiffUpdateWithoutOriginalSheetInput = {
    hasAdditions?: BoolFieldUpdateOperationsInput | boolean
    hasDeletions?: BoolFieldUpdateOperationsInput | boolean
    originalBbox?: NullableStringFieldUpdateOperationsInput | string | null
    currentBbox?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    subContractor?: SubContractorUpdateOneWithoutComparisonDiffsNestedInput
    currentSheet?: SheetUpdateOneRequiredWithoutCurrentDiffsNestedInput
  }

  export type ComparisonDiffUncheckedUpdateWithoutOriginalSheetInput = {
    id?: IntFieldUpdateOperationsInput | number
    currentSheetId?: IntFieldUpdateOperationsInput | number
    hasAdditions?: BoolFieldUpdateOperationsInput | boolean
    hasDeletions?: BoolFieldUpdateOperationsInput | boolean
    originalBbox?: NullableStringFieldUpdateOperationsInput | string | null
    currentBbox?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subContractorId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ComparisonDiffUncheckedUpdateManyWithoutOriginalSheetInput = {
    id?: IntFieldUpdateOperationsInput | number
    currentSheetId?: IntFieldUpdateOperationsInput | number
    hasAdditions?: BoolFieldUpdateOperationsInput | boolean
    hasDeletions?: BoolFieldUpdateOperationsInput | boolean
    originalBbox?: NullableStringFieldUpdateOperationsInput | string | null
    currentBbox?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subContractorId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type DistanceUpdateWithoutSheetInput = {
    pointA?: StringFieldUpdateOperationsInput | string
    pointB?: StringFieldUpdateOperationsInput | string
    length?: FloatFieldUpdateOperationsInput | number
    pixel_distance?: FloatFieldUpdateOperationsInput | number
  }

  export type DistanceUncheckedUpdateWithoutSheetInput = {
    id?: IntFieldUpdateOperationsInput | number
    pointA?: StringFieldUpdateOperationsInput | string
    pointB?: StringFieldUpdateOperationsInput | string
    length?: FloatFieldUpdateOperationsInput | number
    pixel_distance?: FloatFieldUpdateOperationsInput | number
  }

  export type DistanceUncheckedUpdateManyWithoutSheetInput = {
    id?: IntFieldUpdateOperationsInput | number
    pointA?: StringFieldUpdateOperationsInput | string
    pointB?: StringFieldUpdateOperationsInput | string
    length?: FloatFieldUpdateOperationsInput | number
    pixel_distance?: FloatFieldUpdateOperationsInput | number
  }

  export type ReferenceUpdateWithoutSheetInput = {
    coordinates?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    sheetCode?: StringFieldUpdateOperationsInput | string
  }

  export type ReferenceUncheckedUpdateWithoutSheetInput = {
    id?: IntFieldUpdateOperationsInput | number
    coordinates?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    sheetCode?: StringFieldUpdateOperationsInput | string
  }

  export type ReferenceUncheckedUpdateManyWithoutSheetInput = {
    id?: IntFieldUpdateOperationsInput | number
    coordinates?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    sheetCode?: StringFieldUpdateOperationsInput | string
  }

  export type ComparisonDiffCreateManySubContractorInput = {
    id?: number
    originalSheetId: number
    currentSheetId: number
    hasAdditions?: boolean
    hasDeletions?: boolean
    originalBbox?: string | null
    currentBbox?: string | null
    title?: string | null
    description?: string | null
    status?: string
  }

  export type ComparisonDiffUpdateWithoutSubContractorInput = {
    hasAdditions?: BoolFieldUpdateOperationsInput | boolean
    hasDeletions?: BoolFieldUpdateOperationsInput | boolean
    originalBbox?: NullableStringFieldUpdateOperationsInput | string | null
    currentBbox?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentSheet?: SheetUpdateOneRequiredWithoutCurrentDiffsNestedInput
    originalSheet?: SheetUpdateOneRequiredWithoutOriginalDiffsNestedInput
  }

  export type ComparisonDiffUncheckedUpdateWithoutSubContractorInput = {
    id?: IntFieldUpdateOperationsInput | number
    originalSheetId?: IntFieldUpdateOperationsInput | number
    currentSheetId?: IntFieldUpdateOperationsInput | number
    hasAdditions?: BoolFieldUpdateOperationsInput | boolean
    hasDeletions?: BoolFieldUpdateOperationsInput | boolean
    originalBbox?: NullableStringFieldUpdateOperationsInput | string | null
    currentBbox?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ComparisonDiffUncheckedUpdateManyWithoutSubContractorInput = {
    id?: IntFieldUpdateOperationsInput | number
    originalSheetId?: IntFieldUpdateOperationsInput | number
    currentSheetId?: IntFieldUpdateOperationsInput | number
    hasAdditions?: BoolFieldUpdateOperationsInput | boolean
    hasDeletions?: BoolFieldUpdateOperationsInput | boolean
    originalBbox?: NullableStringFieldUpdateOperationsInput | string | null
    currentBbox?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AlignmentResultCreateManySourceBoxInput = {
    id?: number
    targetSheetId: number
    translationX: number
    translationY: number
    scale: number
    createdAt?: Date | string
  }

  export type AlignmentResultUpdateWithoutSourceBoxInput = {
    translationX?: FloatFieldUpdateOperationsInput | number
    translationY?: FloatFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetSheet?: SheetUpdateOneRequiredWithoutAlignmentResultsNestedInput
  }

  export type AlignmentResultUncheckedUpdateWithoutSourceBoxInput = {
    id?: IntFieldUpdateOperationsInput | number
    targetSheetId?: IntFieldUpdateOperationsInput | number
    translationX?: FloatFieldUpdateOperationsInput | number
    translationY?: FloatFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlignmentResultUncheckedUpdateManyWithoutSourceBoxInput = {
    id?: IntFieldUpdateOperationsInput | number
    targetSheetId?: IntFieldUpdateOperationsInput | number
    translationX?: FloatFieldUpdateOperationsInput | number
    translationY?: FloatFieldUpdateOperationsInput | number
    scale?: FloatFieldUpdateOperationsInput | number
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