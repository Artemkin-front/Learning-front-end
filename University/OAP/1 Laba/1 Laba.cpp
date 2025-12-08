/*Лабораторная работа 1 
с использованием библиотеки языка C++
потоковый ввод-вывод*/
#include <iostream>
#include <cmath>
#include <math.h>
using std::cout;
using std::cin;
using std::endl;

void main()
{
    setlocale(LC_ALL, "Russian_Russia.1251");
    const double a = 1.57;
    double pi = 3.14;
    double Y;
    double Z = 3 * pi - 2 * a;
    double C1 = pow(cos(5 * pi + 2 * a),2);
    Y = 2 * sin(Z) * C1;
    cout << "Искомое значение Y = " << Y << endl;
    

}