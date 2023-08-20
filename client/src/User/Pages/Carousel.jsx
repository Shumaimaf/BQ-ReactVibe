import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" className='mb-5'>
      <Carousel.Item>
        <img
          src="./src/User/components/Images/laptops.jpeg"
          alt="First slide"
          className="d-block w-100"
          style={{ objectFit: 'cover', height: '400px' }}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="./src/User/components/Images/smartphone.jpeg"
          alt="Second slide"
          className="d-block w-100"
          style={{ objectFit: 'cover', height: '400px' }}
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="./src/User/components/Images/2.png"
          alt="Third slide"
          className="d-block w-100"
          style={{ objectFit: 'cover', height: '400px' }}
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="./src/User/components/Images/bags.jpeg"
          alt="Fourth slide"
          className="d-block w-100"
          style={{ objectFit: 'cover', height: '400px' }}
        />
        <Carousel.Caption>
          <h5>Fourth slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="./src/User/components/Images/img1.png"
          alt="Fifth slide"
          className="d-block w-100"
          style={{ objectFit: 'cover', height: '400px' }}
        />
        <Carousel.Caption>
          <h5>Fifth slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
