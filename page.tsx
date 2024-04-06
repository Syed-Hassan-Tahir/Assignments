'use client'
import { useRouter } from 'next/navigation';

function Shop() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/'); // Navigate to the home page using push
  };

  return (
    <div>
      <h1>Welcome to the Shop!</h1>
      <p>Add your products here,in your cart.</p>
      <button onClick={handleGoHome}>Go Back to HomePage</button>
    </div>
  );
}

export default Shop;

