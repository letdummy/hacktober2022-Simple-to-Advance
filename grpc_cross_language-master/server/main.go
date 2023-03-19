package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net"
	"sync"

	"google.golang.org/grpc"
	pb "test.id/learn/grpc_learn/student"
)

type dataStudentServer struct {
	pb.UnimplementedDataStudentServer
	mu      sync.Mutex
	student []*pb.Student
}

// method
func (d *dataStudentServer) FindStudentByEmail(ctx context.Context, strudel *pb.Student) (*pb.Student, error) {
	for _, v := range d.student {
		if v.Email == strudel.Email {
			return v, nil
		}
	}
	return &pb.Student{
		Name: "tidak ada",
	}, nil
}

// load data
func (d *dataStudentServer) loadData() {
	data, err := ioutil.ReadFile("student/student.json")
	if err != nil {
		log.Fatalln("error in read file", err.Error())
	}
	if err := json.Unmarshal(data, &d.student); err != nil {
		log.Fatalln("error in unmarshalll data", err.Error())
	}
}

func newServer() *dataStudentServer {
	s := dataStudentServer{}
	s.loadData()
	return &s
}

func main() {
	listen, err := net.Listen("tcp", ":9000")

	if err != nil {
		log.Fatalln("error in listen", err.Error())
	}

	grpcServer := grpc.NewServer()

	pb.RegisterDataStudentServer(grpcServer, newServer())

	fmt.Println(`Server running in address 9000`)

	if err := grpcServer.Serve(listen); err != nil {

		log.Fatalln("error server grpc", err.Error())

	}
}
