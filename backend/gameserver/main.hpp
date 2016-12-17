
#include <cmath>
#include <cstdlib>
#include <iostream>
#include <string>
#include <vector>

int

class SP {							//Send Parser
	private:
		static bool send() {

			};
	public:
		static bool APC() {			//Accept Pos Change

		};
		static bool ANU() {			//Accept New User

		};
};
class player {
	private:
		unsigned char level;
		void init() {

		}
}
class world {
	private:
		unsigned short int[2097152] powerMap;
		unsigned short int[2097152] itemMap;
		std::vector<player> playerList;
	public:
		bool addPlayer() {

		}
};
std::vector<world*> worlds;
bool createWorld() {
	worlds.push_back(NULL);
	worlds[(worlds.size() - 1)] = new world;
};
