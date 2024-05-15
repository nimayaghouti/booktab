import { useContext } from 'react';
import { createPortal } from 'react-dom';

import CartContext from '../store/CartContext';

const CartModal = () => {
  const cartCtx = useContext(CartContext);

  const totalCartPrice = cartCtx.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return createPortal(
    <div
      className="modal fade"
      id="cartModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              سبد خرید
            </h5>
            <button
              onClick={() => cartCtx.clearCart()}
              className="btn btn-outline-danger me-auto"
            >
              پاک کردن سبد
            </button>
          </div>
          <div className="modal-body">
            {cartCtx.cart.length === 0 && <p>موردی برای نمایش وجود ندارد</p>}
            {cartCtx.cart.length > 0 && (
              <ul className="list-group-flush px-0">
                {cartCtx.cart.map(item => (
                  <li className="d-flex list-group-item" key={item.id}>
                    <div
                      className="image-container ms-4"
                      style={{ width: '4rem' }}
                    >
                      <img
                        src={item.cover_image}
                        alt={item.title}
                        className="img-fluid"
                      />
                    </div>
                    <div className="item-detail w-100 d-flex justify-content-between flex-wrap">
                      <div className="my-3">
                        <p>{item.title}</p>
                        <p>{item.price.toLocaleString('fa-IR')} تومان</p>
                      </div>
                      <div className="d-flex flex-column align-items-center my-3">
                        <p>تعداد</p>
                        <div>
                          <button
                            onClick={() => cartCtx.addItem(item)}
                            className="btn btn-sm btn-outline-secondary"
                          >
                            +
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            onClick={() => cartCtx.removeItem(item.id)}
                            className="btn btn-sm btn-outline-secondary"
                          >
                            -
                          </button>
                        </div>
                      </div>
                      <div className="d-flex flex-column align-items-center my-3">
                        <p>جمع کل</p>
                        <p>
                          {(item.price * item.quantity).toLocaleString('fa-IR')}{' '}
                          تومان
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {cartCtx.cart.length > 0 && (
              <div className="d-flex justify-content-between">
                <div className="h5">جمع نهایی:</div>
                <div>{totalCartPrice.toLocaleString('fa-IR')} تومان</div>
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-primary"
              data-bs-dismiss="modal"
            >
              بستن
            </button>
            <button
              type="button"
              className="btn btn-primary text-white"
              disabled
            >
              ثبت سفارش
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal') // Ensure this div exists in your HTML
  );
};

export default CartModal;
