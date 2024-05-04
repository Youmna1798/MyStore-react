import * as React from 'react';
import { useParams } from 'react-router-dom';
import getProductById from '../services/getProductById'; // Import the service to fetch product by ID
import Product from '../ProductInterface';
import { Header } from '../components/Header'; // Import the Header component

export function ProductPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = React.useState<Product | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Check if id is not undefined before fetching the product
    if (id) {
      getProductById(parseInt(id, 10)) // Parse the id to number with radix parameter
        .then((res) => setProduct(res))
        .then(() => setLoading(false));
    }
  }, [id]);

  if (!id) {
    return <div>No product ID provided</div>; // Render a message if no id is provided
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Header />
      {/* Include the Header component */}
      <div style={{ textAlign: 'center', padding: '20px' }}>
        {/* Render the product details here */}
        <img
          src={product.image}
          alt=""
          style={{
            width: '300px',
            height: '350px',
            margin: 'auto',
            marginBottom: '70px',
            marginTop: '50px',
          }}
        />
        <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>{product.title}</h1>
        <p style={{ fontSize: '16px', marginBottom: '10px' }}>{product.description}</p>
        <p style={{ fontSize: '18px', marginBottom: '20px' }}>
          Price:
          {' '}
          {product.price}
        </p>
      </div>
    </>
  );
}
