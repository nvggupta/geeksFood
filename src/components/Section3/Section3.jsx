import React from 'react';
import "../../components/section1.css";
import Card from './Card';

function Section3() {
  const data = [
    {
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
      author: "Gladis Lennon",
      post: "Head of SEO",
      profile: "../assets/1678982180054.jpg",
    },
    {
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! .",
      author: "Gladis Lennon",
      post: "Head of SEO",
      profile: "../assets/1678982180054.jpg",
    },
    {
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel .",
      author: "Gladis Lennon",
      post: "Head of SEO",
      profile: "../assets/1678982180054.jpg",
    },
    {
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et , .",
      author: "Gladis Lennon",
      post: "Head of SEO",
      profile: "../assets/1678982180054.jpg",
    },
    {
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ",
      author: "Gladis Lennon",
      post: "Head of SEO",
      profile: "../assets/1678982180054.jpg",
    },
    {
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit ",
      author: "Gladis Lennon",
      post: "Head of SEO",
      profile: "../assets/1678982180054.jpg",
    },
    {
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae ",
      author: "Gladis Lennon",
      post: "Head of SEO",
      profile: "../assets/1678982180054.jpg",
    }
  ];

  return (
    <div className="custom3 grid grid-cols-3 gap-4 p-4">
      {data.map((elem, index) => (
        <Card key={index} about={elem.about} author={elem.author} post={elem.post} profile={elem.profile} />
      ))}
    </div>
  );
}

export default Section3;
