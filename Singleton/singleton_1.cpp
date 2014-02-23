//对应的C++ Singleton实现
#include "stdafx.h"
#include "Singleton.h"

#include <iostream>
using namespace std;

Singleton* Singleton::_instance = NULL;

Singleton::Singleton()
{
	cout << "Singleton" << endl;
}

Singleton* Singleton::GetInstance()
{
	if (NULL == _instance)
	{
		_instance = new Singleton();
	}

	return _instance;
}
