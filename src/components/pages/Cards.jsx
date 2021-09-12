import React from 'react';
import { CardGroup, Card, button } from 'react-bootstrap';
import food4 from '../images/food4.jpg';
import food5 from '../images/food5.jpg';
import food6 from '../images/food6.jpg';
import food7 from '../images/food7.jpg';
import food8 from '../images/food8.jpg';
import './card.css';
//import { LocalGroceryStoreIcon } from '@material-ui/icons';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';



function Cards() {
  return (
    <>
      <section>
        <h1 className="text-danger m-2" >Food Items</h1>

        <CardGroup>
          <Card>
            <Card.Img variant="top" src={food5} />
            <Card.Body>
              <Card.Title>Burger</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to


              </Card.Text>
              <button type="submit" className="m-2" href="#"> < LocalGroceryStoreIcon />Add to Cart</button>
            </Card.Body>

          </Card>
          <Card>
            <Card.Img variant="top" src={food6} />
            <Card.Body>
              <Card.Title>Burger</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to


              </Card.Text>
              <button type="submit" className="m-2" href="#"> < LocalGroceryStoreIcon />Add to Cart</button>
            </Card.Body>

          </Card>

          <Card>
            <Card.Img variant="top" src={food4} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to

              </Card.Text>
              <button type="submit" className="m-2" href="#">< LocalGroceryStoreIcon />Add to Cart</button>
            </Card.Body>

          </Card>

          <Card>
            <Card.Img variant="top" src={food8} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
              <button type="submit" className="m-2" href="#">< LocalGroceryStoreIcon />Add to Cart</button>
            </Card.Body>

          </Card>

          <Card>
            <Card.Img variant="top" src={food7} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
              <button type="submit" className="m-2" href="#">< LocalGroceryStoreIcon />Add to Cart</button>
            </Card.Body>

          </Card>

        </CardGroup>
      </section>
    </>
  )
}
export default Cards;