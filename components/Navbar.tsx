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
  const { addUser, removeUser } = useAuthStore();
  const userProfile: any = useAuthStore((state) => state.userProfile);

  return (
    <div className="w-full border-b-2 flex justify-between items-center border-b-5 border-gray-200 border-solid py-2 px-4">
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
          <div className="flex gap-5 md:gap-10">
            <Link href="/upload">
              <button className="border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2">
                <IoMdAdd className="text-xl" />{' '}
                <span className="hidden md:block">Upload </span>
              </button>
            </Link>
            {userProfile.image && (
              <Link href={`/profile/${userProfile._id}`}>
                <div>
                  <Image
                    className="rounded-full cursor-pointer"
                    src={userProfile.image}
                    alt="user"
                    width={40}
                    height={40}
                  />
                </div>
              </Link>
            )}
            <button
              type="button"
              className=" border-2 p-2 rounded-full cursor-pointer outline-none shadow-md"
              onClick={() => {
                googleLogout();
                removeUser();
              }}
            >
              <AiOutlineLogout color="red" fontSize={21} />
            </button>
          </div>
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
