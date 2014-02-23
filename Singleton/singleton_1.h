//对应的C++ Singleton实现
//Singleton 
//1.
//
#ifndef SINGLETON_H
#define SINGLETON_H

#include <iostream>
using namespace std;

class Singleton
{
public:
        static Singleton* GetInstance();

protected:
        Singleton();

private:
        static Singleton* _instance;
};

#endif
//
