import { DocumentNode } from "graphql-typed";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
export namespace PPQueryQueryPartialData {
  export interface Product {
    __typename?: "Product" | null;
    id?: string | null;
    title?: string | null;
  }
}
export interface PPQueryQueryPartialData {
  product?: PPQueryQueryPartialData.Product | null;
}
export namespace PPQueryQueryData {
  export interface Product {
    __typename: "Product";
    id: string;
    title: string;
  }
}
export interface PPQueryQueryData {
  product?: PPQueryQueryData.Product | null;
}
declare const document: DocumentNode<PPQueryQueryData, never, PPQueryQueryPartialData> & TypedDocumentNode<PPQueryQueryData, {
  [key: string]: never;
}>;
export default document;