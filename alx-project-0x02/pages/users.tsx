import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";
import { GetStaticProps } from "next";

interface UsersPageProps {
  users: UserProps[];
}

const Users = ({ users }: UsersPageProps) => {
  return (
    <div>
      <Header />
      <div className="container text-center mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Users</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();

    // Map API data to our UserProps interface
    const mappedUsers = data.map((user: any) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      address: {
        street: user.address.street,
        suite: user.address.suite,
        city: user.address.city,
        zipcode: user.address.zipcode,
        geo: {
          lat: user.address.geo.lat,
          lng: user.address.geo.lng,
        },
      },
    }));

    return {
      props: {
        users: mappedUsers,
      },
      // Revalidate every 60 seconds for ISR (Incremental Static Regeneration)
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching users:", error);

    // Return empty users array on error
    return {
      props: {
        users: [],
      },
    };
  }
};

export default Users;
