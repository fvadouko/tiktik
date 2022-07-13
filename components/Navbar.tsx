import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import Logo from '../utils/tiktik-logo.png';
import useAuthStore from '../store/authStore';
import { createOrGetUser } from '../utils';

const Navbar = () => {
  const { userProfile, addUser, removeUser } = useAuthStore();

  return (
    <div className="w-full flex justify-between items-center border-b-5 border-gray-200 border-solid py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[129px] md:h-[30px] h-[38px]">
          <Image
            className="cursor-pointer"
            src={Logo}
            alt="logo"
            layout="responsive"
          />
        </div>
      </Link>
      <div>BiSearch</div>
      <div>
        {userProfile ? (
          <div>{userProfile?.userName}</div>
        ) : (
          <GoogleLogin
            onSuccess={(res) => createOrGetUser(res, addUser)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
