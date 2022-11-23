import { component$, Resource } from "@builder.io/qwik";
import {
  RequestHandler,
  useEndpoint,
} from "@builder.io/qwik-city";

export type Data = {};

export const onGet: RequestHandler<Data> = async ({ params, response }) => {
  console.log(params);
  // TODO: Fetch and return real data
  return {};
};

export default component$(() => {
  const resource = useEndpoint<typeof onGet>(); //equivalent to useEndpoint<EndpointData>

  // Normal rendering
  return (
    <Resource
      value={resource}
      onPending={() => <p>loading</p>}
      onRejected={() => <p>error</p>}
      onResolved={() => (
        // TODO: render page
        <p>loaded</p>
      )}
    />
  );
});
