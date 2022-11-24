import React from 'react';
import { Link } from 'react-router-dom';

interface CardDetails {
    imagePath: string;
    imageAlt: string;
    description: string;
    label: string;
    routePath: string;
}

function CardItem(props: CardDetails) {
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={props.routePath}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img
                            className='cards__item__img'
                            alt={props.imageAlt}
                            src={props.imagePath}
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.description}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardItem;